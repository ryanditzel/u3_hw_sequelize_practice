const { manufacturer, manu_models, owners, sequelize } = require('./models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

function stringify(data) {
  console.log(JSON.stringify(data, null, 2))
}

/////////MANUFACTURER
const findAllManufacturers = async () => {
    const findAllManu = await manufacturer.findAll()
    console.log(findAllManu)
}

const createNewManufacturer = async () => {
    const createManu = await manufacturer.create({
        manu_name: 'Bugatti',
        origin: 'Italy'
    })
    console.log(createManu)
}

const deleteWhere = async () => {
    const deleteManu = await manufacturer.destroy({
      where: {manu_name: 'Porsche'}
    })
    console.log(deleteManu)
}

const updateManu = async () => {
    const users = await manufacturer.update(
      {origin: 'Germany'},
      {where: {origin: 'Italy'}}
    )
    console.log(users)
}

/////////MANUFACTURER MODELS
const findAllModels = async () => {
    const findModels = await manu_models.findAll()
    console.log(findModels)
}

const createNewModem = async () => {
    const createModel = await manu_models.create({
        model_name: 'F1',
        origin: 'United Kingdom'
    })
    console.log(createModel)
}

const deleteModel = async () => {
    const deleteAModel = await manu_models.destroy({
      model_name: 'Pista'
    })
    console.log(deleteAModel)
}

const updateDrivetrain = async () => {
    const drivetrainChange = await manu_models.update(
      {drivetrain: 'AWD'},
      {where: {drivetrain: 'RWD'}}
    )
    console.log(drivetrainChange)
}

/////////OWNERS
const findAllOwners = async () => {
    const owners = await Owners.findAll()
    console.log(owners)
}
  
const createNewOwner = async () => {
    const newOwner = await Owners.create({
        firstName: 'Jane', lastName: 'Doe', 
    })
    console.log(newOwner)
}
  
const deleteOwnerWhere = async () => {
    const delOwner = await Owners.destroy({
      where: {firstName: 'Jane'}
    })
    console.log(delOwner)
}
  
const updateOwner = async () => {

    const updateOw = await Owners.update(
      {lastName: 'Smith'},
      {where: {lastName: 'Doe'}}
    )
    console.log(updateOw)
}

const run = async () => {
    try {
        await findAllManufacturers()
        await createNewManufacturer()
        await deleteWhere()
        await updateManu()
        await findAllModels()
        await createNewModem()
        await deleteModel()
        await updateDrivetrain()
        await findAllOwners()
        await createNewOwner()
        await deleteOwnerWhere()
        await updateOwner()
    } catch (error) {
    } finally {
      await sequelize.close()

    }
}

run()