function information() {
    var name=document.getElementById("username").value;//value of username
    var skills=document.getElementById("mainform").skill;//array of skill
    var sex=document.getElementById("mainform").gender;//array of gender
    var city=document.getElementById("mainform").city;//array of city
    var position=document.getElementById("position").value;//value of position
    var recentjob=document.getElementById("recent").value;//value of recent job
    var workexperience=document.getElementById("experience").value;//value of experience
    var arr=new Array();
    var j=0;//use in array arr
    //set up a new array on which skills users have chosen
    for(var i=0;i<skills.length;i++){
        if(skills[i].checked){
            arr[j]=skills[i].value;
            j++;
        }
    }
    //find out which city users have chosen
    for(var i=0;i<city.length;i++){
        if(city[i].checked){
            var cityresult=city[i].value;
        }
    }
    //find out users' gender
    for(var i=0;i<sex.length;i++){
        if(sex[i].checked){
            var sexresult=sex[i].value;
        }
    }
    //use in alert
    if (sexresult=="His"){
        var sex1="He";
    }
    else{
        var sex1="She";
    }
    //write which skills users are mastered
    var content="";
    for(var i=0;i<arr.length;i++){
        if(i==arr.length-1){
            content=content+arr[i]+".";
        }
        else{
            content=content+arr[i]+" and ";
        }
    }
    var mail=document.getElementById("email").value;//users' email address
    //alert begin
    alert(
        sexresult+" name is: "+name+". "+sexresult+" Email is "+mail+". "+sexresult+" skill is: "+content+" "+sex1+" chose to work in "+cityresult+". "+sexresult+" wanted position is "+position+". "+sexresult+" recent job is "+recentjob+". The following message is "+sexresult.toLowerCase()+" working experience: "+workexperience
    );//alert end
}//function information() end

function formreset() {//reset form function
    document.getElementById("mainform").reset();
}

function checkmail(){//check if the email address have a correct format
    var at=mail.indexOf("@");
    var point=mail.lastIndexOf(".");
    if(at<=0 || mail.length-point<2){
        alert("Email format error");
    }
}