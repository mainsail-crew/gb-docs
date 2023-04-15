const fs = require("fs");
const path = require("path");

// Filter contributors
const contributorFilter = ['meteyou', 'dependabot[bot]'];

// Read templates
let templatePage = fs.readFileSync(path.join(__dirname, "./credits.md"), "utf8");

// read contributors.json
const contributorsRawData = fs.readFileSync(path.join(__dirname, "../_data/contributors.json"), "utf8");
const contributors = JSON.parse(contributorsRawData);

templatePage += "\n" +
    "\n" +
    "## Contributors\n" +
    "\n" +
    "| contributor | link |\n" +
    "|:--------|:-----|\n";

contributors.filter((contributor) => !contributorFilter.includes(contributor.login))
    .forEach((contributor) => {
    const tmp = `|<img src="${ contributor.avatar_url }" alt="${ contributor.login }" data-size="line"> **${ contributor.login }**|[${ contributor.html_url }](${ contributor.html_url })|\n`;
    templatePage += tmp;
});

templatePage += "\n" +
    "\n" +
    "## Licenses\n" +
    "\n" +
    "| project | license | link |\n" +
    "|:--------|:-------:|:-----|\n";

// read contributors.json
const licensesRawData = fs.readFileSync(path.join(__dirname, "../_data/licenses.json"), "utf8");
const licenses = JSON.parse(licensesRawData);

Object.keys(licenses).forEach((key) => {
    const deps = licenses[key];

    templatePage += `| **${ key }** | ${ deps.licenses } | [${ deps.repository }](${ deps.repository }) |\n`;
})

// write to file
fs.writeFileSync(path.join(__dirname, "../about/credits.md"),templatePage,{encoding:'utf8',flag:'w'});
