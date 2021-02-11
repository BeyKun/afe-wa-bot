const wa = require('@open-wa/wa-automate');

wa.create().then(client => start(client));

function start(client) {
  client.onMessage(async message => {
    
    console.log(message.from)
    //Ngambil dari custom welcome di DB
    client.sendText(message.from, `
        Hello, disini Afedigi
        Ada yang bisa aku bantu?

        Chat kamu akan dibalas beberapa saat ya 😊
        
        - April
    `)

    //Logic 
    if (message.body === 'Hi') {
      await client.sendText(message.from, '👋 Hello!');
    }
  });
}