const app = require('../src/api/app');

const localhost = 'http://localhost:3000';

describe(`When connect on ${localhost}`, () => {

  before(()=> {
	});

	after(()=> {	
	});

	beforeEach(()=> {
	});

	afterEach(()=> {
	});

  it('Trying GET /ping should return "pong"', async () => {
    const response = await request(app).get('/ping');
    expect(response.status).toBe(200);
    expect(response.body).toBe('pong');
  });
});