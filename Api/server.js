const express = require('express');
const db = require('./firebase-config');

const app = express();
app.use(express.json());

