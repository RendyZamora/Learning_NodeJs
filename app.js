const yargs = require("yargs")
const { simpanContact, listContact, detailContact, hapusContact } = require("./contacts")

yargs.command({
    command : 'add',
    describe: 'menambahkan kontak baru',
    builder: {
        nama:{
            describe: 'nama lengkap',
            demandOption: true,
            type : 'string'
        },
        email:{
            describe: 'alamat email',
            demandOption: true,
            type : 'string'
        },
        noHp:{
            describe: 'nomor HP',
            demandOption: true,
            type : 'string'
        },
    },
    handler(inpt){
        simpanContact(inpt.nama,inpt.email, inpt.noHp);
    }
}).demandCommand();

yargs.command(
    {
        command : 'list',
        describe: 'menampilkan daftar identitas',
        handler(){
            listContact()
        }
    }
)

yargs.command(
    {
    command : 'detail',
    describe: 'menampilkan rincian identitas berdasarkan nama',
    builder: {
        nama:{
            describe: 'nama lengkap',
            demandOption: true,
            type : 'string'
        }
    },
    handler(arg){
        detailContact(arg.nama);
    }
    }
)
yargs.command(
    {
    command : 'delete',
    describe: 'menghapus data identitas berdasarkan nama',
    builder: {
        nama:{
            describe: 'nama lengkap',
            demandOption: true,
            type : 'string'
        }
    },
    handler(arg){
        hapusContact(arg.nama);
    }
    }
)

yargs.parse()
