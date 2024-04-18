var express = require('express');
var router = express.Router();
const UserController = require('../controller/User');
const ContactController = require('../controller/Contact');


/* GET home page. */

// ---------------------------------- USER API ----------------------------------------
router.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
   });
router.post('/user/add', UserController.AddUser);

// ---------------------------------- CONTACT API-------------------------------------

router.post('/contact/add', ContactController.AddContact);

router.get('/contact/show', ContactController.ShowContact);

router.patch('/contact/update/:id', ContactController.UpdateContact);

router.delete('/contact/delete/:id', ContactController.DeleteContact);

module.exports = router;

