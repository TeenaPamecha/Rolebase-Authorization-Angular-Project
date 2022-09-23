import { ErrorInterceptor } from './error.interceptor';
import { JwtInterceptor } from './jwt.interceptor';
import { FakeBackendInterceptor } from './fake-backend.interceptor';

export * from './error.interceptor';
export * from './jwt.interceptor';
export * from './fake-backend.interceptor';

export const interceptors = [ErrorInterceptor, JwtInterceptor,FakeBackendInterceptor];