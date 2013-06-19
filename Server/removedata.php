<?php

// Prototype mini-server that very handles very basic chat requests (pull from clients)
// temporary handle the request like this / not a clean way to do this, but a quick and dirty way

define('CHATDATA_PATH', "chatdata/");

require_once('config.db.php');

 $database = DB_NAME;
 $username = DB_USERNAME;
 $password = DB_PASSWORD;


$pdo = new PDO("mysql:host=localhost;dbname=".$database, $username, $password);	//new mysqli($this->hostname, $this->username, $this->password);

if(mysqli_connect_errno()) {
	error_log('Problem with the database');
}


$stmt = $pdo->prepare("DELETE FROM message WHERE id > :id");

if( $stmt->execute(array(':id' => 0) ) ) {

	echo "ChatData removed!";

}

