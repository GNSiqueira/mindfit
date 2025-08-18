import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Questionario } from "src/data/entities/Questionario.entity";
import { ClienteModule } from './Cliente.module'
import { TrainerModule } from './Trainer.module'
import { TemplateQuestionarioModule } from './TemplateQuestionario.module'


@Module({
    imports: [
        TypeOrmModule.forFeature([Questionario]),
        ClienteModule,
        TrainerModule,
        TemplateQuestionarioModule,
    ],
    controllers: [],
    providers: [],
    exports: [TypeOrmModule],
})
export class QuestionarioModule {}
