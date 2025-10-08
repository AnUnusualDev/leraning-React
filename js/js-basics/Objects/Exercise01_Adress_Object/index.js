const address = {
    street: 'Dr. Purgstallerstraße 4',
    city: 'Vöcklamarkt',
    zipCode: '4870',
};

function showAddress(address){
    for (let key in address)
        console.log(key, address[key]);
}

showAddress(address);