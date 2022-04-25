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

class asset{
    constructor(nombre, cantidad){
        this.nombre  = nombre;
        this.cantidad  = cantidad;
    }
    compra(){
        console.log("Tienes: " + this.cantidad + " " + this.nombre );
    }
}
const bitcoin = new asset("BITCOIN", prompt("¿cuántos BTC deseas comprar?") );
const usd = new asset("UNITED STATES DOLAR", prompt("¿cuántos USD deseas comprar?"))
bitcoin.compra();
usd.compra();

const cartera = [bitcoin]
console.log(cartera)
cartera.push(usd)

for (const cantidad of cartera) {
    console.log(cantidad);
    console.log("usted tiene " + cantidad.cantidad );
    let venta = prompt("¿quieres vender desde tu cartera?")
    if(venta == "si"){ 
        const ventaWallet = prompt("¿qué moneda quieres vender?")
        if(ventaWallet == "USD"){ 
            const ventaUSD = prompt("¿Cuántos USD quieres vender?")
        } else if(ventaWallet == "BTC") {
            const ventaBTC = prompt("¿Cuántos BTC quieres vender?")
        }        
    } else {
        console.log("nada")
    }
}

// const ventaWallet = (){