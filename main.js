var images=["https://cdn1.vectorstock.com/i/1000x1000/58/15/flat-cartoon-mother-and-daughter-hugging-vector-17625815.jpg","https://i.postimg.cc/5ymDKL83/bro.jpg","https://i.postimg.cc/wjMnFtMX/father.jpg"];
var names=["Pratibha Garg","Advik Garg","Vikash Garg"];
var i=0;
function next(){
i++;
var s=2;
if (i>s){
    i=0;
}
var imagename=images[i];
var membername=names[i];
document.getElementById("img1").src=imagename;
document.getElementById("familyimg1").innerHTML=membername;
}