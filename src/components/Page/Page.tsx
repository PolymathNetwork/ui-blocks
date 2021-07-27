import { FC } from 'react';

import { PageProps } from './types';
import { Component } from './styles';

export const Page: FC<PageProps> = (props) => <Component {...props} />;
