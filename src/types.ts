import { FC } from 'react';

export type GC<P, D = undefined> = FC<P & { data?: D }>;
