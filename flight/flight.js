var seat=[[true,true,true,true,true,true],[true,true,true,true,true,true],[true,true,true,true,true,true],[true,true,true,true,true,true],[true,true,true,true,true,true],[true,true,true,true,true,true],[true,true,true,true,true,true],[true,true,true,true,true,true],[true,true,true,true,true,true],[true,true,true,true,true,true],[true,true,true,true,true,true],[true,true,true,true,true,true]];
var judge=/[^\D]\d*/g;//find out numbers in id
var result=[];//show the result
var result1=[];//result show on alert
var compare='';//compare if it is equal to nums[1]
var wide=screen.width;
window.onload=function () {//hide "window" in phone version
    if(wide<768){
        var element=document.getElementsByClassName('none');
        element[0].innerHTML='';
        element[1].innerHTML="";
    }
};

function select(name) {//select seat function
    var judgement=document.getElementById(name).src.match(/available/g)==null;
    var judgement1=document.getElementById(name).src.match(/unavailable/g)==null;
    if(judgement==true) {
        var ref = document.getElementById(name);
        ref.setAttribute("src", "available.png");
        var nums = name.match(judge);
        seat[nums[0]][nums[1]] = true;
        var nums0=parseInt(nums[0])+11;
        var nums1=parseInt(nums[1]);
        for(var i=0;i<result.length;i++){
            if(result[i][0]==nums0){
                switch(result[i][1]){
                    case "A":
                        compare=0;
                        break;
                    case "B":
                        compare=1;
                        break;
                    case "C":
                        compare=2;
                        break;
                    case "J":
                        compare=3;
                        break;
                    case "K":
                        compare=4;
                        break;
                    case "L":
                        compare=5;
                        break;
                    default:
                        compare=false;
                }
                if(compare==nums1){
                    result.splice(i,1);
                }
            }
        }
        for(var i=0;i<result1.length;i++){
            if(result1[i][0]==nums0){
                switch(result1[i][1]){
                    case "A":
                        compare=0;
                        break;
                    case "B":
                        compare=1;
                        break;
                    case "C":
                        compare=2;
                        break;
                    case "J":
                        compare=3;
                        break;
                    case "K":
                        compare=4;
                        break;
                    case "L":
                        compare=5;
                        break;
                    default:
                        compare=false;
                }
                if(compare==nums1){
                    result1.splice(i,1);
                }
            }
        }
    }
    else if(judgement1==true){
        var ref = document.getElementById(name);
        ref.setAttribute("src", "selected.png");
        var nums = name.match(judge);
        seat[nums[0]][nums[1]] = false;
        var j = parseInt(nums[1]);
        var ver = '';
        switch (j) {
            case 0:
                ver = "A";
                break;
            case 1:
                ver = 'B';
                break;
            case 2:
                ver = 'C';
                break;
            case 3:
                ver = 'J';
                break;
            case 4:
                ver = 'K';
                break;
            case 5:
                ver = "L";
                break;
            default:
                ver = false;
        }
        result.push([parseInt(nums[0]) + 11, ver]);
        result1.push([parseInt(nums[0]) + 11, ver]);
    }
    else{

    }
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