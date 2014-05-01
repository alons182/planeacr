<?php 

define( '_JEXEC', 1 );
define('JPATH_BASE', dirname(dirname(__FILE__)));
define( 'DS', DIRECTORY_SEPARATOR );

require_once (JPATH_BASE . DS . 'includes' . DS . 'defines.php');
require_once (JPATH_BASE . DS . 'includes' . DS . 'framework.php');

jimport('joomla.mail.helper');
jimport('joomla.filesystem.file');

$app = JFactory::getApplication('site');
$app->initialise();




	$data =  $_POST;

	$uploaddir = '../images/uploads/';
	$nombre = $_FILES["uploadBtn"]["name"];
    $extension = pathinfo($nombre, PATHINFO_EXTENSION);
	
	//'. $_SERVER['REQUEST_URI'] .'/uploads/'.basename($_FILES['uploadBtn']['name'].
	$result = 'ok';
	if(trim($_POST['nombre']) === '') {
		$result = 'Error - falta el campo nombre';
	}else{
		$name = trim($_POST['nombre']);
	}
	if(trim($_POST['ide']) === '') {
		$result = 'Error - falta el campo nombre';
	}else{
		$ide = trim($_POST['ide']);
	}
	if(trim($_POST['residencia']) === '') {
		$result = 'Error - falta el campo nombre';
	}else{
		$residencia = trim($_POST['residencia']);
	}
	if(trim($_POST['telefono']) === '') {
		$result = 'Error - falta el campo nombre';
	}else{
		$telefono = trim($_POST['telefono']);
	}
	if(trim($_POST['email']) === '') {
		$result = 'Error - falta el campo email';
	}else{
		$email = trim($_POST['email']);
	}
	
	$nombre_final = basename('archivo_'.substr(sha1(rand(1,999999)),0,-30).'_'.substr($name,0,3).'_'.date("Ymd").'.'.$extension);

	$link = '<a href="'.$_SERVER['HTTP_HOST'] .'/images/uploads/'.$nombre_final.'" title="Imagen">'.$nombre_final.'</a>';
	
	$uploadfile = $uploaddir . $nombre_final;
       
   if ($_FILES['uploadBtn']['size'] <= 209715200) { 
   	
    	if (move_uploaded_file($_FILES['uploadBtn']['tmp_name'], $uploadfile)) {
	   		

	   		
	

			if($result=='ok'){
				$emailTo = 'alonso@avotz.com';
			    $subject = 'Desde el formulario de Recursos Humanos del Sitio Planeacr - Submitted message from '.$name;
			    
			    $body = '<html><body>';
				$body .= '<img src="http://www.planeacr.com/img/logo_mail.png" alt="Grupo Planea" />';
				$body .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
				$body .= "<tr style='background: #eee;'><td><strong>Nombre:</strong> </td><td>" . strip_tags($name) . "</td></tr>";
				$body .= "<tr><td><strong>Identificación:</strong> </td><td>" . strip_tags($ide) . "</td></tr>";
				$body .= "<tr><td><strong>Lugar de Residencia:</strong> </td><td>" . strip_tags($residencia) . "</td></tr>";
				$body .= "<tr><td><strong>Teléfono:</strong> </td><td>" . strip_tags($telefono) . "</td></tr>";
				$body .= "<tr><td><strong>Email:</strong> </td><td>" . strip_tags($email) . "</td></tr>";
				$body .= "<tr><td><strong>URL del Archivo CV:</strong> </td><td>" . $link . "</td></tr>";
				$body .= "</table>";
				$body .= "</body></html>";
			    $headers = 'From: ' .' <alonso@avotz.com>' . "\r\n" . 'Reply-To: ' . $email . "\r\nCC:".$email."\r\n". "MIME-Version: 1.0\r\n"."Content-Type: text/html; charset=utf-8\r\n";


			    mail($emailTo, $subject, $body, $headers);
			        
			    
			    
			}

			$data = array('message' => 'Archivo subido Exitosamente.');

	   
		} else {
		   $data = array('message' => 'Error al subir el archivo. Verifique que no sobrepase el limite de 64mb');
		}
    }else
   		 $data = array('message' => 'Error Archivo Muy grande');
	
	

	//$file = 
	//echo $data['email'] .' - '. $_FILES['uploadBtn']['name'];;
   		
	echo json_encode($data);
?>