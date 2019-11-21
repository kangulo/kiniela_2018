<?php
header("Access-Control-Allow-Origin: *");
// Caching disable headers
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");

global $wpdb;
session_start();
set_time_limit(0); 

require_once('./configuration.php');
require_once('./wpdb.php');
// Database Variable
$wpdb = new wpdb();

$accion = (isset($_POST['accion']) ? $_POST['accion'] : $_GET['accion']);
$params = json_decode(file_get_contents("php://input"));
switch ($accion)
{
    case 'SendInvitation':
    {
        SendInvitation($params);
        break;
    }
    case 'ActivatePredictionURL':
	{
        ActivatePredictionURL();
		break;
    }
	break;
}

function SendInvitation($params){
    global $wpdb;
    $resp = array();
    $data = array();
    $error_message = '';
    $serial_str = '';
    var_export($params,true);
    foreach ( $params as $index => $value )
    {
        // Just See the required
        if ( ($index == 'name' || $index == 'nick_name' || $index == 'email' || $index == 'phone') && $value == NULL ){
            $error_message = 'Please all the field are requires';
            continue;
        }
        $data[$index] = filter_var($value, FILTER_SANITIZE_STRING);
    }
    if ( $data['name'] == NULL || $data['nick_name'] == NULL || $data['phone'] == NULL ){
        $error_message = 'Please all the field are requires';
    }
    elseif ( !filter_var($data['email'], FILTER_VALIDATE_EMAIL) ){
        $error_message = 'Please enter a valid email';
    }

    if ( $error_message == '' ){
        $count_kinielas = intval($data['quantity']);
        try{
            // begin transaction
            $wpdb->query('START TRANSACTION');

            $user_exists = $wpdb->get_var("SELECT id FROM app_users WHERE email = '" . $data['email'] .  "'");
            if ($user_exists)
            {
                $user_id = $user_exists;
                // insert into app_users
                $insert_users = $wpdb->update( 
                    'app_users', 
                    array( 
                        'name'  => $data['name'], 
                        'nick_name' => $data['nick_name'],
                        'phone' => $data['phone'],
                        'gender' => $data['gender'],
                        'language' => $data['language'],
                    ), 
                    array( 
                        'email' => strtolower($data['email']), 
                    ) 
                );
            }
            else
            {
                // insert into app_users
                $insert_users = $wpdb->insert( 
                    'app_users', 
                    array( 
                        'name'  => $data['name'], 
                        'email' => strtolower($data['email']), 
                        'nick_name' => $data['nick_name'],
                        'phone' => $data['phone'],
                        'gender' => $data['gender'],
                        'language' => $data['language'],
                        'register_date' => date('Y-m-d H:m:i'),
                        'user_agent' => $_SERVER['HTTP_USER_AGENT'],
                        'ip' => $_SERVER['REMOTE_ADDR']
                    ), 
                    array( 
                        '%s', 
                        '%s', 
                        '%s', 
                        '%s',
                        '%s',
                        '%s'
                    ) 
                ); 
                $user_id = $wpdb->insert_id;
            }

            // check if some error occurs
            if ( !$insert_users ) {
                throw new Exception($wpdb->last_error);
            }

            for ($i=0; $i < $count_kinielas; $i++) 
            { 
                do 
                {
                    // Genereta Serial
                    $serial = GenerateSerial();
                    
                    // Check if that serials doesnt previous exists
                    $serial_exist = $wpdb->get_var( 
                        $wpdb->prepare( 
                            "SELECT id FROM app_serials WHERE id = %s", 
                            $serial
                        ) 
                    );
                        
                } // Does this meanwhile serial does not exists into table
                while ( $serial_exist != NULL );

                $unique_id = uniqid($data['nick_name']);


                // insert into app_serials
                $insert_serial = $wpdb->insert( 
                    'app_serials', 
                array( 
                    'id' => $serial, 
                    'email' => strtolower($data['email']), 
                    'phone' => $data['phone'],
                    'user_id' => $user_id,
                    'created_date' => date('Y-m-d H:i:s'), 
                    'unique_pid' => $unique_id
                ), 
                array( 
                    '%s', 
                    '%s', 
                    '%s',
                    '%d',
                    '%s',
                    '%s',
                    ) 
                );
                $serial_str .= $serial . ' ' . $wpdb->last_error . "|"; 
                $data['serials'][] = $serial;
                // check if some error occurs 
                if ( !$insert_serial ) {
                    throw new Exception($wpdb->last_error);
                }
            } // End For
            $resp['data'] = $serial_str;

            // All ok, save the changes
            $wpdb->query( "COMMIT" );

            // Send Email
            // TODO
            SendEmail($data['name'], strtolower($data['email']),$data['serials']);

            $resp['success'] = true;
            $resp['message'] = "Invitation sent";
            $resp['unique_pid'] = $unique_id;
        }
        catch ( Exception $e ) {
            // Error occured, don't save any changes
            $wpdb->query( "ROLLBACK" ); 
            $resp['success'] = false;
            $resp['message'] = $e->getMessage();
        }
        //$resp['message'] = 'The invitation was send';
    }
    else
    {
        $resp['success'] = false;
        $resp['message'] = $error_message;
    }
    print json_encode($resp);
}

