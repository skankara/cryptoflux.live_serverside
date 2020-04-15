const sql = require("mssql");

var config = {
    user: 'skankara',
    password: 'qwerty123',
    server: 'localhost\\SQLEXPRESS', 
    database: 'users',
    port: 1433, // 1433 default port fo sql
    options: {
        "encrypt": false,
        "enableArithAbort": true
    },
};
module.exports = (profileDetails) => {
    // config for your database
    
    // var conn = new sql.ConnectionPool(config);
    // conn.connect(function(err){
    //     if(err) throw err;
    //     var req = new sql.Request(conn);
    //     req.query('select * from userCredentials',(err, recordSet)=>{
    //         if(err) throw err;
    //         else 
    //             console.log("recordSet : ", recordSet);
    //         conn.close();
    //     })
    // })
    sql.connect(config).then(() => {
        console.log("Connecting ....");
        return sql.query`select * from userCredentials`
    }).then(result => {
        console.dir(result)
    }).catch(err => {
        // ... error checks
    })
     
    sql.on('error', err => {
        // ... error handler
    })
}