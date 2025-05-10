module.exports = {
  apps: [
    {
      name: 'O2ConfigApp',
      port: '3000',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ]
}
