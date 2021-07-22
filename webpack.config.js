module.exports = (config) => {
  // Remove SVG from default rule
  const svgRule = config.module.rules.find((rule) => rule.test.test('.svg'));
  svgRule.test =
    /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;

  // Add new SVG rule
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });
  return config;
};
