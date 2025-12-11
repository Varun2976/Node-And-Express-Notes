// Encapsulated codes

const info = require('./Names.js');
const Intro = (Fname , surname , society) => {
    console.log(`Hi my name is ${Fname} and my surname is ${surname} and i live at ${society}.`);
}

Intro(info.Fname,info.surname,info.society);
