const UserDB=require('../model/model');


//Create and save new user

exports.create=(req,res)=>{

    //validate request
    if(!req.body){
        res.status(400).send({message:"Content can not be empty"});
        return;
    }

    //new user
    const user=new UserDB({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status
    });

    //save user to database
    user
    .save(user)
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message || "Some error occured while creating a create operation"
        })
    })
}


//retrieve and return all users/retrive and return single user

exports.find=(req,res)=>{
    if(req.query.id){
        const id=req.query.id;

        UserDB.findById(id)
            .then(data =>{
                if(!data){
                    res.status(400)
                .send({message:"Not found user with id "+id});
                }else{
                    res.send(data);
                }
                
            }).catch(err=>{
                res.status(500).send({
                   message:"Error retreiving user with id "+id
                })
            })

    }else{
        UserDB.find()
        .then(user=>{
            res.send(user);
        }).catch(err=>{
            res.status(500).send(err.message||"Error occured while retreving user information");
        })
    }
   
    
}

//Update a new identifed user by id

exports.update=(req,res)=>{
    
    if(!req.body){
        return res.status(400)
        .send({message:"Data to update cannot be empty"});
    }

    const id =req.params.id;
    UserDB.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
        .then(data=>{
            if(!data){
                res.status(404).send({message:`Cannot Update user with ${id}.Maybe user not found!`});
            }else{
                res.send(data);
            }
        })
        .catch(err=>{
            res.status(500).send(err.message||"Error Update user information");
        })
}

//delete a user with specified user id in the request

exports.delete=(req,res)=>{
    
    const id =req.params.id;
    UserDB.findByIdAndDelete(id,req.body)
        .then(data=>{
            if(!data){
                res.status(404).send({message:`Cannot Delete user with id ${id}.Maybe id is wrong!`});
            }else{
                res.send({
                    message:"User was deleted successfully...!"
                });
            }
        })
        .catch(err=>{
            res.status(500).send("Could not delete User with id="+id);
        })
}