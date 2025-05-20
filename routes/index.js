const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('pages/home', { title: 'Zen Data - a software company' });
});

router.get('/services', (req, res) => {
    res.render('pages/services', { title: 'Our Services | Zen Data' });
});

router.get('/about', (req, res) => {
    res.render('pages/about', { title: 'About Zen Data' });
});

router.get('/contact', (req, res) => {
    res.render('pages/contact', { title: 'Contact Zen Data' });
});

// Thank You page route
router.get('/thank-you', (req, res) => {
    res.render('pages/thank-you', { title: 'Thank You | Zen Data' });
});

const services = require('../data/services'); // adjust path if needed

router.get('/services/:slug', (req, res) => {
    const service = services.find(s => s.slug === req.params.slug);
    if (!service) return res.status(404).render('pages/404', { title: 'Service Not Found' });
    res.render('pages/service-detail', {
        title: `${service.name} | Zen Data`,
        service
    });
});

// Service detail: Full Stack Web Development
router.get('/services/full-stack-web-development', (req, res) => {
    res.render('pages/service-detail', {
        title: 'Full Stack Web Development | Zen Data',
        service: {
            name: 'Full Stack Web Development',
            description: 'End-to-end solutions using modern JavaScript frameworks, scalable backends, and cloud infrastructure. We design, build, and maintain robust web apps tailored to your needs.',
            points: [
                'Custom web app architecture',
                'API design and integration',
                'Responsive UI/UX',
                'Maintenance & scaling'
            ]
        }
    });
});

// Catch-all for undefined routes
router.use((req, res) => {
    res.status(404).render('pages/404', { title: 'Page Not Found' });
});

module.exports = router;
