import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('students', function(){
    this.route('new');  
    this.route('student', {path: '/:student_id'}, function(){
      this.route('show');
      this.route('edit');
    });
  });

  this.route('students', function(){
    this.route('new');  
    this.route('student', {path: '/:student_id'}, function(){
      this.route('show');
      this.route('edit');
    });
  });

  this.route('classic-cruds', function(){
    this.route('new');  
    this.route('classic-crud', {path: '/:classic-crud_id'}, function(){
      this.route('show');
      this.route('edit');
    });
  });

  this.route('classics', function(){
    this.route('new');  
    this.route('classic', {path: '/:classic_id'}, function(){
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
