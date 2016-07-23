import angular from 'angular';
import angularRoute from 'angular-route';

import routing from './app.routing';
import HomeController from './HomeController';
import ProjectController from './ProjectController';
import ProjectService from './ProjectService'

import '../less/style.less';

angular.module('umbrella', ['ngRoute'])
    .config(routing)
    .constant('SERVICE_BASE_URL', 'http://api.umbrella.ovotech.org.uk')
    .controller('HomeController', HomeController)
    .controller('ProjectController', ProjectController)
    .service('ProjectService', ProjectService);