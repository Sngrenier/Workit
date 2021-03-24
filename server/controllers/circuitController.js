module.exports = {

    read_all_circuits: async(req, res)=> {
     const db = req.app.get('db')   
     const getcircuits = await db.circuits.read_all_circuits([])
     res.status(200).send(getcircuits)
     

    },
    
    read_circuit_selection: async (req, res)=> {
        try{
            const circuit_id = req.params   
            const db = req.app.get('db')
            const getSelectedCircuit = await db.circuits.read_circuit_selection([circuit_id]) 
            res.status(200).send(getSelectedCircuit)

        }
        catch(error){
          res.status(500).send(error)  

        }

       

    },

    read_moves: async (req, res)=>{
        try{
            const {circuit_id} = req.params
            const date = new Date 
            const db = req.app.get('db')
            const moves = await db.circuits.read_moves([circuit_id]) 
            res.status(200).send(moves)
    
            }
            catch(error){
                res.status(500).send(error)  
    
            }
            

    },

    //this function is to insert the completed circuit into the db table

    completed_circuit: async (req, res)=> {
        try{
        const {circuit_id} = req.params
        const {user_id} = req.session.user
        const date = new Date 
        const db = req.app.get('db')
        await db.circuits.completed_circuit([circuit_id, user_id, date]) 
        res.sendStatus(200)

        }
        catch(error){
            res.status(500).send(error)  

        }
        

        

    },

    //this function is to retrieve all completed circuits specific to this user

    view_completed_circuits: async(req, res)=> {
        try{
            const {user_id} = req.session.user
            const db = req.app.get('db')
            const viewCompletedCircuits = await db.circuits.completed_circuit([user_id]) 
            res.status(200).send(viewCompletedCircuits)
    
            }
            catch(error){
                res.status(500).send(error)  
    
            }

    },

    quit_reasons: async (req, res)=> {

        try{
            const {user_id} = req.session.user
            const db = req.app.get('db')
            await db.circuits.quit_reasons([user_id]) 
            res.sendStatus(200)
    
            }
            catch(error){
                res.status(500).send(error)  
    
            }

    }
}