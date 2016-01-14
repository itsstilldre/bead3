import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
        return this.store.find('food', params.id);
    },
    
    setupController: function(controller, model){
        this._super(controller,model);
        controller.set('ingredients', this.store.findAll('ingredient'));
    }
});
