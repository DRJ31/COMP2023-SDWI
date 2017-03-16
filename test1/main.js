var years=[];//array of all years
    for(var i=0;i<10;i++){
        years[i]=[];
        for(var j=0;j<10;j++){
            var thisyear=2008+i-108+j*12;
            years[i][j]=thisyear;
        }
    }
    for(var k=10;k<12;k++){
        years[k]=[];
        for(var l=0;l<10;l++){
            var thisyear=2006+k-10-108+l*12;
            years[k][l]=thisyear;
        }
    }
//get years of all
function listyear(arrnum) {//list year in information page
    var content="";
    for(var i=0;i<years[arrnum].length;i++){
        content+="<li>"+years[arrnum][i]+"</li>";
    }
    return content;
}

function srcimg(num){//find which img to src in information page
    var imgsrc;
    switch (num){
        case 0:
            imgsrc="img/zodiac-rat.png";
            break;
        case 1:
            imgsrc="img/zodiac-ox.png";
            break;
        case 2:
            imgsrc="img/zodiac-tiger.png";
            break;
        case 3:
            imgsrc="img/zodiac-rabbit.png";
            break;
        case 4:
            imgsrc="img/zodiac-dragon.png";
            break;
        case 5:
            imgsrc="img/zodiac-snake.png";
            break;
        case 6:
            imgsrc="img/zodiac-horse.png";
            break;
        case 7:
            imgsrc="img/zodiac-sheep.png";
            break;
        case 8:
            imgsrc="img/zodiac-monkey.png";
            break;
        case 9:
            imgsrc="img/zodiac-rooster.png";
            break;
        case 10:
            imgsrc="img/zodiac-dog.png";
            break;
        case 11:
            imgsrc="img/zodiac-pig.png";
            break;
    }
    return imgsrc;
}

function clickfun(num){//click img function
    var src=srcimg(num);
    var list=listyear(num);
    var content='<img src='+src+' alt=""><ul>'+list+'</ul>';
    document.getElementById("info").innerHTML=content;
    document.getElementById("infocard").style.display="block";
    document.getElementById("infocardbg").style.zIndex="8";
    document.getElementById("infocardbg").style.backgroundColor="rgba(0,0,0,0.8)";
}

function submitfun(){//submit button function
    var number=document.getElementById("text").value;
    for(var i=0;i<years.length;i++){
        for(var j=0;j<years[i].length;j++){
            if(years[i][j]==number){
                var num=i;
            }
        }
    }
    clickfun(num);
}

function goback(){//arrow button function
    document.getElementById("infocard").style.display="none";
    document.getElementById("infocardbg").style.zIndex="-1";
    document.getElementById("infocardbg").style.backgroundColor="rgba(0,0,0,0)";
}

function changecolor(num){//change border color of textarea
    var element=document.getElementById("text");
    if(num==1){
        element.style.borderBottom="1px solid rgb(33,150,243)";
    }
    else{
        element.style.borderBottom="1px solid #bbb";
    }
}