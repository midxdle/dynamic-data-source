import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { DynamicDataSourceModule } from './dynamic-datasource/dynamic-datasource.module';

@Module({
  imports: [DynamicDataSourceModule, ApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
