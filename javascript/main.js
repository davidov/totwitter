// Author: Thomas Davis <thomasalwyndavis@gmail.com>
// Filename: main.js

// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
  paths: {
    jquery: 'jquery/jquery-1.9.1',
    ember: 'ember/ember',
    handlebars: 'handlebars',
    mousewheel: 'jquery/jquery.mousewheel-3.0.6.pack',
    images_loaded: 'jquery/jquery.imagesloaded.min',
    browser_detect: 'utils/browser_detect',
    storage: 'storage/amplify.min',
    bootstrap: 'bootstrap/bootstrap',
    fancybox: 'fancybox/jquery.fancybox-1.3.4',
    masonry: 'jquery/jquery.masonry.min',
    app: 'app',
    twitter: 'twitter'
  }

});

require([
  'jquery',
  'ember',
  'bootstrap',
  'app',
  'twitter'


  // Some plugins have to be loaded in order due to their non AMD compliance
  // Because these scripts are not "modules" they do not pass any values to the definition function below
], function($){
    $(document).ready (function () {
        JQTWEET.loadTweets();
        JQTWEET.refresh();
        JQTWEET.load_data();
        JQTWEET.handle_apply_button();
    });
});
