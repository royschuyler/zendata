const express = require('express');
const router = express.Router();
const blogPosts = require('../data/blogPosts'); // Adjust path as needed

router.get('/', (req, res) => {
    res.render('pages/blog', { title: 'Blog | Zen Data', blogPosts });
});
router.get('/:slug', (req, res) => {
    const post = blogPosts.find(p => p.slug === req.params.slug);
    if (!post) return res.status(404).render('pages/404', { title: 'Not Found' });
    res.render('pages/blog-detail', { title: `${post.title} | Zen Data`, post });
});
module.exports = router;
