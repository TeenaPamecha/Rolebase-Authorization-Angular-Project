import { DateformatPipe } from './dateformat.pipe';
import { InitialsPipe } from './initials.pipe';

export * from './dateformat.pipe';
export * from './initials.pipe';

export const pipes = [
  DateformatPipe,
  InitialsPipe
];
