let usernameID = "";
const signIn = document.getElementById("sign-in-up")
signIn.onclick = () =>{
usernameID = prompt("Enter your username")
console.log("your username is " + usernameID)
sessionStorage.setItem("saveusername",usernameID)
}

let buyUSD = document.getElementById("buyButtonUSD")
buyUSD.onclick = () =>{
    let compraUSD = prompt("How many USD do you want to buy?")
    if(compraUSD <=0){
        alert ("please buy more than 0 units")
        }
        else {
            alert ("you bought " + compraUSD + " USD Units");
            let parrafo = document.createElement("p");
            parrafo.innerHTML = "<strong><h2>Your Wallet has been increased on </h2>" + compraUSD + " USD</strong>"; 
            document.body.append(parrafo);           
        }       
}

let buyBTC = document.getElementById("buyButtonBTC")
buyBTC.onclick = () =>{
    let compraBTC = prompt("How many BTC do you want to buy?")
    if(compraBTC <=0){
        alert ("please buy more than 0 units")
        }
        else {
            alert ("you bought " + compraBTC + " BTC Units");
            let parrafo = document.createElement("p");
            parrafo.innerHTML = "<strong><h2>Your Wallet has been increased on </h2>" + compraBTC + " BTC</strong>"; 
            document.body.append(parrafo);           
        }       
}

let sellUSD = document.getElementById("sellButtonUSD")
sellUSD.onclick = () =>{
    let ventaUSD = prompt("How many USD do you want to sell?")
    if(ventaUSD <=0){
        alert ("please sell more than 0 units")
        }
        else {
            alert ("you sold " + ventaUSD + " USD Units")
            let parrafo = document.createElement("p");
            parrafo.innerHTML = "<strong><h2>Your Wallet has been reduced in </h2>" + ventaUSD + " USD</strong>"; 
            document.body.append(parrafo);
        }
}

let sellBTC = document.getElementById("sellButtonBTC")
sellBTC.onclick = () =>{
    let ventaBTC = prompt("How many BTC do you want to sell?")
    if(ventaBTC <=0){
        alert ("please sell more than 0 units")
        }
        else {
            alert ("you sold " + ventaBTC + " BTC Units");
            let parrafo = document.createElement("p");
            parrafo.innerHTML = "<strong><h2>Your Wallet has been reduced in </h2>" + ventaBTC + " BTC</strong>"; 
            document.body.append(parrafo);           
        }       
}
