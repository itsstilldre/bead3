import DS from 'ember-data';

var ingredient = DS.Model.extend({
    name: DS.attr(),
    description: DS.attr(),
    image: DS.attr()
});

export default ingredient;