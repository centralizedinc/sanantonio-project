var initialState = {
    permit: [{
            reference_no: "123456789",
            application: {
                permit_type: "Business Permit",
                app_type: 1,
                reference_no: "12345679",
                pbr_date: "2019-09-19T04:01:38.459Z",
                lgu_date: "2019-09-19T04:01:41.709Z",
                registration_no: "12345679"
            },
            business: {
                ownership: 1,
                tin: "12345679",
                sss: "123456789",
                business_name: "Micro Burger",
                contact: "123456789",
                email: "microburger@microburger.com",
                business_address: "1924 kuapapa place",
                amo: {
                    name: "Ramon, Don, G., LXIII ",
                    address: "",
                    contact: null,
                    email: ""
                },
                business_area: "1000",
                owner_no: 1,
                employees_no: {
                    professional: 500,
                    non_professional: 1000
                },
                business_type: 2,
                rented: {
                    lessor: "",
                    monthly_rental: null,
                    lessor_address: "",
                    lessor_conatct: null,
                    lessor_email: ""
                },
                property_pin: {
                    land: 123456798,
                    building: 123456789,
                    machinery: 123456798
                },
                business_activities: [{
                    line_business: "Food",
                    capital: "1000",
                    receipts: "1000"
                }],
                payment: {
                    mode: 1,
                    qrtly: null
                }
            },
            documents: [],
            business_insurance: {
                provider: "MAPRE Philippines",
                app_fee: 18000,
                lrf: 180,
                interest: 0,
                surcharge: 0,
                total: 18180
            },
            payment_info: {
                desc: "Business Permit",
                amount: 1500,
                method: "Over the Counter"
            },
            billing_info: {
                credit_number: null,
                name: "Don Ramon LXII",
                email: "mircoburger@microburger.com",
                contact: "123456798"
            },
            progress: {
                status: "For Payment",
                current_task: "Payment",
                previous_task: ""
            }
        },
        {
            reference_no: "EX1EU8STM1X5",
            application: {
                permit_type: "Business Permit",
                app_type: 1,
                reference_no: "12345679",
                pbr_date: "2019-09-19T04:01:38.459Z",
                lgu_date: "2019-09-19T04:01:41.709Z",
                registration_no: "12345679"
            },
            business: {
                ownership: 1,
                tin: "12345679",
                sss: "123456789",
                business_name: "Micro Burger",
                contact: "123456789",
                email: "microburger@microburger.com",
                business_address: "1924 kuapapa place",
                amo: {
                    name: "Ramon, Don, G., LXIII ",
                    address: "",
                    contact: null,
                    email: ""
                },
                business_area: "1000",
                owner_no: 1,
                employees_no: {
                    professional: 500,
                    non_professional: 1000
                },
                business_type: 2,
                rented: {
                    lessor: "",
                    monthly_rental: null,
                    lessor_address: "",
                    lessor_conatct: null,
                    lessor_email: ""
                },
                property_pin: {
                    land: 123456798,
                    building: 123456789,
                    machinery: 123456798
                },
                business_activities: [{
                    line_business: "Food",
                    capital: "1000",
                    receipts: "1000"
                }],
                payment: {
                    mode: 1,
                    qrtly: null
                }
            },
            documents: [],
            business_insurance: {
                provider: "MAPRE Philippines",
                app_fee: 18000,
                lrf: 180,
                interest: 0,
                surcharge: 0,
                total: 18180
            },
            payment_info: {
                desc: "Business Permit",
                amount: 1500,
                method: "Over the Counter"
            },
            billing_info: {
                credit_number: null,
                name: "Don Ramon LXII",
                email: "mircoburger@microburger.com",
                contact: "123456798"
            },
            progress: {
                status: "For Approval",
                current_task: "Payment",
                previous_task: ""
            }
        }
    ],

}

const state = JSON.parse(JSON.stringify(initialState))

const mutations = {
    SAVE_PERMIT(state, permit) {
        state.permit.push(permit)
    }
}

var actions = {
    GET_PERMIT(context, data) {
        context.commit('SAVE_PERMIT', data)
    }
}

export default {
    state,
    mutations,
    actions
}