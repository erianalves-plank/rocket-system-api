class CrewRepository {
    private readonly url = process.env['JSON_SERVER'] + '/crew';

    async getCrewById(crewId: number) {
        const response = await fetch(this.url + '/' + crewId);
        const jsonData = await response.json();
        return jsonData;
    }

    async getCrews(){
        const response = await fetch(this.url);
        const jsonData = await response.json();
        return jsonData;
    }

    async updateCrewById(crewId : number, newCrew: Object){
        const response = await fetch(this.url + '/' + crewId, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCrew)
        });

        return response;
    }

    async deleteCrewById(crewId : number){
        const response = await fetch(this.url + '/'+ crewId, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        });
        return response;
    }

    async createCrew(newCrew: Object){
        const response = await fetch(this.url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCrew)
        });
            
        return response;
    }
}

export {
    CrewRepository
};