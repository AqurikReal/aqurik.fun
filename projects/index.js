// oh god forgive me


var NoHttps = false; // http mode (Used for testing and local hosting)

// Redirects

// redirects from http to https
if (location.protocol !== 'https:'){
  if (!NoHttps){
    console.log("Redirecting to https...");
    location.replace('https://' + location.href.split('//')[1]);
  }
}

// redirects to mobile version
if (/Mobi|Android|iPhone|Tablet|iPad|iPod/i.test(navigator.userAgent)) {
  if (!NoHttps){
    console.log("Redirecting to mobile version...");
    window.location.href = 'https://aqurik.fun/mobile';
  }
}

function termlog(textf) {
    div = document.createElement("div");
    text = document.createTextNode(textf);
    outputs = document.getElementById("terminal-output");
    div.className = "terminalLog";
    div.appendChild(text);
    outputs.appendChild(div);
}

function termlink(textf, url) {
    div = document.createElement("div");
    link = document.createElement("a");
    outputs = document.getElementById("terminal-output");

    console.log("url: ", url);
    link.className = "Link"; 
    link.textContent = textf;
    link.href = url;
    link.target = "_blank"; 
    div.className = "terminalLog";
    div.appendChild(link);
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
    termlog(textf="hide-easy - hides easy mode (Ex: hide-easy)")
    termlog(textf="help - displays help message (Ex: help)")
    termlog(textf="")
}
function ls(){
    termlog(textf="")
    termlog(textf="/home - Home Page")
    termlog(textf="/projects - Terminal")
    termlog(textf="/cool - The Cooler Home Page")
    termlog(textf="/mobile - We don't discuss this here..")
    termlog(textf="")
}

document.getElementById("easy").onclick = function(){
    termlog("");
    termlink("Home Page", "https://aqurik.fun");
    termlink("Projects Page","https://aqurik.fun/projects")
    termlink("The Cooler Homepage", "https://aqurik.fun/cool");
    termlink("Mobile Redirect", "https://aqurik.fun/mobile");
    termlog("");
}


document.getElementById("input").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        command = event.target.value.trim("");
        document.getElementById("projectsThing").textContent = "Aqurik.fun";
        document.getElementById("easy").style.marginLeft = "48em";
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
            let echot = command.replace("echo", "");
            termlog(textf=echot);
        }

        else if (command.startsWith("hide-easy")){
            document.getElementById("easy").style.display = "none";
        }
        else{
            help();
        };


    };
});