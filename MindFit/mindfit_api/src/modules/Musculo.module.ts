import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Musculo } from "src/data/entities/Musculo.entity";
import { ExercicioModule } from './Exercicio.module'
import { Exercicio } from 'src/data/entities/Exercicio.entity';


@Module({
    imports: [
        TypeOrmModule.forFeature([Musculo, Exercicio]),
    ],
    controllers: [],
    providers: [],
    exports: [TypeOrmModule],
})
export class MusculoModule {}
