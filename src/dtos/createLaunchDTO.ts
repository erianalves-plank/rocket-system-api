export interface CreateLaunchDTO {
    id: string,
    launchCode: string,
    date: string,
    success: boolean,
    rocketId: string,
    crewId: string
}