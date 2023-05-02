import { DataSource } from "typeorm";
import { Rocket } from "./model/rocket"; 
import { Crewman } from "./model/crewman";
import { Crew } from "./model/crew";
import { Launch } from "./model/launch";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "localbase",
  entities: [Rocket, Crewman, Crew, Launch],
  migrations: ["./database/migrations/*.ts"]
});
export default AppDataSource;