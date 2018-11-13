<?php
header("Content-Type: text/xml");
echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';

echo "<response>";
    $name = $_GET["name"];

    $maitres = array("Vlad", "Gabe", "Diane");

    if(trim($name) == '') {
        echo "Coucou étranger! Quel est votre nom?";          
    } elseif (in_array($name, $maitres)) {
        echo "Salut Grand Maitre ". htmlentities($name);
    } else {
        echo "OMG ". htmlentities($name) . " Je ne te connais pas!";
    }

echo "</response>";
?>