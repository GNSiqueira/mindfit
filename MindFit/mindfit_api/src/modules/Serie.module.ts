import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Serie } from "src/data/entities/Serie.entity";
import { ExercicioModule } from './Exercicio.module'


@Module({
    imports: [
        TypeOrmModule.forFeature([Serie]),
        ExercicioModule,
    ],
    controllers: [],
    providers: [],
})
export class SerieModule {}
