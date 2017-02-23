var alldiv=document.getElementsByTagName("div");//get all div elements of the document
var number=[];//array about your inputed number
var j=0;//to count array number
var sym=[];//array about your smybol
var k=0;//to count symbol array
function trinkle(){//maybe won't be used
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
function findscreen(){//get elements of calculator screen
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

function calculate(symbol,real){
    var txt=findscreen();
    var judge=judgesym();
    if(judge==false){
        txt.innerHTML+=symbol;
        sym[k]=real;
        k++;
        j++;
    }
}
function percentwrite() {
    var txt=findscreen();
    txt.innerHTML+="%";
    number[j]=number[j]*0.01;
}

function cal(){
    var content="";
    for(var i=0;i<number.length;i++){
        if(sym[i]==undefined){
            content=content+number[i];
        }
        else {
            content = content + number[i] + sym[i];
        }
    }
    console.log(content);
    return content;
}
function equal() {
    var result=findscreen();
    var per=cal();
    var result1=eval(per);
    result.innerHTML=result1;
    console.log(number);
    console.log(sym);
}
function test() {
    console.log(number);
}
function resetit() {
    number=[];
    sym=[];
    k=0;
    j=0;
    var content=findscreen();
    content.innerHTML="";
}

function percent() {
    var txt=findscreen();
    var str=txt.innerHTML.split("");
    for(var i=0;i<txt.innerHTML.length;i++){
        if(txt.innerHTML.substring(i,i+1)=="%"){
            str.splice(i,1,"");
        }
    }
    str=str.join("");
    return str;
}
