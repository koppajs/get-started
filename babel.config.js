module.exports = (api) => {
  api.cache(true);
  api.assertVersion('^7.4.5');

  const presets = [
    [
      '@babel/preset-env', {
        targets: {
          edge: '17',
          firefox: '60',
          chrome: '67',
          safari: '11.1'
        },
        useBuiltIns: 'entry',
        corejs: 3
      }
    ]
  ];

  const plugins = [];

  return { presets, plugins };
};
