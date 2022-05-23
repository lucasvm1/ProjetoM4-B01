import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiTags('Status')
  @Get()
  @ApiOperation({
    summary: 'App Status'
  })
  getAppStatus(): string {
    return this.appService.getAppStatus();
  }
}
