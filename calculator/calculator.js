var number=[];//array about all your results
var j=0;//to count array number
var k=0;//arrow counter
var day=new Date();
var hour=day.getHours();//get hour of now
var css=document.getElementById("style");
var theme=document.getElementById("theme");
if(hour>=19||hour<7){//change into night mode after 7:00 PM
    night("nightmode.css");
}
function changemod(){//change css while press button
    var judge=css.href.match(/nightmod/g);
    var word=document.getElementById("changemod");
    var txt=findscreen()[0].style;
    var txt1=findscreen()[1].style;
    if(judge!=null){
        css.setAttribute("href","style.css");
        theme.setAttribute("content","#fff");
        word.innerHTML="Night";
        txt.color="black";
        if(txt1.fontSize=="50px"){
            txt1.color="#78c357";
        }
    }
    else{
        css.setAttribute("href","nightmode.css");
        theme.setAttribute("content","#333");
        word.innerHTML="White";
        txt.color="white";
        if(txt1.fontSize=="50px"){
            txt1.color="deepskyblue";
        }
    }
}
function night(name){//change into night mode or normal mode
    css.setAttribute("href",name);
    theme.setAttribute("content","#333");
}
window.onload=function() {//change height of screen in phone version
    var width=screen.width;
    var high = document.getElementById("screen").style;
    if (width < 768) {
        var tall=screen.height-450;
        high.height=tall+"px";
    }
    else{
        high.height="150px";
    }
    //change words while css changes
    var word=document.getElementById("changemod");
    var judge=css.href.match(/nightmod/g);
    if(judge!=null){
        word.innerHTML="White";
    }
    else{
        word.innerHTML="Night";
    }
};
window.onresize=function() {//change height of screen while resize the screen
    var width=screen.width;
    var high = document.getElementById("screen").style;
    if (width < 768) {
        var tall=screen.height-450;
        high.height=tall+"px";
    }
    else{
        high.height="150px";
    }
};
function scrolltoright() {//keep input screen always display the last element
    var scroll=document.getElementById("above");
    var wide=scroll.scrollWidth;
    scroll.scrollLeft=wide;
}
function mainjudge(){//regexp
    var strjudge=[];
    strjudge[0]=/[a-z\^√!]/g;//judge if there are English letters in string
    strjudge[1]=/[\+\-\*\/]/g;//judge if there are + - * / in string
    strjudge[2]=/[\+\-\*\/]$/g;//judge if + - * / is the last element of string
    strjudge[3]=/.*[^\+\-\*\/]/g;//get elements before if the last element is + - * /
    return strjudge;
}
function findscreen(){//get elements of calculator screen
    var arr=[];
    arr[0]=document.getElementById("above");
    arr[1]=document.getElementById("bottom");
    return arr;
}
function checkit(){//check ()
    var txt=findscreen()[0];
    var match1=txt.innerHTML.match(/\(/g);
    var match2=txt.innerHTML.match(/\)/g);
    if(match1==null&&match2==null){
        return false;
    }
    else if(match1==null&&match2!=null){
        return true;
    }
    else if(match2==null&&match1!=null){
        return true;
    }
    else if(match1.length==match2.length){
        return false;
    }
    else{
        return true;
    }
}
function main(element) {//function of buttons
    var txt=findscreen()[0];
    var txt1=findscreen()[1];
    var strjudge=mainjudge();
    var judge=element=="+"||element=="-"||element=="*"||element=="/";
    if(txt.innerHTML.match(strjudge[0])==null){
        txt.innerHTML+=element;
    }
    else if(txt.innerHTML.match(strjudge[0])!=null&&judge==true){
        txt.innerHTML=txt1.innerHTML+element;
    }
    var check=checkit();
    if(judge==false&&check==false){
        txt1.innerHTML=eval(txt.innerHTML);
    }
    else{
        txt1.innerHTML="";
    }
    if(txt1.innerHTML=="undefined"){
        txt1.innerHTML=number[j-1];
    }
    changeblack();
    scrolltoright();
}
function shake(time){//your phone will shake if it is an android phone with chrome when you press button
    if(navigator.vibrate){
        navigator.vibrate(time);
    }
    else if(navigator.webkitVibrate){
        navigator.webkitVibrate(time);
    }
}
function backspace(){//function of backspace button
    var txt=findscreen()[0];
    var txt1=findscreen()[1];
    var strjudge=mainjudge();
    var txtarr=txt.innerHTML.split("");
    txtarr.splice(txtarr.length-1,1);
    txt.innerHTML=txtarr.join("");
    var check=checkit();
    if(txt.innerHTML.match(strjudge[0])!=null){
        txt1.innerHTML="";
    }
    else if(txt.innerHTML.length==0){
        txt1.innerHTML="";
    }
    else if(txt.innerHTML.match(strjudge[2])==null&&check==false){
        txt1.innerHTML=eval(txt.innerHTML);
    }
    else{
        txt1.innerHTML="";
    }
    changeblack();
    scrolltoright();
}
function equal() {//calculate function
    var result=findscreen()[0];
    var result2=findscreen()[1];
    var judge1=css.href.match(/nightmod/g);
    var judge=(result.innerHTML!="");
    if(judge==true) {
        var result1=eval(result.innerHTML);
        result.style.height="50px";
        result.style.fontSize="30px";
        result.style.color="#ccc";
        result2.style.height="80px";
        result2.style.fontSize="50px";
        if(judge1!=null){
            result2.style.color="deepskyblue";
        }
        else{
            result2.style.color="#78c357";
        }
        result2.innerHTML=result1;
        number[j] = result2.innerHTML;
        j++;
        k=j;
    }
}
function resetit() {//function on AC
    number=[];
    j=0;
    k=0;
    changeblack();
    var content=findscreen()[0];
    var content1=findscreen()[1];
    content.innerHTML="";
    content1.innerHTML="";
}

