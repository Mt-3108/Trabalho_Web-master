let MongoDocument = require('./MongoDocument')

module.exports = class User extends MongoDocument {
    constructor (data) {
        super(data);
        this.name = data.name;
        this.email = data.email;
        this.password = data.password;
        this._id = data._id;
        this.collection = 'users';
    }
    static findOne (_id) {
        
        return super.findOne(_id, 'users').then((result) => {
            return new User(result);
        });
    }

    static find (query = {}, order = {nome: 1}, limit = 5) {
        return super.find(query, order, limit, 'users').then((result) => {
            return result.map((u) => new User(u))
        });
    }
    
    static findbyEmail(email){
        return super.findOne(email, 'users').then((result) => {
            return new User(result);
        });
    }
};
