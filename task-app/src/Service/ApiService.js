

export const getFunction = (url,method,cb) => {
    fetch(url,{
        method:method,
        header:{
            "Content-Type" : "application/json",
        }
    }).then(res => res.json())
    .then(data => {
        console.log(data)
        cb(data)
    })
}