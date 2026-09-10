import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

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
  postGatherings(@Body() body: { title: string; description: string }) {
    return this.appService.postGatherings(body.title, body.description);
  }
}
