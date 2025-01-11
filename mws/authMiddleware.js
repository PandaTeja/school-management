const jwt = require('jsonwebtoken');
const User = require('../managers/models/user'); 

module.exports = async (req, res, next) => {

  const token = req.header('Authorization') && req.header('Authorization').split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Access Denied' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    

    const user = await User.findOne({ token: token });
    if (!user) return res.status(401).json({ message: 'Token not found in the database' });

    req.user = user;
    

    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid Token' });
  }
};
