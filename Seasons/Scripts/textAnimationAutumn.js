var i=0,text;
text = "AUTUMN"

function typing(){
    if(i<text.length){
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing,1000);
    }
}
typing();