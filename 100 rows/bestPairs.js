const fs = require('fs');

function readCSVFile() {
    const filePath = 'bestPairs.csv';
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the CSV file:', err);
            return;
        }

        const rows = data.split('\n');
        const numRowsToPrint = 100;
        for (let i = 0; i < Math.min(numRowsToPrint, rows.length); i++) {
          const columns = rows[i].split(',');
          if (columns.length >= 2 ) {
            const firstChCol1 = columns[0].charAt(0);       // charAT retrieves the character at a specified index within the string
            const firstChCol2 = columns[1].charAt(0);
            // write data to terminal
            process.stdout.write(firstChCol1 + firstChCol2 + '\n');       // process.stdout represents standard output stream 
          }
        }
    });
}

readCSVFile();