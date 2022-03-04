/// <reference types="Cypress"/>

const { toDoElem } = require('./elements');

class toDoPage {
  accessAndValidatePage() {
    cy.visit(toDoElem.pageUrl);
    cy.url().should('contain', toDoElem.pageUrl);
  }

  inputTask(randomTask) {
    cy.get(toDoElem.inputTask).type(randomTask);
    cy.get(toDoElem.btnSubmit).click();
    cy.get(toDoElem.toDoList).should('contain', randomTask);
  }

  removeTask(randomTask) {
    cy.get(toDoElem.removeTask).click();
    cy.get(toDoElem.toDoList).should('not.contain', randomTask);
  }

  completeTask(randomTask) {
    cy.get(toDoElem.completeTask).click();
    cy.get(toDoElem.toDoList).should('not.contain', randomTask);
    cy.get(toDoElem.btnDone).click();
  }

  removeMultiTask() {
    cy.get(toDoElem.removeTask).click();
    cy.wait(1000);
  }

  validateToDoEmptyList() {
    cy.get(toDoElem.removeTask).should('not.exist');
  }

  goToDone() {
    cy.get(toDoElem.btnDone).click();
  }
}

export default new toDoPage();
