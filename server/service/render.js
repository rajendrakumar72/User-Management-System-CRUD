const axios=require('axios');


exports.homeRoutes=(req,res)=>{
    axios.get('http://localhost:8000/api/users')
        .then((response)=>{
            console.log(response);
            res.render('index',{users:response.data});
        }).catch(err=>{
            res.send(err);
        })
    
}

exports.addUser=(req,res)=>{
    res.render('add_user');
}

exports.updateUser=(req,res)=>{
    axios.get('http://localhost:8000/api/users',{params:{id:req.query.id}})
        .then(function(userData){
            console.log(userData.data)
            res.render('update_user',{user:userData.data});
        })
        .catch(err=>{
            res.send(err);
        })
    
}