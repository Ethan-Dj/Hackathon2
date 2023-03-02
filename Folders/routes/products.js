
const {_getAllImages,
    _getAllLocations,
    _addImage,
    _addLocation
    } = require('../controllers/products.js')

const express = require('express')

const router = express.Router()

router.get('/image', _getAllImages)
router.post('/image', _addImage)

router.get('/location', _getAllLocations)
router.post('/location', _addLocation)

module.exports = router

