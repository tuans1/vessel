import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Role } from './role.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private readonly roleService: Repository<Role>,
  ) {}
  getHello(): any {
    return this.roleService.find();
  }
}
