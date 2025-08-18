import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Avaliacao } from "./Avaliacao.entity";

@Entity({ name: 'video_avaliacao' })
export class VideoAvaliacao {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'varchar', nullable: false, length: 255 })
    video: string

    @Column({ type: 'text', nullable: false })
    descricao: string

    // Relacionamentos
    @ManyToOne(() => Avaliacao, (avaliacao) => avaliacao.videosAvaliacao)
    avaliacao: Avaliacao
}
