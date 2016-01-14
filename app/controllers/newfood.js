import Ember from 'ember';

export default Ember.Controller.extend({
    init: function () {
        this.ingredients = [];
    },
    
    actions: {
        addFood: function(){
            if(this.newFoodName != undefined && this.newFoodName != ""){
                var food = this.store.createRecord('food', {});
                
                food.name = this.newFoodName;
                food.preparationTime = this.newFoodPrepTime;
                food.description = this.newFoodDesc;
                food.image = this.newFoodImg;
                
                this.ingredients.forEach(function (ingredient) {
                    food.get('ingredients').pushObject(ingredient);
                });
                
                food.save();
                
                //refresh input areas
                this.set('newFoodName', undefined);
                this.set('newFoodPrepTime', undefined);
                this.set('newFoodDesc', undefined);
                this.set('newFoodImg', undefined);
                this.set('ingredients', []);
                this.set('selectedIngredient', undefined);
                
                this.transitionTo('foods');
            }else{
                alert("add meg a kaja nevét!");
            }
        },
        
        addIngredient: function(ingredient){
            if(this.selectedIngredient != undefined) {
                this.ingredients.pushObject(ingredient);
            }
        },
        
        removeIngredient: function(ingredient){
            this.ingredients.removeObject(ingredient);
        },
        
        goBack: function(){
            //refresh input areas
            this.set('newFoodName', undefined);
            this.set('newFoodPrepTime', undefined);
            this.set('newFoodDesc', undefined);
            this.set('newFoodImg', undefined);
            this.set('ingredients', []);
            this.set('selectedIngredient', undefined);
                
            this.transitionTo('foods');
        }
    }
});
