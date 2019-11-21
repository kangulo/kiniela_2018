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
	case 'GetPredictionDetails':
	{
		GetPredictionDetails($params);
		break;
    }
    case 'GetPredictionGroupDetails':
	{
		GetPredictionGroupDetails($params);
		break;
	}
	case 'SavePredictionsGolVisitorTeam':
	{
		SavePredictionsGolVisitorTeam($params);
		break;
    }
	case 'SavePredictionsGolLocalTeam':
	{
		SavePredictionsGolLocalTeam($params);
		break;
    }
	case 'SavePredictionsGroup':
	{
		SavePredictionsGroup();
		break;
    }
	case 'ActivatePrediction':
	{
		ActivatePrediction($params);
		break;
    }
    case 'GetListPredictions':
	{
		GetListPredictions($params);
		break;
	}
	break;
}

function SavePredictionsGolLocalTeam($params){
    global $wpdb;
    $resp = array();
    $data = array();
    $error_message = '';

    foreach ( $params as $index => $value )
    {
        // Just See the required
        if ( ($index == 'match_id' || $index == 'serial' || $index == 'gol') && $value == NULL ){
            $error_message = 'Please all the field are requires';
            continue;
        }
        $data[$index] = filter_var($value, FILTER_SANITIZE_STRING);
    }
    
    $serial    = strtoupper($data['serial']);
    $match_id  = intval($data['match_id']);
    $gol       = intval($data['gol']);

    if ( $error_message == '' ){
        $wpdb->update(
            'app_predictions',
            array('gols_local_team' => $gol ),
            array(
                'serial_id' => $serial,
                'match_id' => $match_id,
            )
        );

        $resp['data'] = $data;
        $resp['success'] = true;
        $resp['message'] = "Records retrieve successfuly";
    }
    else
    {
        $resp['success'] = false;
        $resp['message'] = $error_message;
    }

    print json_encode($resp);
}

function SavePredictionsGolVisitorTeam($params){
    global $wpdb;
    $resp = array();
    $data = array();
    $error_message = '';

    foreach ( $params as $index => $value )
    {
        // Just See the required
        if ( ($index == 'match_id' || $index == 'serial' || $index == 'gol') && $value == NULL ){
            $error_message = 'Please all the field are requires';
            continue;
        }
        $data[$index] = filter_var($value, FILTER_SANITIZE_STRING);
    }
    
    $serial    = strtoupper($data['serial']);
    $match_id  = intval($data['match_id']);
    $gol       = intval($data['gol']);

    if ( $error_message == '' ){
        $wpdb->update(
            'app_predictions',
            array('gols_visitor_team' => $gol ),
            array(
                'serial_id' => $serial,
                'match_id' => $match_id,
            )
        );

        $resp['data'] = $data;
        $resp['success'] = true;
        $resp['message'] = "Records retrieve successfuly";
    }
    else
    {
        $resp['success'] = false;
        $resp['message'] = $error_message;
    }

    print json_encode($resp);
}

function SavePredictionsGroup(){
    global $wpdb;
    $resp = array();
    $data = array();
    $error_message = '';
    $params['serial'] = $_POST['serial'];
    $params['team'] = $_POST['team'];
    $params['field'] = $_POST['field'];

    foreach ( $params as $index => $value )
    {
        $data[$index] = filter_var($value, FILTER_SANITIZE_STRING);
    }

    if ( $data['serial'] == NULL || $data['field'] == NULL || $data['team'] == NULL ){
        $error_message = 'Please all the field are requires';
    }

    $result = $wpdb->get_results(
        $wpdb->prepare( 
            "
                SELECT * 
                FROM app_predictions_groups 
                WHERE serial_id = %s
            ", 
            $data['serial']
        )
    );
    if ($result)
    {
        $resp['success'] = $wpdb->update( 
            'app_predictions_groups', 
            array( 
                $data['field']  => $data['team'],
            ), 
            array( 
                'serial_id' => $data['serial']
            ) 
        );
    }
    else
    {
        $table = 'app_predictions_groups';
        $data = array($data['field'] => $data['team'], 'serial_id' => $data['serial']);
        $format = array('%s','%s');
        $wpdb->insert($table,$data,$format);
        $resp['success'] = $wpdb->insert_id;
    }        
    $resp['message'] = "Records retrieve successfuly";
    
    
    // check if some error occurs 
    if ( !$resp['success'] ) {
        throw new Exception("ACTIVATE - ". $wpdb->last_error);
    }
}

function GetListPredictions($params){
    global $wpdb;
    $resp = array();
    $data = array();
    $error_message = '';

    foreach ( $params as $index => $value )
    {
        // Just See the required
        if ( $index == 'email' && $value == NULL ){
            $error_message = 'Please all the field are requires';
            continue;
        }
        $data[$index] = filter_var($value, FILTER_SANITIZE_STRING);
    }

    if ( $data['email'] == NULL ){
        $error_message = 'Please all the field are requires';
    }
    
    $email  = strtolower($data['email']);

    if ( $error_message == '' ){
        $result = $wpdb->get_results(
            $wpdb->prepare( 
                "
                    SELECT * 
                    FROM app_serials 
                    WHERE email = %s AND deleted=0
                ", 
                $email
            )
        );
        $data = [];
        if ($result)
        {
            foreach( $result as $row){
                $data[] = $row;
            }
            $resp['data'] = $data;
            $resp['success'] = true;
            $resp['message'] = "Records retrieve successfuly";
        }
    }
    else
    {
        $resp['success'] = false;
        $resp['message'] = $error_message;
    }

    print json_encode($resp);

}

