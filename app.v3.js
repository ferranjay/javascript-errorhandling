let re;
// literal characters
re = /hello/;
re = /hello/i;

// metacharacter symbols
re = /^h/i;   // must start with    ^
re = /world$/i;   // must end with  $
re = /^hello$/i;   // must begin and end with 
re = /^h.llo$/i;   // matches one character
re = /^h*llo$/i;   // matches any character 0 or more

re = /h?ll?/i;  // optional character
re = /h?ll\?/i;  // escape character


// string to match
const str = 'hello world';


// log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
    if(re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} does not match ${re.source}`);
    }
}


reTest(re, str);