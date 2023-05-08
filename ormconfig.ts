import { DataSource } from "typeorm";
import { Rocket } from "./src/model/rocket"; 
import { Crewman } from "./src/model/crewman";
import { Crew } from "./src/model/crew";
import { Launch } from "./src/model/launch";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "raja.db.elephantsql.com",
  port: 5432,
  username: "loostbok",
  password: "WYzjrF6L1HPJ_yVNFT5hjI1GhlSqnxQ3",
  database: "loostbok",
  entities: [Rocket, Crewman, Crew, Launch],
  migrations: ["./src/database/migrations/*.ts"]
});
export default AppDataSource;