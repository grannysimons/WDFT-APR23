const router = require("express").Router();
const Project = require('../models/Project.model');
const Task = require('../models/Task.model');
const isValidObjectId = require('../middleware/isValidObjectId');
const isAuthenticated = require('../middleware/jwt.middleware');

router.post("/:projId/update", isAuthenticated, isValidObjectId, (req, res, next) => {
  let projectId = req.params.projId;
  let { project } = req.body;

  Project.findByIdAndUpdate(projectId, project)
    .then(resp => {
      res.json(resp);
    })
    .catch(err=>next(err))

});

router.post("/:projId/delete", isAuthenticated, isValidObjectId, (req, res, next) => {
  let projectId = req.params.projId;

  //this block was valid before definint the isValidObjectId middleware:

  // if(isValidObjectId(projectId)) {
  //   Project.findByIdAndDelete(projectId)
  //   .then(resp => {
  //     res.json(resp);
  //   })
  //   .catch(err => next(err))
  // } else {
  //   res.json({error: "invalid object Id"})
  // }

  Project.findByIdAndDelete(projectId)
    .then(resp => {
      let tasksToRemove = resp.tasks; //array of task ids to be removed
      return Task.remove({ _id: {$in: tasksToRemove}})
    })
    .then(resp => {
      res.json(resp);
    })
    .catch(err => next(err))
});

router.post("/create", isAuthenticated, (req, res, next) => {
  let { project } = req.body;
  Project.create(project)
  .then(resp => {
    res.json(resp);
  })
  .catch(err=>next(err))
});

router.post("/:projId/addTask", isAuthenticated, isValidObjectId, (req, res, next) => {
  let projectId = req.params.projId;
  let {task} = req.body;

  task.idProject = projectId;
  //create task
  Task.create(task)
  .then(resp => {
    //update project with new task 
    let taskId = resp._id;

    //an other option (less optimal)
    // Project.findById(projectId)
    // .then(resp2 => {
    //   let tasks = resp2.tasks;
    //   tasks.push(taskId);
    //   Project.findByIdAndUpdate(projectId, {tasks})
    // })

    return Project.findByIdAndUpdate(projectId, {$push: {tasks: taskId}})
  })
  .then(resp => {
    res.json(resp);
  })
  .catch(err=>next(err))
});

router.get("/", (req, res, next) => {
  Project.find()
  .populate('tasks')
  .then(resp => {
    res.json(resp);
  })
  .catch(err => next(err))
});

router.get("/:projId", isAuthenticated, isValidObjectId, (req, res, next) => {
  // let projectId = req.params.projId;
  let {projId: projectId} = req.params;
  
  // if(isValidObjectId(projectId)) {
  //   Project.findById(projectId)
  //   .then(resp => {
  //     res.json(resp);
  //   })
  //   .catch(err=>next(err))
  // } else {
  //   res.json({error: "invalid object id"})
  // }

  Project.findById(projectId)
  .populate('tasks')
    .then(resp => {
      res.json(resp);
    })
    .catch(err=>next(err))
});

module.exports = router;
