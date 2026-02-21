const readline = require('readline');

const Char = {
    Sova:{
        Role:"Initiator",
        Ability:"Recon Bolt, Shock Bolt, Owl Drone, Hunter's Fury"
    },
    Jett:{
        Role:"Duelist",
        Ability:"Cloudburst, Updraft, Blade Storm"
    },
    Cypher:{
        Role:"Sentinel",
        Ability:"Cyber Cage, Spy Camera, Trapwire, Neural Theft"
    },
    Brimstone:{
        Role:"Controller",
        Ability:"Incendiary, Sky Smoke, Stim Beacon, Orbital Strike"
    },
    Killjoy:{
        Role:"Sentinel",
        Ability:"Nanoswarm, Alarmbot, Lockdown"
    }
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Pilih Karakter (Sova,Jett,Cypher,Brimstone,Killjoy): ",(charPilihan) =>{
    charPilihan = charPilihan.trim();
    if(Char.hasOwnProperty(charPilihan)){
        console.log(`Deskripsi Karakter ${charPilihan}:`);
        console.log(`Role: ${Char[charPilihan].Role}`);
        console.log(`Ability: ${Char[charPilihan].Ability}`);
    } else{
        console.log(`Karakter ${charPilihan} tidak tersedia.`);
    }
    rl.close();
});