import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exercicio } from "src/data/entities/Exercicio.entity";
import { DivisaoTreinoModule } from './DivisaoTreino.module'
import { Musculo } from 'src/data/entities/Musculo.entity';


@Module({
    imports: [
        TypeOrmModule.forFeature([Exercicio, Musculo]),
        DivisaoTreinoModule,
    ],
    controllers: [],
    providers: [],
    exports: [TypeOrmModule],
})
export class ExercicioModule {}
