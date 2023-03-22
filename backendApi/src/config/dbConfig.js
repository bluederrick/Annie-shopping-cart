const { connect } = require("mongoose");

connect()
    .then(() => {
        console
            .log({ message: `database connection established` })
    })
    .catch(() => {
        return
        console
            .log('failure to connect to database server')
    });
let db;
db = mongoose.connection.on('open', () => {
    console
        .log('database connection is opened')
})