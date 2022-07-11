import csv
from string import Template
import requests

t = Template('$hashtags $name\n \
$description\n\n \
id: `$idx`  \n \
Author: [$author](https://www.github.com/$author/)  \n \
Repository: [$author/$repo](https://www.github.com/$author/$repo/)  \n\n \
![screenshot]($screenshot)\n\n \
')

hashtags = ""

def getScreenshotUrl(author, repo):
    #print("-- Generating screenshot url", author, repo)
    extensions = ["png", "jpg"]
    max_size = 200 #kB
    url = ''

    for ext in extensions:
        url = 'https://raw.githubusercontent.com/'+author+'/'+repo+'/master/screenshot.'+ext
        response = requests.get(url)
        if response.status_code == 200 and int(response.headers['content-length'])/1000 < max_size:
            return url

def generateThemeList(input_file, output_file):
    with open(input_file, newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        f = open(output_file, "a")
        for idx, row in enumerate(reader, start=1):
            
            f.write(t.substitute(
                idx=idx,
                name=row['name'],
                description=row['short_note'],
                author=row['author'],
                repo=row['repo'],
                screenshot=getScreenshotUrl(row['author'], row['repo']),
                hashtags="#"*(hashtags+1)
                ))

        f.close()


def generateThemesMd(input_file, output_file):
    lines = []
    with open(input_file, 'r') as f:
        lines = f.readlines()
        f.close()

    with open(output_file, 'w') as f:
        for number, line in enumerate(lines):
            f.write(line)
            if "# Community Themes" in line:
                hashtags = line.count("#")
                break
        f.close()
        
    generateThemeList('_data/themes.csv', output_file)

generateThemesMd("themes.md", "themes.md")
