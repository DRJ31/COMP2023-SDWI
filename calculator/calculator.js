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

function mainnumber(num) {
    for(var i=0;i<alldiv.length;i++){
        if(alldiv[i].id=="screen"){
            var screen=alldiv[i];
        }
    }
    if(number.length==0){
        number[j]=num;
    }
    else {
        number[j] += num;
    }

    //console.log(number[j]);
}

function calculate(symbol){
    for(var i=0;i<alldiv.length;i++){
        if(alldiv[i].id=="screen"){
            var screen=alldiv[i];
        }
    }
    screen.innerHTML=number[j]+symbol;
}