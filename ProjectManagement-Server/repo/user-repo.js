const express = require('express');
const userRepo = express.Router();

var User = require('../models/users');

// to add new user
userRepo.route('/add').post(function (req, res) {
    let user = new User(req.body);
    console.log(user);

    user.save()
        .then(user => {
            res.status(200).json({ 'success': true, 'message': 'User added successfully' });
        })
        .catch(err => {
            res.status(400).json({ 'success': false, 'message': 'Error in adding user' });
        })
})

// to delete user by id
userRepo.route('/delete/:id').get(function (req, res) {
    let id = req.params.id;

    User.findOneAndRemove({ User_ID: id }, function (err, data) {
        if (err) {
            res.json({ 'success': false, 'message': 'Error in deleting user' });
        }
        else {
            res.json({ 'success': true, 'message': 'User deleted successfully' })
        }
    })
})

// to edit user by id
userRepo.route('/edit/:id').post(function (req, res) {
    let id = req.params.id;

    User.findOneAndUpdate({ User_ID: id }, function (err, user) {
        if (!user) {
            return next(new Error('User not exists'));
        }
        else {
            user.First_Name = req.body.First_Name;
            user.Last_Name = req.body.Last_Name;
            user.Employee_ID = req.body.Employee_ID;

            user.save()
                .then(user => {
                    res.status(200).json({ 'success': true, 'message': 'User updated successfully' });
                })
                .catch(err => {
                    res.status(400).json({ 'success': false, 'message': 'Error in updating user' });
                })
        }
    })
})

// get user by id
userRepo.route('/:id').get(function (req, res) {

    let _id = req.params.id;

    User.findOne({ User_ID: _id }, function (err, user) {
        if (err) {
            res.json({ 'Success': false, 'Message': 'User not exists' })
        }
        else {
            res.json({ 'Success': true, 'Data': user });
        }
    });
});

// get users list with search and sort criteria
userRepo.route('/').get(function (req, res) {
    let queryparam = req.query;
    let query = User.find();

    if (queryparam.sort) {
        query.sort([queryparam.sort, 1]);
    }

    if (queryparam.search) {
        userQuery.or([
            { 'First_Name': { $regex: queryparam.search, $options: 'i' } },
            { 'Last_Name': { $regex: queryparam.search, $options: 'i' } }
        ]);
    }

    userQuery.exec((err, users) => {

        if (err) {
            res.json({ 'Success': false })
        }
        else {
            res.json({ 'Success': true, 'Data': users });
        }
    });
})

// assign user as Project Manager
userRepo.route('/edit/:id').post(function (req, res) {

    let _id = req.params.id;

    User.findOne({ User_ID: _id }, function (err, user) {
        if (!user)
            return next(new Error('user not found'));
        else {
            user.update({ 'Project_ID': req.body.Project_ID }).then(user => {
                res.json({ 'Success': true });
            })
                .catch(err => {
                    res.status(400).json({ 'Success': false });
                });
        }
    });
});

// assign user with task
userRepo.route('/edit/:id').post(function (req, res) {

    let _id = req.params.id;

    User.findOne({ User_ID: _id }, function (err, user) {
        if (!user)
            return next(new Error('user not found'));
        else {
            user.update({ 'Task_ID': req.body.Task_ID }).then(user => {
                res.json({ 'Success': true });
            })
                .catch(err => {
                    res.status(400).json({ 'Success': false });
                });
        }
    });
});


module.exports = userRepo;
