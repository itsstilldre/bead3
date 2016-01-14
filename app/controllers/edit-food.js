import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        removeIngredient: function(ingredient, food) {
            food.get('ingredients').removeObject(ingredient);
        },
        
        editFood: function(food) {
            var that = this;
            
            var onSuccess = function(post) {
                that.transitionToRoute('foods');
            };
            
            var onFail = function(food) {
                alert("saving food failed");
            };
            
            food.save().then(onSuccess, onFail);
        },
        
        addIngredient: function(ingredient, food){
            if(this.selectedIngredient != undefined) {
                food.get('ingredients').pushObject(ingredient);
            }
        },
    }
});
