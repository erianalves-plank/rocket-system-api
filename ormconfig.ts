import { DataSource } from "typeorm";
import { Rocket } from "./model/rocket"; 
import { Crewman } from "./model/crewman";
import { Crew } from "./model/crew";
import { Launch } from "./model/launch";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "raja.db.elephantsql.com",
  port: 5432,
  username: "loostbok",
  password: "WYzjrF6L1HPJ_yVNFT5hjI1GhlSqnxQ3",
  database: "loostbok",
  entities: [Rocket, Crewman, Crew, Launch],
  migrations: ["./database/migrations/*.ts"]
});
export default AppDataSource;