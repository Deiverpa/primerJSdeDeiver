function createHistory(quantity) {
    let li = document.createElement('li');
    li.textContent = quantity;
    return li;
}

const transactionHistory = document.querySelector('#transactionHistory');

transactionHistory.appendChild(createHistory(parrafo));
