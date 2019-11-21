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
	case 'GetGroups':
	{
		GetGroups();
		break;
	}
	case 'GetTeams':
	{
		GetTeams();
		break;
	}
	break;
}

function GetTeams(){
	global $wpdb;

	try {
        $teams = $wpdb->get_results("SELECT *
                            FROM
                                app_teams
                            ORDER BY group_name, `name` ASC");

        if ( $teams ){
            $data = array();
            foreach( $teams as $team){
                $data[] = $team;
            }
            print json_encode($data);
        }
		
	} catch(Exception $ex) {
		$datos["msg"] = "An Error occured! " . $ex->getMessage(); //user friendly message
		print json_encode($datos);
	}

}

function GetGroups(){
	global $wpdb;
	try {
        $groups = $wpdb->get_results("SELECT distinct(group_name) as `name`,group_id
                            FROM
                                app_teams
                            ORDER BY group_name ASC");

        if ( $groups ){
            $data = array();
            foreach( $groups as $group){
                $data[] = $group;
            }
            print json_encode($data);
        }
		
	} catch(Exception $ex) {
		$datos["msg"] = "An Error occured! " . $ex->getMessage(); //user friendly message
		print json_encode($datos);
	}

}


?>
