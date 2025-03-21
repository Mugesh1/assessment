const fs = require('fs');
const path = require('path');

// Middleware function to handle the /login route and prevent user creation
module.exports = (req, res, next) => {
  if (req.method === 'POST' && req.path === '/login') {
    const { email, password } = req.body;

    // Load the db.json file to simulate a DB (do not modify it)
    const db = JSON.parse(fs.readFileSync(path.join(__dirname, 'db.json'), 'utf-8'));

    // Find the user matching the provided credentials
    const user = db.login.find(u => u.email === email && u.password === password);

    if (user) {
      // Respond with token and user info
      return res.json({
        token: user.token,
        user: {
          email: user.user.email,
        },
      });
    } else {
      // If credentials don't match, return an error response
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  }

  // Pass control to the next middleware (or default json-server behavior) if not the /login route
  next();
};
