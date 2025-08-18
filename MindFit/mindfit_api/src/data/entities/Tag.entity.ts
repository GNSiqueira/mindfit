import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TagsCliente } from "./TagsCliente.entity";

@Entity({ name: "tag" })
export class Tag {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: "varchar", nullable: false, length: 50 })
    nome: string;

    @Column({ type: "text", nullable: true })
    descricao: string;

    // Relacionamentos
    @OneToMany(() => TagsCliente, (tagsCliente) => tagsCliente.tag)
    tagsCliente: TagsCliente[];
}
