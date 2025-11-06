class Logger {
    private logHistory: string[] = [];

    log(message: string): void {
        const timestampedMessage = `${new Date().toLocaleTimeString()}: ${message}`;
        this.logHistory.push(timestampedMessage);
        console.log(`Sistem hatası: ${message}`);
    }

    getHistory(): string[] {
        return this.logHistory;
    }
}

const logger = new Logger();

logger.log("Bağlantı kesildi.");


console.log("logHistory'e dışarıdan erişilemez!");