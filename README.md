# Sandbox for this issue: Custom script not affecting the changestream 
https://github.com/strongloop/loopback/issues/2140

To install, as I did, do the following:
  1. 
   ```sh 
  git clone https://github.com/alexxgathp/loopback-sandbox.git
```
  2. Navigate to the directory and install. 
 ```sh 
 cd loopback-sandbox
  npm install
```
  3. Start the server in a command-line by going to the /server directory and execute "node server".
 ```sh 
 cd server
  node server
```
  4. In the browser, open to the address http://localhost:3000/api/mymodels/change-stream
  5. In another command-line, navigates to /customscripts and execute "node customscript.js".
```sh 
 cd customscripts
  node customscript.js
```
  6. Observe no change in the browser.
  7. In another browser or tab, go to Mymodel >> PUT. Fill it out and click "Try it out!"
  8. Observer a change emitted in the other tab / browser.
### Version
1.0

### Credits

- Dillinger-produced readme file.