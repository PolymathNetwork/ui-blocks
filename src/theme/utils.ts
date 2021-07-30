export const getMargin = ({ theme, margin }: { theme: any; margin?: string }) =>
  margin
    ? margin
        .split(' ')
        .map((e) => theme.GAP[e] || e)
        .join(' ')
    : 0;

export const getBorder = ({ theme, border }: { theme: any; border: string }) =>
  border
    .split(' ')
    .map((e) => theme.COLOR[e] || e)
    .join(' ');
