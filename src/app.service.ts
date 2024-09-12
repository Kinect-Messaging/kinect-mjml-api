// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class AppService {
//   getHello(): string {
//     return 'Hello World!';
//   }
// }
import { Injectable } from '@nestjs/common';
import * as mjml2html from 'mjml';

@Injectable()
export class AppService {
  convertMjmlToHtml(mjml: string, options: any = {}): string {
    const mjmlResponse = mjml2html(mjml, options);
    console.log(`Returning MJML response`);
    return mjmlResponse.html;
  }
}