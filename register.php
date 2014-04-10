<?php

// create connection
$con=mysqli_connect("localhost", "root", "hunter99", "website");

// check connection
if (mysqli_connect_errno())
    {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }
//if (isset($_POST['submit'])) {

    //** @var $_POST TYPE_NAME */
    //$sUname = ($_POST['username']);
    //$sPassid = ($_POST['passid']);
    //$sCpassid = ($_POST['cpassid']);
    //$sName = ($_POST['name']);
    //$sCity = ($_POST['city']);
    //$sState = ($_POST['state']);
    //$sZip = ($_POST['zip']);
    //$sEmail = ($_POST['email']);
    //$sSex = ($_POST['sex']);
    //$sDesc = ($_POST['desc']);
    $sql = "INSERT INTO users (username, passid, name, city, state, zip, email, descr)
VALUES ('$_POST[username]', '$_POST[passid]', '$_POST[name]', '$_POST[city]', '$_POST[state]', '$_POST[zip]',
'$_POST[email]', '$_POST[descr]')";
    if (!mysqli_query($con,$sql))
    {
        die('Error: ' . mysqli_error($con));
    }
    echo "1 record added";

    mysqli_close($con);


    //}
    //$sErrors = '';
    //if (strlen($sUname) >= 1 and strlen($sUname) <= 25) {
        //if (strlen($sPassid) >= 1 and strlen($sPassid) <= 25) {
            //if (strlen($sEmail) >= 1 and strlen($sEmail) <= 55) {
                //if ($sPassid == $sCpassid) {
                    //if (preg_match('^[a-zA-Z0-9\-\.]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$', $sEmail)) {





                        //}
                    //} else {
                        //$sErrors = 'Email is wrong';
                    //}
                //} else {
                    //$sErrors = 'Passwords are not the same';
                //}
            //} else {
                //$sErrors = 'Address email is too long';
            //}
        //} else {
            //$sErrors = 'Password is too long';
        //}
    //} else {
        //$sErrors = 'Login is too long';
    //}



// extra useful function to make POST variables more safe
//function mysqli_real_escape_string($s) {
    //return mysql_real_escape_string(strip_tags($s)); // uncomment in when you will use connection with database
    //return strip_tags($s);
?>
