import router from '@system.router';

export default {
    data: {
        title: 'World'
    },
    toHome: function () {
        router.push({
            uri: "pages/index/index"
        })
    }
}
