const { isValidObjectId } = require("mongoose");

module.exports = function (req, res, next) {
    let projectId = req.params.projId;
    
    if(isValidObjectId(projectId)) next();
    else res.json({error: "invalid ObjectId"});
}