// automatisation

const shopifyApi = require('./shopifyApi');

const scheduleOrderData = () => {
    const cron = require('cron');
    const job = new cron.CronJob('0 * * * * *', async () => { 
      console.log('Reccuperation des données...');
      await shopifyApi.getOrderData();
      console.log('Données sauvegardées sur MongoDB');
    });
    job.start();
  };
  
  module.exports = { scheduleOrderData };