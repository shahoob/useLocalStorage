import { Dispatch } from 'react';

export type THook<T> = (key: string) => [(T | null), Dispatch<T>];
