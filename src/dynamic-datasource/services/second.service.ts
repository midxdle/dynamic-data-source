import { Injectable } from '@nestjs/common';
import { Datasource } from '../datasource.interface';

@Injectable()
export class SecondService implements Datasource {
  getData(): string {
    return 'Data from Second Service';
  }
}
