import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComposicaoCorporal } from "src/data/entities/ComposicaoCorporal.entity";
import { ClienteModule } from './Cliente.module'


@Module({
    imports: [
        TypeOrmModule.forFeature([ComposicaoCorporal]),
        ClienteModule,
    ],
    controllers: [],
    providers: [],
    exports: [TypeOrmModule],
})
export class ComposicaoCorporalModule {}
