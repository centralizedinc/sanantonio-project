
function initialState() {
    return {
        subscribers: [{
            name: {
                first: 'Godfrey',
                last: 'Rivera'
            },
            avatar: 'https://randomuser.me/api/portraits/thumb/men/44.jpg',
            id: 1
        }, {
            name: {
                first: 'Junex',
                last: 'Basas'
            },
            avatar: 'https://randomuser.me/api/portraits/thumb/men/73.jpg',
            id: 2
        }, {
            name: {
                first: 'Mark',
                last: 'Quijom'
            },
            avatar: 'https://randomuser.me/api/portraits/thumb/men/62.jpg',
            id: 3
        }, {
            name: {
                first: 'Veins',
                last: 'Belo'
            },
            avatar: 'https://randomuser.me/api/portraits/thumb/men/83.jpg',
            id: 4
        }],
        messages: [{
            date_created: new Date(),
            message: 'Keep up the good work and more power . God bless . Thank you very much Mayor Erick Wagan !',
            likes: 421,
            id: 1
        }, {
            date_created: new Date(),
            message: 'Maraming salamat po Mayor sa pagpapagawa nyo tricycle application para sa Lucena. Malaking tulong po ito para sa mga driver at pasahero. Godbless po Mayor Erick Wagan  !',
            likes: 532,
            id: 2
        }, {
            date_created: new Date(),
            message: 'Thank po Mayor Erick Wagan for doing a great job in Lucena City. Godbless you ! ',
            likes: 831,
            id: 3
        }, {
            date_created: new Date(),
            message: 'GO MAYOR ERICK WAGAN,in everything you do,I am for you.Will continue praying for your well being.🙏🙏🙏',
            likes: 719,
            id: 4
        }]
    }
}

const state = initialState()

const mutations = {
    POST_MESSAGE(state, payload) {
        const index = state.subscribers.findIndex(x => x.id === payload.details.id);
        if (index === -1) state.subscribers.push(payload.details);
        state.messages.push(payload.post);
    }
}

const actions = {
}

export default {
    state,
    mutations,
    actions
}


