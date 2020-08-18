// function to generate markdown for README
function generateMarkdown(data) {
    return `
# 🏆 ${data.title} 

### License:
![License: ](https://img.shields.io/badge/License-${data.license}-green)

## Table of Contents:
1. [Description] (#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contribution](#contribution)
5. [Test](#test)
6. [Questions](#questions)

### Description:
* ${data.description}

### Installation:
* ${data.installation}

### Usage:
* ${data.usage}

### Contribution:
* ${data.contribution}

### Test:
* ${data.test}

### Questions:
* ${data.email}

### Github:
* https://github.com/${data.username} 

-------------
© Copyright - 2020

`;
}

module.exports = generateMarkdown;
