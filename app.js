const http = require('http');
const port =  5000;

http.createServer(function(req,res) {
  let url = req.url;
  res.writeHead(200, {
    'Content-Type':'text/html'
  });

  res.write('<h1>Hello world! => version v3(Azure Devops</h1>');
  res.end();
}).listen(port, function(){
  console.log('Server started at port 5000');
})

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
