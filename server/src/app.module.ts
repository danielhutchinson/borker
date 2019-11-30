import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { App } from './app.entity';

@Module({
  imports: [TypeOrmModule.forRoot(), TypeOrmModule.forFeature([App])],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
