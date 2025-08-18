import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Avaliacao } from "./Avaliacao.entity";

@Entity({ name: 'foto_avaliacao' })
export class FotoAvaliacao {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'varchar', nullable: false, length: 255 })
    foto: string

    @Column({ type: 'text', nullable: false })
    descricao: string

    // Relacionamentos
    @ManyToOne(() => Avaliacao, (avaliacao) => avaliacao.fotosAvaliacao)
    avaliacao: Avaliacao
}
