//DirectorySearch
const fs = require('fs');
const path = require('path');
const util = require('util');
const readdir = util.promisify(fs.readdir);
const fstat = util.promisify(fs.stat);

async function printdir(dir){
    try{
        const filelist = await readdir(dir);

        for(const file of filelist){
            const fullpath = path.join(dir, file);
            const stat = await fstat(fullpath);

            if (stat.isDirectory()){
                printdir(fullpath);
            }
            else if (path.extname(file)){
                console.log(fullpath);
            }
        }
    }
    catch(err){
        console.error(err);
    }
}

printdir("./")