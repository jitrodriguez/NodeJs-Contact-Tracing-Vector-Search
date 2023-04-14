module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 3000,
  PINECONE_APIKEY: process.env.PINECONE_APIKEY || 'test',
  PINECONE_NAMESPACE: process.env.PINECONE_NAMESPACE || 'development',
  PINECONE_ENVIRONMENT: process.env.PINECONE_ENVIRONMENT || 'us-east1-gcp',
  PINECONE_INDEXNAME: process.env.PINECONE_INDEXNAME || 'development',
};
