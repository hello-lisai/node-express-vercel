const { Client } = require('pg');

const client = new Client({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: 5432,
  database: process.env.POSTGRES_DATABASE,
});

client.connect()
  .then(() => {
    console.log('连接成功');
  })
  .catch((err) => {
    console.error('连接失败:', err);
  });
