/// <reference types="Cypress"/>
import fakerBr from 'faker-br';
import toDoPage from '../pages/toDoPage';
import donePage from '../pages/donePage';

describe('Testes Aplicação To Do', () => {
  const randomTask = fakerBr.random.word();

  beforeEach(() => {
    toDoPage.accessAndValidatePage();
  });

  it('Adicionar Task na lista To Do', () => {
    toDoPage.inputTask(randomTask);
  });

  it('Adicionar Múltiplas tasks', () => {
    let i = 0;

    do {
      i += 1;
      const randomTask = fakerBr.random.word();
      toDoPage.inputTask(randomTask);
    } while (i < 5);
  });

  it('Remover Task da lista To Do', () => {
    toDoPage.inputTask(randomTask);
    toDoPage.removeTask(randomTask);
  });

  it('Remover Múltiplas tasks', () => {
    let i = 0;
    let count = 0;
    do {
      i += 1;
      const randomTask = fakerBr.random.word();
      toDoPage.inputTask(randomTask);
    } while (i < 5);

    do {
      count += 1;
      toDoPage.removeMultiTask();
    } while (count < 5);

    toDoPage.validateToDoEmptyList();
  });

  it('Adicionar Task a lista Done', () => {
    toDoPage.inputTask(randomTask);
    toDoPage.completeTask(randomTask);
    donePage.validatePage();
    donePage.validateTask(randomTask);
  });

  it('Adicionar Múltiplas Tarefas a lista Done', () => {
    let i = 0;
    do {
      i += 1;
      const randomTask = fakerBr.random.word();
      toDoPage.inputTask(randomTask);
      toDoPage.completeTask(randomTask);
      donePage.validatePage();
      donePage.validateTask(randomTask);
      donePage.returnToDo();
    } while (i < 5);

    toDoPage.goToDone();
  });
});
