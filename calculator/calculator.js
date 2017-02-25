var number=[];//array about all your results
var j=0;//to count array number
var k=0;//arrow counter
window.onload=function() {//change height on screen of phone version
    var width=screen.width;
    var high = document.getElementById("screen").style;
    if (width < 768) {
        var tall=screen.height-450;
        high.height=tall+"px";
    }
    else{
        high.height="150px";
    }
}
window.onresize=function() {//change height of screen
    var width=screen.width;
    var high = document.getElementById("screen").style;
    if (width < 768) {
        var tall=screen.height-450;
        high.height=tall+"px";
    }
    else{
        high.height="150px";
    }
}
function findscreen(){//get elements of calculator screen
    var arr=[];
    arr[0]=document.getElementById("above");
    arr[1]=document.getElementById("bottom");
    return arr;
}

function main(element) {//function of buttons
    var txt=findscreen()[0];
    var txt1=findscreen()[1];
    txt.innerHTML+=element;
    var judge=element=="+"||element=="-"||element=="*"||element=="/";
    if(judge==false){
        txt1.innerHTML=eval(txt.innerHTML);
    }
    else{
        txt1.innerHTML="";
    }
    txt.style.height="90px";
    txt.style.color="black";
    txt.style.fontSize="60px";
    txt1.style.height="40px";
    txt1.style.fontSize="30px";
    txt1.style.color="#ccc";
}
function shake(time){
    if(navigator.vibrate){
        navigator.vibrate(time);
    }
    else if(navigator.webkitVibrate){
        navigator.webkitVibrate(time);
    }
}
function backspace(){
    var txt=findscreen()[0];
    var txt1=findscreen()[1];
    var txtarr=txt.innerHTML.split("");
    txtarr.splice(txtarr.length-1,1);
    txt.innerHTML=txtarr.join("");
    var element=txt.innerHTML;
    var judge=element.length-element.lastIndexOf("+")==1||element.length-element.lastIndexOf("*")==1||element.length-element.lastIndexOf("-")==1||element.length-element.lastIndexOf("/")==1;
    if(judge==false){
        txt1.innerHTML=eval(txt.innerHTML);
    }
    else{
        txt1.innerHTML="";
    }
    txt.style.height="90px";
    txt.style.color="black";
    txt.style.fontSize="60px";
    txt1.style.height="40px";
    txt1.style.fontSize="30px";
    txt1.style.color="#ccc";
}
function equal() {//calculate function
    var result=findscreen()[0];
    var result2=findscreen()[1];
    var judge=(result.innerHTML!="");
    var result1=eval(result.innerHTML);
    result.style.height="40px";
    result.style.fontSize="30px";
    result.style.color="#ccc";
    result2.style.height="90px";
    result2.style.fontSize="60px";
    result2.style.color="#78c357";
    result2.innerHTML=result1;
    if(judge==true) {
        number[j] = result2.innerHTML;
        j++;
        k=j;
    }
    console.log(number);
}
function resetit() {//function on AC
    number=[];
    j=0;
    k=0;
    var content=findscreen()[0];
    var content1=findscreen()[1];
    content.style.height="90px";
    content.style.color="black";
    content.style.fontSize="60px";
    content1.style.height="40px";
    content1.style.fontSize="30px";
    content1.style.color="#ccc";
    content.innerHTML="";
    content1.innerHTML="";
}

function clean() {//ce function
    var content=findscreen()[0];
    var content1=findscreen()[1];
    content.style.height="90px";
    content.style.color="black";
    content.style.fontSize="60px";
    content1.style.height="40px";
    content1.style.fontSize="30px";
    content1.style.color="#ccc";
    content.innerHTML="";
    content1.innerHTML="";
}

function larrow() {//left arrow function
    var txt=findscreen()[0];
    var txt1=findscreen()[1];
    txt1.innerHTML="";
    if(k>0){
        k--;
        txt.innerHTML=number[k];
    }
    else{
        txt.innerHTML=number[0];
    }
    txt.style.height="90px";
    txt.style.color="black";
    txt.style.fontSize="60px";
    txt1.style.height="40px";
    txt1.style.fontSize="30px";
    txt1.style.color="#ccc";
}

function rarrow() {//right arrow function
    var txt=findscreen()[0];
    var txt1=findscreen()[1];
    txt1.innerHTML="";
    if(k<number.length-1){
        k++;
        txt.innerHTML=number[k];
    }
    else{
        txt.innerHTML=number[number.length-1];
    }
    txt.style.height="90px";
    txt.style.color="black";
    txt.style.fontSize="60px";
    txt1.style.height="40px";
    txt1.style.fontSize="30px";
    txt1.style.color="#ccc";
}

function log() {
    var txt=findscreen()[0];
    var txt1=findscreen()[1];
    var content=txt.innerHTML;
    txt1.innerHTML=Math.log(txt.innerHTML);
    txt.innerHTML="log("+content+")";
    number[j]=txt1.innerHTML;
    j++;
    k=j;
    txt.style.height="40px";
    txt.style.color="#ccc";
    txt.style.fontSize="30px";
    txt1.style.height="90px";
    txt1.style.fontSize="60px";
    txt1.style.color="#78c357";
}

