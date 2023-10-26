import { faker } from "@faker-js/faker"
const stafflist = [{
    key:0,
    image: faker.internet.avatar(200,200),
    name: faker.person.firstName(),
    position: faker.person.jobTitle(),
    description: faker.commerce.productDescription(),
    ratings: faker.helpers.rangeToNumber({min: 1, max: 5}),
},
{
    key:1,
    image: faker.internet.avatar(300,200),
    name: faker.person.firstName(),
    name1: faker.person.lastName(),
    position: faker.person.jobTitle(),
    description: faker.commerce.productDescription(),
    ratings: faker.helpers.rangeToNumber({min: 1, max: 5}),
},
{
    key:2,
    image: faker.internet.avatar(),
    name: faker.person.firstName(),
    name1: faker.person.lastName(),
    position: faker.person.jobTitle(),
    description: faker.commerce.productDescription(),
    ratings: faker.helpers.rangeToNumber({min: 1, max: 5}),
},

]

export default stafflist