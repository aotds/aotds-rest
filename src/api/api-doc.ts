type Config = {
    prefix: string;
};

export default (config: Config) => ({
  swagger: "2.0",
  basePath: `${config.prefix}`,
  info: {
    title: "aotds restish server",
    version: process.env.npm_package_version || "0.0.0",
  },
  paths: {},
});
