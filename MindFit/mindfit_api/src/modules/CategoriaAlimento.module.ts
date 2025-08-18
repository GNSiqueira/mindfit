import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaAlimento } from "src/data/entities/CategoriaAlimento.entity";


@Module({
    imports: [
        TypeOrmModule.forFeature([CategoriaAlimento]),
    ],
    controllers: [],
    providers: [],
    exports: [TypeOrmModule],
})
export class CategoriaAlimentoModule {}
