module.exports = function override(config, env) {
  // Find the source-map-loader rule
  const sourceMapLoaderRule = config.module.rules.find(rule => 
    rule.loader && rule.loader.includes('source-map-loader')
  );

  if (sourceMapLoaderRule) {
    // Add exclude pattern for @mediapipe/tasks-vision
    sourceMapLoaderRule.exclude = [
      ...(sourceMapLoaderRule.exclude || []),
      /node_modules\/@mediapipe\/tasks-vision/
    ];
  }

  return config;
};