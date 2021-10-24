var fs = require('fs');

var cuisine = ['Chinese', 'American', 'Continental', 'Cuban', 'French', 'Greek',
    'Indian', 'Indonesian', 'Italian', 'Japanese', 'Lebanese', 'Malaysian', 'Mexican',
    'Pakistani', 'Russian', 'Singapore', 'Spanish', 'Thai', 'Tibetan', 'Vietnamese'];

var data = [['paymentMethodsRestaurantID', 'restID', 'paymentMethodsID']]

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
var i = 1; // PK
// step is user id
for (let step = 1; step < 501; step++) {
    var amount = getRandomInt(1, 5);
    var alreadyDone = [];
    for (let s = 0; s < amount; s++) {
        var inner = [i, step];
        var n = getRandomInt(1, 5);
        while (alreadyDone.includes(n)) {
            n = getRandomInt(1, 5);
        }
        inner.push(n);
        data.push(inner);
        i++;
    }
}

let csvContent = ''
    + data.map(e => e.join(",")).join("\n");

fs.writeFileSync('data-PaymentMethodsRestaurant.csv', csvContent);

