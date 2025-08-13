import { IsString, Length } from "class-validator"

export class CreateTaskDto {
    @IsString({message : "O título deve ser uma string"})
    @Length(3, 50, {message : "O título deve ter entre 3 e 50 caracteres"})
    titulo: string
    
    @IsString({message : "A descrição deve ser uma string"})
    @Length(3, 50, {message : "A descrição deve ter entre 3 e 150 caracteres"})
    descricao: string
}
