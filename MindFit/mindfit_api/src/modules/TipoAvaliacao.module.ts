import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoAvaliacao } from "src/data/entities/TipoAvaliacao.entity";
import { AvaliacaoModule } from './Avaliacao.module'
import { TrainerModule } from './Trainer.module';


@Module({
    imports: [
        TypeOrmModule.forFeature([TipoAvaliacao]),
        TrainerModule
    ],
    controllers: [],
    providers: [],
    exports: [TypeOrmModule],
})
export class TipoAvaliacaoModule {}
