const contacts = require('./contacts')

const main = async ()=>{
    const nama= await contacts.pertanyaan("Masukan nama anda :");
    const noHp= await contacts.pertanyaan("Masukan no Hp :");
    const email= await contacts.pertanyaan("Masukan email anda :");


    contacts.simpanContact(nama, email , noHp)
}

main()

