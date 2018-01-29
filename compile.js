const path = require('path');
const fs = require('fs');
const solc = require('solc');
//_dirname is node
const inboxPath = path.resolve(_dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

module.exports = solc.compile(source, 1).contracts[':inbox'];
