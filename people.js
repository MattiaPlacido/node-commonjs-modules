// people.js
// Importa la tua funzione da names.js
// Importa la tua funzione da hobbies.js
// Crea una funzione che non ha parametri.
// All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.
// La funzione dovrebbe restituisce un oggetto con tre proprietà: firstName, lastName, hobbies.

//oggetto persona
class person {
  fullName;
  hobbies;
  constructor(fullName, hobbies) {
    this.fullName = fullName;
    this.hobbies = hobbies;
  }

  description() {
    if (this.fullName.middleName) {
      return `Nome : ${this.fullName.firstName} 
Secondo Nome : ${this.fullName.middleName} 
Cognome : ${this.fullName.lastName} 
Interessi : ${this.hobbies.description()}
        `;
    }
    return `Nome : ${this.fullName.firstName} 
Cognome : ${this.fullName.lastName} 
Interessi : ${this.hobbies.description()}
`;
  }
}

//importo i moduli dagli altri file
const { assignName } = require("./names");
const { assignHobbies } = require("./hobbies");

//funzione per creare la persona
const createPerson = () => {
  const newPerson = new person(
    assignName("Marco", "Polo"),
    assignHobbies("Palestra", "Musica", "D&D")
  );
  return newPerson;
};

const personaGenerica = createPerson();
console.log(personaGenerica.description());

personaGenerica.fullName.addMiddleName("Mario");
console.log(personaGenerica.description());
