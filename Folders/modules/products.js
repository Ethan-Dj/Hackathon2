const db = require('../config/db.js')


const getAllImages = () => {
    return db('images5')
    .select('id','img')
    .orderBy('id','desc')
}

const getAllLocations = () => {
    return db('locations5')
    .select('long','lat')
    // .orderBy('id DESC')
}

const addImage = (image) => {
    return db('images')
    .insert(image)
}

const addLocation = (location) => {
    location.lat = parseFloat(location.lat);
    location.long = parseFloat(location.long);
    return db('locations2').insert(location);
  };

module.exports = {
    getAllImages,
    getAllLocations,
    addImage,
    addLocation
}