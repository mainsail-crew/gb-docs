const fs = require("fs");
const path = require("path");
const { parse } = require("csv-parse");

// Read templates
let templatePage = fs.readFileSync(path.join(__dirname, "./themes.md"), "utf8");
const templateEntry = fs.readFileSync(path.join(__dirname, "./theme-entry.md"), "utf8");

// define index
let index = 0;

fs.createReadStream(path.join(__dirname, "../_data/themes.csv"))
    .pipe(parse({ delimiter: ",", from_line: 2 }))
    .on("data", (row) => {
        index++;
        let tmp = templateEntry;
        tmp = tmp.replace(/{{ index }}/g, index);
        tmp = tmp.replace(/{{ name }}/g, row[0]);
        tmp = tmp.replace(/{{ short_note }}/g, row[1]);
        tmp = tmp.replace(/{{ author }}/g, row[2]);
        tmp = tmp.replace(/{{ repo }}/g, row[3]);

        templatePage += tmp;
    })
    .on('end', () => {
        fs.writeFileSync(path.join(__dirname, "../overview/features/themes/themes.md"),templatePage,{encoding:'utf8',flag:'w'});
    })
