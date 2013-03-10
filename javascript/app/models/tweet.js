define('app/models/tweet', ['ember'],
    /**
     * Tweet object model
     *
     * @returns Class
     */

     function () {
        return Ember.Object.extend({
            id: null,
            media_url: '',
            user: null,
            text: '',
            ago: ''
        });
     }
);
