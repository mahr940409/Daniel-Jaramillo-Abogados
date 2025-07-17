module.exports = function override(config, env) {
  // Find the source-map-loader rule
  const sourceMapLoaderRule = config.module.rules.find(rule => 
    rule.loader && rule.loader.includes('source-map-loader')
  );

  if (sourceMapLoaderRule) {
    // Ensure exclude is an array and add exclude pattern for @mediapipe/tasks-vision
    const currentExclude = sourceMapLoaderRule.exclude;
    sourceMapLoaderRule.exclude = [
      ...(Array.isArray(currentExclude) ? currentExclude : []),
      /node_modules\/@mediapipe\/tasks-vision/
    ];
  }

  return config;
};