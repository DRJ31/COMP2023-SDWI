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
    txt.innerHTML+=element;
}

function equal() {//calculate function
    var result=findscreen()[0];
    var result2=findscreen()[1];
    var judge=(result.innerHTML!="");
    var result1=eval(result.innerHTML);
    result2.innerHTML=result1;
    if(judge==true) {
        number[j] = result2.innerHTML;
        j++;
        k=j;
    }
    console.log(number);
}
function test() {//use to test console
    var buttons=document.getElementById("minus");
    console.log(buttons);
    //console.log(j);
}
function resetit() {//function on AC
    number=[];
    j=0;
    k=0;
    var content=findscreen()[0];
    var content1=findscreen()[1];
    content.innerHTML="";
    content1.innerHTML="";
}

function clean() {//ce function
    var content=findscreen()[0];
    var content1=findscreen()[1];
    content.innerHTML="";
    content1.innerHTML="";
}

function larrow() {//left arrow function
    var txt=findscreen()[0];
    var txt1=findscreen()[1];
    txt1.innerHTML="";
    if(k==number.length&&k>1){
        k-=2;
        txt.innerHTML=number[k];
    }
    else if(j>0){
        k--;
        txt.innerHTML=number[k];
    }
    else{
        txt.innerHTML=number[0];
    }
    console.log(k);
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
}

function sin() {
    var txt=findscreen()[0];
    var txt1=findscreen()[1];
    var content=txt.innerHTML;
    txt.innerHTML=Math.sin(txt.innerHTML);
    txt.innerHTML="sin("+content+")";
    number[j]=txt1.innerHTML;
    j++;
}

function cos() {
    var txt=findscreen();
    txt.innerHTML=Math.cos(txt.innerHTML);
    number[j]=txt.innerHTML;
    j++;
}

function tan() {
    var txt=findscreen();
    txt.innerHTML=Math.tan(txt.innerHTML);
    number[j]=txt.innerHTML;
    j++;
}

function exp() {//function of e^x
    var txt=findscreen();
    txt.innerHTML=Math.exp(txt.innerHTML);
    number[j]=txt.innerHTML;
    j++;
}

function xxx() {//x^2 function
    var txt=findscreen();
    txt.innerHTML=txt.innerHTML*txt.innerHTML;
    number[j]=txt.innerHTML;
    j++;
}

function xxxx(){//x! function
    var txt=findscreen();
    var numbers=parseInt(txt.innerHTML);
    var result=1;
    while(numbers>1){
        result=result*numbers*(--numbers);
        numbers--;
    }
    number[j]=result;
    txt.innerHTML=result;
    j++;
}

function log10() {//function of ln
    var txt=findscreen();
    txt.innerHTML=Math.log(txt.innerHTML)/Math.log(10);
    number[j]=txt.innerHTML;
    j++;
}

function sqrt() {
    var txt=findscreen();
    txt.innerHTML=Math.sqrt(txt.innerHTML);
    number[j]=txt.innerHTML;
    j++
}

function twox(){//function of 2^x
    var txt=findscreen();
    var num=txt.innerHTML;
    var count=0;
    var numbers=1;
    while(count<num){
        numbers*=2;
        count++;
    }
    txt.innerHTML=numbers;
    number[j]=numbers;
    j++;
}