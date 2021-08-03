import { ComponentType } from 'react';
import path from 'path';

let req: any;
let isSvg = false;
try {
  req = require.context('./tsx', true, /\.tsx?$/);
} catch (e) {
  req = require.context('./svg', true, /\.svg?$/);
  isSvg = true;
}

const polyIcons: Record<string, ComponentType> = {};

const toExportName = (filename: string) =>
  (/^\d/.test(filename) ? `Svg${filename}` : filename)
    .toLowerCase()
    .split('-')
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join('');

req.keys().forEach((file: any) => {
  const basename = path.basename(file, path.extname(file));
  const exportName = isSvg ? toExportName(basename) : basename;
  polyIcons[exportName] = req(file).default;
});

export { polyIcons };
