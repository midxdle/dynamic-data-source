import { Injectable } from '@nestjs/common';
import { Datasource } from '../datasource.interface';

@Injectable()
export class ThirdService implements Datasource {
  getData(): string {
    return 'Data from Third Service';
  }
}
