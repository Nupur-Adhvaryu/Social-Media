import express from 'express';
// import bodyParser from 'body-parser'
const PORT = 4000;
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import 'firebase/firestore'
import cors from 'cors';
import firebaseConfig from './config/firebase.js'
const app = express();
app.use(express.json());
app.use(cors())
const firebase = initializeApp(firebaseConfig);

const db = getFirestore(firebase);
app.get('/api',(req, res, next) => {
	
	res.json({Message:"Hello From APIS...."})
})

app.listen(PORT,()=>{
	console.log('listening on port: '+ PORT)
})
