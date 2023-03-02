
const {getAllImages, getAllLocations, addImage, addLocation} = require('../modules/products.js')

const _getAllImages = (req,res) => {
    getAllImages() //now a promise
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        console.log(err)
    })
}

const _getAllLocations = (req,res) => {
    getAllLocations() //now a promise
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        console.log(err)
    })
}


const _addImage = (req,res) => {
    addImage(req.body)
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        console.log(err)
    })
}

const _addLocation = (req,res) => {
    addLocation(req.body)
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        console.log(err)
    })
}

module.exports = {
    _getAllImages,
    _getAllLocations,
    _addImage,
    _addLocation
}

