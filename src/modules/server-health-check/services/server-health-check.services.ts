import { Injectable } from '@nestjs/common';

import { ServerHealthCheckResponse } from '@server-health-check/dto/server-health-check.dto';

@Injectable()
export class ServerHealthCheckService {
  /**
   * Retrieves a greeting message.
   *
   * @returns A string containing the greeting message "Hello World!".
   */
  async healthCheck(): Promise<ServerHealthCheckResponse> {
    return {
      nestServerCheck: 'success',
    };
  }
}
