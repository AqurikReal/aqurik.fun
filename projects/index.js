// oh god forgive me

function termlog(textf) {
    const div = document.createElement("div");
    const text = document.createTextNode(textf);
    const outputs = document.getElementById("terminal-output");
    div.className = "terminalLog";
    div.appendChild(text);
    outputs.appendChild(div);
}

function help(){
    termlog(textf="")
    termlog(textf="Incorrect input.")
    termlog(textf="Type 'help' or '?'")
    termlog(textf="To get help.")
    termlog(textf="")
}

function helpfr(){
    termlog(textf="")
    termlog(textf="ls - get all the dirs *sub-pages* (Ex: ls)")
    termlog(textf="cd <dir> - Changes directory (Ex: cd home | cd cool | cd /projects)")
    termlog(textf="clear - clears output (Ex: clear)")
    termlog(textf="echo - send text (Ex: echo wow | echo I love gd cologne)")
    termlog(textf="help - displays help message (Ex: help)")
    termlog(textf="")
}
function ls(){
    termlog(textf="")
    termlog(textf="/home - Home Page")
    termlog(textf="/projects - Terminal")
    termlog(textf="/cool - The Cooler Home Page")
    termlog(textf="")
}


document.getElementById("input").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        command = event.target.value.trim("");
        event.target.value = ""; 

        if (command.startsWith("cd")){
            let commandTrimmed = command.trim("");
            let dir = commandTrimmed.replace("cd", "");
            let cleanDir = dir.trim().toLowerCase().replace("aqurik.fun", "").replace("Aqurik.fun", "").replace("/", "");

            if (cleanDir == ""){
                help();
                return;
            }


            if (cleanDir != "home"){
                console.log("Redirecting to: ",cleanDir, "...");
                termlog(textf="Redirecting to: " + cleanDir + "...")
                location.href = 'https://aqurik.fun/' + cleanDir;
            }
            
            else{
                console.log("Redirecting to home...");
                termlog(textf="Redirecting to home...")
                location.href = 'https://aqurik.fun/';
            }

        }

        else if (command.startsWith("clear")){
            const outputz = document.getElementById("terminal-output");
            outputz.innerHTML = "";
        }
        else if (command.startsWith("help")){
            helpfr();
        }
        else if (command.startsWith("?")){
            helpfr();
        }
        else if (command.startsWith("ls")){
            ls();
        }
        else if (command.startsWith("echo")){
            let echot = command.replace("echo", "")
            termlog(textf=echot)
        }
        else{
            help();
        };


    };
});