let mongo = process.env.MONGODB_URI || 'mongodb://localhost:27017/ProjetoWeb';

module.exports = {
    uri: mongo,
    db: 'ProjetoWeb',
    options: {
        useNewUrlParser: true
    }
};
