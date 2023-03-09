const { Signale } = require('signale');
const options = {
    scope: 'Discord Bot Template',
    logLevel: 'info',
    types: {
        loading: {
            badge: '🕐',
            color: 'cyan',
            label: 'Loading',
            logLevel: 'info'
        },
        success: {
            badge: '✅',
            color: 'green',
            label: 'success',
            logLevel: 'info'
        },
        shard: {
            badge: '🔒',
            color: 'yellow',
            label: 'shard',
            logLevel: 'info',
        },
        error: {
            badge: '❌',
            color: 'red',
            label: 'error',
            logLevel: 'info'
        },
    }
}
const log = new Signale(options);

module.exports = log;