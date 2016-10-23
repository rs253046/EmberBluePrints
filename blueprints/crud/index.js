// index.js
var stringUtils = require('../../lib/utilities/string');
var EOL = require('os').EOL;
var fs = require('fs-extra');
var path = require('path');
module.exports = {
  description: 'Generates an crud',
  locals: function(options) {
    var modelAttrs = [];
    var displayAttrs = [];
    var inputAttrs = [];
    var newObjectAttrs = [];
    var mirageFactory = [];
    var entityOptions = options.entity.options;
    for(name in entityOptions) {
      var type = entityOptions[name] || '';
      var dasherizedName = stringUtils.dasherize(name);
      var camelizedName = stringUtils.camelize(name);
      var dasherizedType = stringUtils.dasherize(type);
      modelAttrs.push(camelizedName + ': ' + dsAttr(dasherizedName, dasherizedType));
      newObjectAttrs.push(camelizedName + ': ' + newObject(dasherizedType));
      inputAttrs.push('<div class="crud-input">' + camelizedName + ': ' + 
        inputField(camelizedName, dasherizedType) + '</div>');
      displayAttrs.push('<div class="crud-attr">' + display(camelizedName, dasherizedType) + '</div>');
      mirageFactory.push(getMirageFactory(camelizedName, dasherizedType));
    }
    modelAttrs = modelAttrs.join(',' + EOL + '  ');
    mirageFactory = mirageFactory.join(',' + EOL + '  ');
    displayAttrs = displayAttrs.join('' + EOL + '  ');
    newObjectAttrs = newObjectAttrs.join(',' + EOL + '    ');
    inputAttrs = inputAttrs.join('' + EOL + '  ');
    return {
      modelAttrs:modelAttrs,
      displayAttrs:displayAttrs,
      newObjectAttrs:newObjectAttrs,
      inputAttrs:inputAttrs,
      mirageFactory:mirageFactory
    };
  },

  normalizeEntityName: function(entityName) {
    // Normalize and validate entity name here.
    return entityName;
  },

  fileMapTokens: function(options) {
    
    // Return custom tokens to be replaced in your files
    return {
      __token__: function(options){
        // logic to determine value goes here
        return 'value';
      }
    }
  },

  beforeInstall: function(options) {},
  afterInstall: function(options) {
    updateRouter (
      options.entity.name,
      {
        root: options.project.root
      }
    );
    updateMirageConfig (
      options.entity.name,
      {
        root: options.project.root
      }
    );
    updateMirageDbServer (
      options.entity.name,
      {
        root: options.project.root
      }
    );
  },
  beforeUninstall: function(options) {},
  afterUninstall: function(options) {}

};

function dsAttr(name, type) {
  switch (type) {
  case 'array':
  case 'boolean':
  case 'date':
  case 'number':
  case 'string':
    return "DS.attr('" + type + "')";
  default:
    return 'DS.attr()';
  }
}

function getMirageFactory(name, type) {
  switch (type) {
  case 'boolean':
    return name +': false';
  case 'number':
    return name +'(i) {return i}'
  case 'string':
    return name + '(i) {return "test" + i}';
  default:
    return '';
  }
}

function inputField(name, type) {
  switch (type) {
  case 'boolean':
    return "{{input type='checkbox' checked=model." + name + " }}"; 
  default:
    return "{{input value=model." + name + " }}";
  }
}

function newObject(type) {
  switch (type) {
  case 'boolean':
    return false;
  default:
    return '""';
  }
}

function display(name, type) {
  return name + ": {{model." + name + "}}";
}

function updateRouter(name, options) {
  var routerPath = path.join(options.root, 'app', 'router.js');
  var oldContent = fs.readFileSync(routerPath, 'utf-8');
  var plural = name + 's';

  if(oldContent.indexOf(`this.route(\'${plural}\', function(){
    this.route('new');  
    this.route(\'${name}\', {path: \'/:${name}_id\'}, function(){
      this.route('show');
      this.route('edit');
    });
  });`) != -1) {
    return;
  }

  var newContent = oldContent.replace('Router.map(function() {',
   `Router.map(function() {
  this.route(\'${plural}\', function(){
    this.route('new');  
    this.route(\'${name}\', {path: \'/:${name}_id\'}, function(){
      this.route('show');
      this.route('edit');
    });
  });${EOL}`
  );
  
  fs.writeFileSync(routerPath, newContent);
}

function updateMirageConfig(name, options) {
  var miragePath = path.join(options.root, 'mirage' , 'config.js');

  var oldContent = fs.readFileSync(miragePath, 'utf-8');
   
  var plural = name + 's';
  if(oldContent.indexOf(`'${plural}',`) != -1) {
    return;
  }
   var newContent = oldContent.replace('let pathLists = [',
   `let pathLists = [
    '${plural}',`
  );
   fs.writeFileSync(miragePath, newContent);
}

function updateMirageDbServer(name, options) {
  var miragePath = path.join(options.root, 'mirage' , 'scenarios', 'default.js');
  var oldContent = fs.readFileSync(miragePath, 'utf-8');
  var plural = name + 's';
  if(oldContent.indexOf(`'${name}',`) != -1) {
    return;
  }  
  var newContent = oldContent.replace('let pathLists = [',
   `let pathLists = [
    '${name}',`
  );
   fs.writeFileSync(miragePath, newContent);
}




