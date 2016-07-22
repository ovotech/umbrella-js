import angular from 'angular';
import angularRoute from 'angular-route';

import routing from './app.routing';
import HomeController from './HomeController';
import ProjectController from './ProjectController';
import ProjectService from './ProjectService'

import '../../node_modules/ovo-bootstrap/dist/css/ovo-bootstrap.css';

angular.module('umbrella', ['ngRoute'])
    .config(routing)
    .constant('SERVICE_BASE_URL', 'http://api.umbrella.ovotech.org.uk')
    .controller('HomeController', HomeController)
    .controller('ProjectController', ProjectController)
    .service('ProjectService', ProjectService);