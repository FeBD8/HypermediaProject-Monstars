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
      title: DataTypes.STRING,
      subtitle: DataTypes.STRING,
      logo: DataTypes.STRING,
      description: DataTypes.TEXT,
      image: DataTypes.STRING,
    },
    {
      underscored: true,
    }
  )
  // Creating the 1 -> N association between Person and Area in which they work
  Person.belongsTo(Area, {
    as: 'WorkingArea',
    foreignKey: {
      name: 'working_area_id',
      allowNull: false,
    },
  })
  // Creating the 1 -> N association between Person and Area for which they are responsible
  Person.belongsTo(Area, {
    as: 'AreaResp',
    foreignKey: 'responsible_of_area_id',
  })
  // Creating the 1 -> 1 association between Person and Product for which they are the reference for the assistance
  Product.belongsTo(Person, {
    as: 'ReferenceAssistant',
    foreignKey: {
      name: 'reference_assistant_id',
      allowNull: false,
    },
  })
  // Creating the 1 -> 1 association between Person and Product for which he/she is the product manager
  Product.belongsTo(Person, {
    as: 'ProductManager',
    foreignKey: {
      name: 'product_manager_id',
      allowNull: false,
    },
  })
  // Creating the 1 -> N association between Product and Area in which it belongs to
  Area.hasMany(Product, {
    as: 'Area',
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
    shortcut_image:
      'https://www.moviri.com/wp-content/uploads/2020/11/bl-icon-security@2x.png',
  })
  const area2 = await Area.create({
    name: 'Artificial Intelligence',
    description: '',
    image: '',
    shortcut_image:
      'https://cdn0.iconfinder.com/data/icons/adobe-application/100/Ai_Icon-256.png',
  })
  // Create 3 Person
  const person1 = await Person.create({
    name: 'Luca',
    surname: 'Colombo',
    role: 'Software Engineer',
    image:
      'https://www.moviri.com/wp-content/uploads/2020/12/matteo_fabiano2.jpg',
    working_area_id: area1.id,
    responsible_of_area_id: area1.id,
  })
  const person2 = await Person.create({
    name: 'Sara',
    surname: 'Bianchi',
    role: 'Security Expert',
    image:
      'https://www.moviri.com/wp-content/uploads/2020/12/Camilla-Stefani-1.jpg',
    working_area_id: area1.id,
  })
  const person3 = await Person.create({
    name: 'Riccardo',
    surname: 'Zanaboni',
    role: 'AI Expert',
    image: 'https://www.moviri.com/wp-content/uploads/2021/04/enrico-maini.jpg',
    working_area_id: area2.id,
    responsible_of_area_id: area2.id,
  })
  const person4 = await Person.create({
    name: 'Fabio',
    surname: 'Rossanigo',
    role: 'Data Scientist',
    image:
      'https://www.moviri.com/wp-content/uploads/2020/12/Fabio-Violante-1.jpg',
    working_area_id: area2.id,
    responsible_of_area_id: area2.id,
  })

  // Create 2 Products
  const product1 = await Product.create({
    title: 'Cleafy',
    subtitle: 'At your side, fighting against online fraud.',
    logo: 'https://www.moviri.com/wp-content/uploads/elementor/thumbs/Cleafy-Logo-p4x9d3ef1luvofs4qsvcwnjxn2iil5g091wbunncw0.png',
    description:
      'Cleafy helps banks and financial institutions scale-up their fight against online fraud. Cleafy is the first solution to introduce full detection and response in online fraud prevention. A revolutionary technology that combines the most advanced fraud detection capabilities, with the possibility to set-up automated responses. All in one central platform.',
    image:
      'https://www.moviri.com/wp-content/uploads/2021/03/cleafy-dashboard.png',
    area_id: area1.id,
    product_manager_id: person1.id,
    reference_assistant_id: person4.id,
  })
  const product2 = await Product.create({
    title: 'Akamas',
    subtitle: 'The Autonomous Performance Optimization AI.',
    logo: 'https://www.moviri.com/wp-content/uploads/2020/11/akamas.png',
    description:
      'Akamas is a new, category-defining software that delivers autonomous and continuous performance optimization, powered by machine learning, extracting unprecedented levels of performance and cost savings from technology stacks.',
    image:
      'https://www.moviri.com/wp-content/uploads/2020/11/showcase-akamas1.png',
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
