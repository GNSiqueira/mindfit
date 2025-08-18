import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from "./Cliente.entity";
import { Trainer } from "./Trainer.entity";
import { TipoAgendamento } from "../enums/TipoAgendamento.enum";

@Entity({ name: 'agendamento' })
export class Agendamento {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'date', nullable: false })
    data: Date

    @Column({ type: 'time', nullable: false })
    hora: Date

    @Column({ type: 'integer', enum: TipoAgendamento, nullable: false })
    tipo: TipoAgendamento

    @Column({ type: 'text', nullable: true })
    descricao: string

    // Relacionamentos
    @ManyToOne(() => Cliente, (cliente) => cliente.agendamentos)
    cliente: Cliente

    @ManyToOne(() => Trainer, (trainer) => trainer.agendamentos)
    trainer: Trainer
}
