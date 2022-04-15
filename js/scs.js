const tasaDeCambioUSDBTC = 40139
const tasaDeCambioBTCUSD = 0.000025

let mercado = prompt("BTC o USD");
if ((mercado == "USD")) {
let cantidadUSD = prompt("Ingrese Cantidad USD")
const cryptoExchange = (tasaDeCambioUSDBTC, cantidadUSD) =>
tasaDeCambioUSDBTC * cantidadUSD
alert("USD a BTC =" + " " +(cryptoExchange(tasaDeCambioBTCUSD, cantidadUSD,)));
} else if((mercado == "BTC")) {
    let cantidadBTC = prompt("Ingrese Cantidad BTC")
    const cryptoExchange = (tasaDeCambioBTCUSD, cantidadBTC) =>
    tasaDeCambioUSDBTC * cantidadBTC
    alert("BTC a USD =" + " " + (cryptoExchange(tasaDeCambioBTCUSD, cantidadBTC,)));
    } else {
        (prompt("recargue la pagina y digite nuevamente la moneda"))
    }
