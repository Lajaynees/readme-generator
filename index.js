const generateMarkdown =require('./utils/generateMarkdown')
const inquirer =require('inquirer')
const fs =require('fs')


const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install the application?',
    },
    
    {
        type: 'input',
        message:'How do you use the application?',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'Which license are you using?',
        name: 'license',
        choices: ["MIT","IBM","ISC"]
    },
    {
        type: 'input',
        message:'Who contributed in the making of this project?',
        name: 'contribution'
    },
    {
        type: 'input',
        message:'Can we test it?',
        name: 'tests'
    },
    {
        type: 'input',
        message:'Do you have any questions?',
        name: 'question'
    },
    {
        type: 'input',
        message:'What is your email?',
        name: 'email'
    },
    {
        type: 'input',
        message:'Please, Enter your GitHub username',
        name: 'github'
    },
    {
        type: 'input',
        message:'Please, Enter your linkedIn username',
        name: 'linkedin'
    },
]
    

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(answers){
console.log (answers)
const data = generateMarkdown(answers)
console.log(data)
fs.writeFile('./output/README.md', data, function(err){
    if(err) throw err
    console.log("Readme COMPLETE!");
})
    }).catch(function(err){
        console.log (err)
    })
}


// Function call to initialize app
init();
