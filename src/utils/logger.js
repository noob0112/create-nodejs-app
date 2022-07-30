const winston = require('winston');
const { SeqTransport } = require('@datalust/winston-seq');
const path = require('path');

const logger = winston.createLogger({
    // format của log được kết hợp thông qua format.combine
    format: winston.format.combine(
        winston.format.colorize({
            message: true
        }),

        winston.format.splat(),

        // Định dạng time cho log
        winston.format.timestamp(),

        // thêm màu sắc
        winston.format.colorize(),

        // thiết lập định dạng của log
        winston.format.printf(
            log => {
                // () => { return self.getNow }
                // nếu log là error hiển thị stack trace còn không hiển thị message của log 
                if (log.stack) return `[${log.timestamp}] [${log.level}] ${log.stack}`;
                return `[${log.timestamp}] [${log.level}] ${log.message}`;
            },
        ),
    ),
    transports: [
        // new SeqTransport({
        //     serverUrl: "http://localhost:5341",
        //     apiKey: "your-api-key",
        //     onError: (e => { console.error(e) }),
        // }),

        // hiển thị log thông qua console
        new winston.transports.Console(),

        // Thiết lập ghi các errors vào file 
        new winston.transports.File({
            level: 'error',
            filename: path.join(process.cwd(), `logs/${new Date().toISOString().split('T')[0]}/errors.log`)
        })
    ],
})

module.exports = logger;