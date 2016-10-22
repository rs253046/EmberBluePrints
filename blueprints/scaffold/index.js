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
    var entityOptions = options.entity.options;
    for(name in entityOptions) {
      var type = entityOptions[name] || '';
      var dasherizedName = stringUtils.dasherize(name);
      var camelizedName = stringUtils.camelize(name);
      var dasherizedType = stringUtils.dasherize(type);
      modelAttrs.push(camelizedName + ': ' + dsAttr(dasherizedName, dasherizedType));
      newObjectAttrs.push(camelizedName + ': ' + newObject(dasherizedType));
      inputAttrs.push('<div class="crud-input">' + dasherizedName + ': ' + inputField(dasherizedName, dasherizedType) + '</div>');
      displayAttrs.push('<div class="crud-attr">' + display(dasherizedName, dasherizedType) + '</div>');
    }
    modelAttrs = modelAttrs.join(',' + EOL + '  ');
    displayAttrs = displayAttrs.join('' + EOL + '  ');
    newObjectAttrs = newObjectAttrs.join(',' + EOL + '    ');
    inputAttrs = inputAttrs.join('' + EOL + '  ');
    return {
      modelAttrs:modelAttrs,
      displayAttrs:displayAttrs,
      newObjectAttrs:newObjectAttrs,
      inputAttrs:inputAttrs
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
    updateRouter(
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






