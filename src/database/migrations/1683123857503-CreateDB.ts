import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDB1683123857503 implements MigrationInterface {
    name = 'CreateDB1683123857503'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "rocket" ("name" character varying(255) NOT NULL, "id" character varying(255) NOT NULL, CONSTRAINT "PK_89b0efae402998623e1367aa34a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "crewman" ("id" character varying(255) NOT NULL, "name" character varying(255) NOT NULL, "patent" character varying(255) NOT NULL, CONSTRAINT "PK_4fb6d9687691fd6b62b98a62955" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "crew" ("id" character varying(255) NOT NULL, "name" character varying(255) NOT NULL, CONSTRAINT "PK_cc72b429996b3476dbaac59f1c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "launch" ("id" character varying(255) NOT NULL, "launchCode" character varying(255) NOT NULL, "date" character varying(100) NOT NULL, "success" boolean NOT NULL, "rocketId" character varying(255), "crewId" character varying(255), CONSTRAINT "REL_b01b01e9029a8e3c1a92851199" UNIQUE ("rocketId"), CONSTRAINT "REL_0f1c4f512003ae87bb8df983d4" UNIQUE ("crewId"), CONSTRAINT "PK_0efd83695074312cab129ff59f0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "crew_crewmen_crewman" ("crewId" character varying(255) NOT NULL, "crewmanId" character varying(255) NOT NULL, CONSTRAINT "PK_ffee24cdeb79494bc69172128e8" PRIMARY KEY ("crewId", "crewmanId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_23676586de1dd70e9780398146" ON "crew_crewmen_crewman" ("crewId") `);
        await queryRunner.query(`CREATE INDEX "IDX_644d12dc04dc82662f5677d260" ON "crew_crewmen_crewman" ("crewmanId") `);
        await queryRunner.query(`ALTER TABLE "launch" ADD CONSTRAINT "FK_b01b01e9029a8e3c1a928511998" FOREIGN KEY ("rocketId") REFERENCES "rocket"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "launch" ADD CONSTRAINT "FK_0f1c4f512003ae87bb8df983d49" FOREIGN KEY ("crewId") REFERENCES "crew"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "crew_crewmen_crewman" ADD CONSTRAINT "FK_23676586de1dd70e9780398146e" FOREIGN KEY ("crewId") REFERENCES "crew"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "crew_crewmen_crewman" ADD CONSTRAINT "FK_644d12dc04dc82662f5677d260c" FOREIGN KEY ("crewmanId") REFERENCES "crewman"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "crew_crewmen_crewman" DROP CONSTRAINT "FK_644d12dc04dc82662f5677d260c"`);
        await queryRunner.query(`ALTER TABLE "crew_crewmen_crewman" DROP CONSTRAINT "FK_23676586de1dd70e9780398146e"`);
        await queryRunner.query(`ALTER TABLE "launch" DROP CONSTRAINT "FK_0f1c4f512003ae87bb8df983d49"`);
        await queryRunner.query(`ALTER TABLE "launch" DROP CONSTRAINT "FK_b01b01e9029a8e3c1a928511998"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_644d12dc04dc82662f5677d260"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_23676586de1dd70e9780398146"`);
        await queryRunner.query(`DROP TABLE "crew_crewmen_crewman"`);
        await queryRunner.query(`DROP TABLE "launch"`);
        await queryRunner.query(`DROP TABLE "crew"`);
        await queryRunner.query(`DROP TABLE "crewman"`);
        await queryRunner.query(`DROP TABLE "rocket"`);
    }

}
