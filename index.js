const wa = require('@open-wa/wa-automate');
const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000

wa.create().then(client => start(client));

function start(client) {
  client.onMessage(async message => {
    if(!message.from.includes('@g')){
        console.log(message.from)
        //Ngambil dari custom welcome di DB
        client.sendText(message.from, 'Hai, aku adalah Yuri, assisten dari Tn. Bayu 😊\n\nNampaknya Tn. Bayu sedang sibuk, harap tunggu beberapa saat ya\n\n-Yuri')
    
        //Logic 
        if (message.body === 'Hi') {
          await client.sendText(message.from, '👋 Hello!');
        }
    }
  });
}


app.get('/', (req, res) => res.send('<h2> Hello World! </h2>'));
app.listen(PORT, () => console.log(`app listening on port ${PORT}`))