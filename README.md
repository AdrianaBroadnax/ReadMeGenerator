# ReadMeGenerator

## Index.js

First I had to include the packages that are needed for this application. I added the inquirer, fs, path, and the generateMarkdown.
I also had to make sure the inquirer and the path also shows up on the package.json.
fs is used on line 51 to help create a function to write the readme file.
Next, I did an array of question to help generate the readme. 
Each question will help build the readme for the user - the readme will consist of a title, description of the project, how to install your application and how will it be used. 
The next set of questions will be how will the user contribute to the project, how can it be tested, and the users contact info. 
After the questions are answered, the readme will be generated and ready for use to the user.

## GenerateMardown.js
I created a function that returns a license badge based on which license is in place, if there is no license then it will return an empty string.
I did the same thing to create a function that returns the license link and the license section of README
Next, this section will generate the mardown for README
the main function will be function generateMarkdown(data) in return you will get the title of the README.
Then, the data used for the description, install, usage, contibution, testing, and contact info. 
Last function will export the generateMarkdown.

Deployed links:

https://github.com/AdrianaBroadnax/ReadMeGenerator.git
https://adrianabroadnax.github.io/ReadMeGenerator/


Screen Record: 

https://watch.screencastify.com/v/iOHFq2CLZzIRhvXfjTyC