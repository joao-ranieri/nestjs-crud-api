import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import jwt_decode from "jwt-decode";

@Injectable()
export class RolesGuard implements CanActivate {

  constructor(
    private reflector: Reflector,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());

    if (!roles) {
      return true;
    }
    
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization.slice(7);
    const user: any = jwt_decode(token);
    
    for(const role of roles) {
      if (role.match(user.profile)) {
        return true;
      } else {
        throw new HttpException({
          status: HttpStatus.FORBIDDEN,
          error: 'You do not have permissions to access this feature.',
        }, HttpStatus.FORBIDDEN);
      }
    }
  }
}

