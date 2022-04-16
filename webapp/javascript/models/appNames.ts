import { z, ZodError } from 'zod';
import { Result } from '@webapp/util/fp';
import { modelToResult } from './utils';

export const appNamesModel = z.array(z.string());

export type AppNames = z.infer<typeof appNamesModel>;
