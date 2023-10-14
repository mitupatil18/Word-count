let textbox = document.getElementById("textbox");
textbox.addEventListener('input',function(){
    var text = this.value;
    let char = text.length ;
    let num = document.getElementById("char").innerHTML = char;
    text = text.trim();
    let words = text.split(" ");
    let cleanlist = words.filter(function(elm){
        return elm != "" ;
    })
    let num1 = document.getElementById("word").innerHTML = cleanlist.length;
});
