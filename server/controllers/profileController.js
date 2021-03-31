module.exports ={

    update_profile: async (req, res)=> {
        const {user_id} = req.session.user
        const {current_weight, goal_weight, goal_date, height} = req.body
        console.log(birthday, user_id)
        const db = req.app.get('db')

        const changeBirthday = await db.profile.update_profile([birthday, user_id])
       
        
    },

    instructors: async (req, res) =>{
        const db = req.app.get('db')
        const instructors = await db.profile.get_instructors([])
        console.log(instructors, 'instructors function')
        res.status(200).send(instructors)
    },


getPicture: async (req, res)=>{

},

submitPicture: async(req,res)=> {
    try{

        const {picture} = req.body
        const {user_id} = req.session.user
        console.log(picture.name, 'picture.name controller function')
        console.log(user_id, 'user_id controller function')
        const db = req.app.get('db')

        const pic  = await db.profile.submit_picture([picture.name, user_id])
        res.status(200).send(pic)

    }
    catch(err){
        console.log(err)
    }

},

}