function clean() {//ce function
    var content=findscreen()[0];
    var content1=findscreen()[1];
    changeblack();
    content.innerHTML="";
    content1.innerHTML="";
}

function larrow() {//left arrow function
    var txt=findscreen()[0];
    var txt1=findscreen()[1];
    txt1.innerHTML="";
    if(number.length==0){
        txt.innerHTML="";
    }
    else if(k>0&&number[k-1].length>0){
        k--;
        txt.innerHTML=number[k];
    }
    else if(number[0].length>0){
        txt.innerHTML=number[0];
    }
    changeblack();
}

function rarrow() {//right arrow function
    var txt=findscreen()[0];
    var txt1=findscreen()[1];
    txt1.innerHTML="";
    if(txt.innerHTML==0){
        txt.innerHTML="";
    }
    else if(k<number.length-1){
        k++;
        txt.innerHTML=number[k];
    }
    else if(number[0].length>0){
        txt.innerHTML=number[number.length-1];
    }
    changeblack();
}
function changegreen() {//change result into green
    var txt=findscreen()[0];
    var txt1=findscreen()[1];
    var judge=css.href.match(/nightmod/g);
    j++;
    k = j;
    txt.style.height = "50px";
    txt.style.color = "#ccc";
    txt.style.fontSize = "30px";
    txt1.style.height = "80px";
    txt1.style.fontSize = "50px";
    if(judge!=null){
        txt1.style.color="deepskyblue";
    }
    else{
        txt1.style.color="#78c357";
    }
    txt.scrollLeft=0;
}
function changeblack() {//change #above into black
    var txt=findscreen()[0];
    var txt1=findscreen()[1];
    var judge=css.href.match(/nightmod/g);
    txt.style.height="80px";
    txt.style.fontSize="50px";
    txt1.style.height="50px";
    txt1.style.fontSize="30px";
    txt1.style.color="#ccc";
    if(judge!=null){
        txt.style.color="white";
    }
    else{
        txt.style.color="black";
    }
}
//high class function begin from here
function log() {
    var txt=findscreen()[0];
    var txt1=findscreen()[1];
    var strjudge=mainjudge();
    if(txt.innerHTML.length==0){
        alert("Please input numbers");
    }
    else if(txt.innerHTML.match(strjudge[0])!=null){//check if there are letters in main screen
        alert("Please reset and continue");
    }
    else if(txt.innerHTML.match(strjudge[2])!=null){//check if + - * / is the last element in string
        if(txt.innerHTML.length==1&&txt.innerHTML.match(strjudge[1])!=null) {//check if + - * / is the only element in string
            alert("Please check your syntax");
        }
        else {
            var content = txt.innerHTML.match(strjudge[3]);
            txt1.innerHTML = Math.log(content) / Math.log(10);
            txt.innerHTML = "log(" + content + ")";
            number[j] = txt1.innerHTML;
            changegreen();
        }
    }
    else{
        var content = eval(txt.innerHTML);
        txt1.innerHTML = Math.log(content) / Math.log(10);
        txt.innerHTML = "log(" + txt.innerHTML + ")";
        number[j] = txt1.innerHTML;
        changegreen();
    }
}

