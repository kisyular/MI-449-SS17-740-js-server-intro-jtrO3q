// Require Node's http module and assign it to a variable
var http = require('http')

// Create a new server that just says "Hi!!" at every route
var server = http.createServer(function (request, response) {
  if (request.url === '/') {
    response.end(
      '<h1>Hello</h1>' +
      '<h2>This is Home Page </h2>' +
      '<p>Other Page URLs are </p>' +
      '<a href="/cuteness"> Cuteness</a>' +
      '<br/>' +
      '<a href="/random-joke"> Random Jokes</a>'
    )
  } else if (request.url === '/random-joke') {
    var textArray = [
      '<p>Knock, knock!</p> <p>Who’s there?</p> <p>Opportunity!</p> <p>That is impossible. Opportunity doesn’t come knocking twice!</p>',
      '<p>Knock, knock!</p> <p>Who’s there?</p> <p>An extraterrestrial</p> <p>Extraterrestrial who?</p> <p>What – how many extra-terrestrials do you know?</p>',
      '<p>Knock, knock!</p> <p>Who\'s there?</p> <p>The interrupting cow.</p> <p>Interrupting cow wh-</p> <p>Moooooo!</p>'
    ]
    var randomIndex = Math.floor(Math.random() * textArray.length)
    var randomElement = textArray[randomIndex]
    response.end('<h1>Knock Knock jokes for kids</h1>' +
      randomElement
    )
  } else if (request.url === '/cuteness') {
    response.end(
      '<h1>Cuteness</h1>' +
      '<img src="http://i.imgur.com/kYRMq2u.jpg" alt="Waving hi">'
    )
  } else {
    response.end(
      '<p>The requested URL ' + request.url + ' was not found on this server.</p>' +
      '<h1>Page Not Found</h1>' +
      '<img src="http://i.imgur.com/nymrNQW.png" alt="Page Not Found">'
    )
  }
})

// Listen on port 8080, so that we can reach the app at
// localhost:8080
var port = process.env.PORT || 8080
server.listen(port)
// Output a friendly message to the terminal
console.log('Server running at http://localhost:' + port + '/')
