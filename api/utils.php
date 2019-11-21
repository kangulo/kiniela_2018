<?PHP
function get_user_by_session($sid)
{
    $sid = filter_var($sid,FILTER_SANITIZE_STRING);
    $user_agent = $_SERVER['HTTP_USER_AGENT'];
    $ip = $_SERVER['REMOTE_ADDR'];
    $date = date('Y-m-d');
    $user_id = $wpdb->get_var("SELECT user_id FROM app_user_sessions WHERE sid = '$sid' AND user_agent = '$user_agent' AND ip = '$ip' AND expiration > '$date'");
    return $user_id;
}