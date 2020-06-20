let number = parseInt(prompt("Bienvenido, si es amable por favor ingrese la medida del lado del ajedrez."));
let body = document.getElementsByTagName("body");
let table = document.createElement("table");
body[0].appendChild(table);
for(let n=1;n<=number;n++){
    let tr = document.createElement("tr");
    table.appendChild(tr);
    for(let i=1;i<=number;i++){
        let total = n+i;
        let td=document.createElement("td");
        if(total%2==1){
            td.classList.add("color1");
            tr.appendChild(td);
        }
        else{
            td.classList.add("color2");
            tr.appendChild(td);            
        }
    }
}