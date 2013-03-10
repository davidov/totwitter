define('app/models/user', ['ember'],
    /**
     *  User Object Model
     *
     * @returns Class
     *
     */

     function () {
        return Ember.Object.extend({
            username: null,
            numberOfTweets: 20,
            interval: 1 * 60 * 1000,
            // set store reference upon creation instead of creating a static binding
            store: null,
            userChange: function () {
                this.get('store').update(this);
            }
        });
     }
);