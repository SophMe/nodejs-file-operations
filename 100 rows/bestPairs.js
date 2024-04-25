const fs = require('fs');

function printUniqueCombs() {
    const filePath = 'bestPairs.csv';
    const numRowsToPrint = 100;
    const allLetters = [];
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the CSV file:', err);
            return;
        }

        const rows = data.split('\n').slice(0, numRowsToPrint);
        for (let i = 0; i < rows.length; i++) {
            const columns = rows[i].split(',');
            if (columns.length > 1) {
                const column1LettersOnly = columns[0].match(/[a-zA-Z]+/g);      // regular expression to get rid of numbers
                const column2LettersOnly = columns[1].match(/[a-zA-Z]+/g);
                if (column1LettersOnly) {
                    allLetters.push(...column1LettersOnly);                     // push letters from column to allLetters array
                }
                if (column2LettersOnly) {
                    allLetters.push(...column2LettersOnly);
                }
            }
        }

        const uniqueCombs = [...new Set(allLetters)];                         // Set object can only contain unique elements

        console.log('Unique combinations:', uniqueCombs.sort());
    });
}

printUniqueCombs();