import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'task'})
export class Task {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({nullable: false, length: 50})
    titulo: string
    
    @Column({nullable: false, length: 150})
    descricao: string
    
    @Column({nullable: false})
    status: number

}