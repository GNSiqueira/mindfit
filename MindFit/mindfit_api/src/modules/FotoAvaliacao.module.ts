import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FotoAvaliacao } from "src/data/entities/FotoAvaliacao.entity";
import { AvaliacaoModule } from './Avaliacao.module'


@Module({
    imports: [
        TypeOrmModule.forFeature([FotoAvaliacao]),
        AvaliacaoModule,
    ],
    controllers: [],
    providers: [],
})
export class FotoAvaliacaoModule {}
