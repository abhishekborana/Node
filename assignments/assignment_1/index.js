function getNameFromCommandLine() {
    // Write you code here, name should be taken as args in process.argv
    return process.argv[process.argv.length - 1];
}

function getNameFromEnv() {
    // Write your code here
    return process.env.name;
}

function getNameFromReadLine() {
    // Write your code here
    let readline =  require('readline');
    let read = readline.createInterface(process.stdin,process.stdout);
    read.question("Enter Your Full Name",(fullname) => {
        console.log(fullname);
    });
}

module.exports = {
    getNameFromCommandLine,
    getNameFromEnv,
    getNameFromReadLine
}