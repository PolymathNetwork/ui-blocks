import { ComponentType } from 'react';
import path from 'path';

const reqSvgs = require.context('./svg', true, /\.svg$/);
let reqTsxs: any = [];
try {
  reqTsxs = require.context('./tsx', true, /\.tsx?$/);
} catch (e) {} // eslint-disable-line
const req = reqTsxs.length ? reqTsxs : reqSvgs;

const polyIcons: Record<string, ComponentType> = {};

const toExportName = (filename: string) =>
  (/^\d/.test(filename) ? `Svg${filename}` : filename)
    .toLowerCase()
    .split('-')
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join('');

req.keys().forEach((file: any) => {
  const basename = path.basename(file, path.extname(file));
  const exportName = toExportName(basename);
  polyIcons[exportName] = req(file).default;
});

export { polyIcons };
