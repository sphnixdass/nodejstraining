const express = require('express')
const { spawn } = require('child_process')
const app = express()
const port = 3000
var tempvar = ""
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
    tempvar = data;
  });
  
  ls.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });
  
  ls.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });

app.get('/', (req, res) => res.send(`Hello World!  ${tempvar}`))

app.listen(port, () => console.log(`Example app listening on port ${port}! ${tempvar}`))

