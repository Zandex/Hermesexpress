'use strict'

const museoModel = require('../models/museo');

const MuseoController = {
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

    saveMuseo: function (req, res) {
        const params = req.body;


        let project = new museoModel();

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

    getMuseo: (req, res) => {

        let projectID = req.params.id;

        museoModel.findById(projectID, (err, project) => {
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

    getMuseos: (req, res) => {
        museoModel.find({}).exec((err, museo) => {
            if (err) {
                return res.status(500).send({
                    mensaje: "error al traer archivos"
                });
            }

            if (!museo) return res.status(404).send({
                mensaje: "no hay proyectos que mostrar"
            });

            return res.status(200).send({
                museo
            })
        });
    },

    updateMuseo: (req, res) => {
        let projectID = req.params.id;
        let update = req.body;

        museoModel.findByIdAndUpdate(projectID, update, { new: true }, (err, projectUpdate) => {
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

    deleteMuseo: (req, res) => {
        let projectID = req.params.id;
        museoModel.findByIdAndDelete(projectID,(err, projectDeleted)=>{
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

module.exports = MuseoController;