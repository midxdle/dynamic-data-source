import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { FirstService } from './services/first.service';
import { SecondService } from './services/second.service';
import { ThirdService } from './services/third.service';

@Injectable({ scope: Scope.REQUEST })
export class DatasourceFactory {
  constructor(
    @Inject(REQUEST) private request: Request,
    private firstService: FirstService,
    private secondService: SecondService,
    private thirdService: ThirdService,
  ) {}

  create() {
    const sourceParam = this.request?.query?.source;
    switch (sourceParam) {
      case 'firstSource':
        return this.firstService;
      case 'secondSource':
        return this.secondService;
      case 'thirdSource':
        return this.thirdService;
      default:
        throw new Error(`Invalid datasource: ${sourceParam}`);
    }
  }
}
