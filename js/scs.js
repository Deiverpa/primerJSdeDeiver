function loadingPage(){
    Swal.fire({
        title: 'Please Sign In',
        color: '#FFCB74',
    })
}
window.onload = loadingPage;

// let alerta = document.getElementById("prueba")
// alerta.onclick = () =>{ Swal.fire('Any fool can use a computer')  
// }

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
let usernameID = "";

const signIn = document.getElementById("sign-in-up")
signIn.onclick = () =>{
usernameID = prompt("Enter your username")
document.getElementById("welcomeSection")
welcomeSection.innerText = "Start trading " + usernameID;
sessionStorage.setItem("saveusername",usernameID)
Swal.fire('Please Start "WALLET"')
}



/* Creating a new currency object with the name USD, value 1 and quantity 5000. */
let currencyInicial = new currency
function nuevousuario() {
    let currencyInicial = new currency("USD", 1, 5000);
    walletUser.push(currencyInicial);
    console.log(currencyInicial);
    console.log(walletUser);
    Swal.fire(
        'CryptoDev',
        'Your Wallet is Started',
        'success'
        )
}

const startTrading = document.getElementById("getStarted")
startTrading.onclick = () =>{
    nuevousuario();
}


let purchaseUSD = new currency
function purchasesUSD() {
    let purchaseUSD = new currency("USD", 1 , Number(prompt("how many USD do you want to buy")));
    walletUser.unshift(purchaseUSD);
    let parrafo = document.createElement("p");
    let history = sessionStorage.setItem("purchasehistory",purchaseUSD.name) 
    parrafo.innerHTML = "<h2>Your Wallet has been increased on </h2>" + purchaseUSD.quantity + sessionStorage.getItem("purchasehistory",purchaseUSD.name);
    document.body.append(parrafo);
    console.log(purchaseUSD)
    console.log(walletUser)
}
// console.log(history);
let buyUSD = document.getElementById("buyButtonUSD")
buyUSD.onclick = () =>{usernameID == "" ? alert ("please sign in") : purchasesUSD();     
}

let sellsUSD = new currency
function sellesUSD() {
    let sellsUSD = new currency("USD", 1 , Number(prompt("how many USD do you want to sell")));
    walletUser.shift(sellsUSD);
    console.log(sellsUSD)
    console.log(walletUser)
    let parrafo = document.createElement("p");
    parrafo.innerHTML = "<h2>Your Wallet has been reduced on </h2>" + sellsUSD.quantity + sessionStorage.getItem("purchasehistory",sellsUSD.name);
    document.body.append(parrafo);
}

let sellUSD = document.getElementById("sellButtonUSD")
sellUSD.onclick = () =>{ sellesUSD();     
}

// BTC BTC BTC

let purchaseBTC = new currency
function purchasesBTC() {
    let purchaseBTC = new currency("BTC", 1 , Number(prompt("how many BTC do you want to buy")));
    walletUser.unshift(purchaseBTC);
    let parrafo = document.createElement("p");
    let history = sessionStorage.setItem("purchasehistory",purchaseBTC.name) 
    parrafo.innerHTML = "<h2>Your Wallet has been increased on </h2>" + purchaseBTC.quantity + sessionStorage.getItem("purchasehistory",purchaseBTC.name);
    document.body.append(parrafo);
    console.log(purchaseBTC)
    console.log(walletUser)
}
// console.log(history);
let buyBTC = document.getElementById("buyButtonBTC")
buyBTC.onclick = () =>{usernameID == "" ? alert ("please sign in") : purchasesBTC();     
}

let sellsBTC = new currency
function sellesBTC() {
    let sellsBTC = new currency("BTC", 1 , Number(prompt("how many BTC do you want to sell")));
    walletUser.shift(sellsBTC);
    console.log(sellsBTC)
    console.log(walletUser)
    let parrafo = document.createElement("p");
    parrafo.innerHTML = "<h2>Your Wallet has been reduced on </h2>" + sellsBTC.quantity + sessionStorage.getItem("purchasehistory",sellsBTC.name);
    document.body.append(parrafo);
}

let sellBTC = document.getElementById("sellButtonBTC")
sellBTC.onclick = () =>{ sellesBTC();     
}