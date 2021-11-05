const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const server = require('../../src/api/app');

chai.use(chaiHttp);

const { expect } = chai;

describe('POST /task/create', () => {
  describe('When created a task', () => {
    let response = {};
    const DBServer = new MongoMemoryServer();

    before(async () => {
      const OPTIONS = { useNewUrlParser: true, useUnifiedTopology: true };
      const mockedURL = await DBServer.getUri();
      const mockedConnection = await MongoClient.connect(mockedURL, OPTIONS);
      
      sinon.stub(MongoClient, 'connect').resolves(mockedConnection);

      response = await chai.request(server)
        .post('/task/create')
        .send({
          title: 'Limpar a casa',
          description: 'Começando pela cozinha!',
        });
    });

    after(async () => {
      MongoClient.connect.restore();
      await DBServer.stop();
    });

    it('Return status code 201', () => {
      expect(response).to.have.status(201);
    });

    it('Return a object', () => {
      expect(response.body).to.be.a('object');
    });

    it('Return a object with the correct properties', () => {
      expect(response.body).to.have.all.keys('_id', 'title', 'description', 'status', 'createdAt');
    });

    it('Return a object with the correct values', () => {
      expect(response.body.title).to.be.equal('Limpar a casa');
      expect(response.body.description).to.be.equal('Começando pela cozinha!');
    })
  });
  
});