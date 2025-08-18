import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OpcaoPergunta } from "src/data/entities/OpcaoPergunta.entity";
import { PerguntaModule } from './Pergunta.module'
import { RespostaModule } from './Resposta.module'


@Module({
    imports: [
        TypeOrmModule.forFeature([OpcaoPergunta]),
        PerguntaModule,
        RespostaModule,
    ],
    controllers: [],
    providers: [],
})
export class OpcaoPerguntaModule {}
