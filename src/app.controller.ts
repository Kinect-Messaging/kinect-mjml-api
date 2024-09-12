import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('mjml2html')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  convertToHtml(@Body() body: { mjml: string; options?: any }): any {
    const { mjml, options } = body;
    const html = this.appService.convertMjmlToHtml(mjml, options);
    return { html };
  }
}