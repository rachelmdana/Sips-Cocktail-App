const bcrypt = require('bcrypt');
const pool = require('../db.js');
const jwt = require('jsonwebtoken');
const ExpressError = require('../helpers/expressError.js');
const { BCRYPT_WORK_FACTOR } = require("../config");

class Auth {
  static async register(req, res, next) {
  const { username, password, firstName, lastName, email, phone } = req.body || {};

  if (!username || !password) {
    return res.status(400).json({ error: 'Missing username or password' });
  }

  try {
    const duplicateCheck = await db.query(
      `SELECT username 
        FROM "User" 
        WHERE username = $1`,
      [username]
    );

    if (duplicateCheck.rows[0]) {
      throw new ExpressError(
        `There already exists a user with username '${username}'`, 400
      );
    }

    const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);

    const result = await db.query(
      `INSERT INTO "User"
          (username, password, name, email) 
        VALUES ($1, $2, $3, $4, $5, $6) 
        RETURNING username, name, email`,
      [
        username,
        hashedPassword,
        firstName,
        lastName,
        email
      ]
    );

    return result.rows[0];
  } catch (error) {
    return next(error);
  }
}

  static async authenticate (username, password) {
  try {
    const client = await pool.connect();
    const result = await client.query(
      'SELECT * FROM "User" WHERE username = $1 AND password = $2',
      [username, password]
    );
    client.release();
    if (result.rows.length > 0) {
      // Authentication successful
      return 'your_token';
    } else {
      // Invalid username or password
      return null;
    }
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

    static async logout(token) {
        try {
            const decodedToken = jwt.verify(token, 'spookyspook');
            return true;
        } catch (error) {
            return false;
        }
    }
}

module.exports = Auth;
