const template = ({ template: tmp }, opts, { componentName, jsx }) => {
  const plugins = ['jsx'];
  if (opts.typescript) {
    plugins.push('typescript');
  }

  const templatingEngine = tmp.smart({ plugins });

  const templatedComponent = templatingEngine.ast`
    import { SVGProps, memo } from 'react';

    const ${componentName} = (props: SVGProps<SVGSVGElement>) =>
      ${jsx}
    ;

    const Icon = memo(${componentName});
    export default Icon;
  `;

  return templatedComponent;
};

module.exports = template;
