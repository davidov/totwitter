define('app/router', [ 'ember' ],
function() {
    return Ember.Router.extend({
        root: Ember.Route.extend({
            index: Ember.Route.extend({
            })
        })
    });
});
