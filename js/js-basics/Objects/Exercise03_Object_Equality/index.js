
let address1 = new Address('Dr. Purgstallerstraße 4', 'Vöcklamarkt', '4870');
let address2 = new Address('Dr. Purgstallerstraße 4', 'Vöcklamarkt', '4870');

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

function areEqual(address1, address2) {
    for (key in address1){
        if (address1[key] !== address2[key]) return false;
    }
    return true;
}

function areSame(address1, address2) {
    return address1 === address2;
}



console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));