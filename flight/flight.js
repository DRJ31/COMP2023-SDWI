var seat = [[true, true, true, true, true, true], [true, true, true, true, true, true], [true, true, true, true, true, true], [true, true, true, true, true, true], [true, true, true, true, true, true], [true, true, true, true, true, true], [true, true, true, true, true, true], [true, true, true, true, true, true], [true, true, true, true, true, true], [true, true, true, true, true, true], [true, true, true, true, true, true], [true, true, true, true, true, true]];
var judge = /[^\D]\d*/g;//find out numbers in id
var result = [];//result show on alert
var wide = screen.width;
window.onload = function () {//hide "window" in phone version
    if (wide < 768) {
        var element = document.getElementsByClassName('none');
        element[0].innerHTML = '';
        element[1].innerHTML = "";
    }
};
function select(name) {//select seat function
    var judgement = document.getElementById(name).src.match(/available/g) == null;//judge if the seat is selected but not confirmed
    var judgement1 = document.getElementById(name).src.match(/unavailable/g) == null;//judge if the seat is not selected
    var nums = name.match(judge);//find numbers in id
    var ref = document.getElementById(name);
    if (judgement == true) {
        ref.setAttribute("src", "available.png");
        seat[nums[0]][nums[1]] = true;
    }
    else if (judgement1 == true) {
        ref.setAttribute("src", "selected.png");
        seat[nums[0]][nums[1]] = false;
    }
}
function submitresult() {//submit function
        var msg = "You have selected: ";
        var rows = seat.length;
        for (var i = 0; i < rows; i++) {
            var cols = seat[i].length;
            for (var j = 0; j < cols; j++) {
                var judgement2 = document.getElementById("seat[" + i + "][" + j + "]").src.match(/selected/g) == null;//judge the src
                if (seat[i][j] == false && judgement2 == false) {
                    document.getElementById("seat[" + i + "][" + j + "]").setAttribute('src', 'unavailable.png');
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
                    result.push([i + 11, ver]);
                }
            }
        }
        var rows1 = result.length;
        if(rows1==0){
            alert("Please select at least one seat!");
        }
        else {
            for (var k = 0; k < rows1; k++) {
                if (k == rows1 - 1) {
                    msg += result[k][0] + result[k][1] + '.';
                }
                else {
                    msg += result[k][0] + result[k][1] + ', ';
                }
            }
            alert(msg);
            result = [];
        }
}