import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dieta } from "src/data/entities/Dieta.entity";
import { ClienteModule } from './Cliente.module'


@Module({
    imports: [
        TypeOrmModule.forFeature([Dieta]),
        ClienteModule,
    ],
    controllers: [],
    providers: [],
    exports: [TypeOrmModule],
})
export class DietaModule {}
