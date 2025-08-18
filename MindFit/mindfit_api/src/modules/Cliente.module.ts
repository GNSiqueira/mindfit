import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from "src/data/entities/Cliente.entity";
import { EnderecoModule } from './Endereco.module'
import { TrainerModule } from './Trainer.module'


@Module({
    imports: [
        TypeOrmModule.forFeature([Cliente]),
        EnderecoModule,
        TrainerModule,
    ],
    controllers: [],
    providers: [],
    exports: [TypeOrmModule],
})
export class ClienteModule {}
