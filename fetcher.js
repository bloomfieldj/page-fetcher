const request = require('request');
const fs = require('fs')

let filename = process.argv[2];
let url = process.argv[3];

const fetch = function (){
  



  const data = request(url, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  fs.writeFile(("/vagrant/w2/d3/page-fetcher/" + filename + ".txt"), body, err => {
    if (err) {
      console.error(err);
      return
    }
  })
  console.log("Downloaded and saved " + body.length + " bytes to " + filename + ".txt")
  })
}



  


fetch();