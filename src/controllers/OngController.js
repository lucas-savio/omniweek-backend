const connection = require('../database/connection');
const genUid = require('../utils/genUid');

module.exports = {
  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;
    const id = genUid();
    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    })
    return response.json({ id });
  },

  async list(request, response) {
    const ongs = await connection('ongs').select('*');

    return response.json(ongs);
  }
}