function sin() {
    var txt=findscreen()[0];
    var txt1=findscreen()[1];
    var strjudge=mainjudge();
    if(txt.innerHTML.length==0){
        alert("Please input numbers");
    }
    else if(txt.innerHTML.match(strjudge[0])!=null){//check if there are letters in main screen
        alert("Please reset and continue");
    }
    else if(txt.innerHTML.match(strjudge[2])!=null){//check if + - * / is the last element in string
        if(txt.innerHTML.length==1&&txt.innerHTML.match(strjudge[1])!=null) {//check if + - * / is the only element in string
            alert("Please check your syntax");
        }
        else {
            var content = txt.innerHTML.match(strjudge[3]);
            txt1.innerHTML = Math.sin(content);
            txt.innerHTML = "sin(" + content + ")";
            number[j] = txt1.innerHTML;
            changegreen();
        }
    }
    else {
        var content = eval(txt.innerHTML);
        txt1.innerHTML = Math.sin(content);
        txt.innerHTML = "sin(" + txt.innerHTML + ")";
        number[j] = txt1.innerHTML;
        changegreen();
    }
}

function cos() {
    var txt=findscreen()[0];
    var txt1=findscreen()[1];
    var strjudge=mainjudge();
    if(txt.innerHTML.length==0){
        alert("Please input numbers");
    }
    else if(txt.innerHTML.match(strjudge[0])!=null){//check if there are letters in main screen
        alert("Please reset and continue");
    }
    else if(txt.innerHTML.match(strjudge[2])!=null){//check if + - * / is the last element in string
        if(txt.innerHTML.length==1&&txt.innerHTML.match(strjudge[1])!=null) {//check if + - * / is the only element in string
            alert("Please check your syntax");
        }
        else {
            var content = txt.innerHTML.match(strjudge[3]);
            txt1.innerHTML = Math.cos(content);
            txt.innerHTML = "cos(" + content + ")";
            number[j] = txt1.innerHTML;
            changegreen();
        }
    }
    else {
        var content = eval(txt.innerHTML);
        txt1.innerHTML = Math.cos(content);
        txt.innerHTML = "cos(" + txt.innerHTML + ")";
        number[j] = txt1.innerHTML;
        changegreen();
    }
}

