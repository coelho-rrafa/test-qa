/// <reference types="Cypress"/>

const { doneElem } = require('./elements');

class donePage {
  validatePage() {
    cy.url().should('contain', doneElem.pageUrl);
  }

  validateTask(randomTask) {
    cy.get(doneElem.doneList).should('contain', randomTask);
  }

  returnToDo() {
    cy.get(doneElem.btnToDo).click();
  }
}

export default new donePage();
