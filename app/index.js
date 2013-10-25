'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var EmailGenerator = module.exports = function EmailGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    // not needed atm.
  });

};

util.inherits(EmailGenerator, yeoman.generators.Base);

EmailGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [

      {
        name: 'projectName',
        message: 'Project Name ?',
        default: "untitled"
      },

      {
        name: 'emailWidth',
        message: 'How wide do you want your email (e.g. 800) ?',
        default: "600"
      },

      {
        type: 'confirm',
        name: 'includeCss',
        message: 'Include CSS?',
        default: true
      },

  ];

  this.prompt(prompts, function (props) {

    this.projectName = props.projectName;
    this.emailWidth = props.emailWidth;
    this.includeCss = props.includeCss;

    cb();
  }.bind(this));
};

EmailGenerator.prototype.app = function app() {

  //this.template("_index.html", "index.htm");
};

EmailGenerator.prototype.projectfiles = function projectfiles() {

  this.copy("_index.html", "index.htm");

};
