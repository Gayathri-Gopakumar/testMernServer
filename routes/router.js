const express=require('express')
const router=new express.Router()
const taskController=require('../controllers/taskController')



// ADD POST : POST to http://localhost:3000/add-task
router.post('/add-task',taskController.addPostController)

// ALL POSTS : GET to http://localhost:3000/all-tasks
router.get('/all-tasks',taskController.getAllPostsController)


// DELETE POSTS : DELETE to http://localhost:3000/pid/delete
router.delete('/:pId/delete',taskController.deletePostController)

// EDIT POSTS: PUT to http://localhost:3000/pid/edit-task
router.put('/:pid/edit-task',taskController.editPostController)


module.exports=router