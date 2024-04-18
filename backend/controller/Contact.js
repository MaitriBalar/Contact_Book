const CONTACT = require('../model/contact');

exports.AddContact = async function (req, res, next) {
    try {
        if(!req.body.fname || !req.body.lname || !req.body.mobile) {
            throw new Error("Enter Valid Field")
        }
        let data = await CONTACT.create(req.body)

        res.status(201).json({
            status : "Succes",
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

exports.ShowContact = async function (req, res, next) {
    try {
        let data = await CONTACT.find()

        res.status(201).json({
            status : "Succes",
            data : data
        })
    } catch (error) {
        res.status(201).json({
            status : "Fail",
            message : error.message
        })
    }
}

exports.UpdateContact = async function (req, res, next) {
    try {

        var id1 = req.params.id
        let data = await CONTACT.findByIdAndUpdate(id1,req.body)
        if(!data) {
            throw new Error("Data not Found")
        }

        res.status(201).json({
            status : "Succes",
            message : "Data Updated",
            data : data
        })
    } catch (error) {
        res.status(201).json({
            status : "Fail",
            message : error.message
        })
    }
}

exports.DeleteContact = async function (req, res, next) {
    try {
        var id = req.params.id
        let data = await CONTACT.findByIdAndDelete(id)
        if(!data) {
            throw new Error("Data not Found")
        }

        res.status(201).json({
            status : "Succes",
            message : "Data Deleted",
            data : data
        })
    } catch (error) {
        res.status(201).json({
            status : "Fail",
            message : error.message
        })
    }
}