const router = require("express").Router();
const proj = require("./projectResourcesModel.js");

router.get("/", (req, res) => {
    proj.find()
    .then(pr => {
        res.status(200).json(pr)
    })
    .catch (e => res.status(500).json({message: "Error getting Project Requested"}))
})
router.get("/:id", (req, res) => {
    const {id} = req.params;
    proj.findById(id)
    .then(pr => {
        if(pr){
            res.status(200).json(pr)
        }
        else{res.status(404).json({message: "Cannot find Project Requested"})}
    })
    .catch (e => res.status(500).json({message: "Error getting Project Requested"}))
})
router.post("/", (req, res) => {
    const posting = req.body;
    proj.add(posting)
    .then(post => {
        res.status(201).json(post)
    })
    .catch(e => res.status(500).json({message: "Error adding Project Requested"}))
})

router.put("/:id", (req, res) => {
    const{id} = req.params;
    const changes = req.body;

    proj.findById(id)
    .then(pr => {
        if(pr) {
            pr.update(changes, id)
            .then(updatedPR =>
                res.json(updatedPR))
        } else {res.status(404).json({message: "Could not find Project Requested"})}
    })
    .catch (e => res.status(500).json({message: "Error updating Project Requested"}))
})
router.delete("/:id", (req, res) =>{
    const {id} = req.params;
    proj.remove(id)
    .then(deleted => {
        if(deleted){
            res.status({removed: deleted})
        }
        else{res.status(404).json({message:"Could not find Project Requested"})}
    })
    .catch (e => res.status(500).json({message: "Error deleting Project Requested"}))
})

module.exports = router