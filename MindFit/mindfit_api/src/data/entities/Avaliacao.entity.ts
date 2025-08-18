import {
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Cliente } from "./Cliente.entity";
import { Trainer } from "./Trainer.entity";
import { TipoAvaliacao } from "./TipoAvaliacao.entity";
import { VideoAvaliacao } from "./VideoAvaliacao.entity";
import { FotoAvaliacao } from "./FotoAvaliacao.entity";
import { StatusAvaliacao } from "../enums/StatusAvaliacao.enum";

@Entity({ name: "avaliacao" })
export class Avaliacao {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ type: "text", nullable: true })
    observacao: string;

    @Column({ type: "date", nullable: false })
    data: Date;

    @Column({ type: "time", nullable: false })
    hora: Date;

    @Column({ type: "integer", nullable: false, enum: StatusAvaliacao })
    status: StatusAvaliacao;

    // Relacionamentos
    @ManyToOne(() => Cliente, (cliente) => cliente.avaliacaos)
    cliente: Cliente;

    @ManyToOne(() => Trainer, (trainer) => trainer.avaliacaos)
    trainer: Trainer;

    @ManyToOne(() => TipoAvaliacao, (tipoAvaliacao) => tipoAvaliacao.avaliacoes)
    tipoAvaliacao: TipoAvaliacao;

    @OneToMany(() => VideoAvaliacao, (videoAvaliacao) => videoAvaliacao.avaliacao)
    videosAvaliacao: VideoAvaliacao[];

    @OneToMany(() => FotoAvaliacao, (fotoAvaliacao) => fotoAvaliacao.avaliacao)
    fotosAvaliacao: FotoAvaliacao[];
}
