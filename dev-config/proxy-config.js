// const TARGET = 'http://localhost:3000'
const TARGET = 'https://invoicer-backend-17fq.onrender.com';
const commonProxy = {
  '/v1/api/': {
    target: TARGET,
    changeOrigin: true,
  }
}

export {
  commonProxy
}