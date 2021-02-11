const wa = require('@open-wa/wa-automate');

wa.create().then(client => start(client));

function start(client) {
  client.onMessage(async message => {
    
    client.sendText(message.from, `
        Helllo, disini Afedigi!!
        Ada yang bisa saya bantu?????
        
        - Nindi
    `)


    if (message.body === 'Hi') {
      await client.sendText(message.from, '👋 Hello!');
    }
  });
}