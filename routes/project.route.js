'use strict'

const express = require('express');
const projectcontroller = require('../controllers/project.controller');
const usercontroller = require('../controllers/user.controller');
const alojamientocontroller = require('../controllers/alojamiento.controller');
const museocontroller = require('../controllers/museo.controller');

const router = express.Router();

router.get('/home', projectcontroller.home);

router.get('/museos', museocontroller.getMuseos);

//router.post('/test', projectcontroller.test);
//router.post('/saveProjet',projectcontroller.saveProjet);
//router.get('/project/:id?', projectcontroller.getProject);
//router.get('/projects',projectcontroller.getProjects);
//router.put('/projects/:id',projectcontroller.updateProject);
//router.delete('/projects/:id',projectcontroller.deleteProject)

//router.get('/homee', usercontroller.test);

//router.get('/homeee', alojamientocontroller.test);

//router.get('/homeeee', museocontroller.test);

module.exports = router