const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // Serve your HTML, CSS, and JS files from the 'public' directory

// Handle email collection
app.post('/api/collect-email', (req, res) => {
    const email = req.body.email;

    // Save email to a database or send an email confirmation
    console.log('Collected email:', email);

    res.status(200).send('Email collected successfully');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
