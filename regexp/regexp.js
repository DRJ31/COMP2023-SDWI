function generateyear(){
    getid("year").innerHTML="<option value=''>YYYY</option>";
    for(var i=2017;i>1900;i--){
        getid("year").innerHTML+="<option value='"+i+"'>"+i+"</option>";
    }
}

function generatemonth(){
    getid("month").innerHTML="<option value=''>MM</option>";
    for(var i=1;i<=12;i++){
        getid("month").innerHTML+="<option value='"+i+"'>"+i+"</option>";
    }
}
var thisyear=0;
var thismonth=0;
function getyearmon(element,judge) {
    if(judge) {
        thisyear = parseInt(element.value);
    }
    else{
        thismonth=parseInt(element.value);
    }
}
function generateday(month,year){
    var two=28;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            daylength(31);
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            daylength(30);
            break;
        default:
            if(year%4==0){
                two=29;
            }
            daylength(two);
    }

}
function daylength(long){
    getid("day").innerHTML="<option value=''>DD</option>";
    for(var i=1;i<=long;i++){
        getid("day").innerHTML+="<option value='"+i+"'>"+i+"</option>";
    }
}
function getid(element){
    return document.getElementById(element);
}

function mailerr(element){
    var regexp=/^[\w\-\.+]+\@[\w\.\-]+\.\w{2,4}$/;
    var result=element.value.match(regexp);
    if(result!==null){
        $("#emailerr").css("color","green").html("√");
        $("#mailgroup").addClass("has-success");
    }
    else{
        $("#emailerr").css("color","red").html("X Please check your email format");
        $("#mailgroup").addClass("has-error").removeClass("has-success");
    }
}

function resetit(element,id){
    $(element).html("");
    $(id).removeClass("has-error");
}
var password;
function passworderr(element) {
    password=element.value;
    var regexp=/[a-zA-Z]+\d+/;
    var result=element.value.match(regexp);
    var length=element.value.length;
    if(result!==null&&length>=8){
        $("#passerr").css("color","green").html("√");
        $("#passgroup").addClass("has-success");
    }
    else{
        $("#passerr").css("color","red").html("X Password Should have letters and numbers and longer than 8 digits");
        $("#passgroup").addClass("has-error").removeClass("has-success");
    }
}

function confirmit(element){
    if(element.value!==password){
        $("#confirmerr").css("color","red").html("X Please check your password");
        $("#confirmgroup").addClass("has-error").removeClass("has-success");
    }
    else{
        $("#confirmerr").css("color","green").html("√");
        $("#confirmgroup").addClass("has-success");
    }
}