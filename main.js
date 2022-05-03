//create creatBreedList function
//pass in breedList as parameter
//use getElementById to get ("breed") innerHTML
//use template literals to create dog breed drop down
//use Object class and keys methos to map breed
//add .join to make a list



async function start() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all')
        const data = await response.json();

        createBreedList(data.message);
    } catch (error) {
        console.error(error);
    }

}

start();

function createBreedList(breedList) {
    document.querySelector('#breed').innerHTML = 
    `
    <select onchange="loadByBreed (this.value)">
    <option> Choose a dog breed </option>
    ${Object.keys(breedList).map(function (breed) {
        return `<option>${breed}</option>`
    }).join('')}
    </select>
    `
}


//add async function that responds to dog breed 
//check with alert
//set const response equal to await fetch with api
//set const data equal to await response.json()
//console.log(data)

async function loadByBreed(breed) {
    try {
        if(breed !== "Choose a dog breed") {
            const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
            const data = await response.json();

            document.querySelector('#dogPic').innerHTML = `<img src = "${data.message[0]}">`;
        }
    } catch (error) {
        console.error(error);
    }
}