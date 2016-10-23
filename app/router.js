import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('shins', function(){
    this.route('new');  
    this.route('shin', {path: '/:shin_id'}, function(){
      this.route('show');
      this.route('edit');
    });
  });

  this.route('shinchans', function(){
    this.route('new');  
    this.route('shinchan', {path: '/:shinchan_id'}, function(){
      this.route('show');
      this.route('edit');
    });
  });

  this.route('managements', function(){
    this.route('new');  
    this.route('management', {path: '/:management_id'}, function(){
      this.route('show');
      this.route('edit');
    });
  });

  this.route('class-manages', function(){
    this.route('new');  
    this.route('class-manage', {path: '/:class-manage_id'}, function(){
      this.route('show');
      this.route('edit');
    });
  });

  this.route('class-managements', function(){
    this.route('new');  
    this.route('class-management', {path: '/:class-management_id'}, function(){
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