function sin() {
    var txt=findscreen()[0];
    var txt1=findscreen()[1];
    var content=txt.innerHTML;
    txt1.innerHTML=Math.sin(txt.innerHTML);
    txt.innerHTML="sin("+content+")";
    number[j]=txt1.innerHTML;
    j++;
    k=j;
    txt.style.height="40px";
    txt.style.color="#ccc";
    txt.style.fontSize="30px";
    txt1.style.height="90px";
    txt1.style.fontSize="60px";
    txt1.style.color="#78c357";
}

function cos() {
    var txt=findscreen()[0];
    var txt1=findscreen()[1];
    var content=txt.innerHTML;
    txt1.innerHTML=Math.cos(txt.innerHTML);
    txt.innerHTML="cos("+content+")";
    number[j]=txt1.innerHTML;
    j++;
    k=j;
    txt.style.height="40px";
    txt.style.color="#ccc";
    txt.style.fontSize="30px";
    txt1.style.height="90px";
    txt1.style.fontSize="60px";
    txt1.style.color="#78c357";
}

function tan() {
    var txt=findscreen()[0];
    var txt1=findscreen()[1];
    var content=txt.innerHTML;
    txt1.innerHTML=Math.tan(txt.innerHTML);
    txt.innerHTML="tan("+content+")";
    number[j]=txt1.innerHTML;
    j++;
    k=j;
    txt.style.height="40px";
    txt.style.color="#ccc";
    txt.style.fontSize="30px";
    txt1.style.height="90px";
    txt1.style.fontSize="60px";
    txt1.style.color="#78c357";
}

function exp() {//function of e^x
    var txt=findscreen()[0];
    var txt1=findscreen()[1];
    var content=txt.innerHTML;
    txt1.innerHTML=Math.exp(txt.innerHTML);
    txt.innerHTML="e^("+content+")";
    number[j]=txt1.innerHTML;
    j++;
    k=j;
    txt.style.height="40px";
    txt.style.color="#ccc";
    txt.style.fontSize="30px";
    txt1.style.height="90px";
    txt1.style.fontSize="60px";
    txt1.style.color="#78c357";
}

function xxx() {//x^2 function
    var txt=findscreen()[0];
    var txt1=findscreen()[1];
    var content=txt.innerHTML;
    txt1.innerHTML=txt.innerHTML*txt.innerHTML;
    txt.innerHTML="("+content+")^2";
    number[j]=txt1.innerHTML;
    j++;
    k=j;
    txt.style.height="40px";
    txt.style.color="#ccc";
    txt.style.fontSize="30px";
    txt1.style.height="90px";
    txt1.style.fontSize="60px";
    txt1.style.color="#78c357";
}

function xxxx(){//x! function
    var txt=findscreen()[0];
    var txt1=findscreen()[1];
    var content=txt.innerHTML;
    var numbers=parseInt(txt.innerHTML);
    var result=1;
    while(numbers>1){
        result=result*numbers*(--numbers);
        numbers--;
    }
    txt.innerHTML=content+"!";
    number[j]=result;
    txt1.innerHTML=result;
    j++;
    k=j;
    txt.style.height="40px";
    txt.style.color="#ccc";
    txt.style.fontSize="30px";
    txt1.style.height="90px";
    txt1.style.fontSize="60px";
    txt1.style.color="#78c357";
}

function log10() {//function of ln
    var txt=findscreen()[0];
    var txt1=findscreen()[1];
    var content=txt.innerHTML;
    txt1.innerHTML=Math.log(txt.innerHTML)/Math.log(10);
    txt.innerHTML="ln("+content+")";
    number[j]=txt1.innerHTML;
    j++;
    k=j;
    txt.style.height="40px";
    txt.style.color="#ccc";
    txt.style.fontSize="30px";
    txt1.style.height="90px";
    txt1.style.fontSize="60px";
    txt1.style.color="#78c357";
}

function sqrt() {
    var txt=findscreen()[0];
    var txt1=findscreen()[1];
    var content=txt.innerHTML;
    txt1.innerHTML=Math.sqrt(txt.innerHTML);
    txt.innerHTML="√("+content+")";
    number[j]=txt1.innerHTML;
    j++;
    k=j;
    txt.style.height="40px";
    txt.style.color="#ccc";
    txt.style.fontSize="30px";
    txt1.style.height="90px";
    txt1.style.fontSize="60px";
    txt1.style.color="#78c357";
}

function twox(){//function of 2^x
    var txt=findscreen()[0];
    var txt1=findscreen()[1];
    var content=txt.innerHTML;
    var num=txt.innerHTML;
    var count=0;
    var numbers=1;
    while(count<num){
        numbers*=2;
        count++;
    }
    txt1.innerHTML=numbers;
    txt.innerHTML="2^("+content+")";
    number[j]=numbers;
    j++;
    k=j;
    txt.style.height="40px";
    txt.style.color="#ccc";
    txt.style.fontSize="30px";
    txt1.style.height="90px";
    txt1.style.fontSize="60px";
    txt1.style.color="#78c357";
}