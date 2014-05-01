<?php
/**
 * @package     Joomla.Administrator
 * @subpackage  Templates.3monkiescr
 *
 * @copyright   Copyright (C) 2005 - 2013 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;



$app = JFactory::getApplication();
$doc = JFactory::getDocument();
$this->language = $doc->language;


$itemid   = $app->input->getCmd('Itemid', '');

// Add JavaScript Frameworks
//JHtml::_('bootstrap.framework');


// Add Stylesheets
$doc->addStyleSheet('templates/'.$this->template.'/css/normalize.min.css');
$doc->addStyleSheet('templates/'.$this->template.'/css/main.css');



?>
<!DOCTYPE html>
<html lang="<?php echo $this->language; ?>" >
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="http://fonts.googleapis.com/css?family=Lato:100,300,700" rel="stylesheet" type="text/css">
    <link rel="icon" type="image/png" href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/img/favicon_16x16.ico">
	<jdoc:include type="head" />
         
	<script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/vendor/modernizr-2.6.2.min.js"></script>
     
     
</head>


<body class="<?php echo ($itemid ? ' bgid-' . $itemid : '')?>">
<div id="wrap">
            <div id="background-overlay">
                <jdoc:include type="modules" name="bg-img" style="none" />
                
            </div>
            <header id="site-header">
                <a href="<?php echo $this->baseurl ?>" id="logo"><img src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/img/logo.png" alt="Grupo Planea" /></a>
                <div id="btn_nav"><span class="icon-menu"></span>Menu</div>
                <nav id="menu">
                     <jdoc:include type="modules" name="menu" style="none" />
                </nav>
            </header>
            <section id="content">
                <div id="contenido">
                     <div id="menu-top">
                       <jdoc:include type="modules" name="menu-top" style="none" />
                    </div>
                     <div id="contactbox">
                        <div id="dialog" class="window">
                            <jdoc:include type="modules" name="contact-box" style="none" />
                        </div>
                     </div>
                    <jdoc:include type="component" />
                   
                </div>
            </section>
            <div id="extra">
                <nav id="divisiones">
                    <div class="columnas-divisiones">
                        <jdoc:include type="modules" name="divisiones" style="none" />
                        
                    </div>
                </nav>
            </div>

        </div>
       

        
        
        <script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/vendor/jquery.cycle2.min.js"></script>
        <script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/vendor/jquery.validate.min.js"></script>
        <script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/vendor/jquery.mousewheel.min.js"></script>
        <script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/vendor/jquery.mCustomScrollbar.min.js"></script>
        <script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/vendor/jquery.form.min.js"></script>
       
        <script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/utils.js"></script>
        <script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/main.js"></script>
        <!--<script data-main="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/main.js" src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/vendor/require.js"></script>-->
        <script>
           /* var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
            (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src='//www.google-analytics.com/ga.js';
            s.parentNode.insertBefore(g,s)}(document,'script'));*/
        </script>
        <jdoc:include type="modules" name="debug" style="none" />
</body>


</html>
