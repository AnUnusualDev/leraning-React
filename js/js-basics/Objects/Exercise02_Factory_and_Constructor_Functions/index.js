function createAddress(street, city, zipCode){
    return {
        street,
        city,
        zipCode
    }
}

let home = createAddress('Dr. Purgstallerstraße 4', 'Vöcklamarkt', '4870');
console.log(home);




function Address(street, city, zipCode) {
    this.street = street,
    this.city = city,
    this.zipCode = zipCode
}

let home2 = new Address('Dr. Purgstallerstraße 4', 'Vöcklamarkt', '4870');
console.log(home2);