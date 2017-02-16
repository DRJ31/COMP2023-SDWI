function information() {
    var name=document.getElementById("username").value;
    var skills=document.getElementById("mainform").skill;
    var sex=document.getElementById("mainform").gender;
    var city=document.getElementById("mainform").city;
    var position=document.getElementById("position").value;
    var recentjob=document.getElementById("recent").value;
    var workexperience=document.getElementById("experience").value;
    var arr=new Array();
    var j=0;
    for(var i=0;i<skills.length;i++){
        if(skills[i].checked){
            arr[j]=skills[i].value;
            j++;
        }
    }
    for(var i=0;i<city.length;i++){
        if(city[i].checked){
            var cityresult=city[i].value;
        }
    }
    for(var i=0;i<sex.length;i++){
        if(sex[i].checked){
            var sexresult=sex[i].value;
        }
    }
    if (sexresult=="His"){
        var sex1="He";
    }
    else{
        var sex1="She";
    }
    var content="";
    for(var i=0;i<arr.length;i++){
        if(i==arr.length-1){
            content=content+arr[i]+".";
        }
        else{
            content=content+arr[i]+" and ";
        }
    }
    alert(
        sexresult+" name is: "+name+". "+sexresult+" skill is: "+content+" "+sex1+" chose to work in "+cityresult+". "+sexresult+" wanted position is "+position+". "+sexresult+" recent job is "+recentjob+". The following message is "+sexresult.toLowerCase()+" working experience: "+workexperience
    );
}

function formreset() {
    document.getElementById("mainform").reset();
}

function checkmail(){
    var mail=document.getElementById("email").value;
    var at=mail.indexOf("@");
    var point=mail.lastIndexOf(".");
    console.log(at);
    console.log(point);

}