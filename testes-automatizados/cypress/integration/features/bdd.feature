#language: pt

Funcionalidade: Adicionar task
    Eu como usuário do aplicativo To Do
    Desejo listar afazeres
    Para que eu possa acompanhar suas evoluções

    @addTask
    Cenário: Adiconar task
    Dado que esteja na página To Do
    Quando preencher o campo com uma task
    E clicar em Adicionar
    Então deverá ser exibida a task na listar

    @addMultiplasTasks
    Cenário: Adicionar Múltiplas tasks
    Dado que esteja na página To Do
    Quando adicionar várias tasks
    Então deverá ser exibida uma lista com todas as tarefas

    @removeTask
    Cenário: Remover task
    Dado que esteja na página To Do
    E possua uma task adicionada
    Quando remover a task adicionada
    Então não deverá exibir tasks na lista

    @removeMultiplasTasks
    Cenário: Remover Múltiplas tasks
    Dado que esteja na página To Do
    E possua uma task adicionada
    Quando remover a task adicionada
    Então deverão ser removidas todas as tarefas

    @concluirTask
    Cenário: Concluir task
    Dado que esteja na página To Do
    E possua uma task adicionada
    Quando clicar em concluir task
    Então deverá ser exibida na lista da página Done

    @concluirMultiplasTasks
    Cenário: Concluir Múltiplas tasks
    Dado que esteja na página To Do
    E que possua mais de uma task adicionada
    Quando clicar em concluir todas
    Então deverá ser exibida uma lista com todas as tarefas na página Done

    @removeTasksConluidas
    Cenário: Remover Tasks Concluídas
    Dado que possua tarefas concluídas
    E que esteja na página Done
    Quando clicar em remover tarefa
    Então deverá ser removida com sucesso