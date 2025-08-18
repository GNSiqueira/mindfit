import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pergunta } from "src/data/entities/Pergunta.entity";
import { QuestionarioModule } from './Questionario.module'
import { TemplateQuestionarioModule } from './TemplateQuestionario.module'


@Module({
    imports: [
        TypeOrmModule.forFeature([Pergunta]),
        QuestionarioModule,
        TemplateQuestionarioModule,
    ],
    controllers: [],
    providers: [],
    exports: [TypeOrmModule],
})
export class PerguntaModule {}
