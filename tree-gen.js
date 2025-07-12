const fs = require('fs');
const path = require('path');

function generateTree(directory, prefix = '') {
    const items = fs.readdirSync(directory);
    items.forEach((item, index) => {
        const fullPath = path.join(directory, item);
        // Ignore node_modules directory for cleaner output
        if (item === 'node_modules' || item === '.git') {
            return;
        }

        const isLast = index === items.length - 1;
        const connector = isLast ? '└── ' : '├── ';
        console.log(`${prefix}${connector}${item}`);

        if (fs.statSync(fullPath).isDirectory()) {
            const newPrefix = prefix + (isLast ? '    ' : '│   ');
            generateTree(fullPath, newPrefix);
        }
    });
}

const targetDirectory = process.argv[2] || '.';
console.log(targetDirectory);
generateTree(targetDirectory);
