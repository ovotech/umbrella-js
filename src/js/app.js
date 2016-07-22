import angular from 'angular';
import angularRoute from 'angular-route';

import baseConfig from './app.config';
import routing from './app.routing';
import HomeController from './HomeController';
import ProjectController from './ProjectController';
import ProjectService from './ProjectService'

angular.module('umbrella', ['ngRoute'])
    .config(baseConfig)
    .config(routing)
    .constant('SERVICE_BASE_URL', 'http://localhost:8000')
    .controller('HomeController', HomeController)
    .controller('ProjectController', ProjectController)
    .service('ProjectService', ProjectService);