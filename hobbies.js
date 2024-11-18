// hobbies.js
// Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree.
// La funzione restituisce un oggetto con una proprietà hobbies, che è un array di hobby.
// Esporta la funzione dal file.

class interests {
  hobbies;

  constructor(hobbyOne, hobbyTwo, hobbyThree) {
    this.hobbies = [hobbyOne, hobbyTwo, hobbyThree];
  }

  addHobby(hobby) {
    this.hobbies.push(hobby);
  }

  description() {
    let output = ``;

    this.hobbies.forEach((element, index) => {
      index === 0 ? (output = element) : (output += " - " + element);
    });

    return output;
  }
}

const assignHobbies = (hobbyOne, hobbyTwo, hobbyThree) => {
  const newHobbies = new interests(hobbyOne, hobbyTwo, hobbyThree);
  return newHobbies;
};

module.exports = {
  assignHobbies,
};
