module.exports ={

    edit_birthday: async (req, res)=> {
        const {user_id} = req.session.user
        const {birthday} = req.body
        console.log(birthday, user_id)
        const db = req.app.get('db')

        const changeBirthday = await db.profile.edit_birthday([birthday, user_id])
       
        
    },

}