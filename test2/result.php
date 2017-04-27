<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="https://ols1alctg.qnssl.com/bootstrap.min.css">
</head>
<body>
<div class="container">
    <table class="table table-striped table-bordered">
        <tr>
            <td>ID</td>
            <td><?php
            echo $_POST["id"];
                ?></td>
        </tr>
        <tr>
            <td>Name</td>
            <td><?php
            echo $_POST["name"];
                ?></td>
        </tr>
        <tr>
            <td>Address</td>
            <td><?php
            echo $_POST["address"];
                ?></td>
        </tr>
        <tr>
            <td>Phone</td>
            <td><?php
            echo $_POST["phone"];
                ?></td>
        </tr>
        <tr>
            <td>Number of Adult</td>
            <td><?php
            echo $_POST["adult"];
                ?></td>
        </tr>
        <tr>
            <td>Number of Children</td>
            <td><?php
            echo $_POST["child"];
                ?></td>
        </tr>
        <tr>
            <td>Hobbies</td>
            <td><?php
            var_dump($_POST["hobby"]);
                ?></td>
        </tr>
    </table>
</div>
</body>
</html>