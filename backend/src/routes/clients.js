const express = require('express');
const router = express.Router();

const Client = require('../models/clients');

router.get('/', async (req, res) => {
    const clients = await Client.find();
    res.json(clients);
});

router.get('/:id', async (req, res) => {
    const client = await Client.findById(req.params.id);
    res.json(client);
});

router.post('/', async (req, res) => {
    const { name, lastName, email, address } = req.body;
    const client = new Client({ name, lastName, email, address });
    await client.save();
    res.json({
        status: 'Client saved'
    })
});

router.put('/:id', async (req, res) => {
    const { name, lastName, email, address } = req.body;
    const newClient = { name, lastName, email, address };
    await Client.findByIdAndUpdate(req.params.id, newClient);
    res.json('Client updated');
})

router.delete('/:id', async (req, res) => {
    await Client.findByIdAndRemove(req.params.id);
    res.json('Client deleted');
})

module.exports = router;
