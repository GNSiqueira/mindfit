import {
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Avaliacao } from "./Avaliacao.entity";
import { Trainer } from "./Trainer.entity";

@Entity({ name: "tipo_avaliacao" })
export class TipoAvaliacao {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ type: "varchar", nullable: false, length: 100 })
    nome: string;

    @Column({ type: "text", nullable: true })
    descricao: string;

    // Relacionamentos
    @OneToMany(() => Avaliacao, (avaliacao) => avaliacao.tipoAvaliacao)
    avaliacoes: Avaliacao[];

    @ManyToOne(() => Trainer, (trainer) => trainer.tiposAvaliacao)
    trainer: Trainer;
}
