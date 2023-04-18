var cursos = require('./cursos_usuario');

cursos.forEach(function (cursos) {
    console.log(cursos);
});


const{faker} = require('@faker-js/faker');

function createRandomUser() {
    return {
      userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    };
  }

const user = createRandomUser();
console.log (user)