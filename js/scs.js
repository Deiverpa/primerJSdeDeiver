// const tasaDeCambioUSDBTC = 40139
// const tasaDeCambioBTCUSD = 0.000025

// let mercado = prompt("¿vas a comprar BTC o USD? Digita USD o BTC");
// if ((mercado == "USD")){
// let cantidadUSD = prompt("Ingrese Cantidad de USD a comprar")
// const cryptoExchange = (tasaDeCambioUSDBTC, cantidadUSD) => tasaDeCambioUSDBTC * cantidadUSD
// alert("USD a BTC =" + " " +(cryptoExchange(tasaDeCambioBTCUSD, cantidadUSD,)));
// } else if((mercado == "BTC")) {
//     let cantidadBTC = prompt("Ingrese Cantidad BTC a comprar")
//     const cryptoExchange = (tasaDeCambioBTCUSD, cantidadBTC) => tasaDeCambioUSDBTC * cantidadBTC
//     alert("BTC a USD =" + " " + (cryptoExchange(tasaDeCambioBTCUSD, cantidadBTC,)));
//     } else {
//         (prompt("recargue la pagina y digite nuevamente la moneda"))
//     }

/*objetos*/


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
console.log(cartera.length);

for (const cantidad of cartera) {
    console.log(cantidad);
    alert("usted tiene " + cartera);
}
