import express from "express";
import cors from 'cors';


//some local variables
const app = express();
const port = 3000;
let botStatus = "off";

app.use(cors()); 

//Middleware to parse JSON data
app.use(express.text({ type: "*/*" }));
app.use(express.static("public")); // Serve static files (HTML, CSS, JS)
//Method for EA
app.get('/webhook/get',(req,res)=>{
    res.status(200);                                   // send_response(200)
    res.setHeader("Content-Type", "text/plain"); 
    const message = botStatus;
    res.send(message)
})
//For HTML
// Route to handle bot status update
app.get('/set-bot-status/:status', (req, res) => {
    const status = req.params.status;

    if (status === "on") {
        botStatus="on";
        console.log("Trading bot is ON");
        // Send message to EA bot to turn on trading (via WebRequest or custom logic)
    } else if (status === "off") {
        botStatus="off";
        console.log("Trading bot is OFF");
        // Send message to EA bot to turn off trading
    }

    // Respond to the frontend with status message
    res.json({ message: `Bot turned ${status}` });
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});