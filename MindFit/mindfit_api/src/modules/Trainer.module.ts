import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trainer } from "src/data/entities/Trainer.entity";
import { ConfiguracaoModule } from './Configuracao.module'


@Module({
    imports: [
        TypeOrmModule.forFeature([Trainer]),
        ConfiguracaoModule,
    ],
    controllers: [],
    providers: [],
    exports: [TypeOrmModule],
})
export class TrainerModule {}
