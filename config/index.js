var configValues = require('./config');

// module.exports = {
//     getDbConnectionString: function () {
//         return 'mongodb://' +configValues.uname +
//         ':' + configValues.pwd +
//     '@ds125841.mlab.com:25841/krishnanath-nodetodo'   ;
//  }
 

// }

mongoose.connect('mongodb://krishnanath:NathKrishna*123@ds125841.mlab.com:25841/krishnanath-nodetodo' ,{ useNewUrlParser: true})