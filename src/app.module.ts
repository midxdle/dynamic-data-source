import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DynamicDataSourceModule } from './dynamic-data-source/dynamic-data-source.module';
import { ApiModule } from './api/api.module';

@Module({
  imports: [DynamicDataSourceModule, ApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
