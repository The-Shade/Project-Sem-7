const {ObjectId} = require("mongodb");

class Utils {
    static IsError (err){
        return Object.prototype.toString.call(err) === '[object Error]';
    }
    static ConvertToObjectID(string) {
        return new ObjectId(string);
    }
}


module.exports = Utils;