import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TemplateQuestionario } from "src/data/entities/TemplateQuestionario.entity";
import { TrainerModule } from './Trainer.module'


@Module({
    imports: [
        TypeOrmModule.forFeature([TemplateQuestionario]),
        TrainerModule,
    ],
    controllers: [],
    providers: [],
    exports: [TypeOrmModule],
})
export class TemplateQuestionarioModule {}
