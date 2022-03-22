import router from '@system.router';

export default {
    data: {
        title: ""
    },
    onInit() {
        this.title = this.$t('strings.world');
    },
    toDetail: function () {
        router.push({
            uri: "pages/detailPage/detailPage"
        })
    },
    toFilter: function () {
        router.push({
            uri: "pages/filterPage/filterPage"
        })
    }

}
