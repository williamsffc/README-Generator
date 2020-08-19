// function to generate markdown for README
function generateMarkdown(data) {
    return `
# 🏆 ${data.title} 🏆

##### **Badge:**
![License: ](https://img.shields.io/badge/License-${data.license}-green)


## **Description:**
* ${data.description}

## **Table of Contents:**
1. [Installation](#installation)
2. [Usage](#usage)
3. [Contribution](#contribution)
4. [Test](#test)
5. [Questions](#questions)

## **Installation:**
* ${data.installation}

## **Usage:**
* ${data.usage}

## **Contribution:**
* ${data.contribution}

## **Test:**
* ${data.test}

### **Questions:**
* ${data.email}

### **Link:**
* [GitHub] - https://github.com/${data.username}

-------------
© Copyright - 2020

`;
}

module.exports = generateMarkdown;
