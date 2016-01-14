import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('credits', { path: '/thanks' });
  this.resource('foods');
  this.resource('ingredients', {path: '/ingredients/:id'});
  this.route('newfood');
  this.route('newingredient', {path: '/newingredient/:id'});
  this.resource('list-ingredients', {path: '/all-ingredients'});
  this.route('edit-food', {path: '/foods/:id'});
});

export default Router;
