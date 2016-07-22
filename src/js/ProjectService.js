export default class ProjectService {    
    constructor($http, SERVICE_BASE_URL) {
        this.http = $http;
        this.baseUrl = SERVICE_BASE_URL;
    }

    projects() {
        return this.http.get(this.baseUrl + "/projects").then(r => r.data);
    }

    projectDetails(project) {
        return this.http.get(this.baseUrl + "/project/" + project).then(r => r.data);
    }
}