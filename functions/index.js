const functions = require('firebase-functions');

const express=require('express')
const app=express()

const {getAllShops, getSingleShop} =require('./util/handlers')

app.get('/allShops',getAllShops)
app.get('/shop/:shopId',getSingleShop)



// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
exports.api=functions.https.onRequest(app);
