import express from 'express'
import initializeDatabase from '../db-conn'
const app = express()

// We need this one if we send data inside the body as JSON
app.use(express.json())

async function init() {
  // Call the init function that returns the Database
  const db = await initializeDatabase()
  // Let's extract all the objects we need to perform queries inside the endpoints
  const { Person, Area, Product, AreaDetail, ProductDetail } = db._tables
  // API to get all the people
  app.get('/people', async (req, res) => {
    const people = await Person.findAll()
    return res.json(people)
  })
  // API to get all the areas
  app.get('/areas', async (req, res) => {
    const areas = await Area.findAll()
    return res.json(areas)
  })
  // API to get all the products
  app.get('/products', async (req, res) => {
    const products = await Product.findAll()
    return res.json(products)
  })
  // API to get a person by ID.
  // This will return also the Areas
  app.get('/people/:id', async (req, res) => {
    const { id } = req.params
    const person = await Person.findOne({
      where: { id },
      include: [
        {
          model: Area,
          as: 'working_area',
        },
        {
          model: Area,
          as: 'manager_of_area',
        },
        {
          model: Product,
          as: 'reference_assistant_of',
        },
        {
          model: Product,
          as: 'product_manager_of',
        },
      ],
    })
    return res.json(person)
  })
  // API to get a product by ID.
  // This will return also the People
  app.get('/products/:id', async (req, res) => {
    const { id } = req.params
    const product = await Product.findOne({
      where: { id },
      include: [
        {
          model: Person,
          as: 'reference_assistant',
        },
        {
          model: Person,
          as: 'product_manager',
        },
        {
          model: ProductDetail,
          as: 'product_details',
        },
        {
          model: Area,
          as: 'membership_area',
        },
      ],
    })
    return res.json(product)
  })
  // API to get an area by ID.
  // This will return also the Products, the Details and the People
  app.get('/areas/:id', async (req, res) => {
    const { id } = req.params
    const area = await Area.findOne({
      where: { id },
      include: [
        {
          model: Product,
          as: 'products',
        },
        {
          model: AreaDetail,
          as: 'area_details',
        },
        {
          model: Person,
          as: 'employees',
        },
        {
          model: Person,
          as: 'manager',
        },
      ],
    })
    return res.json(area)
  })
}

init()

export default app
