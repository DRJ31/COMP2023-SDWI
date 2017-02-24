var alldiv=document.getElementsByTagName("div");//get all div elements of the document
var number=[];//array about all your results
var j=0;//to count array number
window.onload=function() {//change height on screen of phone version
    var width=screen.width;
    var high = findscreen().style;
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
    var high = findscreen().style;
    if (width < 768) {
        var tall=screen.height-450;
        high.height=tall+"px";
    }
    else{
        high.height="150px";
    }
}
function findscreen(){//get elements of calculator screen
    for(var i=0;i<alldiv.length;i++){
        if(alldiv[i].id=="screen"){
            var content1=alldiv[i];
        }
    }
    return content1;
}

function main(element) {//function of buttons
    var txt=findscreen();
    txt.innerHTML+=element;
}

function equal() {//calculate function
    var result=findscreen();
    var judge=(result.innerHTML!="");
    var result1=eval(result.innerHTML);
    result.innerHTML=result1;
    if(judge==true) {
        number[j] = result.innerHTML;
        j++;
    }
    console.log(judge);
}
function test() {//use to test console
    console.log(number);
    console.log(j);
}
function resetit() {//function on AC
    number=[];
    j=0;
    var content=findscreen();
    content.innerHTML="";
}

function clean() {//ce function
    var content=findscreen();
    content.innerHTML="";
}

function larrow() {//left arrow function
    var txt=findscreen();
    if(j==number.length){
        j-=2;
        txt.innerHTML=number[j];
    }
    else if(j>0){
        j--;
        txt.innerHTML=number[j];
    }
    else{
        txt.innerHTML=number[0];
    }
}

function rarrow() {//right arrow function
    var txt=findscreen();
    if(j<number.length-1){
        j++;
        txt.innerHTML=number[j];
    }
    else{
        txt.innerHTML=number[number.length-1];
    }
}

function log() {
    var txt=findscreen();
    txt.innerHTML=Math.log(txt.innerHTML);
    number[j]=txt.innerHTML;
    j++;
}

function sin() {
    var txt=findscreen();
    txt.innerHTML=Math.sin(txt.innerHTML);
    number[j]=txt.innerHTML;
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