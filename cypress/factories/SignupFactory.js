var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '19991111112',
            address: {
                postalcode: '13010001',
                street: 'Avenida Doutor Moraes Salles',
                number: '1000',
                details: 'Apto 92',
                district: 'Centro',
                city_state: 'Campinas/SP'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}