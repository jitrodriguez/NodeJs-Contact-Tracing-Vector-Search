const { PineconeClient } = require('@pinecone-database/pinecone');
const {
  PINECONE_ENVIRONMENT,
  PINECONE_APIKEY,
  PINECONE_INDEXNAME,
} = require('../config/config');
class Pinecone {
  constructor() {
    this.pinecone = new PineconeClient();
    this.indexName = PINECONE_INDEXNAME;
  }

  async initPinecone() {
    await this.pinecone.init({
      environment: PINECONE_ENVIRONMENT,
      apiKey: PINECONE_APIKEY,
    });
    this.index = this.pinecone.Index(PINECONE_INDEXNAME);
    console.log('Pinecone initialized');
  }
}

const pineconeInstance = new Pinecone();

module.exports = {
  pineconeInstance,
};
