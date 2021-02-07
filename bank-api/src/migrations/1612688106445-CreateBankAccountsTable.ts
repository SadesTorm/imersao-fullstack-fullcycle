import { table } from "console";
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateBankAccountsTable1612688106445 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
       queryRunner.createTable(
            new Table({
                name:'bank_accounts',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'account_number',
                        type: 'varchar'
                    },
                    {
                        name:'ower_name',
                        type: 'varchar'
                    },
                    {
                        name: 'balance',
                        type: 'double precision'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'CURRENT_TIMESTAMP'
                    }
                ]

             })
        
        )
    }


    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('bank_accounts')
    }

}
