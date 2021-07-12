export const getMargin = ({ theme, margin }: { theme: any; margin: string }) =>
  margin
    .split(' ')
    .map((e) => theme.GAP[e] || e)
    .join(' ');
