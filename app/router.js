import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('cruds', function(){
    this.route('new');  
    this.route('crud', {path: '/:crud_id'}, function(){
      this.route('show');
      this.route('edit');
    });
  });

  this.route('cruds', function(){
    this.route('new');  
    this.route('crud', {path: '/:crud_id'}, function(){
      this.route('show');
      this.route('edit');
    });
  });

  this.route('cruds', function(){
    this.route('new');  
    this.route('crud', {path: '/:crud_id'}, function(){
      this.route('show');
      this.route('edit');
    });
  });
});

export default Router;
