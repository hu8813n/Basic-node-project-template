
const express = require('express');
const {ServerConfig, Logger} = require('./config');
const apiRoutes = require('./routes');

// const PORT = process.env.PORT ;

const app = express();

app.use('/api' , apiRoutes); 

 

app.listen(ServerConfig.PORT, () => {
    console.log(`Server is running on port ${ServerConfig.PORT}`);
    Logger.info("Successfully started the server", {})
});