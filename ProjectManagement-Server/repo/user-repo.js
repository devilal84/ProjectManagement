const express = require('express');
const userRepo = express.Router();

var User = require('../models/users');

// to add new user
userRepo.route('/add').post(function(req, res){
    let user = new User(req.body);
    console.log(user);

    user.save()
    .then(user =>{
        res.status(200).json({'success': true, 'message': 'User added successfully'});
    })
    .catch(err =>{
        res.status(400).json({'success': false, 'message': 'Error in adding user'});
    })
})

// to delete user by id
userRepo.route('/delete/:id').get(function(req, res){
    let id = req.params.id;

    User.findOneAndRemove({userid: id}, function(err, data){
        if(err){
            res.json({'success': false, 'message': 'Error in deleting user'});
        }
        else{
            res.json({'success': true, 'message': 'User deleted successfully'})
        }
    })
})

// to edit user by id
userRepo.route('/edit/:id').get(function(req, res){
    let id = req.params.id;

    User.findOneAndUpdate({userid: id}, function(err, user){
        if(!user){
            return next(new Error('User not exists'));
        }
        else{
            user.firstname = req.body.firstname;
            user.lastname = req.body.lastname;
            user.empid = req.body.empid;

            user.save()
            .then(user =>{
                res.status(200).json({'success': true, 'message': 'User updated successfully'});
            })
            .catch(err =>{
                res.status(400).json({'success': false, 'message': 'Error in updating user'});
            })
        }
    })
})
