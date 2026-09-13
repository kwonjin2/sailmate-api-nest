import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateGatheringDto } from './gatherings/dto/create-gathering.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('health')
  getHealth() {
    return {
      status: 'ok',
    };
  }

  @Get('gatherings')
  getGatherings() {
    return this.appService.getGatherings();
  }

  @Post('gatherings')
  postGatherings(@Body() createGatheringDto: CreateGatheringDto) {
    return this.appService.postGatherings(
      createGatheringDto.title,
      createGatheringDto.description,
    );
  }
}
