define('app/controllers/tweets', ['ember'],
    /**
     * Tweets controller
     *
     * @returns Class
     *
     */
     function () {
        return Ember.ArrayProxy.extend({

            init: function () {
                this._super();
                var items = [];
                $.ajax({
                    url: 'http://api.twitter.com/1/statuses/user_timeline.json/',
                    type: 'GET',
                    dataType: 'jsonp',
                    data: {
                        screen_name: JQTWEET_DATA.user,
                        include_rts: true,
                        count: JQTWEET_DATA.numberOfTweets,
                        include_entities: true
                    },
                    success: function (data, textStatus, xhr) {
                        if (data.get('length')) {
                            this.set('[]', data);
                        }
                    }
                });
            }
        });
     }
);