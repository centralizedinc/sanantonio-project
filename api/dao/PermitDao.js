"use strict";

var model = require('../models/PermitModel');

class PermitDao {
    static getPermit() {
        return model.find({})
    }

    static applyPermit(details) {
        return new Promise((resolve, reject) => {
            (new model(details)).save()
                .then(saved_permit => {
                    console.log("saved_permit data: " + JSON.stringify(saved_permit))
                    resolve(saved_permit)
                }).catch(err => {
                    console.log("error this")
                    reject(err)
                })
        })
    }
}

module.exports = PermitDao