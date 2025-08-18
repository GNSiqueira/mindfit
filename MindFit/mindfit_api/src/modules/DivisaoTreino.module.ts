import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DivisaoTreino } from "src/data/entities/DivisaoTreino.entity";
import { FichaTreinoModule } from './FichaTreino.module'


@Module({
    imports: [
        TypeOrmModule.forFeature([DivisaoTreino]),
        FichaTreinoModule,
    ],
    controllers: [],
    providers: [],
    exports: [TypeOrmModule],
})
export class DivisaoTreinoModule {}
