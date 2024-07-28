const jwt = require('jsonwebtoken');
const JWT_SECRET = 'qwerty'; // Use a secure secret in production

const auth = (requiredRoles) => {
  return async (req, res, next) => {
    // Bypass auth for signup and login routes
    if (
      (req.path === '/signup' || req.path === '/login') &&
      req.method === 'POST'
    ) {
      return next();
    }

    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(403).send('Access denied.');

    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      req.user = decoded;

      // Check if the user's role is allowed to access the route
      if (requiredRoles && !requiredRoles.includes(decoded.role)) {
        return res.status(403).send('Access denied.');
      }

      next();
    } catch (err) {
      return res.status(401).send('Invalid token.');
    }
  };
};

module.exports = auth;
