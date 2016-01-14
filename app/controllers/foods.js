import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        deleteFood: function(id){
            this.store.find('food', id).then(function(f){
                f.destroyRecord();
            });
        },
        
        gotoNewFood: function(){
            this.transitionTo('newfood');
        }
    }
});
