<?php
$name=$_POST["username"];
$email=$_POST["email"];
$gender=$_POST["gender"];
$skills=$_POST["skill"];
$city=$_POST["city"];
$position=$_POST["position"];
$recent=$_POST["array1"];
$experience=$_POST["experience"];
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Personal information</title>
    <link rel="stylesheet" href="style.css">
    <script src="main.js"></script>
    <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no,width=device-width">
</head>
<body>
<div class="headphoto"></div>
<div class="cardframe firstcard">
    <div class="imgframe"></div>
    <h1><?php echo $name; ?></h1>
    <h3>Position: <?php echo $position; ?></h3>
    <h4><?php echo $email; ?></h4>
    <h4>China <?php echo $city; ?></h4>
</div>
<div class="cardframe">
    <h2>Recent Jobs</h2>
    <ul><?php
        $arr=explode(',',$recent);
        $content="";
        for($i=0;$i<count($arr);$i++){
            $content=$content."<li>".$arr[$i]."</li>";
        }
        echo $content;
        ?></ul>
</div>
<div class="cardframe">
    <h2>Skills</h2>
    <ul>
        <?php
        $long=count($skills);
        if(isset($_REQUEST["skill"])){
            foreach($_POST['skill'] as $mycheckbox) {
                echo  "<li>".$mycheckbox."</li>";
            }
}
        ?>
    </ul>
</div>
<div class="cardframe">
    <h2>Working Experience</h2>
    <p><?php echo $experience; ?></p>
</div>
<div id="footer"></div>
</body>
</html>
