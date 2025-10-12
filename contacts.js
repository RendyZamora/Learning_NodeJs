const readline = require("readline")
const fs = require('fs')

// const rl = readline.createInterface(
//     {
//         input: process.stdin,
//         output: process.stdout
//     }
// )

const pathdir = './data';
if (!fs.existsSync(pathdir)){
    fs.mkdirSync(pathdir)
}

const loadContact = ()=>{
    const file = fs.readFileSync('data/contacts.json', "utf8");
    const contacts = JSON.parse(file);
    return contacts
}

const simpanContact = (nama, email, noHp)=>{
    const contact = {nama, email, noHp}
    const contacts = loadContact()

    contacts.push(contact)
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))

    console.log(`Data ${nama} berhasil ditambahkan`)

    // rl.close()
}

const listContact = ()=>{
    const contacts = loadContact();
    console.log("Daftar Identitas :");
    contacts.forEach((contact,i) => {
        console.log(`${i+1}. ${contact.nama}--${contact.noHp}`)
    });
}

const detailContact = (nama) =>{
    const contacts= loadContact();
    const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase());
    if(!contact){
        console.log(`${nama} tidak ada didalam daftar`);
        return false
    } 
   console.log(`nama : ${contact.nama}, email : ${contact.email}, noHp : ${contact.noHp}`)
}

const hapusContact = (nama)=>{
    const contacts = loadContact();
    const newContact = contacts.filter((contact)=>
        {contact.nama.toLowerCase() !== nama.toLowerCase()}
);
    if(contacts.length === newContact.length){
        console.log(`Data ${nama} tidak ditemukan`)
        return false;
    }
    console.log(newContact)
    fs.writeFileSync('data/contacts.json',JSON.stringify(newContact));
    console.log(`Data ${nama} berhasil dihapus`)
}



module.exports = {
    simpanContact, listContact, detailContact, hapusContact
}