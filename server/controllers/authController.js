const bcrypt = require('bcryptjs')

module.exports = {

   

    register: async(req, res) => {
        console.log(req.body, 'register controller function data')

        try{
            const {email, password, first_name, last_name, birthday, membership_type, membership_price} = req.body
            console.log(req.body)
            const db = req.app.get('db')
            const date = new Date
            const alreadyExist = await db.user.find_user_by_email([email])
            const foundUser = alreadyExist[0]

            if(foundUser){
                return res.status(409).send('An account already exists with this email address')
            }
            const registerMembership = await db.user.register_membership([membership_type, membership_price, date])
            const membership_id = registerMembership[0]
            console.log(membership_id, 'this is the membership_id i am trying to pass')

            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password, salt)
            const registeredUser = await db.user.register_user([email, hash, first_name, last_name, birthday, membership_id.membership_id])
      
            const user = registeredUser[0]
            delete user.password
            req.session.user = user
            return res.status(201).send(req.session.user)
            
        } 
        catch(err) {
            console.log(err, 'this is a registration error')
        }
            let transporter = nodemailer.createTransport({
                service: "gmail",
                auth: { user: EMAIL_ADDRESS, pass: PASSWORD },
              });
              let emailMessage = {
                from: "workit.dailyfitness@gmail.com",
                to: req.session.user.email,
                subject: "Welcome to Workit!",
                text: `Welcome ${req.session.user.first_name} to Workit!`,
              };
              transporter.sendMail(emailMessage, function (err) {
                if (err) {
                  console.log("email failed",err);
                  res.sendStatus(405);
                } else {
                  console.log("success");
                  return res.status(200).send(req.session.user);
                }
              });
            },

    login: async(req, res)=>{

        try{
         const {email, password} = req.body 
         const db = req.app.get('db')
         const foundUser = await db.user.find_user_by_email([email])
         const user = foundUser[0]

         if(!user){
             res.status(401).send('Account not found. Please register as a new user before logging in.')
         }

         const isAuthenticated = bcrypt.compareSync(password, user.password)

         if(!isAuthenticated){
             res.status(403).send('Incorrect Password')
         }

         delete user.password
         req.session.user = user
         return res.status(200).send(req.session.user)
        }
        catch(err){
            console.log(err, 'this is a login controller function error')

        }

    },

    get_user: (req, res)=>{
        const {user} = req.session
        if(user){
            return res.status(200).send(req.session.user)
        }else {
            return res.status(404)
        }

    }, 

    logout: (req, res)=> {
        req.session.destroy()
        return res.status(200)
        
    }
}