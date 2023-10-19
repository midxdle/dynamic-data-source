import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { DynamicDataSourceModule } from 'src/dynamic-datasource/dynamic-datasource.module';

@Module({
  imports: [DynamicDataSourceModule],
  controllers: [ApiController],
})
export class ApiModule {}
