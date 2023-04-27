import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "raja.db.elephantsql.com",
  port: 5432,
  username: "loostbok",
  password: "WYzjrF6L1HPJ_yVNFT5hjI1GhlSqnxQ3",
  database: "loostbok",
  entities: ["./model/*.ts"],
  migrations: ["./database/migrations/*.ts"]
});
export default AppDataSource;