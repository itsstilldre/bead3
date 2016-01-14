import DS from 'ember-data';

var food = DS.Model.extend({
    name: DS.attr('string'),
    preparationTime: DS.attr('string'),
    description: DS.attr('string'),
    image: DS.attr('string'),
    ingredients: DS.hasMany('ingredient', {async: true})
});

export default food;