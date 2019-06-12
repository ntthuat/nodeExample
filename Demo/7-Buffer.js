var buffer = new Buffer('Hello', 'utf-8');

console.log(buffer);

// Buffer -> String
console.log(buffer.toString());

// Buffer -> JSON
console.log(buffer.toJSON());