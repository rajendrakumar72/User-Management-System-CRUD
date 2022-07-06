
$("#add_user").submit(function(event){
    alert("Data Inserted Successfully");
})

$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexedArray=$(this).serializeArray();
    var data={}

    $.map(unindexedArray,function(n,i){
        data[n['name']]=n['value']
    })

    console.log(data);

    var request={
        "url":`http://localhost:8000/api/users/${data.id}`,
        "method":"PUT",
        "data":data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully");
    })
})