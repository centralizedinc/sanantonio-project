import constant_helper from './constant_helper';

export default {

    install(Vue) {
        Vue.mixin({
            data() {
                return {
                    constant_helper
                }
            },
            methods: {
                deepCopy(obj) {
                    return JSON.parse(JSON.stringify(obj));
                },
                formatDate(date, type) {
                    var dt = new Date();
                    if (date) {
                        dt = new Date(date)
                    }
                    return dt.toLocaleString("en-US", type ? type : {
                        hour12: true,
                        year: "numeric",
                        month: "long",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit"
                    });
                }
            },
        })
    }
}