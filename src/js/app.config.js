export default function baseConfig($locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}