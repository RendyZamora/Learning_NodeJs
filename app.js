const readline = require("readline")
const fs = require('fs')
const rl = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
)

rl.question("masukan nama anda :", (nama) =>{
    rl.question("masukan noHp anda :", (noHp) =>{
        const contact = {nama, noHp}
        const file = fs.readFileSync('data/contacts.json', "utf8");
        const contacts = JSON.parse(file);
        contacts.push(contact)
        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))

        rl.close()
    })
})

fs.writeFileSync('data/contacts.json','["Heloo World!!"]');
