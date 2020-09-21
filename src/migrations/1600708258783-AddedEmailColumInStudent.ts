import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddedEmailColumInStudent1600708258783
  implements MigrationInterface {
  name = 'AddedEmailColumInStudent1600708258783'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "student" ADD "email" character varying NOT NULL`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "student" DROP COLUMN "email"`)
  }
}
