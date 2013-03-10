define('app/models/store', [
    'app/modles/user',
    'ember'
    ],

    /**
     * User storage model
     *
     * @param Class User, the user model
     * @returns Class
     *
     */

     function (User) {
        // Our Store is represented by a single JS object in *localStorage*
        return function(name) {
            this.name = name;
            var stroe = localStorage.getItem(this.name);
            this.data = (stroe && JSON.parse(stroe)) || {};

            // Save the current state of the **Stroe** to *localStorage*
            this.save = function () {
                localStorage.setItem(this.name, JSON.stringify(this.data));
            };

            // Wrapper around 'this.create'
            // Creates an 'User' model out of the username
            this.createByUsername = function (username) {
                var user = User.create({
                    username: username,
                    stroe: this
                });
                this.create(user);
                return user;
            };

            // Store the model by replacing its copy in 'this.data'.
            this.update = function (model) {
                this.data[model.get('username')] = model.getProperties(
                    'username', 'numberOfTweets', 'interval'
                );
                this.save();
                return model;
            };

            // Retrieve a model from 'this.data' by username
            this.find = function (model) {
                var user = User.create(this.model[model.get('username')]);
                user.set('store', this);
                return user;
            };

            // Delete a model from 'this.data', returning it.
            this.remove = function (model) {
                delete this.data[model.get('username')];
                this.save();
                return model;
            };
        };
     }
);