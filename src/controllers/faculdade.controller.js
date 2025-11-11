const prisma = require("../plugins/prisma");

async function getAllFaculdades(req, reply) {
  try {
    const faculdades = await prisma.faculdade.findMany();
    return reply.send(faculdades);
  } catch (err) {
    reply.status(500).send({ error: err.message });
  }
}

async function getFaculdadeById(req, reply) {
  const { id } = req.params;
  try {
    const faculdade = await prisma.faculdade.findUnique({
      where: { id: Number(id) },
    });
    if (!faculdade) return;
  } catch (err) {
    reply.status(404).send({ error: err.message });
  }
}

async function createFaculdade(req, reply) {
  const { nome, cidade, estado, tipo } = req.body;
  try {
    const newFaculdade = await prisma.faculdade.create({
      data: { nome, cidade, estado, tipo },
    });
    return reply.status(201).send(newFaculdade);
  } catch (err) {
    reply.status(404).send({ error: err.message });
  }
}

async function updateFaculdade(req, reply) {
  const { id } = req.params;
  try {
    const updateFaculdade = await prisma.faculdade.update({
      where: { id: Number(id) },
      data: { nome, cidade, estado, tipo },
    });
    return reply.send(updateFaculdade);
  } catch (err) {
    reply.status(404).send({ error: err.message });
  }
}

async function deleteFaculdade(req, reply) {
  const { id } = req.params;
  try {
    const deleteFaculdade = await prisma.faculdade.delete({
      where: { id: Number(id) },
      data: { nome, cidade, estado, tipo },
    });
    return reply.status(201).send(deleteFaculdade);
  } catch (err) {
    reply.status(404).send({ error: err.message });
  }
}
