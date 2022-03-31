const express = require('express');
const res = require('express/lib/response');
const app = express();
app.get('/', (req, res) => res.send('API RUNNING')) 
const PORT = process.env.port || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
