function calculate(){
    var p=document.getElementById("result").value;
    var q=eval(p);
    document.getElementById("result").value=q;
}
function clearR(){
    document.getElementById("result").value = "";
}
function display(value){
    document.getElementById("result").value+=value;
}