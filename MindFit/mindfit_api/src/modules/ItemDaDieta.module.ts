import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemDaDieta } from "src/data/entities/ItemDaDieta.entity";
import { DietaModule } from './Dieta.module'
import { AlimentoModule } from './Alimento.module'


@Module({
    imports: [
        TypeOrmModule.forFeature([ItemDaDieta]),
        DietaModule,
        AlimentoModule,
    ],
    controllers: [],
    providers: [],
})
export class ItemDaDietaModule {}
