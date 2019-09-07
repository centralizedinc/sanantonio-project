"use strict";

const router = require("express").Router();

var PermitDao = require('../dao/Permitdao');

router
    .route('/apply')
    .get((req, res) => {
        PermitDao.getPermit()
            .then((data) => {
                console.log("permit get data: " + JSON.stringify(data))
                res.json(data)
            }).catch((err) => {
                console.log("err: " + err)
            })
    })
    .post((req, res) => {
        var new_permit = req.body
        console.log("post permit apply data: " + JSON.stringify(new_permit))
        // new permit(new_permit).save()
        PermitDao.applyPermit(new_permit)
            .then((permit) => {
                // console.log("permit this data: " + JSON.stringify(permit))
                // console.log("this is res: " + JSON.stringify(res))
                res.json(permit)
            })
            .catch((err) => {
                console.log("error: " + err)
            })

    })

module.exports = router;