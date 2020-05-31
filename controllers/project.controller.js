'use strict'

const projectModel = require('../models/project');

const ProjectController = {
    home: (req, res) => {

        res.status(200).send({
            mensaje: "soy la home"
        })
    },

    test: (req, res) => {
        res.status(200).send({
            mensaje: "soy la api de prueba"
        })
    },

    saveProjet: function (req, res) {
        const params = req.body;


        let project = new projectModel();

        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = params.image;


        console.log(project);

        project.save((err, projectStored) => {
            if (err) return res.status(500).send({
                mensaje: "Error al guardar el docuemto"
            })

            if (!projectStored) return res.status(400).send({
                mensaje: "No se ha podido guardar el documento"
            })

            return res.status(200).send({
                project: project,
                mensaje: "project saved"
            })
        })


    },

    getProject: (req, res) => {

        let projectID = req.params.id;

        projectModel.findById(projectID, (err, project) => {
            if (err) return res.status(500).send({
                mensaje: "Error al obtener el documento"
            });

            if (!project) return res.status(400).send({
                mensaje: "El projecto no existe"
            });

            return res.status(200).send({
                project
            });
        });
    },

    getProjects: (req, res) => {
        projectModel.find({}).exec((err, projects) => {
            if (err) {
                return res.status(500).send({
                    mensaje: "error al traer archivos"
                });
            }

            if (!projects) return res.status(404).send({
                mensaje: "no hay proyectos que mostrar"
            });

            return res.status(200).send({
                projects
            })
        });
    },

    updateProject: (req, res) => {
        let projectID = req.params.id;
        let update = req.body;

        projectModel.findByIdAndUpdate(projectID, update, { new: true }, (err, projectUpdate) => {
            if (err) return res.status(500).send({
                mensaje: "error al actualizar"
            })

            if (!projectUpdate) return res.status(404).send({
                mensaje: "proyecto no encontrado"
            })

            return res.status(200).send({
                project: projectUpdate
            })
        })
    },

    deleteProject: (req, res) => {
        let projectID = req.params.id;
        projectModel.findByIdAndDelete(projectID,(err, projectDeleted)=>{
            if(err) return res.status(500).send({
                mensaje: "no se ha podido borrar el documento"
            })

            if(!projectDeleted) return res.status(404).send({
                mensaje: "no se puede eliminar el docuemento"
            })

            return res.status(200).send({
                projectDeleted
            })
        })
    },
};

module.exports = ProjectController;