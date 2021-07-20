export const getMargin = ({ theme, margin }: { theme: any; margin?: string }) =>
  margin
    ? margin
        .split(' ')
        .map((e) => theme.GAP[e] || e)
        .join(' ')
    : 0;
