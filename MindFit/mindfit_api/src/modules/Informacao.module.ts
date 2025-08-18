import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Informacao } from "src/data/entities/Informacao.entity";
import { ClienteModule } from './Cliente.module'


@Module({
    imports: [
        TypeOrmModule.forFeature([Informacao]),
        ClienteModule,
    ],
    controllers: [],
    providers: [],
})
export class InformacaoModule {}
