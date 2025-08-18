import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Resposta } from "src/data/entities/Resposta.entity";
import { QuestionarioModule } from './Questionario.module'
import { PerguntaModule } from './Pergunta.module'


@Module({
    imports: [
        TypeOrmModule.forFeature([Resposta]),
        QuestionarioModule,
        PerguntaModule,
    ],
    controllers: [],
    providers: [],
    exports: [TypeOrmModule],
})
export class RespostaModule {}
