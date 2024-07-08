// logger.ts

import winston from 'winston';

export class Logger {
    private logger: winston.Logger;

    constructor() {
        this.logger = winston.createLogger({
            level: 'debug', // Set the minimum logging level
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json()
            ),
            transports: [
                new winston.transports.Console({
                    format: winston.format.combine(
                        winston.format.colorize(),
                        winston.format.simple()
                    )
                }),
                new winston.transports.File({ 
                    filename: 'error.log', 
                    level: 'error', 
                    format: winston.format.json() 
                }),
                new winston.transports.File({ 
                    filename: 'combined.log',
                    format: winston.format.json()
                })
            ]
        });
    }

    public logInfo(message: string) {
        this.logger.info(message);
    }

    public logWarn(message: string) {
        this.logger.warn(message);
    }

    public logError(message: string) {
        this.logger.error(message);
    }

    public logDebug(message: string) {
        this.logger.debug(message);
    }
}
