
class Utils {
    static IsError (err){
        return Object.prototype.toString.call(err) === '[object Error]';
    }
}


module.exports = Utils;