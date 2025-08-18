import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Trainer } from "./Trainer.entity";

@Entity({name: 'configuracao'})
export class Configuracao{
    @PrimaryGeneratedColumn('increment')
    id: number

    // Relacionamentos
    @OneToOne(() => Trainer, (trainer) => trainer.configuracao)
    trainer: Trainer
}
