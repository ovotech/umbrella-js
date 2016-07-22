export default function routing($routeProvider) {
    $routeProvider.when('/', {
        template: require('../partials/home.html'),
        controller: 'HomeController'
    });
    $routeProvider.when('/project/:project', {
        template: require('../partials/project.html'),
        controller: 'ProjectController'
    });
    $routeProvider.otherwise({
        redirectTo: '/'
    });
}