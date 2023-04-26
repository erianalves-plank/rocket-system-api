class CrewmanRepository {
    private readonly url = process.env['JSON_SERVER'] + '/crewman';

    async getCrewmanById(crewmanId: number) {
        const response = await fetch(this.url + '/' + crewmanId);
        const jsonData = await response.json();
        return jsonData;
    }

    async getCrewmans(){
        const response = await fetch(this.url);
        const jsonData = await response.json();
        return jsonData;
    }

    async updateCrewmanById(crewmanId : number, newCrewman: Object){
        const response = await fetch(this.url + '/' + crewmanId, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCrewman)
        });

        return response;
    }

    async deleteCrewmanById(crewmanId : number){
        const response = await fetch(this.url + '/'+ crewmanId, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        });
        return response;
    }

    async createCrewman(newCrewman: Object){
        const response = await fetch(this.url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCrewman)
        });
            
        return response;
    }
}

export {
    CrewmanRepository
};