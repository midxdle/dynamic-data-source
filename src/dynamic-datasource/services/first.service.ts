import { Injectable } from '@nestjs/common';
import { Datasource } from '../datasource.interface';

@Injectable()
export class FirstService implements Datasource {
  getData(): string {
    return 'Data from First Source';
  }
}
