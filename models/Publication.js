let MongoDocument = require('./MongoDocument')

module.exports = class Publication extends MongoDocument {
    constructor (data) {
        super(data);
        this.name = data.name;
        this.age = data.age;
        this.summary = data.summary;
        this._id = data._id;
        this.collection = 'publication';
    }
    static findOne (_id) {
        
        return super.findOne(_id, 'publication').then((result) => {
            return new Publication(result);
        });
    }

    static find (query = {}, order = {name: 1}, limit = 5) {
        return super.find(query, order, limit, 'publication').then((result) => {
            return result.map((u) => new Publication(u))
        });
    }
    
    
};
