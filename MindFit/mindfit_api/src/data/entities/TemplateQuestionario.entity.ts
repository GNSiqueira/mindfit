import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Trainer } from './Trainer.entity';
import { Pergunta } from './Pergunta.entity';
import { Questionario } from './Questionario.entity';
import { Objetivo } from '../enums/Objetivo.enum';

@Entity({ name: 'template_questionario' })
export class TemplateQuestionario {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', nullable: false, length: 100 })
  nome: string;

  @Column({ type: 'integer', enum: Objetivo, nullable: false })
  objetivo: Objetivo;

  @Column({ type: 'text', nullable: true })
  descricao: string;

  @Column({ type: 'date', nullable: false })
  dataCriacao: Date;

  @Column({ type: 'date', nullable: true })
  dataAtualizacao: Date;

  @Column({ type: 'boolean', nullable: false })
  active: boolean;

  // Relacionamentos
  @ManyToOne(() => Trainer, (trainer) => trainer.templates)
  trainer: Trainer;

  @OneToMany( () => Questionario, (questionario) => questionario.templateQuestionario)
  questionarios: Questionario[];

  @OneToMany(() => Pergunta, (pergunta) => pergunta.template)
  perguntas: Pergunta[];

}
