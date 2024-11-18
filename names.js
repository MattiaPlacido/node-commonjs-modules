// names.js
// Crea una funzione che accetta due parametri: firstName, lastName.
// La funzione restituisce un oggetto con le proprietà firstName e lastName.
// Esporta la funzione dal file.

class fullName {
  firstName;
  lastName;

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  addMiddleName(middleName) {
    this.middleName = middleName;
  }
}

const assignName = (firstName, lastName) => {
  const newName = new fullName(firstName, lastName);
  return newName;
};

module.exports = {
  assignName,
};
