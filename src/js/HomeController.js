export default function HomeController($scope, ProjectService) {
    ProjectService.projects().then(projects =>
        $scope.projects = projects);
}