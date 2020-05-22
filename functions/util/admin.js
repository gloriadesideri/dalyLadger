/*const admin = require('firebase-admin')
admin.initializeApp();
const db=admin.firestore()
module.exports={ admin, db }*/


const firebase=require('firebase')
require('firebase/firestore')
const config=require('./config')

firebase.initializeApp(config)
const db=firebase.firestore()

module.exports={db}
