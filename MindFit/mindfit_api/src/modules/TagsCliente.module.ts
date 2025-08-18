import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagsCliente } from "src/data/entities/TagsCliente.entity";
import { ClienteModule } from './Cliente.module'
import { TagModule } from './Tag.module'


@Module({
    imports: [
        TypeOrmModule.forFeature([TagsCliente]),
        ClienteModule,
        TagModule,
    ],
    controllers: [],
    providers: [],
})
export class TagsClienteModule {}
