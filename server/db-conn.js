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
      shortcut_image: DataTypes.STRING,
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
  Person.belongsTo(Area, {
    as: "WorkingArea",
    foreignKey: {
      name: 'working_area_id',
      allowNull: false,
    },
  })
  // Creating the 1 -> N association between Person and Area for which they are responsible
  Person.belongsTo(Area, { 
    as: "AreaResp",
    foreignKey: 'responsible_of_area_id' 
  })
  // Creating the 1 -> 1 association between Person and Product for which they are the reference for the assistance
  Product.belongsTo(Person, {
    as: "ReferenceAssistant",
    foreignKey: {
      name: 'reference_assistant_id',
      allowNull: false,
    },
  })
  // Creating the 1 -> 1 association between Person and Product for which he/she is the product manager
  Product.belongsTo(Person, {
    as: "ProductManager",
    foreignKey: {
      name: 'product_manager_id',
      allowNull: false,
    },
  })
  // Creating the 1 -> N association between Product and Area in which it belongs to
  Area.hasMany(Product, {
    as: "Area",
    foreignKey: {
      name: 'area_id',
      allowNull: false,
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
      shortcut_image: ''
    })
    const area2 = await Area.create({
      name: 'Artificial Intelligence',
      description: '',
      image: '',
      shortcut_image: '',
    })
  // Create 3 Person
  const person1 = await Person.create({
    name: 'Luca',
    surname: 'Colombo',
    role: 'Software Engineer',
    image: '',
    working_area_id: area1.id,
    responsible_of_area_id: area1.id,
  })
  const person2 = await Person.create({
    name: 'Riccardo',
    surname: 'Zanaboni',
    role: 'Software Engineer',
    image: '',
    working_area_id: area2.id,
    responsible_of_area_id: area2.id,
  })
  const person3 = await Person.create({
    name: 'Fabio',
    surname: 'Rossanigo',
    role: 'Software Engineer',
    image: '',
    working_area_id: area2.id,
    responsible_of_area_id: area2.id,
  })
  const person4 = await Person.create({
    name: 'Luigi',
    surname: 'Bianchi',
    role: 'Software Engineer',
    image: '',
    working_area_id: area1.id,
  })
  // Create 2 Products
  const product1 = await Product.create({
    name: 'Security manager software',
    description: '',
    image: '',
    area_id: area1.id,
    product_manager_id: person1.id,
    reference_assistant_id: person4.id,
  })
  const product2 = await Product.create({
    name: 'AI Tools',
    description: '',
    image: '',
    area_id: area2.id,
    product_manager_id: person3.id,
    reference_assistant_id: person2.id,
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
