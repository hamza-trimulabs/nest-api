import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';

import { NestConfigModule } from '@config/nest.config.module';

import { ServerHealthCheckModule } from '@server-health-check/server-health-check.module';

@Module({
  imports: [
    NestConfigModule,
    ServerHealthCheckModule,
    RouterModule.register([
      {
        path: 'server-health-check',
        module: ServerHealthCheckModule,
      },
    ]),
  ],
})
export class AppConfigModule {}
