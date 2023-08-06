import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return `FrontendButtonState: ${this.appService.getFrontendButtonState()}`;
  }

  @Get('/frontend-button-state')
  setFrontendButtonStateToTrue(): string {
    this.appService.setFrontendButtonState(true);
    return 'Frontend button state set to true';
  }
}
