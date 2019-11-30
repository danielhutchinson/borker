import { Controller, Get, Post, Req, Body, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { App } from './app.entity';
import { Repository } from 'typeorm';

@Controller()
export class AppController {
  constructor(
    @InjectRepository(App)
    private readonly appRepository: Repository<App>,
  ) {}

  @Get()
  async getHello(): Promise<App[]> {
    return await this.appRepository.find();
  }

  @Post()
  async setAppName(@Body() request: App): Promise<App> {
    return await this.appRepository.save(request);
  }
}
