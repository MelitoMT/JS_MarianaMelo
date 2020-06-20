let num=parseInt(prompt("Ingrese un numero mayor a 1"));
let array = [];
let respuesta = [];
if(num>1){
    for(let i=2;i<=num;i++){
        array.push(i);
    }
    let array2 = array.filter((x) => num % x === 0);
    for(let f=0; f<array2.length; f++){
        let j=0;
        for(let i=2; i<array2[f]; i++){
            if(array2[f]%i==0){
                j++;
            }
        }
        if(j==0){
        respuesta.push(array2[f]);
        }
    }
    console.log(respuesta);
}
else{
    alert("Ese número es menor a 1):")
}