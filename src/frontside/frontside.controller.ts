import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class FrontsideController {
  @Get()
  @Render(`frontside/index`)
  root() {
    // return { message: 'Hello world!' };
  }
}
