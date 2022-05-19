/* It creates a OBJET called currency. */
class currency {
    constructor( name, value, quantity ){
        this.name = name;
        this.value = value;
        this.quantity = quantity;
    }
}

let walletUser = []
/* Creating a prompt to enter a username and then it is saving it in the session storage. */
let usernameID = "user";

const signIn = document.getElementById("sign-in-up")
signIn.onclick = () =>{
usernameID = prompt("Enter your username")
document.getElementById("welcomeSection")
welcomeSection.innerText = "Start trading " + usernameID
sessionStorage.setItem("saveusername",usernameID)
}

/* Creating a new currency object with the name USD, value 1 and quantity 5000. */
let currencyInicial = new currency
function nuevousuario() {
    let currencyInicial = new currency("USD", 1, 5000);
    walletUser.push(currencyInicial);
    console.log(currencyInicial)
    console.log(walletUser)
}

const startTrading = document.getElementById("getStarted")
startTrading.onclick = () =>{
    nuevousuario();
}

let purchaseUSD = new currency
function purchasesUSD() {
    let purchaseUSD = new currency("USD", 1 , Number(prompt("how many USD do you want to buy")));
    walletUser.push(purchaseUSD);
    console.log(purchaseUSD)
    console.log(walletUser)
}

let buyUSD = document.getElementById("buyButtonUSD")
buyUSD.onclick = () =>{ purchasesUSD();     
}

// let buyUSD = document.getElementById("buyButtonUSD")
// buyUSD.onclick = () =>{ if(usernameID == ""){
//     alert ("please sign in")} else{
//     // let compraUSD = prompt("How many USD do you want to buy?")
//     // if(compraUSD <= 0){
//     //     alert ("please buy more than 0 units")
//     //     }
//     //     else {
//             alert ("you bought " + compraUSD + " USD Units");
//             let parrafo = document.createElement("p");
//             parrafo.innerHTML = "<strong><h2>Your Wallet has been increased on </h2>" + compraUSD + " USD</strong>"; 
//             document.body.append(parrafo);
//             // currency1.quantity = currency1.quantity + compraUSD;
//             console.log(currencyInicial)       
//         }
//     // }       
// }

let buyBTC = document.getElementById("buyButtonBTC")
buyBTC.onclick = () =>{ if(usernameID == ""){
    alert ("please sign in")} else{
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
}

let sellUSD = document.getElementById("sellButtonUSD")
sellUSD.onclick = () =>{if(usernameID == ""){
    alert ("please sign in")} else{
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
}

let sellBTC = document.getElementById("sellButtonBTC")
sellBTC.onclick = () =>{if(usernameID == ""){
    alert ("please sign in")} else{
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
}

// let sellUSD = document.getElementById("sellButtonUSD")
// sellUSD.onclick = () =>{if(usernameID == ""){
//     alert ("please sign in")} else{
//     let ventaUSD = prompt("How many USD do you want to sell?")
//     if(ventaUSD <=0){
//         alert ("please sell more than 0 units")
//         }
//         else {
//             alert ("you sold " + ventaUSD + " USD Units")
//             let parrafo = document.createElement("p");
//             parrafo.innerHTML = "<strong><h2>Your Wallet has been reduced in </h2>" + ventaUSD + " USD</strong>"; 
//             document.body.append(parrafo);
//         }
//     }    
// }

let sellBTC = document.getElementById("sellButtonBTC")
sellBTC.onclick = () =>{if(usernameID == ""){
    alert ("please sign in")} else{
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
}
