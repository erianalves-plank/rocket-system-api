class LaunchRepository {
    private readonly url = process.env['JSON_SERVER'] + '/launch';

    async getLaunchById(launchId: number) {
        const response = await fetch(this.url + '/' + launchId);
        const jsonData = await response.json();
        return jsonData;
    }

    async getLaunchs(){
        const response = await fetch(this.url);
        const jsonData = await response.json();
        return jsonData;
    }

    async updateLaunchById(launchId : number, newLaunch: Object){
        const response = await fetch(this.url + '/' + launchId, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newLaunch)
        });

        return response;
    }

    async deleteLaunchById(launchId : number){
        const response = await fetch(this.url + '/'+ launchId, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        });
        return response;
    }

    async createLaunch(newLaunch: Object){
        const response = await fetch(this.url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newLaunch)
        });
            
        return response;
    }
}

export {
    LaunchRepository
};