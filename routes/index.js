const express = require('express');
const router = express.Router();
const services = require('../data/services');
const { body, validationResult } = require('express-validator');

// Home page
router.get('/', (req, res) => {
    res.render('pages/home', {
        title: 'Zen Data - a software company',
        services
    });
});

// Services overview
router.get('/services', (req, res) => {
    res.render('pages/services', {
        title: 'Our Services | Zen Data',
        services
    });
});

// Service detail (by slug)
router.get('/services/:slug', (req, res) => {
    const service = services.find(s => s.slug === req.params.slug);
    if (!service) return res.status(404).render('pages/404', { title: 'Service Not Found' });
    res.render('pages/service-detail', {
        title: `${service.name} | Zen Data`,
        service
    });
});

// About page
router.get('/about', (req, res) => {
    res.render('pages/about', { title: 'About Zen Data' });
});

// Contact form (GET)
router.get('/contact', (req, res) => {
    res.render('pages/contact', { title: 'Contact Zen Data' });
});

// Contact form (POST)
router.post(
    '/contact',
    [
        body('name').trim().isLength({ min: 2 }).withMessage('Name must be at least 2 characters.').escape(),
        body('email').isEmail().withMessage('Please enter a valid email address.').normalizeEmail(),
        body('message').trim().isLength({ min: 10 }).withMessage('Message must be at least 10 characters.').escape(),
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('pages/contact', {
                title: 'Contact Zen Data',
                errors: errors.array(),
                data: req.body
            });
        }
        res.redirect('/thank-you');
    }
);


// Thank You page
router.get('/thank-you', (req, res) => {
    res.render('pages/thank-you', { title: 'Thank You | Zen Data' });
});

// Catch-all for undefined routes (404)
router.use((req, res) => {
    res.status(404).render('pages/404', { title: 'Page Not Found' });
});

module.exports = router;
