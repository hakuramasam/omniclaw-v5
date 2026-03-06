import { execSync } from "child_process"

function run(cmd:string){
  execSync(cmd,{stdio:"inherit"})
}

console.log("Installing dependencies")
run("npm install")

console.log("Starting server")
run("npm run dev")