function SendEmail($name = "", $to = "", $arr_serials = array() ){

    //$to = 'maryjane@email.com';
    $subject = 'World Cup Russia 2018 Predictor - Activation of your e-mail address';
    $from = 'kevinangulo@kiniela2018.kevinangulo.com';
    
    // To send HTML mail, the Content-type header must be set
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    $headers .= 'Cache-Control: no-store, no-cache, must-revalidate, max-age=0' . "\r\n";
    $headers .= 'Pragma: no-cache' . "\r\n";
    
    // Create email headers
    $headers .= 'From: '.$from."\r\n".
        'Reply-To: '.$from."\r\n" .
        'X-Mailer: PHP/' . phpversion();
    
    // Compose a simple HTML email message
    $message = '<!DOCTYPE html>
    <html>
        <head>
            <title>Kiniela Email Confirmation</title>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
            <meta name="description" content="Kiniela Russia 2018 Predictor App">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <meta http-equiv="cache-control" content="no-cache" />
            <meta http-equiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT" />
            <meta http-equiv="pragma" content="no-cache" />
            <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
            <style type="text/css">
            html, body {
            margin: 0;
            padding: 0;
            }
            div,table{
            /*border: 1px solid red;*/
            }
            .corner-left-up {
            text-align: left;
            position: absolute;
            left: 0;
            top: 0;
            }
            .corner-right-up {
            
            }
            h1.title {
            text-align: center;
            }
            .cloud-left {
                position: absolute;
                bottom: 0px;
                left: 0px;
            }
            .cloud-right {
                position: absolute;
                bottom: 0px;
                right: 0px;
            }
            /*
            * Load Font
            */
            /*--------------------
            Dusha Regular Official Font
            ---------------------*/
            @font-face {
            font-family: dusha;
            src: url("./fonts/dusha/Dusha_-_FIFA_World_Cup_2018.ttf") format("truetype");
            font-weight: 300;
            font-style: normal;
            }
            body {
                font-family: dusha;
                font-size: 12px;
                color: #2763a7;
                text-align: center;
            }
            </style>
        </head>
        <body>
            <header>
                <div class="header-wrapper row">
                    <div class="col-md-3 corner-left-up">
                        <img src="https://www.kevinangulo.com/_shared/corner-left-up.jpg" alt="">
                    </div>
                    <div class="col-md-6">
                        <table style="border-spacing:0;border-collapse:collapse;width:100%;margin:0;background-color:#f1f1f1">
                            <tbody><tr>
                                <td style="padding:16px">
                                    <table style="border-spacing:0;border-collapse:collapse;width:100%;max-width:632px;margin:0 auto 16px;background-color:#fff;border-radius:4px">
                                        <tbody><tr>
                                            <td style="padding:16px">
                                                <table style="border-spacing:0;border-collapse:collapse;width:100%">
                                                    <tbody><tr>
                                                        <td style="padding:0;padding-bottom:1rem">
                                                            <a title="Kiniela 2018" href="https://www.kevinangulo.com/" style="color:#057bc4;text-decoration:none;display:block" target="_blank"><img alt="Header Email Confirmation" width="600" height="225" src="https://www.kevinangulo.com/_shared/fifa.jpg" style="display:block;width:100%;height:auto">
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </tbody></table>
                                                <h1 class="title"> Kiniela App Rusia 2018</h1>
                                                <h1 style="text-align:center;font-size:30px;margin:30px 0">Email Confirmation</h1>
                                                <table style="border-spacing:0;border-collapse:collapse;margin-top:32px;margin-bottom:32px;width:100%">
                                                    <tbody><tr>
                                                        <td style="padding:0;width:100%;height:0px;font-size:0px;line-height:0px;border-top:solid 2px #f1f1f1">&nbsp;</td>
                                                    </tr>
                                                </tbody></table>
                                                <table style="border-spacing:0;border-collapse:collapse;width:100%">
                                                    <tbody><tr>
                                                        <td style="padding:0;padding-right:16px;padding-left:16px">
                                                            <p style="margin-left:0px;margin-right:0px;margin-top:0px;margin-bottom:0px">
                                                                Hi ' . $name . ', Welcome
                                                            </p>
                                                        </td>
                                                    </tr>
                                                </tbody></table>
                                                <table style="border-spacing:0;border-collapse:collapse;width:100%">
                                                    <tbody><tr>
                                                        <td style="padding:1rem">
                                                            <table style="border-spacing:0;border-collapse:collapse;width:100%">
                                                                <tbody><tr>
                                                                    <td style="padding:0">
                                                                        <p style="margin-top:0px;margin-bottom:32px;text-align: left;">Thank you very much for registering with us.</p>
                                                                        <table style="border-spacing:0;border-collapse:collapse;width:100%">
                                                                            <tbody><tr>
                                                                                <td style="padding:0">
                                                                                    <table style="border-spacing:0;border-collapse:collapse;width:100%;background-color:#f6f6f6">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td style="font-weight:bold;padding:10px 14px">
                                                                                                    <p style="margin-top:0px;margin-bottom:0px">Email</p>
                                                                                                </td>
                                                                                                <td style="text-align:right;font-weight:bold;padding:10px 14px">
                                                                                                    # Serial
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                  </table>';
    $total_serials = (count($arr_serials) * 5);                                                                
    foreach ($arr_serials as $serial) {
        
        $message .= '<table style="border-spacing:0;border-collapse:collapse;width:100%;background-color:#fFFFFF">
        <tbody>
        <tr>
        <td style="font-weight:bold;padding:10px 14px">
        <p style="margin-top:0px;margin-bottom:0px">
        <button style="background-color: #2763a7; padding: 5px 20px;">
            <a href="http://kevinangulo.com/api/controller.admin.php?accion=ActivatePredictionURL&email='.base64_url_encode($to).'&serial='.base64_url_encode($serial).'" rel="noreferrer" target="_blank" style="text-align:center;font-size:16px;margin:10px 0;color: #FFFFFF;">Click Here To Activate This Serial</a>
        </button>
        </p>
        </td>
        <td style="text-align:right;font-weight:bold;padding:10px 14px">' . $serial . '
        </td>
        </tr>
        </tbody>
        </table>';
        
    }
            $message .= '<table style="border-spacing:0;border-collapse:collapse;width:100%">
                                                                                        <tbody><tr>
                                                                                            <td style="padding:0;width:100%;height:0px;font-size:0px;line-height:0px;border-top:solid 2px #f1f1f1">&nbsp;</td>
                                                                                        </tr>
                                                                                    </tbody></table>
                                                                                    <table style="border-spacing:0;border-collapse:collapse;width:100%">
                                                                                        <tbody><tr>
                                                                                            <td style="padding:0;padding-left:16px;padding-right:16px;padding-top:16px;padding-bottom:16px">
                                                                                                <table style="border-spacing:0;border-collapse:collapse;width:100%">
                                                                                                    <tbody><tr>
                                                                                                        <td style="padding:0">
                                                                                                            <p style="margin-top:0px;margin-bottom:0px;font-weight:bold;text-transform:uppercase">Total</p>
                                                                                                        </td>
                                                                                                        <td style="padding:0;text-align:right">
                                                                                                            <p style="margin-top:0px;margin-bottom:0px;font-weight:bold">
                                                                                                                ' . $total_serials . '<span style="font-size:0.75em;font-weight:normal;padding-left:0.3em">Coins</span>
                                                                                                            </p>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </tbody></table>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody></table>
                                                                                    <table style="border-spacing:0;border-collapse:collapse;width:100%">
                                                                                        <tbody><tr>
                                                                                            <td style="padding:0;padding-top:16px">
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody></table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody></table>
                                                                        <table style="border-spacing:0;border-collapse:collapse">
                                                                            <tbody><tr>
                                                                                <td style="padding:0;">
                                                                                    <h2 style="margin-top:0px;margin-bottom:16px;font-weight:normal">The Rules</h2>
                                                                                    <p>
                                                                                        <ul style="text-align:left;">
                                                                                            <li>The rules of this game are simple: the contestants will need to try and guess the final score on each match, when right they will get points for it.</li>
                                                                                            <li>The contestant with the highest score will be the winner.</li>
                                                                                            <li>Users will get the chance to share with their friends what they have guessed for each match.</li>
                                                                                            <li>As matches go by, the app will be updating the data and showing the contestant’s scores.</li>
                                                                                            <li>Do you have only 30 minutes before the match start to complete your prediction for that match.</li>
                                                                                            <li>Result it will be shared on the leaderboard automatically.</li>
                                                                                            <li>The points each user will get will depend on how close their guess to the reality is:
                                                                                                <ol>
                                                                                                    <li>All right: the score the contestant wrote down is the same as the real one.</li>
                                                                                                    <li>Status right: the contestant predicted that ‘x’ team would win, but didn’t guess the exact score.</li>
                                                                                                    <li>Wrong: points are not given because the contestant didn’t guess the score or the winning team.</li>
                                                                                                </ol>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </p>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody></table>
                                                                        <table style="border-spacing:0;border-collapse:collapse;margin-top:32px;margin-bottom:32px;width:100%">
                                                                            <tbody><tr>
                                                                                <td style="padding:0;width:100%;height:0px;font-size:0px;line-height:0px;border-top:solid 2px #f1f1f1">&nbsp;</td>
                                                                            </tr>
                                                                        </tbody></table>
                                                                        <table style="border-spacing:0;border-collapse:collapse">
                                                                            <tbody><tr>
                                                                                <td style="padding:0">
                                                                                    <h2 style="margin-top:0px;margin-bottom:16px;font-weight:normal">What"s Next?</h2>
                                                                                    <p>
                                                                                        Before proceeding, you will have to confirm your e-mail address and we will going to proceed to the activation of your serial. Please click on the following link to do so:
                                                                                    </p>
                                                                                    <p>The app will guide you throught each step of the way, therefore they should not have an inconvenient to participate and start to play the exciting predictions game for this 2018 Soccer World Cup.</p>
                                                                                    <p>Rock on,</p>
                                                                                    <p style="font-weight:bold">Have fun and good luck!</p>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody></table>
                                                                        <table style="border-spacing:0;border-collapse:collapse;margin-top:32px;margin-bottom:32px;width:100%">
                                                                            <tbody><tr>
                                                                                <td style="padding:0;width:100%;height:0px;font-size:0px;line-height:0px;border-top:solid 2px #f1f1f1">&nbsp;</td>
                                                                            </tr>
                                                                        </tbody></table>
                                                                        <table style="border-spacing:0;border-collapse:collapse;width:100%">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td><h2 style="margin-top:0px;margin-bottom:16px;font-weight:normal">How to play?</h2></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td style="padding:0">
                                                                                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="48%" style="border-spacing:0;border-collapse:collapse;margin-bottom:0px">
                                                                                            <tbody>
                                                                                                
                                                                                                <tr>
                                                                                                    <td style="padding:0">
                                                                                                        <h2 style="margin-top:0px;margin-bottom:16px;font-weight:normal">Choose the winers</h2>
                                                                                                        <p style="margin-bottom:0px">Start putting down the scores you think will be the ones to start and accumulating points and get a chance to win the price.</p>
                                                                                                        <p style="margin-bottom:0px"><br>
                                                                                                            <a href="https://www.kevinangulo.com/" style="color:#057bc4;text-decoration:none" target="_blank">Learn More »</a>
                                                                                                        </p>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody></table>
                                                                                            <table align="right" border="0" cellpadding="0" cellspacing="0" width="48%" style="border-spacing:0;border-collapse:collapse">
                                                                                                <tbody><tr>
                                                                                                    <td style="padding:0;text-align:center">
                                                                                                        <img alt="Zabivaka Image" width="138" height="161" src="https://www.kevinangulo.com/_shared/pet-mundial-2.jpg">
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody></table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody></table>
                                                                                <table style="border-spacing:0;border-collapse:collapse;width:100%">
                                                                                    <tbody><tr>
                                                                                        <td style="padding:0;padding-bottom:16px">
                                                                                            <table align="left" border="0" cellpadding="0" cellspacing="0" width="48%" style="border-spacing:0;border-collapse:collapse;margin-bottom:0px">
                                                                                                <tbody><tr>
                                                                                                    <td style="padding:0;padding-top:48px;text-align:center">
                                                                                                        <img alt="Zabivaka Image" width="150" height="180" src="https://www.kevinangulo.com/_shared/pet-mundial-3.jpg" tabindex="0">
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody></table>
                                                                                            <table align="right" border="0" cellpadding="0" cellspacing="0" width="48%" style="border-spacing:0;border-collapse:collapse">
                                                                                                <tbody><tr>
                                                                                                    <td style="padding:0;padding-top:48px">
                                                                                                        <h2 style="margin-top:0px;margin-bottom:16px;font-weight:normal">Choose the leaders</h2>
                                                                                                        <p>Select first and second place in each group, the winners of each knockout round and your triumphant finalist.</p>
                                                                                                        <p style="margin-bottom:0px"><br>
                                                                                                            <a href="https://www.kevinangulo.com/" style="color:#057bc4;text-decoration:none" target="_blank">Learn More »</a>
                                                                                                        </p>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody></table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody></table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody></table>
                                                                    <table style="border-spacing:0;border-collapse:collapse;width:100%">
                                                                        <tbody><tr>
                                                                            <td style="padding:0">
                                                                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="48%" style="border-spacing:0;border-collapse:collapse;margin-bottom:0px">
                                                                                    <tbody><tr>
                                                                                        <td style="padding:0">
                                                                                            <h2 style="margin-top:0px;margin-bottom:16px;font-weight:normal">Let the fun begin!</h2>
                                                                                            <p style="margin-bottom:0px">As matches go by, the app will be updating the data and showing the contestant’s scores.</p>
                                                                                            <p style="margin-bottom:0px">
                                                                                                <br>
                                                                                                <a href="https://www.kevinangulo.com/" style="color:#057bc4;text-decoration:none" target="_blank">Learn More »</a>
                                                                                            </p>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody></table>
                                                                                <table align="right" border="0" cellpadding="0" cellspacing="0" width="48%" style="border-spacing:0;border-collapse:collapse">
                                                                                    <tbody><tr>
                                                                                        <td style="padding:0;text-align:center">
                                                                                            <img alt="Zabivaka Image" width="158" height="161" src="https://www.kevinangulo.com/_shared/pet-mundial.jpg">
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody></table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody></table>
                                                                </td>
                                                            </tr>
                                                        </tbody></table>
                                                    </td>
                                                </tr>
                                            </tbody></table>
                                            <table style="border-spacing:0;border-collapse:collapse;text-align:center;width:100%;max-width:632px;border:0;margin:0 auto 16px;padding:0">
                                                <tbody><tr>
                                                    <td style="font-size:17px;padding:16px 0 24px;vertical-align:middle;width:100%">
                                                        <img alt="Kiniela 2018 Refer-A-Friend" src="https://www.kevinangulo.com/_shared/referal.png" style="height:16px;width:16px;vertical-align:middle;border:0;margin-right:4px">
                                                        <span style="vertical-align:middle">
                                                            Get $10 or a Free Kiniela when you share this link with your friends. <a href="hhttps://www.kevinangulo.com/referrals" style="color:#057bc4;text-decoration:none" target="_blank">Learn How</a>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="padding:0;font-size:13px;padding-top:4px;padding-left:0;padding-right:0;padding-bottom:8px;vertical-align:middle;width:100%">
                                                        <a href="https://www.kevinangulo.com/privacy" style="color:#057bc4;text-decoration:none" target="_blank">Privacy Policy</a>
                                                        ·
                                                        <a href="https://www.kevinangulo.com/terms" style="color:#057bc4;text-decoration:none" target="_blank">Terms of Use</a>
                                                        ·
                                                        © 2018 KinielaRusia2018, Inc. All Rights Reserved.
                                                        <p>
                                                            You are receiving this email based on your activity on <a href="https://www.kevinangulo.com/" style="color:#057bc4;text-decoration:none" target="_blank">Kiniela Rusia 2018.</a>.
                                                        </p>
                                                        <br>
                                                    </td>
                                                </tr>
                                            </tbody></table>
                                        </td>
                                    </tr>
                                </tbody></table>
                            </div>
                            <div class="col-md-3">
                                <img style="text-align: right; position: absolute; right: 0;top: 0;" src="https://www.kevinangulo.com/_shared/corner-right-up-new.jpg?' . time() . '" alt="">
                            </div>
                        </div>
                    </header>
                    <footer>
                        <img src="https://www.kevinangulo.com/_shared/cloud-right-down-new.jpg?' . time() . '"  style="position: absolute; bottom: 0px; right: 0px;" alt="">
                        <img src="https://www.kevinangulo.com/_shared/cloud-left-down-new.jpg?' . time() . '"  style="position: absolute; bottom: 0px; left: 0px;" alt="">
                    </footer>
                </body>
            </html>';

    // $message = '<html><body>';
    // $message .= '<h1 style="color:#f40;">Hi ' . $name . '</h1>';
    // $message .= '<p style="color:#080;font-size:18px;">Welcome!<br>
    // <br>
    // Thank you very much for registering with us. Before proceeding, you will have to confirm your e-mail address. Please click on the following link to do so:<br>
    // <br>
    // <a href="http://kevinangulo.com/api/controller.admin.php?accion=ActivatePredictionURL&email='.base64_url_encode($to).'&serial='.base64_url_encode($serial).'" rel="noreferrer" target="_blank">http://kevinangulo.com/api/controller.admin.php?accion=ActivatePredictionURL&email='.base64_url_encode($to).'&serial='.base64_url_encode($serial).'</a><br>
    // <br>
    // Alternatively, you can also enter the following activation code after you logged in:<br>
    // <br>
    // Activation code: '. $serial . '<br>
    // <br>
    // Have fun and good luck!<br>
    // <br>
    // --<br>
    // World Cup Russia 2018 Predictor<br>
    // </p>';
    // $message .= '</body></html>';
    
    // Sending email
    if(mail($to, $subject, $message, $headers)){
        error_log('Your mail has been sent successfully.');
    } else{
        error_log('Unable to send email. Please try again.');
    }
    return;
}

