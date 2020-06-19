function dis(a, b) {
    return Math.abs(a - b);
}
var a = parseInt(prompt("En què piso està el elevador A?"));
var b = parseInt(prompt("En què piso està el elevador B?"));
var g = parseInt(prompt("Gamita, en què piso te encuentras?"));
var disAG = dis(a,g);
var disBG = dis(b,g);
if(disAG > disBG){
    alert("Gamita, el elevador B està màs cerca");
}
else if(disBG > disAG){
    alert("Gamita, el elevador A està ,màs cerca");
}
else{
    alert("Ambos elevadores estàn a la misma distancia");
}