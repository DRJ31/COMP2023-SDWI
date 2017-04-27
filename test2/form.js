var idreg=/[0-9]+/;//regexp of id
var namereg=/^[^\s][a-zA-Z\s]+[^\s]$/; /*regexp of name*/
var passreg=/[a-zA-Z0-9]{6,8}/;//regexp for password
var addreg=/^[\s][a-zA-Z0-9\s]+[^\s]$/;
var phonereg=/[0-9]{11}/;//regexp for phone
var hobbyarr=[];//array of hobby
function resetit(element,id){//reset color of form
    $(element).html("");
    $(id).removeClass("has-error has-success");
}
function checkid() {//function of checking id
    var check=$("#idinput").val().match(idreg);
    if (check!=$("#idinput").val()){
        $("#id").addClass("has-error");
        $("#iderr").css("color","#a94442").html("Please check your id format");
    }
    else{
        $("#id").addClass("has-success");
        $("#iderr").css("color","green").html("✓");
    }
}

function checkname() {//function of checking name
    var check=$("#nameinput").val().match(namereg);
    if (check!=$("#nameinput").val()){
        $("#name").addClass("has-error");
        $("#nameerr").css("color","#a94442").html("Name could only have alphabets and spaces");
    }
    else{
        $("#name").addClass("has-success");
        $("#nameerr").css("color","green").html("✓");
    }
}

function checkpassword() {//function of checking password
    var check=$("#passinput").val().match(passreg);
    if (check!=$("#passinput").val()){
        $("#pass").addClass("has-error");
        $("#passerr").css("color","#a94442").html("Password could only have 6-8 alphabets and numbers");
    }
    else{
        $("#pass").addClass("has-success");
        $("#passerr").css("color","green").html("✓");
    }
}

function checkaddress() {//function of checking password
    var check=$("#addressinput").val().match(addreg);
    if (check!=$("#addressinput").val()){
        $("#address").addClass("has-error");
        $("#addresserr").css("color","#a94442").html("Address could only have alphabets, spaces and numbers");
    }
    else{
        $("#address").addClass("has-success");
        $("#addresserr").css("color","green").html("✓");
    }
}

function checkphone() {//function of checking password
    var check=$("#phoneinput").val().match(phonereg);
    if (check!=$("#phoneinput").val()){
        $("#phone").addClass("has-error");
        $("#phoneerr").css("color","#a94442").html("Phone could only have 11 numbers");
    }
    else{
        $("#phone").addClass("has-success");
        $("#phoneerr").css("color","green").html("✓");
    }
}
function addminus(judge){//add or minus number of adults
    var numbers=parseInt($("#adultnum").val());
    if(judge===true&&numbers<20){
        numbers++;
        $("#adultnum").val(numbers);
    }
    else if(judge===true){
        $("#adultnum").val(20);
    }
    else if(numbers>1){
        numbers--;
        $("#adultnum").val(numbers);
    }
    else{
        $("#adultnum").val(1);
    }
}

function confirmpass(){//confirm password
    var passwd=$("#passinput").val();
    var confirmpasswd=$("#confirminput").val();
    if(passwd===confirmpasswd){
        $("#confirm").addClass("has-success");
        $("#confirmerr").css("color","green").html("✓");
    }
    else{
        $("#confirm").addClass("has-error");
        $("#confirmerr").css("color","#a94442").html("Please check your password again");
    }
}
function showChild() {//show or hide children
    if($("#children").css("display")==="none"){
        $("#children").css("display","block");
    }
    else{
        $("#children").css("display","none");
    }
}

function getHobby() {
    var hobbies=$("input[name='hobby']");
    for(var i=0;i<hobbies.length;i++){
        if(hobbies[i].checked){
            hobbyarr.push(hobbies[i].value);
        }
    }
    return hobbyarr.length;
}

function infos(){
    var userid=$("#idinput").val();
    var username=$("#nameinput").val();
    var useraddress=$("#addressinput").val();
    var userphone=$("#phoneinput").val();
    var adultnumber=$("#adultnum").val();
    var childrennumber=$("#childrenselect").val();
    var hobbynumber=getHobby();
    var hobbystr;
    switch (hobbynumber){
        case 0:
            hobbystr="You doesn't have a hobby.";
            break;
        case 1:
            hobbystr="Your hobby is: "+hobbyarr[0]+".";
            break;
        case 2:
            hobbystr="Your hobbies are: Singing and dancing."
    }
    alert(
        "Your ID: "+userid
        +"\nName: "+username
        +"\nAddress: "+useraddress
        +"\nCell Phone: "+userphone
        +"\nYou have "+adultnumber+" adults and "+childrennumber+" children in your family.\n"+hobbystr);
    hobbyarr=[];
}