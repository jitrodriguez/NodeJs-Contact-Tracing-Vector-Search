const { upsertLocation } = require('../repository/pinecone.repository');

const updateLocation = async (userId, latitude, longitude) => {
  return await upsertLocation(userId, [latitude, longitude]);
};

module.exports = {
  updateLocation,
};
