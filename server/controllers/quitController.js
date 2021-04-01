module.exports = {
    quit_reasons: async(req, res)=>{

        try{
            const {user_id} = req.session.user
            const quit_reason = req.body
            const db = req.app.get('db')
            const date = new Date
            console.log(user_id, 'user_id ')
            console.log(req.body, 'req.body ')
            const quit = db.quitReasons.quit_reasons([quit_reason, user_id, date])
            res.status(200).send(quit)

        }
        catch(err){
            console.log(err)
        }



    }
}