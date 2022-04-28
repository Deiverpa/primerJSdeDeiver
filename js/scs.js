// const tasaDeCambioUSDBTC = 40139
// const tasaDeCambioBTCUSD = 0.000025

// let mercado = prompt("BTC o USD");
// if ((mercado == "USD")) {
// let cantidadUSD = prompt("Ingrese Cantidad USD")
// const cryptoExchange = (tasaDeCambioUSDBTC, cantidadUSD) =>
// tasaDeCambioUSDBTC * cantidadUSD
// alert("USD a BTC =" + " " +(cryptoExchange(tasaDeCambioBTCUSD, cantidadUSD,)));
// } else if((mercado == "BTC")) {
//     let cantidadBTC = prompt("Ingrese Cantidad BTC")
//     const cryptoExchange = (tasaDeCambioBTCUSD, cantidadBTC) =>
//     tasaDeCambioUSDBTC * cantidadBTC
//     alert("BTC a USD =" + " " + (cryptoExchange(tasaDeCambioBTCUSD, cantidadBTC,)));
//     } else {
//         (prompt("recargue la pagina y digite nuevamente la moneda"))
//     }

// class asset{
//     constructor(nombre, cantidad){
//         this.nombre  = nombre;
//         this.cantidad  = cantidad;
//     }
//     compra(){
//         console.log("Tienes: " + this.cantidad + " " + this.nombre );
//     }
// }
// const bitcoin = new asset("BITCOIN", prompt("¿cuántos BTC deseas comprar?") );
// const usd = new asset("UNITED STATES DOLAR", prompt("¿cuántos USD deseas comprar?"))
// bitcoin.compra();
// usd.compra();

// const cartera = [bitcoin]
// console.log(cartera)
// cartera.push(usd)

// let ventaUSD = 0;
// for (const cantidad of cartera) {
//     console.log(cantidad);
//     console.log("usted tiene " + cantidad.cantidad );
//     let venta = prompt("¿quieres vender desde tu cartera?")
//     if(venta == "si"){ 
//         const ventaWallet = prompt("¿qué moneda quieres vender?")
//         if(ventaWallet == "USD"){ 
//             let ventaUSD = prompt("¿Cuántos USD quieres vender?")
//             alert ("has vendido " + ventaUSD + " unidades USD")
//         } else if(ventaWallet == "BTC") {
//             let ventaBTC = prompt("¿Cuántos BTC quieres vender?")
//             alert ("has vendido " + ventaBTC + " unidades BTC")
//         }        
//     } else {
//         console.log("nada")
//     }
//     while (ventaUSD > usd) {
//         alert("error")
//     }
// }

// FIN DESAFIO ANTERIOR

// INICIO DESAFIO DOM

let buyUSD = document.getElementById("buyButtonUSD")
buyUSD.onclick = () =>{
    let ventaUSD = prompt("How many USD do you want to buy?")
alert ("you bought  " + ventaUSD + " USD Units")
}

let buyBTC = document.getElementById("buyButtonBTC")
buyBTC.onclick = () =>{
    let ventaUSD = prompt("How many BTC do you want to buy?")
alert ("you bought " + ventaUSD + " BTC Units")
}

let sellUSD = document.getElementById("sellButtonUSD")
sellUSD.onclick = () =>{
    let compraUSD = prompt("How many USD do you want to sell?")
    if(compraUSD <=0){
        alert ("please sell more than 0 units")
        }
        else {
            alert ("you sold " + compraUSD + " USD Units")
        }
}

let sellBTC = document.getElementById("sellButtonBTC")
sellBTC.onclick = () =>{
    let compraBTC = prompt("How many BTC do you want to sell?")
    if(compraBTC <=0){
        alert ("please sell more than 0 units")
        }// }else if (compraBTC = null){
        //     alert ("please enter a number")
        // }
        // else if (compraBTC = NaN){
        //     alert ("please enter a number")
        // }
        else {
            alert ("you sold " + compraBTC + " BTC Units")
        }
}

let permision = prompt("are you at least 18 years old?")
if(permision == "yes"){
let parrafo = document.createElement("p");
parrafo.innerHTML = "<h2>Welcome to CryptoDev</h2>"; 
document.body.append(parrafo);} else{
    console.log("gg")
}