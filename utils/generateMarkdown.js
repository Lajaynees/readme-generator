
function renderLicenseSection(license) {
  if (license == "MIT") {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license == "IBM") {
    return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
  } else (license == "ISC")
  return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseSection = renderLicenseSection(data.license)
  return `# ${data.title}
### Description
  ${data.description}
#### Table of Contents
 - [Description](#description)
 - [Installation](#installation)
 - [Usage](#usage)
 - [License](#license)
 - [Contribution](#contribution)
 - [Tests](#tests)
 - [Questions](#questions)

### Installation
  ${data.installation}
### Usage
  ${data.usage}
### License
${licenseSection}
### Contributing 
${data.contribution}
### Tests
${data.tests}
### Questions
${data.question}
Any questions you can contact ${data.name} here:
Email: [${data.email}](mailto:${data.email})
### Contact
[GitHub](https://github.com/${data.github})
[LinkedIn](https://www.linkedin.com/in/${data.linkedin}-ab45a619a/)
`;
}

module.exports = generateMarkdown;