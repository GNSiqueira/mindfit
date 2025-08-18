import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Avaliacao } from "src/data/entities/Avaliacao.entity";
import { ClienteModule } from './Cliente.module'
import { TrainerModule } from './Trainer.module'
import { TipoAvaliacaoModule } from './TipoAvaliacao.module'


@Module({
    imports: [
        TypeOrmModule.forFeature([Avaliacao]),
        ClienteModule,
        TrainerModule,
        TipoAvaliacaoModule,
    ],
    controllers: [],
    providers: [],
    exports: [TypeOrmModule],
})
export class AvaliacaoModule {}