function tan() {
    var txt=findscreen()[0];
    var txt1=findscreen()[1];
    var strjudge=mainjudge();
    if(txt.innerHTML.length==0){
        alert("Please input numbers");
    }
    else if(txt.innerHTML.match(strjudge[0])!=null){//check if there are letters in main screen
        alert("Please reset and continue");
    }
    else if(txt.innerHTML.match(strjudge[2])!=null){//check if + - * / is the last element in string
        if(txt.innerHTML.length==1&&txt.innerHTML.match(strjudge[1])!=null) {//check if + - * / is the only element in string
            alert("Please check your syntax");
        }
        else {
            var content = txt.innerHTML.match(strjudge[3]);
            txt1.innerHTML = Math.tan(content);
            txt.innerHTML = "tan(" + content + ")";
            number[j] = txt1.innerHTML;
            changegreen();
        }
    }
    else {
        var content = eval(txt.innerHTML);
        txt1.innerHTML = Math.tan(content);
        txt.innerHTML = "tan(" + txt.innerHTML + ")";
        number[j] = txt1.innerHTML;
        changegreen();
    }
}

function exp() {//function of e^x
    var txt=findscreen()[0];
    var txt1=findscreen()[1];
    var strjudge=mainjudge();
    if(txt.innerHTML.length==0){
        alert("Please input numbers");
    }
    else if(txt.innerHTML.match(strjudge[0])!=null){//check if there are letters in main screen
        alert("Please reset and continue");
    }
    else if(txt.innerHTML.match(strjudge[2])!=null){//check if + - * / is the last element in string
        if(txt.innerHTML.length==1&&txt.innerHTML.match(strjudge[1])!=null) {//check if + - * / is the only element in string
            alert("Please check your syntax");
        }
        else {
            var content = txt.innerHTML.match(strjudge[3]);
            txt1.innerHTML = Math.exp(content);
            txt.innerHTML = "e^(" + content + ")";
            number[j] = txt1.innerHTML;
            changegreen();
        }
    }
    else {
        var content = eval(txt.innerHTML);
        txt1.innerHTML = Math.exp(content);
        txt.innerHTML = "e^(" + txt.innerHTML + ")";
        number[j] = txt1.innerHTML;
        changegreen();
    }
}

function xxx() {//x^2 function
    var txt=findscreen()[0];
    var txt1=findscreen()[1];
    var strjudge=mainjudge();
    if(txt.innerHTML.length==0){
        alert("Please input numbers");
    }
    else if(txt.innerHTML.match(strjudge[0])!=null){//check if there are letters in main screen
        alert("Please reset and continue");
    }
    else if(txt.innerHTML.match(strjudge[2])!=null){//check if + - * / is the last element in string
        if(txt.innerHTML.length==1&&txt.innerHTML.match(strjudge[1])!=null) {//check if + - * / is the only element in string
            alert("Please check your syntax");
        }
        else {
            var content = txt.innerHTML.match(strjudge[3]);
            txt1.innerHTML=content*content;
            txt.innerHTML = "(" + content + ")^2";
            number[j] = txt1.innerHTML;
            changegreen();
        }
    }
    else {
        var content = eval(txt.innerHTML);
        txt1.innerHTML = content * content;
        txt.innerHTML = "(" + txt.innerHTML + ")^2";
        number[j] = txt1.innerHTML;
        changegreen();
    }
}

function xxxx(){//x! function
    var txt=findscreen()[0];
    var txt1=findscreen()[1];
    var strjudge=mainjudge();
    if(txt.innerHTML.length==0){
        alert("Please input numbers");
    }
    else if(txt.innerHTML.match(strjudge[0])!=null){//check if there are letters in main screen
        alert("Please reset and continue");
    }
    else if(txt.innerHTML.match(strjudge[2])!=null){//check if + - * / is the last element in string
        if(txt.innerHTML.length==1&&txt.innerHTML.match(strjudge[1])!=null) {//check if + - * / is the only element in string
            alert("Please check your syntax");
        }
        else {
            var content = txt.innerHTML.match(strjudge[3]);
            var numbers = parseInt(content);
            var result = 1;
            while (numbers > 1) {
                result = result * numbers * (--numbers);
                numbers--;
            }
            txt.innerHTML = content + "!";
            txt1.innerHTML = result;
            number[j] = txt1.innerHTML;
            changegreen();
        }
    }
    else {
        var content = eval(txt.innerHTML);
        var numbers = parseInt(content);
        var result = 1;
        while (numbers > 1) {
            result = result * numbers * (--numbers);
            numbers--;
        }
        txt.innerHTML = content + "!";
        number[j] = result;
        txt1.innerHTML = result;
        changegreen();
    }
}

