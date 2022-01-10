let HomePage = function() {

    this.page = {
        goTo: function(baseUrl) {
            console.log('test1');
            browser.get(baseUrl);
        },
        getPageTitle: function() {
            return 'Swimlane';
        },
        getPageUrl: function(baseUrl) {
            return baseUrl;
        },
    };


};
module.exports = new HomePage();