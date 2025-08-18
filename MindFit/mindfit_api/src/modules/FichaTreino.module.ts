import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FichaTreino } from "src/data/entities/FichaTreino.entity";
import { TrainerModule } from './Trainer.module'
import { ClienteModule } from './Cliente.module'


@Module({
    imports: [
        TypeOrmModule.forFeature([FichaTreino]),
        TrainerModule,
        ClienteModule,
    ],
    controllers: [],
    providers: [],
    exports: [TypeOrmModule],
})
export class FichaTreinoModule {}
