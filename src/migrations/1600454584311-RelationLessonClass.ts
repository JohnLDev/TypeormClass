import { MigrationInterface, QueryRunner } from 'typeorm'

export class RelationLessonClass1600454584311 implements MigrationInterface {
  name = 'RelationLessonClass1600454584311'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "lesson" ADD "classId" uuid`)
    await queryRunner.query(
      `ALTER TABLE "lesson" ADD CONSTRAINT "FK_f327c28c988cbfe23a725982727" FOREIGN KEY ("classId") REFERENCES "class"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "lesson" DROP CONSTRAINT "FK_f327c28c988cbfe23a725982727"`,
    )
    await queryRunner.query(`ALTER TABLE "lesson" DROP COLUMN "classId"`)
  }
}
