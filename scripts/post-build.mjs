import fs from 'node:fs';

fs.readFile('./CHANGELOG.md', 'utf8', (err, data) => {
    if (err) {
        throw new Error('Error reading file: ' + err);
    }
    // const updatedData = data.replace(/## \[Unreleased\]/, '## [Unreleased]\n\n## [New Release] - ' + new Date().toISOString().split('T')[0]);

    fs.writeFile('./public/changelog.md', data, 'utf8', (writeErr) => {
        if (writeErr) {
            throw new Error('Error writing file: ' + writeErr);
        }
        console.log('CHANGELOG.md updated successfully.');
    });
    console.log('Changelog genration successful.');
});