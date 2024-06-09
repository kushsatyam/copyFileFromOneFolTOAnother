const path = require("path");
const fs = require("fs");

const srcPathName = path.join(__dirname, 'temp');
const desPathName = path.join(__dirname, 'upload');
// console.log(pathName);

fs.readdir(srcPathName, (err, data) => {
    if (err) return;

    // console.log(data);
    for (let item of data) {
        copFiles(item);
    }

}); 

function toEmptyTheTemp(fileName) {
    fs.rm(srcPathName+'/'+fileName,(err)=>{
        console.log(err);
    })
}


function copFiles(fileName) {
    fs.copyFile(srcPathName + '/' + fileName, desPathName + '/' + fileName, (err) => {
        if (err) {
            console.log(err)
            return;
        }
        toEmptyTheTemp(fileName);
        // console.log('success');
    });
}