import { Dispatch } from 'react';

export type THook = (key: string) => [(string | null), Dispatch<string>];
