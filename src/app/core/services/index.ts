import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';

export * from './authentication.service';
export * from './user.service';

export const services = [AuthenticationService, UserService];