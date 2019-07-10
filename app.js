const user = {email: 'jdoe@gmail.com'};

try {
    // this will produce a reference error
    // myFunction();

    // Produce a TypeError
    // null.myFunction();

    // will produce URIError
    // decodeURIComponent('%');

    if(!user.name) {
        throw 'user has no name';
    }

}   catch(e) {
    console.log('its null!');
    // console.log(e);
    // if you want to output only the error msg
    // console.log(e.message);
    // // if you want to output the name 
    // console.log(e.name);
    // // if you want to see what kind of error
    // console.log(e instanceof ReferenceError);
    // console.log(e instanceof TypeError);
}   finally {
    console.log('finally ')
}


console.log('program continues...');
