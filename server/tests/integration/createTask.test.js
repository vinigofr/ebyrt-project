const chai = require('chai');

const { expect } = chai;

describe('POST /task/create', () => {
  describe('When created a task', () => {
    let response = {};

    it('Return status code 201', () => {
      expect(response).to.have.status(201);
    });

    it('Return a object', () => {
      expect(response.body).to.be.a('object');
    });

    it('Return a object with the correct properties', () => {
      expect(response.body).to.have.all.keys('_id', 'title', 'description', 'status', 'createdAt');
    });
  });
  
});