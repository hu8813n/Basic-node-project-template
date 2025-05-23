//Get all the informaiton from winston documentation

const {createLogger, format, transports} = require('winston');

const {combine, timestamp, label, printf} = format;
// level = severity level (error, warn, info, verbose, debug, silly)
const customFormat = printf(({level, message, label,  timestamp}) => {
    return `${timestamp} : ${label} : ${level} : ${message}`;
});  

const logger = createLogger({
    level: "info",
    format: combine(
        timestamp({format: "YYYY-MM-DD HH:mm:ss"}),
        label({label: "right meow!"}),
        customFormat
         
    ),
    transports: [
       
        //only print on console
        new transports.Console(),
         // you want to store the logs in a file
       //  new transports.File({filename: "error.log", level: "error"}),
         new transports.File({filename: "combined.log"}),
    ]
})

module.exports = logger;

