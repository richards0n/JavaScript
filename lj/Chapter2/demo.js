'use strict'
const sentences = [{subject: 'JavaScript', verb: 'is', object: 'great'},
                   {subject: 'Elephants', verb:'are', object:'large'}];

// ES6 feature: object destructuring
function say({subject, verb, object})
{
    // es6 feature: template strings
    // note the quotes below a re (`), and not single quotes (')
console.log(`${subject}, ${verb}, ${object}`);
}
// es6 feature for .. of
for (let s of sentences)
{
    say(s);
}