const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(express.json());
//Method
app.post('/webhook',(req,res)=>{
    console.log("Received request:", req.body);
    res.json({
        status: 'success',
        message: 'Data received successfully'
    });
})

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});