function log10() {//function of ln
    var txt=findscreen()[0];
    var txt1=findscreen()[1];
    var strjudge=mainjudge();
    if(txt.innerHTML.length==0){
        alert("Please input numbers");
    }
    else if(txt.innerHTML.match(strjudge[0])!=null){//check if there are letters in main screen
        alert("Please reset and continue");
    }
    else if(txt.innerHTML.match(strjudge[2])!=null){//check if + - * / is the last element in string
        if(txt.innerHTML.length==1&&txt.innerHTML.match(strjudge[1])!=null) {//check if + - * / is the only element in string
            alert("Please check your syntax");
        }
        else {
            var content = txt.innerHTML.match(strjudge[3]);
            txt1.innerHTML = Math.log(content);
            txt.innerHTML = "ln(" + content + ")";
            number[j] = txt1.innerHTML;
            changegreen();
        }
    }
    else {
        var content = eval(txt.innerHTML);
        txt1.innerHTML = Math.log(content);
        txt.innerHTML = "ln(" + txt.innerHTML + ")";
        number[j] = txt1.innerHTML;
        changegreen();
    }
}

function sqrt() {
    var txt=findscreen()[0];
    var txt1=findscreen()[1];
    var strjudge=mainjudge();
    if(txt.innerHTML.length==0){
        alert("Please input numbers");
    }
    else if(txt.innerHTML.match(strjudge[0])!=null){//check if there are letters in main screen
        alert("Please reset and continue");
    }
    else if(txt.innerHTML.match(strjudge[2])!=null){//check if + - * / is the last element in string
        if(txt.innerHTML.length==1&&txt.innerHTML.match(strjudge[1])!=null) {//check if + - * / is the only element in string
            alert("Please check your syntax");
        }
        else {
            var content = txt.innerHTML.match(strjudge[3]);
            txt1.innerHTML = Math.sqrt(content);
            txt.innerHTML = "√(" + content + ")";
            number[j] = txt1.innerHTML;
            changegreen();
        }
    }
    else {
        var content = eval(txt.innerHTML);
        txt1.innerHTML = Math.sqrt(content);
        txt.innerHTML = "√(" + txt.innerHTML + ")";
        number[j] = txt1.innerHTML;
        changegreen();
    }
}

function twox(){//function of 2^x
    var txt=findscreen()[0];
    var txt1=findscreen()[1];
    var strjudge=mainjudge();
    if(txt.innerHTML.length==0){
        alert("Please input numbers");
    }
    else if(txt.innerHTML.match(strjudge[0])!=null){//check if there are letters in main screen
        alert("Please reset and continue");
    }
    else if(txt.innerHTML.match(strjudge[2])!=null){//check if + - * / is the last element in string
        if(txt.innerHTML.length==1&&txt.innerHTML.match(strjudge[1])!=null) {//check if + - * / is the only element in string
            alert("Please check your syntax");
        }
        else {
            var content = txt.innerHTML.match(strjudge[3]);
            var num = content;
            var count = 0;
            var numbers = 1;
            while (count < num) {
                numbers *= 2;
                count++;
            }
            txt1.innerHTML = numbers;
            txt.innerHTML = "2^(" + content + ")";
            number[j] = txt1.innerHTML;
            changegreen();
        }
    }
    else {
        var content = eval(txt.innerHTML);
        var num = content;
        var count = 0;
        var numbers = 1;
        while (count < num) {
            numbers *= 2;
            count++;
        }
        txt1.innerHTML = numbers;
        txt.innerHTML = "2^(" + txt.innerHTML + ")";
        number[j] = numbers;
        changegreen();
    }
}
