const { updateLocation } = require('../service/location.service');

const updateUserLocation = async (req, res) => {
  const { userId } = req.params;
  const { latitude, longitude } = req.body;

  console.log(latitude, longitude, userId);
  if (
    !userId ||
    latitude == null ||
    longitude == null ||
    latitude === '' ||
    longitude === '' ||
    isNaN(latitude) ||
    isNaN(longitude)
  ) {
    return res
      .status(400)
      .send('Por favor, proporciona userId, latitude y longitude');
  }

  try {
    const results = await updateLocation(userId, latitude, longitude);
    res.status(200).send(results);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al actualizar la ubicación');
  }
};

module.exports = {
  updateUserLocation,
};
