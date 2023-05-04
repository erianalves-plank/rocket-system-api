import { DataSource } from "typeorm";
import { Rocket } from "./src/model/rocket"; 
import { Crewman } from "./src/model/crewman";
import { Crew } from "./src/model/crew";
import { Launch } from "./src/model/launch";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "localbase",
  entities: [Rocket, Crewman, Crew, Launch],
  migrations: ["./src/database/migrations/*.ts"]
});
export default AppDataSource;