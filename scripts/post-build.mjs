import fs from 'node:fs';

fs.readFile('../CHANGELOG.md', 'utf8', (err, data) => {
    if (err) {
        throw new Error('Error reading file: ' + err);
    }
    // const updatedData = data.replace(/## \[Unreleased\]/, '## [Unreleased]\n\n## [New Release] - ' + new Date().toISOString().split('T')[0]);

    let html = 
    `
    <html>
    <head>
    <title>Change Log</title>
    </head>
    <body>
    ${data}
    <script src='https://baltej223.github.io/md_interpreter/main.js'></script>
    </body>
    </html>
    `;

    fs.writeFile('../public/changelog.md', html, 'utf8', (writeErr) => {
        if (writeErr) {
            throw new Error('Error writing file: ' + writeErr);
        }
        console.log('CHANGELOG.md updated successfully.');
    });
    console.log('Changelog genration successful.');
});