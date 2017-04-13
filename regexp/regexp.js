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
    for(var i=1;i<=long;i++){
        getid("day").innerHTML+="<option value='"+i+"'>"+i+"</option>";
    }
}
function getid(element){
    return document.getElementById(element);
}

function mailerr(element){
    var regexp=/^[\w\-\.]+\@\w+\.\w{2,}/;
    var result=element.value.match(regexp);
    if(result!==null){
        $("#emailerr").css("color","green").html("√");
    }
    else{
        $("#emailerr").css("color","red").html("X Please check your email format");
    }
}

function resetit(element){
    $(element).html("");
}