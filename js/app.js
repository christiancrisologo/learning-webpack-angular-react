var angular = require('angular');
var app = angular.module('app',[]);
require('./bands/band-list')(app); //pass the module app to the band-info directive
require('./bands/band-info')(app); //pass the module app to the band-info directive

console.log('app started')