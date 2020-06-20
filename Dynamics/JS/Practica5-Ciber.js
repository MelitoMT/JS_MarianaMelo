let ciberReg = /^<script>(\w{0,}(equisde)){5,}\w{0,}<\/script>$/gm
let friendlyReg = /^(((\w{0,}(equisde)){5,}\w{0,})|(<script>\w{0,}<\/script>))$/gm
let str = prompt("Hola");
let count = str.match(ciberReg);
if(count===null){
    count = str.match(friendlyReg);
    if(count != null){
        alert("¿Bob? ¿Wade?")
    }
}
else{
    alert("Oso oso mentiroso, vete lejos antes de que te lanze mis calcetines olor a queso.")
}
