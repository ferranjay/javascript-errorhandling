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

// Brackets [] - character sets
re = /gr[ae]y/i;    // must be an a or e 
re = /[GF]ray/i;    // must be an G or F
re = /[^GF]ray/i;    // match anything except a G or F
re = /[A-Z]ray/;    // match any uppercase
re = /[a-z]ray/;    // match any lowercase
re = /[0-9]ray/;    // match any digit


// Braces {} - Quantifiers
re = /hel{2}o/i;   // must occur exactly {m} amount of times
re = /hel{2,4}o/i;   // must occur exactly {m} 
re = /hel{2,}o/i;   // must occur at least {m} times


// Parentheses () - grouping
re = /^([0-9]x){3}$/


// string to match
const str = '3x3x3x';


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