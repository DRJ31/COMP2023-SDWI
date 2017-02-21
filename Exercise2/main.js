function information() {
    var name=document.getElementById("username").value;//value of username
    var skills=document.getElementsByName("skill[]");//array of skill
    var sex=document.getElementById("mainform").gender;//array of gender
    var city=document.getElementById("mainform").city;//array of city
    var position=document.getElementById("position").value;//value of position
    var recentjob=document.getElementById("recent");//value of recent job
    var workexperience=document.getElementById("experience").value;//value of experience
    var arr=new Array();
    var j=0;//use in array arr
    var arr1=[];//array about recent job
    for(var i=0;i<5;i++){
        if(recentjob[i].selected){
            arr1.push(recentjob[i].value);
        }
    }
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
    //content of recent job
    var content1="";
    for(var i=0;i<arr1.length;i++){
        if(i==arr1.length-1){
            content1=content1+arr1[i]+".";
        }
        else{
            content1=content1+arr1[i]+" and ";
        }
    }
    var mail=document.getElementById("email").value;//users' email address
    //alert begin
    alert(
        sexresult+" name is "+name+". "+"\n"+
        sexresult+" Email is "+mail+"\n"+
        sexresult+" skill is "+content+"\n"+
        sex1+" chose to work in "+cityresult+". "+"\n"+
        sexresult+" wanted position is "+position+". \n"+sexresult+" recent job is "+content1+"\nThe following message is "+sexresult.toLowerCase()+" working experience: "+workexperience
    );//alert end
}//function information() end

function formreset() {//reset form function
    var mail=document.getElementById("email").style;
    var name=document.getElementById("username").style;
    var experience=document.getElementById("experience").style;
    document.getElementById("mainform").reset();
    mail.border="1px solid #ddd";
    mail.backgroundColor="#fafafa";
    name.border="1px solid #ddd";
    name.backgroundColor="#fafafa";
    experience.border="1px solid #ddd";
    experience.backgroundColor="#fafafa";
}

function checkmail(){//check if the email address have a correct format
    var mail=document.getElementById("email").value;
    var at=mail.indexOf("@");
    var point=mail.lastIndexOf(".");
    var element=document.getElementById("email").style;
    if(mail.length==0){
        element.border="1px solid #51a7e8";
    }
    else if(at<=0 || mail.length-point<2 || point<=0 ||point-at<=1){
        element.border="1px solid #df3e3e";
    }
    else{
        element.border="1px solid #549d34";
    }
}


function submitphp(){//array for php
    var recentjob=document.getElementById("recent");//value of recent job
    var k=0;//use in array arr1
    var arr1=[];
    for(var i=0;i<5;i++){
        if(recentjob[i].selected){
            arr1[k]=recentjob[i].value;
            k++;
        }
    }
    document.getElementById("array").value=arr1;
}
function normalout(name) {//text focus out function
    var element=document.getElementById(name);
    if(element.value.length>0) {
        element.style.border = "1px solid #549d34";
        element.style.backgroundColor = "white";
    }
    else{
        element.style.border = "1px solid #ddd";
        element.style.backgroundColor = "#fafafa";
    }
}

function focuson(name){//onfocus function
    document.getElementById(name).style.border="1px solid #51a7e8";
    document.getElementById(name).style.backgroundColor="white";

}
function mailout() {//mail foucus out function
    var mail=document.getElementById("email").value;
    var at=mail.indexOf("@");
    var point=mail.lastIndexOf(".");
    var element=document.getElementById("email").style;
    if(mail.length==0){
        element.border="1px solid #ddd";
        element.backgroundColor="#fafafa";
    }
    else if(at<=0 || mail.length-point<2 || point<=0 || point-at<=1){
        element.border="1px solid #df3e3e";
        element.backgroundColor="white";
    }
    else{
        element.border="1px solid #549d34";
        element.backgroundColor="white";
    }
}

function checkall(){//check the whole form
    var name=document.getElementById("username").value;
    var mail=document.getElementById("email").value;
    var recent=document.getElementById("recent").value.length;
    var at=mail.indexOf("@");
    var point=mail.lastIndexOf(".");
    var experience=document.getElementById("experience").value;
    var city=document.getElementById("mainform").city;//array of city
    var sex=document.getElementById("mainform").gender;
    var skills=document.getElementsByName("skill[]");//array of skill
    var sexresult="";
    var cityresult="";
    var arr=new Array();
    var j=0;
    for(var i=0;i<skills.length;i++) {
        if (skills[i].checked) {
            arr[j] = skills[i].value;
            j++;
        }
    }
//find out which city users have chosen
    for(var i=0;i<city.length;i++) {
        if (city[i].checked) {
            var cityresult = city[i].value;
        }
    }
    for(var i=0;i<sex.length;i++) {
        if (city[i].checked) {
            var sexresult = sex[i].value;
        }
    }
    //judge the form
    if(name.length==0 || experience.length==0 || mail.length==0 || recent==0 || cityresult.length==0 || sexresult.length==0 ||arr.length==0){
        alert("Please fill in all the blanks");
    }
    else if(at<=0 || mail.length-point<2 || point<=0 || point-at<=1){
        alert("Your email format is wrong");
    }
    else{
        information();
    }
}

function test(name) {//just for testing
    var value=document.getElementById(name);
    console.log(value);
}