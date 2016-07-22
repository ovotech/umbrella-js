export default function ProjectController($scope, $routeParams, ProjectService) {
    $scope.project = $routeParams.project

    ProjectService.projectDetails($routeParams.project).then(function (project) {
        $scope.versions = project.versions;
        $scope.packages = project.packages;
    });
}