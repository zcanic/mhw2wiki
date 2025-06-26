module.exports = {
  apps: [{
    name: 'mhw2wiki-api',
    script: 'apps/backend/dist/main.js',
    cwd: '/www/wwwroot/mhw2wiki',
    env: {
      NODE_ENV: 'production',
      PORT: 4000
    },
    instances: 1,
    exec_mode: 'fork',
    autorestart: true,
    watch: false,
    max_memory_restart: '500M',
    
    // 日志配置
    error_file: './logs/api-error.log',
    out_file: './logs/api-out.log', 
    log_file: './logs/api-combined.log',
    time: true,
    
    // 进程管理
    min_uptime: '10s',
    max_restarts: 10,
    
    // 环境变量文件
    env_file: './apps/backend/.env.production'
  }]
};
