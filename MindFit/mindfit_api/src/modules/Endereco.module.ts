import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Endereco } from "src/data/entities/Endereco.entity";


@Module({
    imports: [
        TypeOrmModule.forFeature([Endereco]),
    ],
    controllers: [],
    providers: [],
})
export class EnderecoModule {}
