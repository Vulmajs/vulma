export default {
  title: 'Node.js & Javascript code style guide',
  description: `This is a guide for writing consistent and aesthetically pleasing node.js code.
    It is inspired by what is popular within the community, and flavored with some
    personal opinions.<br><br>
    
    There is a .jshintrc which enforces these rules as closely as possible. You can
    either use that and adjust it, or use
    <a href="https://gist.github.com/kentcdodds/11293570">this script</a> to make your own.<br><br>
    
    This guide was created by Ronni H. Baslund and is
    licensed under the <a href="http://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>
    license. You are encouraged to fork this repository and make adjustments
    according to your preferences.<br><br>
    
    <img src="http://i.creativecommons.org/l/by-sa/3.0/88x31.png" />`,
  content: [
    {
      title: 'Formatting',
      description: `You may want to use <a href="http://editorconfig.org/">editorconfig.org</a> to enforce the formatting settings in your editor. Use the [Node.js Style Guide .editorconfig file](.editorconfig) to have indentation, newslines and whitespace behavior automatically set to the rules set up below.`,
      content: [
        {
          title: '2 Spaces for indentation',
          description: `Use 2 spaces for indenting your code and swear an oath to never mix tabs and spaces - a special kind of hell is awaiting you otherwis`,
          rightCode: '',
          wrongCode: '',
          codeComment: ``
        },
        {
          title: 'Newlines',
          description: `Use UNIX-style newlines ('\\n'), and a newline character as the last character of a file.<br>Windows-style newlines ('\\r\\n') are forbidden inside any repository.`,
          rightCode: '',
          wrongCode: '',
          codeComment: ``
        },
        {
          title: 'No trailing whitespace',
          description: `Just like you brush your teeth after every meal, you clean up any trailing
                    whitespace in your JS files before committing. Otherwise the rotten smell of
                    careless neglect will eventually drive away contributors and/or co-workers.`,
          rightCode: '',
          wrongCode: '',
          codeComment: ``
        },
        {
          title: 'Use Semicolons',
          description: `According to [scientific research] <a href="http://news.ycombinator.com/item?id=1547647">hnsemicolons</a>, the usage of semicolons is
                    a core value of our community. Consider the points of <a href="http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding">the opposition</a>, but
                    be a traditionalist when it comes to abusing error correction mechanisms for
                    cheap syntactic pleasures.`,
          rightCode: '',
          wrongCode: '',
          codeComment: ``
        },
        {
          title: '80 characters per line',
          description: `Limit your lines to 80 characters. Yes, screens have gotten much bigger over the
                    last few years, but your brain has not. Use the additional room for split screen,
                    your editor supports that, right?`,
          rightCode: '',
          wrongCode: '',
          codeComment: ``
        },
        {
          title: 'Use single quotes',
          description: `Use single quotes, unless you are writing JSON.`,
          rightCode: `var foo = 'bar';`,
          wrongCode: `var foo = "bar";`,
          codeComment: ``
        },
        {
          title: 'Opening braces go on the same line',
          description: `Your opening braces go on the same line as the statement.`,
          rightCode: `if (true) {\n  console.log('winning'); \n}`,
          wrongCode: `if (true) \n{\n  console.log('losing');\n}`,
          codeComment: `Also, notice the use of whitespace before and after the condition statement.`
        },
        {
          title: 'Declare one variable per var statement',
          description: `Declare one variable per var statement, it makes it easier to re-order the
                    lines. However, ignore <a href="http://javascript.crockford.com/code.html">Crockford</a> when it comes to
                    declaring variables deeper inside a function, just put the declarations wherever
                    they make sense.`,
          rightCode: `var keys   = ['foo', 'bar'];\nvar values = [23, 42];\n\nvar object = {};\nwhile (keys.length) {\n  var key = keys.pop();\n  object[key] = values.pop();\n}`,
          wrongCode: `var keys = ['foo', 'bar'],\n    values = [23, 42],\n    object = {},\n    key;\n\nwhile (keys.length) {\n  key = keys.pop();\n  object[key] = values.pop();\n}`,
          codeComment: `Also, notice the use of whitespace before and after the condition statement.`
        },
      ]
    },
    {
      title: 'Naming Conventions',
      description: `You may want to use <a href="http://editorconfig.org/">editorconfig.org</a> to enforce the formatting settings in your editor. Use the [Node.js Style Guide .editorconfig file](.editorconfig) to have indentation, newslines and whitespace behavior automatically set to the rules set up below.`,
      content: [
        {
          title: 'Use lowerCamelCase for variables, properties and function names',
          description: `Variables, properties and function names should use 'lowerCamelCase'.  They
                    should also be descriptive. Single character variables and uncommon
                    abbreviations should generally be avoided.`,
          rightCode: `var adminUser = db.query('SELECT * FROM users ...');`,
          wrongCode: `var admin_user = db.query('SELECT * FROM users ...');`,
          codeComment: ``
        },
        {
          title: 'Use UpperCamelCase for class names',
          description: `Class names should be capitalized using 'UpperCamelCase'.`,
          rightCode: `function BankAccount() {\n}`,
          wrongCode: `function bank_Account() {\n}`,
          codeComment: ``
        },
        {
          title: 'Use UPPERCASE for Constants',
          description: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Statements/const">Constants</a> should be declared as regular variables or static class properties,
                    using all uppercase letters.`,
          rightCode: `var SECOND = 1 * 1000;\n\nfunction File() {\n}\nFile.FULL_PERMISSIONS = 0777;`,
          wrongCode: `const SECOND = 1 * 1000;\n\nfunction File() {\n}\nFile.fullPermissions = 0777;`,
          codeComment: ``
        },
      ]
    },
    {
      title: 'Variables',
      description: ``,
      content: [
        {
          title: 'Object / Array creation',
          description: `Use trailing commas and put *short* declarations on a single line. Only quote
                    keys when your interpreter complains:`,
          rightCode: `var a = ['hello', 'world'];\nvar b = {\n  good: 'code',\n  'is generally': 'pretty',\n};`,
          wrongCode: `var a = [\n    'hello', 'world'\n];\nvar b = {"good": 'code'\n        , is generally: 'pretty'\n        };`,
          codeComment: ``
        }
      ]
    },
    {
      title: 'Conditionals',
      description: ``,
      content: [
        {
          title: 'Use the === operator',
          description: `Programming is not about remembering 
                    <a href="https://developer.mozilla.org/en/JavaScript/Reference/Operators/Comparison_Operators">stupid rules</a>. 
                    Use the triple equality operator as it will work just as expected.`,
          rightCode: `var a = 0;\nif (a !== '') {\n  console.log('winning');\n}`,
          wrongCode: `var a = 0;\nif (a == '') {\n  console.log('losing');\n}`,
          codeComment: ``
        },
        {
          title: 'Use multi-line ternary operator',
          description: `The ternary operator should not be used on a single line. Split it up into multiple lines instead.`,
          rightCode: `var foo = (a === b)\n? 1\n: 2;`,
          wrongCode: `var foo = (a === b) ? 1 : 2;`,
          codeComment: ``
        },
        {
          title: 'Use descriptive conditions',
          description: `Any non-trivial conditions should be assigned to a descriptively named variable or function:`,
          rightCode: `var isValidPassword = password.length >= 4 && /^(?=.*\d).{4,}$/.test(password);\n\nif (isValidPassword) {\n  console.log('winning');\n}`,
          wrongCode: `if (password.length >= 4 && /^(?=.*\d).{4,}$/.test(password)) {\n  console.log('losing');\n}`,
          codeComment: ``
        },
      ]
    },
    {
      title: 'Functions',
      description: ``,
      content: [
        {
          title: 'Write small functions',
          description: `Keep your functions short. A good function fits on a slide that the people in
                    the last row of a big room can comfortably read. So don't count on them having
                    perfect vision and limit yourself to ~15 lines of code per function.`,
          rightCode: ``,
          wrongCode: ``,
          codeComment: ``
        },
        {
          title: 'Return early from functions',
          description: `To avoid deep nesting of if-statements, always return a function's value as early
                    as possible.`,
          rightCode: `function isPercentage(val) {\n  if (val < 0) {\n    return false;\n  }\n\n  if (val > 100) {\n    return false;\n  }\n\n  return true;\n}`,
          wrongCode: `function isPercentage(val) {\n  if (val >= 0) {\n    if (val < 100) {\n      return true;\n    } else {\n      return false;\n    }\n  } else {\n    return false;\n  }\n}`,
          codeComment: `Or for this particular example it may also be fine to shorten things even
                    further:`,
          codeCommentCode: `function isPercentage(val) {\n  var isInRange = (val >= 0 && val <= 100);\n  return isInRange;\n}`
        },
        {
          title: 'Name your closures',
          description: `Feel free to give your closures a name. It shows that you care about them, and
          will produce better stack traces, heap and cpu profiles.`,
          rightCode: `req.on('end', function onEnd() {\n  console.log('winning');\n});`,
          wrongCode: `req.on('end', function() {\n  console.log('losing');\n});`,
          codeComment: ``
        },
        {
          title: 'No nested closures',
          description: `Use closures, but don't nest them. Otherwise your code will become a mess.`,
          rightCode: `setTimeout(function() {\n  client.connect(afterConnect);\n}, 1000);\n\nfunction afterConnect() {\n  console.log('winning');\n}`,
          wrongCode: `setTimeout(function() {\n  client.connect(function() {\n  console.log('losing');\n  });\n}, 1000);`,
          codeComment: ``
        },
        {
          title: 'Method chaining',
          description: `One method per line should be used if you want to chain methods.<br><br>

          You should also indent these methods so it's easier to tell they are part of the same chain.`,
          rightCode: `User\n.findOne({ name: 'foo' })\n.populate('bar')\n.exec(function(err, user) {\n  return true;\n});`,
          wrongCode: `User\n.findOne({ name: 'foo' })\n.populate('bar')\n.exec(function(err, user) {\n  return true;\n});\n\nUser.findOne({ name: 'foo' })\n  .populate('bar')\n  .exec(function(err, user) {\n    return true;\n  });\n\nUser.findOne({ name: 'foo' }).populate('bar')\n.exec(function(err, user) {\n  return true;\n});\n\nUser.findOne({ name: 'foo' }).populate('bar')\n  .exec(function(err, user) {\n    return true;\n  });`,
          codeComment: ``
        },
      ]
    },
    {
      title: 'Comments',
      description: ``,
      content: [
        {
          title: 'Use slashes for comments',
          description: `Use slashes for both single line and multi line comments. Try to write
          comments that explain higher level mechanisms or clarify difficult
          segments of your code. Don't use comments to restate trivial things.`,
          rightCode: `// 'ID_SOMETHING=VALUE' -> ['ID_SOMETHING=VALUE', 'SOMETHING', 'VALUE']
var matches = item.match(/ID_([^\n]+)=([^\n]+)/));

// This function has a nasty side effect where a failure to increment a
// redis counter used for statistics will cause an exception. This needs
// to be fixed in a later iteration.
function loadUser(id, cb) {
  // ...
}

var isSessionValid = (session.expires < Date.now());
if (isSessionValid) {
  // ...
}`,
          wrongCode: `// Execute a regex
var matches = item.match(/ID_([^\n]+)=([^\n]+)/);

// Usage: loadUser(5, function() { ... })
function loadUser(id, cb) {
  // ...
}

// Check if the session is valid
var isSessionValid = (session.expires < Date.now());
// If the session is valid
if (isSessionValid) {
  // ...
}`,
          codeComment: ``
        },

      ]
    },
    {
      title: 'Miscellaneous',
      description: ``,
      content: [
        {
          title: 'Object.freeze, Object.preventExtensions, Object.seal, with, eval',
          description: `Crazy shit that you will probably never need. Stay away from it.`,
          rightCode: ``,
          wrongCode: ``,
          codeComment: ``
        },
        {
          title: 'Requires At Top',
          description: `Always put requires at top of file to clearly illustrate a file's dependencies. Besides giving an overview for others at a quick glance of dependencies and possible memory impact, it allows one to determine if they need a package.json file should they choose to use the file elsewhere.`,
          rightCode: ``,
          wrongCode: ``,
          codeComment: ``
        },
        {
          title: 'Getters and setters',
          description: `Do not use setters, they cause more problems for people who try to use your
          software than they can solve.
          
          Feel free to use getters that are free from <a href="http://en.wikipedia.org/wiki/Side_effect_(computer_science)">side effects</a>, like
          providing a length property for a collection class.`,
          rightCode: ``,
          wrongCode: ``,
          codeComment: ``
        },
        {
          title: 'Do not extend built-in prototypes',
          description: `Do not extend the prototype of native JavaScript objects. Your future self will
          be forever grateful.`,
          rightCode: `var a = [];
if (!a.length) {
  console.log('winning');
}`,
          wrongCode: `Array.prototype.empty = function() {
  return !this.length;
}

var a = [];
if (a.empty()) {
  console.log('losing');
}`,
          codeComment: ``
        },
      ]
    },
  ]
}
