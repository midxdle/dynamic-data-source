import { Module, Scope } from '@nestjs/common';
import { datasourceToken } from './datasource.constant';
import { DatasourceFactory } from './dynamic-datasource.factory';
import { FirstService } from './services/first.service';
import { SecondService } from './services/second.service';
import { ThirdService } from './services/third.service';

@Module({
  providers: [
    {
      provide: datasourceToken,
      scope: Scope.REQUEST,
      useFactory: (datasourceFactory: DatasourceFactory) => {
        datasourceFactory.create();
      },
      inject: [DatasourceFactory],
    },
    DatasourceFactory,
    FirstService,
    SecondService,
    ThirdService,
  ],
  exports: [datasourceToken],
})
export class DynamicDataSourceModule {}
