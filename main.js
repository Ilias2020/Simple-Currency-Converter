
const input = require('sync-input');

const currencies = {
    USD: 1.0,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75
};

const board = () => {
    console.log(`Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP
What do you want to do?
1-Convert currencies 2-Exit program`);
}

const converter = () => {
    console.log("What do you want to convert?");
    let from = input("From: ").toUpperCase();
    if (currencies[from] === undefined) {
        console.log("Unknown currency");
    } else {
        let currency = input("To: ").toUpperCase();
        if (currencies[currency] === undefined) {
            console.log("Unknown currency");
        } else {
            const amount = Number(input("Amount: "));
            if (isNaN(amount)) {
                console.log("The amount has to be a number");
            } else if (amount < 1) {
                console.log("The amount cannot be less than 1");
            } else {
                const converted = amount/currencies[from] * currencies[currency].toFixed(4);
                console.log(`Result: ${amount} ${from} equals ${converted.toFixed(4)} ${currency}`);
            }
        }
    }

}

function main() {
    while (true) {
        board();
        let num = input();
        if (num == 2) {
            console.log("Have a nice day!")
            break;
        } else if (num == 1) {
            converter();
        } else console.log("Unknown input");
    }
}

main();