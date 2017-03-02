document.onkeydown=function(event){
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if(((e && e.keyCode==48)&&!e.shiftKey)||(e && e.keyCode==96)){
        main('0');
    }
    if(e && e.keyCode==48&&e.shiftKey){
        main(')');
    }

    if(((e && e.keyCode==57)&&!e.shiftKey)||(e && e.keyCode==105)){ // number 0
        main('9');
    }
    else if(e && e.keyCode==57&&e.shiftKey){
        main('(');
    }
    if(((e && e.keyCode==56)&&!e.shiftKey)||(e && e.keyCode==104)){ // number 0
        main('8');
    }
    else if((e && e.keyCode==56&&e.shiftKey)||(e&&e.keyCode==106)){
        main('*');
    }
    if((e && e.keyCode==187&&e.shiftKey)||(e && e.keyCode==107)){
        main('+');
    }
    if((e && e.keyCode==109)||(e && e.keyCode==189)){
        main('-');
    }
    if((e && e.keyCode==108)||(e && e.keyCode==13)){
        equal();
    }
    if((e && e.keyCode==191)||(e && e.keyCode==111)){
        main('/');
    }
    if((e && e.keyCode==110)||(e && e.keyCode==190)){ // number 0
        main('.');
    }
    if(e && e.keyCode==37){ // number 0
        larrow();
    }
    if(e && e.keyCode==39){ // number 0
        rarrow();
    }
    if(e && e.keyCode==8){ // number 0
        backspace();
    }
    if((e && e.keyCode==49)||(e && e.keyCode==97)){ // number 0
        main('1');
    }
    if((e && e.keyCode==50)||(e && e.keyCode==98)){ // number 0
        main('2');36
    }
    if((e && e.keyCode==51)||(e && e.keyCode==99)){ // number 0
        main('3');
    }
    if((e && e.keyCode==52)||(e && e.keyCode==100)){ // number 0
        main('4');
    }
    if((e && e.keyCode==53)||(e && e.keyCode==101)){ // number 0
        main('5');
    }
    if((e && e.keyCode==54)||(e && e.keyCode==102)){ // number 0
        main('6');
    }
    if((e && e.keyCode==55)||(e && e.keyCode==103)){ // number 0
        main('7');
    }


};