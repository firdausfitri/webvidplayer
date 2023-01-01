

// // //standard function
// // function getDetailHuman() {
// //     i+=1;
// //     if(i>5){
// //         console.log('lebih dari 5 kali diklik')
// //     } else {
// //         console.log('kuota klik masih ada')
// //     }

// // }

// // //arrow function
// // const getDetailHuman2 = () => {
// //     i+=1
// //     i>5 ? console.log('lebih dari 5 kali bro human2') : console.log('kuota masih ada')
// // }

// const mahasiswa = [
//     {
//         nama: "firdaus fitri",
//         alamat: "jalan kb ",
//         usia: 23,
//         Semester: 3
//     } ,
//     {
//         nama: "dauss",
//         alamat: "jalan kl ",
//         usia: 29,
//         Semester: 8
//     }
// ]

// function getDetailData() {
//     // mahasiswa.map(function(result,i){
//     //     console.table(result)
//     // })

//     mahasiswa.forEach(result => {
//         console.log(result)
//     });
//     //console.log(`data yang anda cari adalah: ${mahasiswa.usia1}`)
// }

//bawah ni next phase utk class
class Haiwan {
    warna
    keahlian
    constructor(nama){
        this.nama =nama
    }

    set newColor(color) {
        this.warna = color
    }

    set newSkill(skill){
        this.keahlian = skill
    }

    get detail() {
        return`Hi saya ${this.nama}, saya berwarna ${this.warna} dan saya pandai ${this.keahlian}`
    }
}


const kucing = new Haiwan('jojo')
kucing.newColor = "red"
kucing.newSkill = "menggonggong"
console.log(kucing.detail)