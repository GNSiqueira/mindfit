import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tag } from "src/data/entities/Tag.entity";


@Module({
    imports: [
        TypeOrmModule.forFeature([Tag]),
    ],
    controllers: [],
    providers: [],
    exports: [TypeOrmModule],
})
export class TagModule {}
