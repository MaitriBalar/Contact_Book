const USER = require('../model/user');
const bcrypt = require('bcrypt');


exports.AddUser = async function(req, res, next) {
    try {
      if(!req.body.name || !req.body.email || !req.body.password) {
        throw new Error("enter valid field");
      }
      req.body.password = await bcrypt.hash(req.body.password, 8)
      const data = await USER.create(req.body);
  
      res.status(201).json({
        status : "Success",
        message : "Data Added",
        data : data
      })
    } catch (error) {
      res.status(201).json({
        status : "Fail",
        message : error.message
      })
    }
  }

 

  