const template = ({ template: tmp }, opts, { componentName, jsx }) => {
  const plugins = ['jsx'];
  if (opts.typescript) {
    plugins.push('typescript');
  }

  const templatingEngine = tmp.smart({ plugins });

  const templatedComponent = templatingEngine.ast`
    import { SVGProps, memo } from 'react';

    const Icon = (props: SVGProps<SVGSVGElement>) =>
      ${jsx}
    ;

    const ${componentName} = memo(Icon);
    export default ${componentName};
  `;

  return templatedComponent;
};

module.exports = template;
