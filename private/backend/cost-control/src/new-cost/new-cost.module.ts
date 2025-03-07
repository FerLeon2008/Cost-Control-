import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRoot({
        type: 'sqlite',
        database: 'CostDB.db',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
        }),
    ],
})
export class NewCostModule {}
