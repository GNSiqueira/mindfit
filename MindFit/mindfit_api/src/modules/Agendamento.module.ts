import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Agendamento } from "src/data/entities/Agendamento.entity";
import { ClienteModule } from './Cliente.module'
import { TrainerModule } from './Trainer.module'


@Module({
    imports: [
        TypeOrmModule.forFeature([Agendamento]),
        ClienteModule,
        TrainerModule,
    ],
    controllers: [],
    providers: [],
})
export class AgendamentoModule {}
