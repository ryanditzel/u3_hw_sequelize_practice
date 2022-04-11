const falso = require('@ngneat/falso')

const users = [...Array(5)].map((user) => ({
  firstName: falso.randFirstName(),
  lastName: falso.randLastName(),
  createdAt: new Date(),
  updatedAt: new Date()
}))
users.forEach((u) => {
  let randomIndex = Math.floor(Math.random() * users.length)
  if (randomIndex % 2 === 0) {
    users[randomIndex].firstName = 'Jane'
  } else {
    users[randomIndex].firstName = 'John'
  }
})



module.exports = {
  async up (queryInterface, Sequelize) {

  },

  async down (queryInterface, Sequelize) {

  }
};
