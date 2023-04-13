const Shopify = require('shopify-api-node');
const Order = require('./shopifyModel');
const scheduleOrderData = require('./scheduleData').scheduleOrderData;

//acces API
const shopify = new Shopify({
    shopName: 'nowatest',
    accessToken: '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'
});

// reccuperation infos shopify dans un tableau pour les inscrires dans la DB
const getOrderData = async () => {
    const orders = await shopify.order.list();
    const orderData = orders.map((order) => ({
      name: order.customer.first_name + ' ' + order.customer.last_name,
      order_number: order.name,
      phone_number: order.customer.phone,
    }));
    const result = await Order.create(orderData);// Utilisa le model pour "create()" les infos dans la DB
    console.log(result);
  };

module.exports = { getOrderData };

const db = require('./db');
const shopifyApi = require('./shopifyApi');

db.on('error', console.error.bind(console, 'Pas de connexion à MongoDB :'));

db.once('open', async () => {
    console.log('MongoDB connecté');
    await shopifyApi.getOrderData();

    scheduleOrderData();
});



  
    
   