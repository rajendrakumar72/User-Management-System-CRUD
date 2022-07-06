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
    res.render('update_user');
}