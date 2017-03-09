var seat=[[true,true,true,true,true,true],[true,true,true,true,true,true],[true,true,true,true,true,true],[true,true,true,true,true,true],[true,true,true,true,true,true],[true,true,true,true,true,true],[true,true,true,true,true,true],[true,true,true,true,true,true],[true,true,true,true,true,true],[true,true,true,true,true,true],[true,true,true,true,true,true],[true,true,true,true,true,true]];
var judge=/[^\D*\[\]]/g;//find out numbers in id
var result=[];//show the result
function select(name) {
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
}

function submitresult(){
    var msg="You have selected: ";
    var rows=result.length;
    for(var i=0;i<rows;i++){
            if(i==rows-1){
                msg+=result[i][0]+result[i][1]+'.';
            }
            else {
                msg += result[i][0] + result[i][1] + ', ';
            }
    }
    alert(msg);
}

function resetit(){
    result=[];
    var rows=seat.length;
    for(var i=0;i<rows;i++){
        var cols=seat[i].length;
        for(var j=0;j<cols;j++){
            if(seat[i][j]==false){
                seat[i][j]=true;
                document.getElementById("seat["+i+"]["+j+"]").setAttribute('src','available.png');
            }
        }
    }

}