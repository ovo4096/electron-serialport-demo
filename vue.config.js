module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      externals: ['serialport'],
    },
  },
};
