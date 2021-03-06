// Libreria https://github.com/infodp/crypto_cotizacion_vanilla_js

let endpoint = 'https://api.binance.com/api/v3/ticker/price'
fetch(endpoint)
    .then( respuesta => respuesta.json() )
    .then( datos => mostrarData(datos))
    .catch( e => console.log(e))

// puedo cambiar el 50 del for por data.lenght para que me traiga todos los que esten disponibles
const mostrarData = (data)=>{
    console.log(data)
    let body = ''
    for (let i=0; i < 50; i++) {
        body += `<tr><td>${data[i].symbol}</td><td>${Number.parseFloat(data[i].price).toFixed(3)}</td></tr>`
    }
    document.getElementById('tdata').innerHTML = body
}    