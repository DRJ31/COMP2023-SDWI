function showdiv(boxname) {//show wechat code
        var element1=document.getElementById("blackbackground").style;
        var element2=document.getElementById(boxname).style;
        element1.display="block";
        element2.display="block";
        document.body.style.overflow="hidden";
}

function hidediv() {//hide wechat code
        var element1=document.getElementById("blackbackground").style;
        var element2=document.getElementById("wechatcontent").style;
        element1.display="none";
        element2.display="none";
        document.body.style.overflow="auto";
}

function favpage(){//go to my favorite webpage
        window.open("http://ow.blizzard.cn");
}