import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alimento } from "src/data/entities/Alimento.entity";
import { CategoriaAlimentoModule } from './CategoriaAlimento.module'


@Module({
    imports: [
        TypeOrmModule.forFeature([Alimento]),
        CategoriaAlimentoModule,
    ],
    controllers: [],
    providers: [],
    exports: [TypeOrmModule],
})
export class AlimentoModule {}
