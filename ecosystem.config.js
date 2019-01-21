module.exports = {
  apps: [
    {
      name: "simplenode",
      script: "dist/index.js",
      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      // args: 'one two',
      output: "logs/out.log",
      error: "logs/error.log",
      merge_logs: true,
      instances: "1",
      autorestart: true,
      watch: false,
      max_memory_restart: "500M",
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    }
  ]
};
