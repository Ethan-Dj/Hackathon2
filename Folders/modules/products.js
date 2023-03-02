const db = require('../config/db.js')


const getAllImages = () => {
    return db('images')
    .select('id','img')
    .orderBy('id DESC')
}

const getAllLocations = () => {
    return db('locations1')
    .select('id','long','lat')
    // .orderBy('id DESC')
}

const addImage = (image) => {
    return db('images')
    .insert(image)
}

const addLocation = (location) => {
    location.lat = parseFloat(location.lat);
    location.long = parseFloat(location.long);
    return db('locations1').insert(location);
  };

module.exports = {
    getAllImages,
    getAllLocations,
    addImage,
    addLocation

}