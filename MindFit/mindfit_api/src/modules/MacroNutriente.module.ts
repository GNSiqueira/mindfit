import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MacroNutriente } from "src/data/entities/MacroNutriente.entity";
import { DietaModule } from './Dieta.module'


@Module({
    imports: [
        TypeOrmModule.forFeature([MacroNutriente]),
        DietaModule,
    ],
    controllers: [],
    providers: [],
})
export class MacroNutrienteModule {}
