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
    walletUser.unshift(purchaseUSD);
    alert ("you bought " + purchaseUSD + " USD Units");
    let parrafo = document.createElement("p");
    parrafo.innerHTML = "<strong><h2>Your Wallet has been increased on </h2>" + purchaseUSD + " USD</strong>";
    sessionStorage.setItem("history",purchaseUSD.quantity) 
    document.body.append(parrafo);
    console.log(currencyInicial)
    console.log(purchaseUSD)
    console.log(walletUser)
}

let buyUSD = document.getElementById("buyButtonUSD")
buyUSD.onclick = () =>{usernameID == "" ? alert ("please sign in") : purchasesUSD();     
}

let sellsUSD = new currency
function sellesUSD() {
    let sellsUSD = new currency("USD", 1 , Number(prompt("how many USD do you want to sell")));
    walletUser.shift(sellsUSD);
    console.log(sellsUSD)
    console.log(walletUser)
}

let sellUSD = document.getElementById("sellButtonUSD")
sellUSD.onclick = () =>{ sellesUSD();     
}

