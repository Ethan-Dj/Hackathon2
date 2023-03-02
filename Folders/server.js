const express = require("express")
const cors = require('cors')
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const multer  = require('multer')

const products_router = require('./routes/products.js')

dotenv.config()
const app = express()
app.use(cors())

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.listen(process.env.PORT, () => {
    console.log(`${process.env.PORT}`) // app exectures when local host 5008 is run
})

app.use("/",express.static(__dirname + "/public"))

console.log("working")

app.use('/api/', products_router)

const upload = multer({ dest: 'uploads/' })

app.post('/profile', upload.single('image'), function (req, res, next) {
    console.log("here")
    console.log(req.file)
})











































































// app.get('/ethan/dj',(req,res)=>{ // can name this as I please for where the website goes
//     res.json(products) // which json file do I want to display on the page
// })

// app.get('/ethan/dj/:id',(req,res)=>{ 
//     const product_id = req.params.id
//     const product = products.find(item => {
//         return item.id == product_id
//     })
//     res.json(product)
// })


// app.get('/search',(req,res) => {
//     const name = req.query.q
//     const end = products.filter(item => {
//         return item.name.toLowerCase().includes(req.query.q)
//     })
//     res.json(end)
// })

// app.post("/product", (req,res)=>{
//     console.log("product")
//     const newProduct = {
//         id: products.length+1,
//         name: req.body.name,
//         price: req.body.price
//     }
//     products.push(newProduct)
//     console.log(products)
//     res.status(200).json(products)
//     //careful, only eed res once!!
// })

// app.put("/here/:id", (req,res) => {
//     const id = req.params.id
//     const index = products.findIndex(elem => elem.id == id)
//     console.log("here")
//     if (index === -1){
//         return res.status(404).json({msg:"not found"})
//     }
//     const updatedProduct = {
//         id : products[index].id,
//         name: req.body.name,
//         price: req.body.price
//     }
//     products[index] = updatedProduct
//     res.status(200).json(products)
// })

// be very careful with the spelling of the path 
// and that the postman is configured to the correct type



