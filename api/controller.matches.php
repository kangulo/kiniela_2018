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
	case 'GetListMatches':
	{
		GetListMatches();
		break;
	}
	break;
}



function GetListMatches(){
	global $wpdb;

	try {
        $matches = $wpdb->get_results("SELECT
                                app_matches.id,
                                app_matches.date,
                                app_matches.id_local_team,
                                (select `name` from app_teams where id_local_team = id ) AS name_local_team,
                                (select `abbr` from app_teams where id_local_team = id ) AS flag_local_team,
                                app_matches.gols_local_team,
                                app_matches.gols_visitor_team,
                                app_matches.id_visitor_team,
                                (select `name` from app_teams where id_visitor_team = id ) AS name_visitor_team,
                                (select `abbr` from app_teams where id_visitor_team = id ) AS flag_visitor_team,
                                app_matches.id_stadium,
                                app_matches.id_group,
                                app_matches.`timestamp`,
                                app_stadiums.`name` as stadium_name,
                                app_stadiums.city as stadium_city,
                                app_stadiums.description as stadium_description,
                                app_stadiums.image_url as stadium_image_url
                            FROM
                                app_matches
                            INNER JOIN app_stadiums ON app_matches.id_stadium = app_stadiums.id 
                            ORDER BY app_matches.date ASC");

        if ( $matches ){
            $data = array();
            foreach( $matches as $match){
                $data[] = $match;
            }
            print json_encode($data);
        }
		
	} catch(Exception $ex) {
		$datos["msg"] = "An Error occured! " . $ex->getMessage(); //user friendly message
		print json_encode($datos);
	}

}


?>
