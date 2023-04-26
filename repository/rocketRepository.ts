class RocketRepository {
    private readonly url = process.env['JSON_SERVER'] + '/rocket';

    async getRocketById(rocketId: number) {
        const response = await fetch(this.url + '/' + rocketId);
        const jsonData = await response.json();
        return jsonData;
    }

    async getRockets(){
        const response = await fetch(this.url);
        const jsonData = await response.json();
        return jsonData;
    }

    async updateRocketById(rocketId : number, newRocket: Object){
        const response = await fetch(this.url + '/' + rocketId, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newRocket)
        });

        return response;
    }

    async deleteRocketById(rocketId : number){
        const response = await fetch(this.url + '/'+ rocketId, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        });
        return response;
    }

    async createRocket(rocketId : number, newRocket: Object){
        const response = await fetch(this.url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newRocket)
        });
            
        return response;
    }
}

export {
    RocketRepository
};