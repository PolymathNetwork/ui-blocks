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

export const visuallyHidden: any = () => ({
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  border: 0,
});
