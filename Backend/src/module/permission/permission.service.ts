import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Permission } from './permission.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PermissionService {
  constructor(
    @InjectRepository(Permission)
    private readonly permissionService: Repository<Permission>,
  ) {}
  getHello(): any {
    return this.permissionService.find();
  }
}
