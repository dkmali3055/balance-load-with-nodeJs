const discord = require('discord.js')


let webhookClient;
function sendDiscordNotification(content) {
    webhookClient = new discord.WebhookClient({
        id: "",
        token: ""
      });
  }


  function sendTodiscord(params) {
    try {
        webhookClient.send({
            content: params,
          })
    } catch (error) {
        console.error('Failed to send Discord notification:', error);
    }
     
  }

  module.exports={sendDiscordNotification,sendTodiscord}