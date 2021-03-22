module.exports = {
    register: async(req, res) => {
        try{
            const {email, password, first_name, last_name, birthday} = req.body
            const db = req.app.get('db')
            const alreadyExist = await db.user.find_user_by_email([])


        } 
        catch {

        }
        

    },
    login: async(req, res)=>{

    },
    get_user: async(req, res)=>{

    }, 
    log_out: async(req, res)=> {
        
    }
}