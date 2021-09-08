# Welcome to Polyblocks!

Demo: https://PolymathNetwork.github.io/ui-blocks

This UI library is opinionated, components are styled according to our design system guidelines and specifications to make precise implementation the default. However, there are ways to override them.

We followed the [component-driven UI](https://www.componentdriven.org/#how) process:

> The development and design practice of building user interfaces with modular components. UIs are built from the “bottom up” starting with basic components then progressively combined to assemble screens.

Clone repo and run Storybook locally via `npm start`. Browse components (Polyblocks) by navigating to them in the sidebar. View their code and play around with controls to learn how they work.

### NOTE:

- Styles are passed to components from `src/themeSettings/definition.ts`. You can also import `PolyThemeProvider` and pass your own theme to it.
- To add a new theme, create a file in `src/themes` and override on default theme then export it from `src/themes/index.ts`.
- Styles set via props are wired inside the component and override the theme.
- `GAP`s are used for margins and other spacings, and are incremented by `8px`.
- You can set a margin for some components via the `margin` prop:
  - `<Box margin="s" />`
  - `<Button margin="m 0" />`
  - `<Flex margin="0 0 xl 0" />`
- You can create other components based on these inside your project if special treatment is required.
- To add a new icon, create SVG file in `src/themeSettings/icons/svg`, and it will automatically be available to components in development, and exported as a React component in production. Icons are exported as `polyIcons`.
