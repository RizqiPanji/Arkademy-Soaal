let biodata = {
    name : "Muhammad Rizqi Panji Utama",
    age : 24,
    address : "Grand Cikarang City, Jl. Arjuna Utama , Cikarang Utara",
    hobbies : ["coding", "futsal", "game", "read Qur\'an"], //array
    is_married : false,

    list_school : [{                    //array of obj
        keyName : "SDIT An-Nur",
        year_in : 2001,
        year_out : 2007,
        major : null,
    }, {
        keyName : "SMPN 04 Cikarang Utara" ,
        year_in : 2007,
        year_out : 2010,
        major : null,
    }, {
        keyName : "SMK Informatika Amanah Bangsa",
        year_in : 2010,
        year_out: 2013,
        major : "Teknik Komputer Jaringan",
    }, {
        keyName : "Pelita Bangsa University",
        year_in : 2014,
        year_out : 2018,
        major : "Teknik Informatika",

    }],

    skills : [{
        skill_name : "HTML",
        level : "Beginner",
    },{
        skill_name : "CSS",
        level : "Beginner",
    },{
        skill_name : "Javascript",
        level : "Beginner",
    },{
        skill_name : "MySql",
        level : "Beginner",
    }],

    interest_in_coding : true, 

};

function halo(namaLengkap, umur){
    console.log('Hi.. :) Nama Saya ' + namaLengkap + ' dan umur saya ' + umur + ' tahun. dibawah ini adalah biodata saya ber-Formatkan JSON');
}

halo(biodata.name, biodata.age);
console.log(JSON.stringify(biodata));

let output = document.getElementById('output');
output.innerHTML = JSON.stringify(biodata);