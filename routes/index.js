const express = require('express');
const router = express.Router();
const services = require('../data/services');
const { body, validationResult } = require('express-validator');
const blogRouter = require('./blog');
const nodemailer = require('nodemailer');
const blogPosts = require('../data/blogPosts'); // Skip this if you don’t have blogs
const axios = require('axios');


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

//Blog
router.use('/blog', blogRouter);

// Show contact form
router.get('/contact', (req, res) => {
    res.render('pages/contact', { 
        title: 'Contact Zen Data',
        errors: [],
        data: {}
    });
});

const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secure: false, // use TLS
  auth: {
    user: process.env.CONTACT_EMAIL_USER,
    pass: process.env.CONTACT_EMAIL_PASS
  }
});

// Contact form (POST)
router.post('/contact',
    [
        body('name').trim().isLength({ min: 2 }).escape().withMessage('Name must be at least 2 characters.'),
        body('email').isEmail().normalizeEmail().withMessage('Please enter a valid email address.'),
        body('message').trim().isLength({ min: 10 }).escape().withMessage('Message must be at least 10 characters.')
    ],
    async (req, res) => {
        // 🟢 HONEYPOT CHECK
        if (req.body.website) {
            // If honeypot field filled, silently redirect to thank you page (no email sent)
            return res.redirect('/thank-you');
        }
        
    // 🔐 CAPTCHA CHECK
    const captchaToken = req.body['g-recaptcha-response'];
    if (!captchaToken) {
        return res.render('pages/contact', {
            title: 'Contact Zen Data',
            errors: [{ msg: 'Please complete the CAPTCHA to prove you’re human.' }],
            data: req.body
        });
    }

    try {
        const captchaRes = await axios.post('https://www.google.com/recaptcha/api/siteverify', null, {
            params: {
                secret: process.env.RECAPTCHA_SECRET_KEY,
                response: captchaToken
            }
        });

        if (!captchaRes.data.success) {
            return res.render('pages/contact', {
                title: 'Contact Zen Data',
                errors: [{ msg: 'CAPTCHA failed. Please try again.' }],
                data: req.body
            });
        }
    } catch (err) {
        console.error('CAPTCHA verification failed:', err.message);
        return res.render('pages/contact', {
            title: 'Contact Zen Data',
            errors: [{ msg: 'Error verifying CAPTCHA. Please try again.' }],
            data: req.body
        });
    }


        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('pages/contact', {
                title: 'Contact Zen Data',
                errors: errors.array(),
                data: req.body
            });
        }

        // 1. Email to YOU
        const mailOptions = {
            from: `"${req.body.name}" <${process.env.CONTACT_EMAIL_USER}>`,
            to: process.env.CONTACT_EMAIL_USER,
            replyTo: req.body.email,
            subject: `New Contact Form Submission from ${req.body.name}`,
            text: `
Name: ${req.body.name}
Email: ${req.body.email}
Industry: ${req.body.industry || 'Not specified'}
Message:
${req.body.message}
            `,
            html: `
                <p><strong>Name:</strong> ${req.body.name}</p>
                <p><strong>Email:</strong> ${req.body.email}</p>
                <p><strong>Industry:</strong> ${req.body.industry || 'Not specified'}</p>
                <p><strong>Message:</strong><br>${req.body.message.replace(/\n/g, '<br>')}</p>
            `
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                return res.render('pages/contact', {
                    title: 'Contact Zen Data',
                    errors: [{ msg: 'Sorry, there was an error sending your message. Please try again later.' }],
                    data: req.body
                });
            }

            // 2. Confirmation Email to USER
            const confirmMailOptions = {
                from: `"Zen Data" <${process.env.CONTACT_EMAIL_USER}>`,
                to: req.body.email,
                subject: "We’ve received your message at Zen Data!",
                text: `Hi ${req.body.name},\n\nThank you for reaching out to Zen Data. We've received your message and will get back to you within one business day.\n\nIf your message is urgent, feel free to email us directly at info@zendatasolutions.com.\n\nBest,\nThe Zen Data Team`,
                html: `
                    <p>Hi ${req.body.name},</p>
                    <p>Thank you for reaching out to <strong>Zen Data</strong>. We’ve received your message and will get back to you within one business day.</p>
                    <p>If your message is urgent, feel free to email us directly at <a href="mailto:info@zendatasolutions.com">info@zendatasolutions.com</a>.</p>
                    <p>Best,<br>The Zen Data Team</p>
                `
            };

            transporter.sendMail(confirmMailOptions, (error2, info2) => {
                // We don’t need to show the user if this fails—just log it
                if (error2) {
                    console.error('Error sending confirmation email:', error2);
                }
                // Always redirect to thank you page after main message sent
                res.redirect('/thank-you');
            });
        });
    }
);

// Require your service and blog data


// Dynamic sitemap.xml route
router.get('/sitemap.xml', (req, res) => {
  // Detect environment or hardcode your base URL:
  const baseUrl = process.env.BASE_URL || 'https://www.zendatasolutions.com';

  // Static pages
  let urls = [
    `${baseUrl}/`,
    `${baseUrl}/services`,
    `${baseUrl}/about`,
    `${baseUrl}/contact`
  ];

  // Service detail pages
  if (Array.isArray(services)) {
    services.forEach(service => {
      urls.push(`${baseUrl}/services/${service.slug}`);
    });
  }

  // Blog post pages (optional)
  if (blogPosts && Array.isArray(blogPosts)) {
    blogPosts.forEach(post => {
      urls.push(`${baseUrl}/blog/${post.slug}`);
    });
  }

  // Build the XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map(url => `
      <url>
        <loc>${url}</loc>
      </url>
    `).join('')}
  </urlset>`;

  res.header('Content-Type', 'application/xml');
  res.send(sitemap);
});


// Thank You page
router.get('/thank-you', (req, res) => {
    res.render('pages/thank-you', { title: 'Thank You | Zen Data' });
});

// Catch-all for undefined routes (404)
router.use((req, res) => {
    res.status(404).render('pages/404', { title: 'Page Not Found' });
});

module.exports = router;
