const { Sequelize, DataTypes } = require('sequelize')

// Development
const db = new Sequelize(
  'postgres://postgres:postgres@localhost:5432/Hypermedia'
)
// Production
// const pg = require('pg')
// pg.defaults.ssl = true
// const db = new Sequelize(process.env.DATABASE_URL, {
//   ssl: true,
//   dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
// })

/**
 * Function to define the structure of the database
 */
function defineDatabaseStructure() {
  const Person = db.define(
    'person',
    {
      name: DataTypes.STRING,
      surname: DataTypes.STRING,
      role: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      underscored: true,
    }
  )
  const Area = db.define(
    'area',
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      image: DataTypes.STRING,
    },
    {
      underscored: true,
    }
  )
  const Product = db.define(
    'product',
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      image: DataTypes.STRING,
    },
    {
      underscored: true,
    }
  )
  // Creating the 1 -> N association between Person and Area in which they work
  Area.hasMany(Person, {
    as: "WorkingArea",
    foreignKey: {
      name: 'working_area_id',
      //allowNull: false,
    },
  })
  // Creating the 1 -> N association between Person and Area for which they are responsible
  Area.hasMany(Person, { 
    as: "AreaResp",
    foreignKey: 'responsible_of_area_id' 
  })
  // Creating the 1 -> 1 association between Person and Product for which they are the reference for the assistance
  Product.belongsTo(Person, {
    as: "ReferenceAssistant",
    foreignKey: {
      name: 'reference_assistant_id',
      //allowNull: false,
    },
  })
  // Creating the 1 -> 1 association between Person and Product for which he/she is the product manager
  Product.belongsTo(Person, {
    as: "ProductManager",
    foreignKey: {
      name: 'product_manager_id',
      //allowNull: false,
    },
  })
  // Creating the 1 -> N association between Product and Area in which it belongs to
  Area.hasMany(Product, {
    as: "Area",
    foreignKey: {
      name: 'area_id',
      //allowNull: false,
    },
  })

  db._tables = {
    Person,
    Area,
    Product,
  }
}

/**
 * Function to insert some fake info in the database
 */
async function insertFakeData() {
  const { Person, Area, Product } = db._tables
    // Create 2 Areas
    const area1 = await Area.create({
      name: 'Security',
      description: '',
      image: '',
    })
    const area2 = await Area.create({
      name: 'Artificial Intelligence',
      description: '',
      image: '',
    })
  // Create 3 Person
  const person1 = await Person.create({
    name: 'Luca',
    surname: 'Colombo',
    role: 'Software Engineer',
    image: '',
    setWorkingArea: area1,
    setAreaResp: area1,
  })
  const person2 = await Person.create({
    name: 'Riccardo',
    surname: 'Zanaboni',
    role: 'Software Engineer',
    image: '',
    setWorkingArea: area2,
    setAreaResp: area2,
  })
  const person3 = await Person.create({
    name: 'Fabio',
    surname: 'Rossanigo',
    role: 'Software Engineer',
    image: '',
    setWorkingArea: area2,
    setAreaResp: area2,
  })
  const person4 = await Person.create({
    name: 'Luigi',
    surname: 'Bianchi',
    role: 'Software Engineer',
    image: '',
    setWorkingArea: area1,
  })
  // Create 2 Products
  const product1 = await Product.create({
    name: 'Security manager software',
    description: '',
    image: '',
    setArea: area1,
    setProductManager: person1,
    setReferenceAssistant: person4,
  })
  const product2 = await Product.create({
    name: 'AI Tools',
    description: '',
    image: '',
    setArea: area2,
    setProductManager: person3,
    setReferenceAssistant: person2,
  })
}

/**
 * Function to initialize the database. This is exported and called in the main api.js file
 */
async function initializeDatabase() {
  // Call the function for the database structure definition
  defineDatabaseStructure()
  // Synchronize Sequelize with the actual database
  await db.sync({ force: true })
  // Call the function to insert some fake data
  await insertFakeData()
  return db
}

export default initializeDatabase
