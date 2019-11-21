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
switch ($accion)
{
	case 'GetListStadiums':
	{
		GetListStadiums();
		break;
	}
	break;
}



function GetListStadiums(){
	global $wpdb;

	try {
        $stadiums = $wpdb->get_results("SELECT * FROM app_stadiums");
        if ( $stadiums ){
            $data = array();
            foreach( $stadiums as $stadium){
                $data[] = $stadium;
            }
            print json_encode($data);
        }
		
	} catch(Exception $ex) {
		$datos["msg"] = "An Error occured! " . $ex->getMessage(); //user friendly message
		print json_encode($datos);
	}

}


?>
