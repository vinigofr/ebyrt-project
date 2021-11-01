const { expect } = require('chai');
const sinon = require('sinon');
const TaskModel = require('../../src/models/index');

describe('Insert a new task on DB', () => {

  // Task example
  const payloadTask = {
    title: 'Tarefa 1',
    description: 'Fazer almoço',
    status: 'pendente',
  };

  describe('When it is successfully inserted', () => {
    it('Return a object', async () => {
      const response = await TaskModel.CreateTask(payloadTask);

      expect(response).to.be.a('object');
    });

    it('To have properties "title, "description", "createdAt", "status"', async () => {
      const response = await TaskModel.CreateTask(payloadTask);

      expect(response).to.have.a.property('title');
      expect(response).to.have.a.property('description');
      expect(response).to.have.a.property('createdAt');
      expect(response).to.have.a.property('status');
    });
  });
});