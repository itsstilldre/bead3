import Ember from 'ember';

export default Ember.Controller.extend({
    logo: 'images/vegan-recept-konyvek.jpg',
    time: function() {
            return (new Date()).toDateString();
        }.property()
});
