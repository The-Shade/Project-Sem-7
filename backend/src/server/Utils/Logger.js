const fs = require('fs');
const path = require('path');

class Logger{
    constructor(LOG_FILE_NAME) {
        this.LOG_FILE_PATH = path.join(__dirname, "./", LOG_FILE_NAME);
        this.DATE_OPTIONS = {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        };
    }

    Log (LogData){
        const datetime = new Date().toLocaleString('en-us', this.DATE_OPTIONS);
        const log_message = `[${datetime}] LOG: ${LogData.message} `+`[LOGGED :: Status=${LogData.status}]\n`;
        fs.appendFile(this.LOG_FILE_PATH, log_message, err => {
            if (err) console.log(`${LogData.message}\n`, err.message);
            else console.log(LogData.message);
        });
    }

    ErrorLog (ErrorData) {
        const datetime = new Date().toLocaleString('en-us', this.DATE_OPTIONS);
        const log_message = `[${datetime}] ERROR: ${ErrorData.error.message} `+`[ERROR :: Status=${ErrorData.status}]\n`;
        fs.appendFile(this.LOG_FILE_PATH, log_message, err => {
            if (err) console.log(`${ErrorData.error.message}\n`, err.message);
            else console.log(ErrorData.error.message)
        })
    }
}


module.exports = Logger;