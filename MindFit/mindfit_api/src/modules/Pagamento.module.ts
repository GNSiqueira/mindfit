import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pagamento } from "src/data/entities/Pagamento.entity";
import { ClienteModule } from './Cliente.module'
import { TrainerModule } from './Trainer.module'


@Module({
    imports: [
        TypeOrmModule.forFeature([Pagamento]),
        ClienteModule,
        TrainerModule,
    ],
    controllers: [],
    providers: [],
})
export class PagamentoModule {}
