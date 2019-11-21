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
	case 'GetLeaderboard':
	{
		GetLeaderboard();
		break;
	}
	break;
}



function GetLeaderboard(){
	global $wpdb;

    try {
        $leaderboard_list = $wpdb->get_results(
            "SELECT @row_id:=@row_id+1 AS row_id, `nickname`, points_matches, points_groups,serial_id from(
                SELECT u.`nick_name` as nickname,
                p.points as points_matches,
                g.points AS points_groups,
                p.serial_id
                FROM
                app_users u
                JOIN app_predictions p
                ON u.email = p.user_email 
                LEFT JOIN app_predictions_groups g
                ON p.serial_id = g.serial_id
                GROUP BY
                p.serial_id
                ORDER BY
                p.points DESC) t1, (SElECT @row_id:=0) t2;"
        );

        if ( $leaderboard_list ){
            $data = array();
            foreach( $leaderboard_list as $lideres){
                $data[] = $lideres;
            }
            print json_encode($data);
        }
		
	} catch(Exception $ex) {
		$datos["msg"] = "An Error occured! " . $ex->getMessage(); //user friendly message
		print json_encode($datos);
	}

}
?>