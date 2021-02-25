const exec = require("child_process").exec;
const fs = require("fs");
const path = require("path");
const compressing = require("compressing");
/*
how to use:
node script.js dev|uat

//1.执行发布命令 `egret publish`
//2.压制zip包并拷贝到制定git目录，
//3.在指定目录commit并上传dist.zip（push）
*/

function execPromise(command, cwdObj) {
  return new Promise((res, rej) => {
    if (cwdObj) {
      exec(command, cwdObj, function (err, stdout, stderr) {
        if (err) {
          logErr(`${command}:` + stderr);
        } else {
          //打印输出
          logMsg(stdout);
          res();
        }
      });
    } else {
      exec(command, function (err, stdout, stderr) {
        if (err) {
          logErr(`${command}:` + stderr);
        } else {
          //打印输出
          logMsg(stdout);
          res();
        }
      });
    }
  });
}

const envName = process.argv.splice(2,1)[0];
if(!envName){
  throw('环境项必须！')
}
//1.打包
execPromise(`egret publish --version ${envName}`, {
  cwd: path.resolve("../"),
}).then((res) => {
    //删除其他无关文件（夹）
    fs.readdirSync("../bin-release/web").forEach(fileName=>{
      if(fileName !== envName){
        const stat = fs.statSync(`../bin-release/web/${fileName}`)
        if(stat.isDirectory()){
          fs.rmdirSync(`../bin-release/web/${fileName}`,{
            recursive:true
          })
        }else if(stat.isFile()){
          fs.unlinkSync(`../bin-release/web/${fileName}`)
        }
      }
    })

    console.log(`输出为：${envName}`);

    //改名
    fs.mkdirSync(`../bin-release/web/package`)
    fs.renameSync(`../bin-release/web/${envName}`,"../bin-release/web/package/dist")
  })
function logErr(errMsg) {
  console.error(errMsg);
}
function logMsg(msg) {
  console.log(msg);
}