function GetPredictionDetails($params){
    global $wpdb;
    $resp = array();
    $data = array();
    $error_message = '';

    foreach ( $params as $index => $value )
    {
        // Just See the required
        if ( $index == 'serial' && $value == NULL ){
            $error_message = 'Please all the field are requires';
            continue;
        }
        $data[$index] = filter_var($value, FILTER_SANITIZE_STRING);
    }
    if ( $data['serial'] == NULL ){
        $error_message = 'Please all the field are requires';
    }
    
    $serial_id  = strtoupper($data['serial']);

	try {
        $predictions = $wpdb->get_results(
            $wpdb->prepare( 
                "
                SELECT
                    app_predictions.serial_id,
                    app_predictions.match_id,
                    app_predictions.date,
                    app_predictions.id_local_team,
                    (select `name` from app_teams where id_local_team = id ) AS name_local_team,
                    (select `abbr` from app_teams where id_local_team = id ) AS flag_local_team,
                    app_predictions.gols_local_team,
                    app_predictions.gols_visitor_team,
                    app_predictions.id_visitor_team,
                    (select `name` from app_teams where id_visitor_team = id ) AS name_visitor_team,
                    (select `abbr` from app_teams where id_visitor_team = id ) AS flag_visitor_team,
                    app_predictions.id_stadium,
                    app_predictions.id_group,
                    app_predictions.`timestamp`,
                    app_predictions.`points`,
                    app_stadiums.`name` as stadium_name,
                    app_stadiums.city as stadium_city,
                    app_stadiums.description as stadium_description,
                    app_stadiums.image_url as stadium_image_url
                FROM
                    app_predictions
                INNER JOIN app_stadiums ON app_predictions.id_stadium = app_stadiums.id 
                WHERE
                    app_predictions.serial_id = %s
                ORDER BY app_predictions.date ASC
                ",
                $serial_id
            )
        );

        $data = [];
        if ( $predictions ){
            foreach( $predictions as $prediction){
                $data[] = $prediction;
            }
            $resp['data'] = $data;
            $resp['success'] = true;
            $resp['message'] = "Records retrieve successfuly";
        }
		
	} catch(Exception $ex) {
        $resp['success'] = false;
        $resp['message'] = "An Error occured! " . $ex->getMessage(); //user friendly message
	}
    print json_encode($resp);
}

function GetPredictionGroupDetails($params){
    global $wpdb;
    $resp = array();
    $data = array();
    $error_message = '';

    $params['serial'] = $_POST['serial'];

    foreach ( $params as $index => $value )
    {
        // Just See the required
        if ( ( $index == 'serial' ) && $value == NULL ){
            $error_message = 'Please all the field are requires';
            continue;
        }
        $data[$index] = filter_var($value, FILTER_SANITIZE_STRING);
    }


    if ( $data['serial'] == NULL ){
        $error_message = 'Please all the field are requires';
    }
    
    $serial_id  = strtoupper($data['serial']);

	try {
        $predictions = $wpdb->get_row(
            $wpdb->prepare( 
                "
                SELECT
                A1,
                A2,
                B1,
                B2,
                C1,
                C2,
                D1,
                D2,
                E1,
                E2,
                F1,
                F2,
                G1,
                G2,
                H1,
                H2
                FROM
                    app_predictions_groups
                WHERE
                    serial_id = %s
                ",
                $serial_id
            )
        );

        if ( $predictions ){
            $resp['data'] = $predictions;
            $resp['success'] = true;
            $resp['message'] = "Records retrieve successfuly";
        }
		
	} catch(Exception $ex) {
        $resp['success'] = false;
        $resp['message'] = "An Error occured! " . $ex->getMessage(); //user friendly message
	}
    print json_encode($resp);

}

function AddPrediction(){
	global $wpdb;

	try {
        $predictions = $wpdb->get_results("SELECT
            app_predictions.id,
            app_predictions.date,
            app_predictions.id_local_team,
            (select `name` from app_teams where id_local_team = id ) AS name_local_team,
            (select `abbr` from app_teams where id_local_team = id ) AS flag_local_team,
            app_predictions.gols_local_team,
            app_predictions.gols_visitor_team,
            app_predictions.id_visitor_team,
            (select `name` from app_teams where id_visitor_team = id ) AS name_visitor_team,
            (select `abbr` from app_teams where id_visitor_team = id ) AS flag_visitor_team,
            app_predictions.id_stadium,
            app_predictions.id_group,
            app_predictions.`timestamp`,
            app_stadiums.`name` as stadium_name,
            app_stadiums.city as stadium_city,
            app_stadiums.description as stadium_description,
            app_stadiums.image_url as stadium_image_url
        FROM
            app_predictions
        INNER JOIN app_stadiums ON app_predictions.id_stadium = app_stadiums.id 
        ORDER BY app_predictions.date ASC");

        if ( $predictions ){
            $data = array();
            foreach( $predictions as $prediction){
                $data[] = $prediction;
            }
            print json_encode($data);
        }
		
	} catch(Exception $ex) {
		$datos["msg"] = "An Error occured! " . $ex->getMessage(); //user friendly message
		print json_encode($datos);
	}

}

function ActivatePrediction($params)
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


?>
