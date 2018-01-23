var fs = require('fs-extra');
var path = require('path');
var cp = require('child_process');
var chalk = require('chalk');

var srcPath = path.resolve('src')
var srcPackageJSONPath = path.join(srcPath, '..', 'package.json');
var srcReadMePath = path.join(srcPath, '..', 'README.md');

var libPath = path.resolve('lib');
var libPackageJSONPath = path.join(libPath, 'package.json');
var libReadMePath = path.join(libPath, 'README.md');

function build_publish() {
    console.log(chalk.green("Babel task to convert ES6 to ES5 started...."));
    cp.exec('babel ' + srcPath + ' -d ' + libPath + ' --ignore __tests__', function (error, stdout, stderr) {
        if (error) {
            console.log(chalk.red("---errors---", error));
            return;
        }
        if (stderr) {
            console.log(chalk.red("---errors---", stderr));
            return;
        }
        console.log("stdout", stdout)
        console.log(chalk.green("Babel task to convert ES6 to ES5 done !!!"))

        console.log(chalk.green("copying files..."))
        fs.copy(srcPackageJSONPath, libPackageJSONPath)
        .then(() => console.log(chalk.green("pacakge.json file copied sucessfully!")))
        .catch(err => console.error(err))

        fs.copy(srcReadMePath, libReadMePath)
        .then(() => console.log(chalk.green("README.md file copied sucessfully!")))
        .catch(err => console.error(err))
    })
}
build_publish();