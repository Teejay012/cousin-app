console.log('hello')

const searchInputValue = document.getElementById('searchInput')
const buttonSearch = document.getElementById('buttonSearch')
const imageDiv = document.getElementById('image')
const infoDiv = document.getElementById('info')


let afo = "img/afo.PNG"
let fisayo = "img/fisayo.PNG"
let joshua = "img/joshua.PNG"
let olexy = "img/olexy.PNG"
let teejay = "img/me.PNG"
let temi = "img/temi.jpg"



console.log(afo)

let people = [
    {name: 'afolabi',
    age: 22,
    sex: 'male',
    image: afo,
    nickName: 'free guy',
    hubbie: 'programming'
    },
    {name: 'fisayo',
    age: 20,
    sex: 'female',
    image: fisayo,
    nickName: 'fisi bae',
    hubbie: 'content creating'
    },
    {name: 'joshua',
    age: 18,
    sex: 'male',
    image: joshua,
    nickName: 'king marvel',
    hubbie: 'architechture'
    },
    {name: 'teejay',
    age: 18,
    sex: 'male',
    image: teejay,
    nickName: 'tee jay',
    hubbie: 'programming & drawing'
    },
    {name: 'olaoluwa',
    age: 17,
    sex: 'male',
    image: olexy,
    nickName: 'olexy',
    hubbie: 'drawing & robotics'
    },
    {name: 'temitope',
    age: 13,
    sex: 'female',
    image: temi,
    nickName: 'temi tee',
    hubbie: 'crying & content creating'
    }
]

function getRandom(){
    let index = Math.floor(Math.random() * people.length)
    let result = people[index]
    // console.log(result)

    imageDiv.innerHTML = `<img src=${result.image} width=70%;
    height=40%;
    margin=30px 0;/>`
    infoDiv.innerHTML = `<p>NAME: ${result.name}</p>`
    infoDiv.innerHTML += `<p>AGE: ${result.age}</p>`
    infoDiv.innerHTML += `<p>SEX: ${result.sex}</p>`
    infoDiv.innerHTML += `<p>NICK NAME: ${result.nickName}</p>`
    infoDiv.innerHTML += `<p>HUBBIE: ${result.hubbie}</p>`
}

// let arr = [1,'a',3,'c',5,'C','G'].join(',').replace(/[ACg]/gi, '')
// console.log(arr)


function searchPerson(){
    let search = searchInputValue.value

    if(search == 'joshua'){
        // console.log(people)
        imageDiv.innerHTML = `<img src=${people[2].image} width=70%;
    height=40%;
    margin=30px 0;/>`
    infoDiv.innerHTML = `<p>NAME: ${people[2].name}</p>`
    infoDiv.innerHTML += `<p>AGE: ${people[2].age}</p>`
    infoDiv.innerHTML += `<p>SEX: ${people[2].sex}</p>`
    infoDiv.innerHTML += `<p>NICK NAME: ${people[2].nickName}</p>`
    infoDiv.innerHTML += `<p>HUBBIE: ${people[2].hubbie}</p>`
    }
    else if(search == 'afolabi'){
        // console.log(people)
        imageDiv.innerHTML = `<img src=${people[0].image} width=70%;
    height=40%;
    margin=30px 0;/>`
    infoDiv.innerHTML = `<p>NAME: ${people[0].name}</p>`
    infoDiv.innerHTML += `<p>AGE: ${people[0].age}</p>`
    infoDiv.innerHTML += `<p>SEX: ${people[0].sex}</p>`
    infoDiv.innerHTML += `<p>NICK NAME: ${people[0].nickName}</p>`
    infoDiv.innerHTML += `<p>HUBBIE: ${people[0].hubbie}</p>`
    }
    else if(search == 'fisayo'){
        // console.log(people)
        imageDiv.innerHTML = `<img src=${people[1].image} width=70%;
    height=40%;
    margin=30px 0;/>`
    infoDiv.innerHTML = `<p>NAME: ${people[1].name}</p>`
    infoDiv.innerHTML += `<p>AGE: ${people[1].age}</p>`
    infoDiv.innerHTML += `<p>SEX: ${people[1].sex}</p>`
    infoDiv.innerHTML += `<p>NICK NAME: ${people[1].nickName}</p>`
    infoDiv.innerHTML += `<p>HUBBIE: ${people[1].hubbie}</p>`
    }
    else if(search == 'olaoluwa'){
        // console.log(people)
        imageDiv.innerHTML = `<img src=${people[4].image} width=70%;
    height=40%;
    margin=30px 0;/>`
    infoDiv.innerHTML = `<p>NAME: ${people[4].name}</p>`
    infoDiv.innerHTML += `<p>AGE: ${people[4].age}</p>`
    infoDiv.innerHTML += `<p>SEX: ${people[4].sex}</p>`
    infoDiv.innerHTML += `<p>NICK NAME: ${people[4].nickName}</p>`
    infoDiv.innerHTML += `<p>HUBBIE: ${people[4].hubbie}</p>`
    }
    else if(search == 'teejay'){
        // console.log(people)
        imageDiv.innerHTML = `<img src=${people[3].image} width=70%;
    height=40%;
    margin=30px 0;/>`
    infoDiv.innerHTML = `<p>NAME: ${people[3].name}</p>`
    infoDiv.innerHTML += `<p>AGE: ${people[3].age}</p>`
    infoDiv.innerHTML += `<p>SEX: ${people[3].sex}</p>`
    infoDiv.innerHTML += `<p>NICK NAME: ${people[3].nickName}</p>`
    infoDiv.innerHTML += `<p>HUBBIE: ${people[3].hubbie}</p>`
    }
    else if(search == 'temitope'){
        // console.log(people)
        imageDiv.innerHTML = `<img src=${people[5].image} width=70%;
    height=40%;
    margin=30px 0;/>`
    infoDiv.innerHTML = `<p>NAME: ${people[5].name}</p>`
    infoDiv.innerHTML += `<p>AGE: ${people[5].age}</p>`
    infoDiv.innerHTML += `<p>SEX: ${people[5].sex}</p>`
    infoDiv.innerHTML += `<p>NICK NAME: ${people[5].nickName}</p>`
    infoDiv.innerHTML += `<p>HUBBIE: ${people[5].hubbie}</p>`
    }
}

searchPerson()
