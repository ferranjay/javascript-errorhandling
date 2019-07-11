// initialize a variable re "regular expression"
let re;
// then we set a regular expression literal with two foward slashes
re = /hello/;
re = /hello/i; // i = case insensitive
// re = /hello/g; // g = global search 


// console.log(re);
// console.log(re.source);


// The exec() function : returns result in an array or null
// const result = re.exec('hello world');

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);


// The test() function : returns true or false

// const result = re.test('hello');
// console.log(result);


// The match() function : returns result array or null

// const str = 'hello there';
// const result = str.match(re);
// console.log(result);


// The search() function : returns the index of the first match if not found returns -1

// const str = 'hello there';
// const result = str.search(re);
// console.log(result);


// The replace() function : returns new string with some or all matches of a patern
const str = 'hello there';
const newStr = str.replace(re, 'hi');
console.log(newStr);