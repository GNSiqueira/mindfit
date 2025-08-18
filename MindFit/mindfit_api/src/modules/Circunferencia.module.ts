import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Circunferencia } from "src/data/entities/Circunferencia.entity";
import { ComposicaoCorporalModule } from './ComposicaoCorporal.module'


@Module({
    imports: [
        TypeOrmModule.forFeature([Circunferencia]),
        ComposicaoCorporalModule,
    ],
    controllers: [],
    providers: [],
})
export class CircunferenciaModule {}
