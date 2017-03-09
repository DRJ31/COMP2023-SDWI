var seat=[[true,true,true,true,true,true],[true,true,true,true,true,true],[true,true,true,true,true,true],[true,true,true,true,true,true],[true,true,true,true,true,true],[true,true,true,true,true,true],[true,true,true,true,true,true],[true,true,true,true,true,true],[true,true,true,true,true,true],[true,true,true,true,true,true],[true,true,true,true,true,true],[true,true,true,true,true,true]];
var judge=/[^\D]\d*/g;//find out numbers in id
var result=[];//show the result
var result1=[];//result show on alert
var wide=screen.width;
window.onload=function () {
    if(wide<768){
        var element=document.getElementsByClassName('none');
        element[0].innerHTML='';
        element[1].innerHTML="";
    }
}

function select(name) {//select seat function
    var ref=document.getElementById(name);
    ref.setAttribute("src","selected.png");
    var nums=name.match(judge);
    seat[nums[0]][nums[1]]=false;
    var j=parseInt(nums[1]);
    var ver='';
    switch (j){
        case 0:
            ver="A";
            break;
        case 1:
            ver='B';
            break;
        case 2:
            ver='C';
            break;
        case 3:
            ver='J';
            break;
        case 4:
            ver='K';
            break;
        case 5:
            ver="L";
            break;
        default:
            ver=false;
    }
    result.push([parseInt(nums[0])+11,ver]);
    result1.push([parseInt(nums[0])+11,ver]);
}

function submitresult(){//submit function
    var msg="You have selected: ";
    var rows=seat.length;
    for(var i=0;i<rows;i++){
        var cols=seat[i].length;
        for(var j=0;j<cols;j++){
            if(seat[i][j]==false){
                document.getElementById("seat["+i+"]["+j+"]").setAttribute('src','unavailable.png');
            }
        }
    }
    var rows1=result1.length;
    for(var k=0;k<rows1;k++){
            if(k==rows1-1){
                msg+=result1[k][0]+result1[k][1]+'.';
            }
            else {
                msg += result1[k][0] + result1[k][1] + ', ';
            }
    }
    alert(msg);
    result1=[];
}

function resetit(){//reset function
    result1=[];
    var rows=seat.length;
    for(var i=0;i<rows;i++){
        var cols=seat[i].length;
        for(var j=0;j<cols;j++){
            var judge1=document.getElementById("seat["+i+"]["+j+"]").src.match(/selected/g)!=null;
            if(judge1==true){
                seat[i][j]=true;
                document.getElementById("seat["+i+"]["+j+"]").setAttribute('src','available.png');
            }
        }
    }

}