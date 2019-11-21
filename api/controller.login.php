<?php
header("Access-Control-Allow-Origin: *");
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
	case 'Login':
	{
		Login($params);
		break;
	}
	break;
}

function Login($params)
{
    global $wpdb;
    $resp = array();
    $data = array();
    $error_message = '';

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
            // check if some error occurs 
            if ($result->verified == 1)
            {
                $user_data = $wpdb->get_row($wpdb->prepare("SELECT * FROM app_users WHERE email = %s",$result->email));
                
                $resp['data'] = $user_data;
                $resp['success'] = true;
                $resp['message'] = "Hi again!, best luck " . $user_data->name;
            }    
            else 
            {
                $resp['success'] = false;
                $resp['message'] = "You must to activate first this serial to signup, look for this email";
            }
        }
        else
        {
            $resp['success'] = false;
            $resp['message'] = "Either user or serial was not found";
        }
    }
    else
    {
        $resp['success'] = false;
        $resp['message'] = $error_message;
    }
    print json_encode($resp);

}


?>
