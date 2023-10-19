import { Controller, Get, Inject } from '@nestjs/common';
import { datasourceToken } from 'src/dynamic-datasource/datasource.constant';
import { Datasource } from 'src/dynamic-datasource/datasource.interface';

@Controller('api')
export class ApiController {
  constructor(
    @Inject(datasourceToken) private readonly datasource: Datasource,
  ) {}

  @Get('/data')
  fetchData() {
    return this.datasource.getData();
  }
}
