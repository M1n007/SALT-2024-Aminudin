import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from 'common/decorators/roles.decorator';
import { UserService } from 'modules/user/v1/services/user.service';
import { Role } from 'common/enums/role.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private userService: UserService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const userId = request.user?.id;
    if (!userId) {
      throw new ForbiddenException('User is not authenticated');
    }

    const user = await this.userService.findOneById(userId);
    if (!user || !requiredRoles.includes(user.role as Role)) {
      throw new ForbiddenException('You do not have permission to access this resource');
    }

    return true;
  }
}
