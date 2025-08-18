import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Configuracao } from "src/data/entities/Configuracao.entity";


@Module({
    imports: [
        TypeOrmModule.forFeature([Configuracao]),
    ],
    controllers: [],
    providers: [],
    exports: [TypeOrmModule]
})
export class ConfiguracaoModule {}
