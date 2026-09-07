
const terminal = document.getElementById("terminal");


let speed = 35;


function sleep(ms){

return new Promise(resolve=>setTimeout(resolve,ms));

}



async function write(text, cls=""){

let span=document.createElement("span");

if(cls)
span.className=cls;


terminal.appendChild(span);



for(let char of text){

span.innerHTML += char;

await sleep(speed);

}


terminal.innerHTML += "\n";

}




async function boot(){


await write("ROM BIOS UTILITY V4.51PG");


await sleep(500);


await write("AMIBIOS (C) 2026 Retro Computing, Inc.");


await write("CPU : Retro Core(TM) @ 4.70 GHz");


await write("MEMORY TEST : 65536KB OK");


await sleep(800);



await write("");


await write("Checking storage devices...");


await write("PRIMARY DRIVE ........ FAILED","red");


await write("SECONDARY DRIVE ...... FAILED","red");


await sleep(700);



await write("");


await write("RECOVERY PARTITION FOUND","green");


await sleep(1000);



await write("");


await write("MOUNTING UNKNOWN DATA...");


await sleep(1500);



await write("");


await write("SYSTEM FAILURE","red");


await write("NO OPERATING SYSTEM FOUND","red");


await sleep(1500);



await write("");


await write("Attempting emergency recovery...");


await sleep(1200);



await write("SEARCHING AVAILABLE ARCHIVES...");


await sleep(1500);



await write("");


await write("ARCHIVE_01 ......... CORRUPTED");


await write("ARCHIVE_02 ......... EMPTY");


await write("ARCHIVE_03 ......... UNKNOWN");


await sleep(1500);



await write("");


await write("ONE ARCHIVE REMAINS.","yellow");


await sleep(1000);



await write("");


await write("THE SYSTEM DOES NOT REMEMBER IT.","yellow");


await sleep(700);


await write("ANOTHER ARCHIVE DOES.","yellow");


await sleep(2000);



await write("");


await write("RECOVERING METADATA...");


await sleep(2000);



await write("");


await write("NAME: [REDACTED]");


await write("DATE CREATED: 18.06.2024");


await write("LAST MODIFIED: 01.08.2024");


await write("STATUS: LOCKED");


await sleep(2000);



await write("");


await write("ACCESS ATTEMPT REQUIRED");


await sleep(1500);



await write("");


await write("PASSWORD INPUT DISABLED");


await write("REASON: WRITE FAILURE");


await sleep(2000);



await write("");


await write("REDIRECTING TO ARCHIVE LOCATION...");


await sleep(3000);



window.location.href=
"https://ryker-netizen.github.io/VZ_CASE-81/index.html";

}



boot();
