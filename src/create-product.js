"use strict"
const input_title = document.getElementById("input_title")
const input_price = document.getElementById("input_price")
const input_description = document.getElementById("input_description")
const input_thumbnail = document.getElementById("input_thumbnail")

async function createProduct(){
    try{
        // console.log( input_description.value )
        const image_link =  await uploadAndGetImageLink(input_thumbnail.files[0])
        console.log( await uploadAndGetImageLink(input_thumbnail.files[0]) )
        fetch("https://api.escuelajs.co/api/v1/products/", {
            method:"POST",
            body:JSON.stringify({
                title:input_title.value,
                price:Number(input_price.value),
                description:input_description.value,
                categoryId:1,
                images:[
                    image_link
                ]
            }),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(async e=>{

            console.log(await e.json())


        }).catch(e=> console.log(e) )
    }catch(e){
        console.log(e)
    }
}

async function uploadAndGetImageLink(file){
    try{
        
        let form = new FormData()
        form.append("file", file )

        const res = await fetch("https://api.escuelajs.co/api/v1/files/upload", {
            method:"POST",
            body:form
        })

        const res_json = await res.json()

        return res_json.location

    }catch( e ){
        return e
    }
}
