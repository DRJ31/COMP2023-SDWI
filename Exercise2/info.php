<?php
$name=$_POST["username"];
$email=$_POST["email"];
$gender=$_POST["gender"];
$skills=$_POST["skill"];
$city=$_POST["city"];
$position=$_POST["position"];
$recent=$_POST["recent"];
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
    <h1>Recent Jobs</h1>
    <p><?php echo $recent;?></p>
</div>
<div class="cardframe">
    <h1>Skills</h1>
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
    <h1>Working Experience</h1>
    <p><?php echo $experience; ?></p>
</div>
<div id="footer"></div>
</body>
</html>
