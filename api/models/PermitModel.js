var mongoose = require('mongoose')
var PermitModelSchema = new mongoose.Schema({
    application: {
        permit_type: {
            type: String
        },
        app_type: {
            type: Number
            //1 - New
            //2 - Renewal
        },
        reference_no: {
            type: Number
        },
        pbr_date: {
            type: Date
        },
        lgu_date: {
            type: Date
        },
        registration_no: {
            type: Number
        }
    },
    business: {
        ownership: {
            type: Number
            // 1 - Sole Proprietorship
            // 2 - Partnership
            // 3 - Corporation
        },
        tin: {
            type: Number
        },
        sss: {
            type: Number
        },
        business_name: {
            type: String
        },
        contact: {
            type: Number
        },
        email: {
            type: String
        },
        business_address: {
            type: String
        },
        // AMO - Applicant/Manager/Owner
        amo: {
            name: {
                type: String
            },
            address: {
                type: String
            },
            contact: {
                type: Number
            },
            email: {
                type: String
            }
        },
        business_area: {
            type: String
        },
        owner_no: {
            type: Number
        },
        employees_no: {
            professional: {
                type: Number
            },
            non_professional: {
                type: Number
            }
        },
        business_type: {
            type: Number
            // 1 - Rented
            // 2 - Owned
        },
        rented: {
            lessor: {
                type: String
            },
            monthly_rental: {
                type: Number
            },
            lessor_address: {
                type: String
            },
            lessor_contact: {
                type: Number
            },
            lessor_email: {
                type: String
            }
        },
        property_pin: {
            land: {
                type: Number
            },
            building: {
                type: Number
            },
            machinery: {
                type: Number
            }
        },
        business_activities: [],
        payment: {
            mode: {
                type: Number
            },
            qrtly: {
                type: Number
            }
        }

    },
    documents: [],
    business_insurance: {
        provider: {
            type: String
        },
        app_fee: {
            type: Number
        },
        lrf: {
            type: Number
        },
        interest: {
            type: Number
        },
        surcharge: {
            type: Number
        },
        total: {
            type: Number
        }
    },
    payment_info: {
        desc: {
            type: String
        },
        amount: {
            type: Number
        },
        method: {
            type: String
        }
    },
    billing_info: {
        name: {
            type: String
        },
        email: {
            type: String
        },
        contact: {
            type: Number
        }
    },
    progress: {
        status: {
            type: String
        },
        current_task: {
            type: String
        },
        previous_task: {
            type: String
        }
    }
})

module.exports = mongoose.model('permit', PermitModelSchema)