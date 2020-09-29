const db = require("../data/db-config");

module.exports = {
    add,
    find,
    findById,
    update,
    remove
}
function find(){
    return db("resources")
   
}

async function add(resource) {
    const [id] = await db("resources").insert(resource);
    return findById(id);
}

function findById(id){
    return db("resources")
    .where({ id })
    .first();
}
function remove(id){
    return db("resources")
    .where("id", Number(id))
    .del();
}

function update(changes, id) {
    return db("resources")
    .where({id})
    .where(changes)
}