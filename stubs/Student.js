var store = require('store')

module.exports= function (name, age,address, hobbies) {
    var list = store.get('studentsList') || []
    var _id = list[list.length-1] ? list[list.length-1]._id+1 : 0
        return {
            name,
            age,
            address,
            hobbies,
            _id:_id
        }
    }
