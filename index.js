 const { Client } = require('pg');

const client = new Client({
  user: 'default', 
  password: '6KyZd2sNxTuv',
  host: 'ep-odd-river-24248080-pooler.eu-central-1.postgres.vercel-storage.com',
  port: 5432,
  database: 'verceldb',
});

async function connectAndInsertData() {
  try {
    await client.connect();
    console.log('连接成功');

    // 在这里执行插入数据的操作
    const query = 'INSERT INTO your_table(column1, column2) VALUES ($1, $2)'; 
    const values = ['value1', 'value2'];
    await client.query(query, values);
    console.log('数据插入成功');

    await client.end();
    console.log('断开连接');
  } catch (err) {
    console.error('连接失败或数据插入失败:', err);
  }
}

connectAndInsertData();
