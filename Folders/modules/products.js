const db = require('../config/db.js')


const getAllImages = () => {
    return db('images')
    .select('id','img')
    .orderBy('id DESC')
}

const getAllLocations = () => {
    return db('locations')
    .select('id','long','lat')
    // .orderBy('id DESC')
}

const addImage = (image) = () => {
    return db('images')
    .insert(image)
}

const addLocation = (location) = () => {
    return db('locations')
    .insert(image)
}

module.exports = {
    getAllImages,
    getAllLocations,
    addImage,
    addLocation

}