const express = require('express');
const router = express.Router();

const Company = require('../models/companies');

router.get('/', async (req, res) => {
    const companies = await Company.find();
    res.json(companies);
});

router.get('/:id', async (req, res) => {
    const company = await Company.findById(req.params.id);
    res.json(company);
});

router.post('/', async (req, res) => {
    const { name, clients } = req.body;
    const company = new Company({ name, clients });
    await company.save();
    res.json({
        status: 'Company saved'
    })
});

router.put('/:id', async (req, res) => {
    const { name, clients } = req.body;
    const newCompany = { name, clients };
    await Company.findByIdAndUpdate(req.params.id, newCompany);
    res.json('Company updated');
})

router.delete('/:id', async (req, res) => {
    await Company.findByIdAndRemove(req.params.id);
    res.json('Company deleted');
})

module.exports = router;
