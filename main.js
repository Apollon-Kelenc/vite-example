import "./style.css";
import Chance from "chance";

const randomAvatar = chance.avatar();
const randomName = chance.name();
const randomEmail = chance.email();
const randomPhoneNumber = chance.phone();
const randomProfession = chance.profession();
const randomYear = chance.year({ min: 1940, max: 2000 });
const randomCity = chance.city();
const randomAnimal = chance.animal();
const randomNumber = chance.integer({ min: 1, max: 1000 });

document.querySelector("#app").innerHTML = `
  <img src="${randomAvatar}"/>
  <h1>${randomName}</h1>
  <p>${randomEmail}</p>
  <p>${randomPhoneNumber}</p>
  <article> Hey, my Name is ${randomName} and I am a <br> ${randomProfession}. I was born in <br> the year of ${randomYear} in the city of ${randomCity}. <br> My favorite animal is the ${randomAnimal}. But I also love <br> numbers! My favorite one is ${randomNumber}.
`;
