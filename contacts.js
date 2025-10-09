const readline = require("readline")
const fs = require('fs')

const rl = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
)

const pathdir = './data';
if (!fs.existsSync(pathdir)){
    fs.mkdirSync(pathdir)
}
const pertanyaan = (pesan) =>{
    return new Promise((resolve, rejects)=>{
        rl.question( pesan, (nama) =>{
            resolve(nama)
        })
    })
}
const simpanContact = (nama, email, noHp)=>{
    const contact = {nama, email, noHp}
    const file = fs.readFileSync('data/contacts.json', "utf8");
    const contacts = JSON.parse(file);
    contacts.push(contact)
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))

    rl.close()
}

module.exports = {
    simpanContact,pertanyaan
}