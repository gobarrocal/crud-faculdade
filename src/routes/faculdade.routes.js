const faculdadeControle = require ('../controllers/faculdade.controller')

async function routes (fastify) {

    fastify.get('/', faculdadeControle.getAllFaculdades)
    fastify.get('/:id', faculdadeControle.getFaculdadeById)
    fastify.put('/', faculdadeControle.updateFaculdade)
    fastify.delete('/:id', faculdadeControle.deleteFaculdade)
    fastify.post('/:id', faculdadeControle.createFaculdade)

    module.exports = routes;
}


