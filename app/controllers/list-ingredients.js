import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        deleteIngredient: function(id){
            this.store.findRecord('ingredient', id).then(function(ing){
                ing.destroyRecord();
            });
        },
        
        addIngredient: function () {
            var that = this;
            var ingredient = this.store.createRecord('ingredient', {
                name: this.newIngName,
                description: this.newIngDesc,
                image: this.newIngImg
            });
            ingredient.save().then(function(){
                //console.log(that.newIngImg);
                that.set('newIngName', '');
                that.set('newIngDesc', '');
                that.set('newIngImg', '');
            });
        },
    }
});
