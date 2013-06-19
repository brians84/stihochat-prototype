<?php

// Prototype mini-server that very handles very basic chat requests (pull from clients)
// temporary handle the request like this / not a clean way to do this, but a quick and dirty way

define('CHATDATA_PATH', "chatdata/");

require_once('config.db.php');

$srh = new ServerRequestHandler;
$srh->{$_REQUEST['action']}($_REQUEST);

class ServerRequestHandler {

	private $pdo;

	private $database = DB_NAME;
	private $username = DB_USERNAME;
	private $password = DB_PASSWORD;

	public function __construct() {

		$this->pdo = new PDO("mysql:host=localhost;dbname=".$this->database, $this->username, $this->password);	//new mysqli($this->hostname, $this->username, $this->password);

		if(mysqli_connect_errno()) {
			error_log('Problem with the database');
		}

	}



	public function addTextMessage($args) {

		// date is automatically filled 
		$stmt = $this->pdo->prepare("INSERT INTO message (type, user, content, is_question_cluster) VALUES (1, :user, :content, :is_question_cluster)");

		if( $stmt->execute(array(':user' => $args['user'], ':content' => $args['content'], ':is_question_cluster'=> $args['is_question_cluster'] )) ) {
			echo "succesfully added";
		}

	}


	public function addPhotoMessage($args) {

		if (!empty($_FILES)) {

			// only insert type and user
			// date is automatically filled and content is not being used
			$stmt = $this->pdo->prepare("INSERT INTO message (type, user) VALUES (3, :user)");

			if( $stmt->execute(array(':user' => $args['user'])) ) {

				// use the database insert id to name the file
				$id = $this->pdo->lastInsertId();
				$target_path = CHATDATA_PATH;
				$target_path = $target_path . $id . '.png'; 

				if(move_uploaded_file($_FILES['file']['tmp_name'], $target_path)) {
				    echo "succesfully added";
				} else{
				    exit("There was an error uploading the file, please try again!");
				}
			}

		} else {
			error_log('NO FILES');
		}

	}


	public function addVoiceMessage($args) {

		if (!empty($_FILES)) {

			// only insert type and user
			// date is automatically filled and content is not being used
			$stmt = $this->pdo->prepare("INSERT INTO message (type, user, is_question_cluster) VALUES (2, :user, :is_question_cluster)");

			if( $stmt->execute(array(':user' => $args['user'], ':is_question_cluster' => $args['is_question_cluster'] )) ) {

				// use the database insert id to name the file
				$id = $this->pdo->lastInsertId();
				$target_path = CHATDATA_PATH;
				$target_path = $target_path . $id . '.aif'; 

				if(move_uploaded_file($_FILES['file']['tmp_name'], $target_path)) {
				    echo "succesfully added";
				} else{
				    exit("There was an error uploading the file, please try again!");
				}
			}

		} else {
			error_log('NO FILES');
		}

	}




	public function getNewMessages($args) {

		$stmt = $this->pdo->prepare("SELECT * FROM message WHERE id > :last_message_id ORDER BY id ASC");

		if( $stmt->execute(array(':last_message_id' => $args['last_message_id'])) ) {

			$results=$stmt->fetchAll(PDO::FETCH_ASSOC);
			exit(json_encode($results));

		}
	}

}
