<?php 
    $id = intval($_REQUEST['id']);
    //header("Content-Transfer-Encoding: Binary"); 
    header("Pragma: public");
	header("Expires: -1");
	header("Cache-Control: public, must-revalidate, post-check=0, pre-check=0");
    header("Content-disposition: attachment; filename=\"".intval($id).".aif\""); 
    header('Content-Type: audio/x-caf');

    readfile('chatdata/'.intval($id).'.aif');?>
