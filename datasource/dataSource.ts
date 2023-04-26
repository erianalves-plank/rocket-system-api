import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.TYPEORM_HOST || "localhost",
  port: 5432,
  username: process.env.TYPEORM_USERNAME || "postgres",
  password: process.env.TYPEORM_PASSWORD || "postgres",
  database: process.env.TYPEORM_DATABASE || "test",
  entities: ["./model/*.ts"],
  migrations: ["./database/migrations/*.ts"],
  synchronize: true,
  logging: false,
});
export default AppDataSource;