function ActivatePredictionURL(){
    global $wpdb;
    $resp = array();
    $data = array();
    $error_message = '';
    $params['email'] = base64_decode($_GET['email']);
    $params['serial'] = base64_decode($_GET['serial']);

    foreach ( $params as $index => $value )
    {
        // Just See the required
        if ( ($index == 'email' || $index == 'serial') && $value == NULL ){
            $error_message = 'Please all the field are requires';
            continue;
        }
        $data[$index] = filter_var($value, FILTER_SANITIZE_STRING);
    }
    
    if ( $data['serial'] == NULL || $data['email'] == NULL ){
        $error_message = 'Please all the field are requires';
    }
    elseif ( !filter_var($data['email'], FILTER_VALIDATE_EMAIL) ){
        $error_message = 'Please enter a valid email';
    }
    $data['serial'] = strtoupper($data['serial']);
    $data['email']  = strtolower($data['email']);

    if ( $error_message == '' ){
        $result = $wpdb->get_row(
            $wpdb->prepare( 
                "
                    SELECT * 
                    FROM app_serials 
                    WHERE id = %s AND email = %s AND deleted=0
                ", 
                $data['serial'],
                $data['email']
            )
        );
        if ($result)
        {
            try{
                // begin transaction
                $wpdb->query('START TRANSACTION');
                $activate_serial = $wpdb->update( 
                    'app_serials', 
                    array( 
                        'verified'  => 1, 
                        'verified_date' => date('Y-m-d H:m:i'),
                    ), 
                    array( 
                        'id' => $data['serial'], 
                        'email' => $data['email'], 
                    ) 
                );
                // check if some error occurs 
                if ( !$activate_serial ) {
                    throw new Exception("ACTIVATE - ". $wpdb->last_error);
                }

                $generar = $wpdb->query("INSERT INTO app_predictions (
                    `serial_id`, 
                    `user_email`, 
                    `match_id`, 
                    `date`, 
                    `id_local_team`, 
                    `id_visitor_team`, 
                    `id_stadium`,
                    `id_group`) 
                SELECT 
                    '" . $data['serial'] . "' as serial_id,
                    '" . $data['email'] . "' as user_email,
                    `id`, 
                    `date`, 
                    `id_local_team`, 
                    `id_visitor_team`, 
                    `id_stadium`,
                    `id_group`
                FROM app_matches");
                
                // check if some error occurs 
                if ( !$generar ) {
                    throw new Exception("inserting - ". $wpdb->last_error);
                }

                $wpdb->query( "COMMIT" );

                $resp['success'] = true;
                $resp['message'] = "Serial Activated";
                // Redirect the user to the login page
                header('Location: https://www.kevinangulo.com/login');
                exit;
            }
            catch(Exception $e)
            {
                // Error occured, don't save any changes
                $wpdb->query( "ROLLBACK" ); 
                $resp['success'] = false;
                $resp['message'] = $e->getMessage();
            }
        }
        else
        {
            $resp['success'] = false;
            $resp['message'] = "The info provided doesn't match, Please make sure email and serial are correct";
        }
    }
    else
    {
        $resp['success'] = false;
        $resp['message'] = $error_message;
    }

    print json_encode($resp);
}

function GenerateSerial (){
    global $wpdb;
    
    $characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    $random_string_length = 8;
    $max = strlen($characters) - 1;
    $serial = '';
    
    for ($i = 0; $i < $random_string_length; $i++) {
        $serial .= $characters[mt_rand(0, $max)];
    }

    return strtoupper($serial);
}

function base64_url_encode($input) {
 return strtr(base64_encode($input), '+/=', '._-');
}

function base64_url_decode($input) {
 return base64_decode(strtr($input, '._-', '+/='));
}