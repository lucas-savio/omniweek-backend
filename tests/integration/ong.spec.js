const req = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {

  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  })

  afterAll(async ()=> {
    await connection.destroy();
  })

  it('should be able to create a new ONG', async () => {
    const res = await req(app)
      .post('/ongs')
      .send({
        name: 'Paot',
	      email: 'contato@paot.com.br',
	      whatsapp: '21983801422',
	      city: 'Duque de Caxias',
	      uf: 'RJ'
      })

      expect(res.body).toHaveProperty('id');
      expect(res.body.id).toHaveLength(8);
  });
});