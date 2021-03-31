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
    }

}


