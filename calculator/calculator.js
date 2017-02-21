var alldiv=document.getElementsByTagName("div");
var number=[];
var j=0;
function trinkle(){
    for(var i=0;i<alldiv.length;i++){
        if(alldiv[i].id=="row"){
            var row=alldiv[i].style;
        }
    }
    if(row.visibility=="hidden"){
        row.visibility="visible";
    }
    else{
        row.visibility="hidden";
    }
}
function findscreen(){
    for(var i=0;i<alldiv.length;i++){
        if(alldiv[i].id=="screen"){
            var content1=alldiv[i];
        }
    }
    return content1;
}
function  judgesym() {
    var content1=findscreen();
    var txt=content1.innerHTML;
    var long=txt.length;
    var judge=long-txt.lastIndexOf("+")==1||long-txt.lastIndexOf("-")==1||long-txt.lastIndexOf("x")==1||long-txt.lastIndexOf("÷")==1;
    return judge;
}
function mainnumber(num) {
    var txt=findscreen();
    if(number.length==j){
        number[j]=num;
    }
    else {
        number[j] += num;
    }
    if(txt.innerHTML.length==0){
        txt.innerHTML=num;
    }
    else{
        txt.innerHTML+=num;
    }
}

function calculate(symbol){
    var txt=findscreen();
    var judge=judgesym();
    if(judge==false){
        txt.innerHTML+=symbol;
        j++;
    }
}

function equal() {
    var result=findscreen();
    var result1=eval(result.innerHTML);
    result.innerHTML=result1;
    console.log(number);
}
function test() {
    //console.log(eval(Math.);
}
function resetit() {
    number=[];
    j=0;
    var content=findscreen();
    content.innerHTML="";
}