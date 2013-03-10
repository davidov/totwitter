define('app/views/application', [
    'app/views/navbar',
    'app/views/user',
    'app/views/tweets'
    ],

    /**
     *
     * Main application view
     *
     * @params Class Navbar, navigation bar view class
     * @psrams Class User, user settings drop-down view class
     * @params Class Tweets, tweets view class
     * @returns Class
     *
     */

     function (NavbarView, UserView, TweetsView) {
        return Ember.ContainerView.extend({
            childViews: [ 'headerView', 'mainView', 'footerView' ],
            headerView: Ember.ContainerView.create({
                childViews: [
                    NavbarView.create(),
                    UserView.create()
                ],
                tagName: 'header'
            }),
            mainView: Ember.ContainerView.create({
                tagName: 'section',
                classNames: ['page-content'],
                classNameBindings: [ 'visibility:hidden' ],
                childViews: ['outletView',
                    TweetsView.create()],
                outletView: Ember.View.create({
                    template: Ember.Handlebars.compile( '{{outlet}}' )
                })
            }),
            footerView: Ember.ContainerView.create({
                tagName: 'footer',
                classNames: ['navbar',  'navbar-fixed-bottom', 'sticky-footer'],
                classNameBindings: [ 'visibility:hidden' ],
                childViews: ['copyrightView'],
                copyrightView: Ember.View.create({
                    tagName: 'p',
                    template: Ember.Handlebars.compile( '&nbsp;&copy; Dror Avidov 2013' )
                })
            })
        });
     }
);