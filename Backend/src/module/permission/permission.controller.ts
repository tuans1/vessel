import { Controller, Get } from '@nestjs/common';
import { PermissionService } from './permission.service';

@Controller('/permission')
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}

  @Get()
  getHello(): string {
    return this.permissionService.getHello();
  }
}
