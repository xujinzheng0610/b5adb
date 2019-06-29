const Project = require("../db/model").Project;


class DataController {
    getProjectData(req, res, next) {
        Project.findAll()
        .then(projects => {
            res.json(projects);
        })
    }

    addProjectData(req, res, next){
        Project.bulkCreate(req.body)
        .then(data => {
            if(data !== null) {
                res.status(200)
            }else{
                res.status(500)
            }
        })        
    }
}

module.exports = new DataController();
