export default [
  {
    path: 'dist/index.es.js',
    limit: '300 KB',
  },
  {
    path: 'dist/index.cjs.js',
    limit: '300 KB',
    ignore: ['react', 'react-dom', 'antd'],
  },
];
