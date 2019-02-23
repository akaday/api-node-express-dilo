const userModel = require('../models/users');

const users = (app) => {

    // CREATE
    app.post('/api/users', (req, res) => {
        let body = req.body;

        const userM = new userModel(body);
        userM.save().then(()=>{
            res.json({
                msg: "Create Success"
            });
        }).catch(()=>{
            res.json({
                msg: "Create Failed"
            });
        })
    });

    // READ ALL
    app.get('/api/users/', (req, res) => {
        
        userModel.find({}).then(result=>{
            res.json({
                msg: "Read Success",
                data: result
            });
        }).catch(()=>{
            res.json({
                msg: "Create Failed"
            });
        })
    });
    
    // READ By ID
    app.get('/api/users/:id', (req, res) => {
        let id = req.params.id;
        userModel.find({email:id}).then(result=>{
            res.json({
                msg: "Read Success",
                data: result
            });
        }).catch(()=>{
            res.json({
                msg: "Create Failed"
            });
        })
    });

    // UPDATE 
    app.put('/api/users/:id', (req, res) => {
        let id = req.params.id;
        let body = req.body;
        
        userModel.update({email:id}, body).then(()=>{
            res.json({
                msg: `Update id: ${id} Success`,
            });
        }).catch(()=>{
            res.json({
                msg: "Update Failed"
            });
        })
    });

    // DELETE
    app.delete('/api/users/:id', (req, res) => {
        let id = req.params.id;
        userModel.find({email:id}).remove().then(()=>{
            res.json({
                msg: `Delete id: ${id} Success`,
                data: id
            });
        }).catch(()=>{
            res.json({
                msg: "Update Failed"
            });
        })
    });

};

module.exports = users;