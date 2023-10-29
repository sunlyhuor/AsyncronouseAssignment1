"use strict"
const showProduct = document.getElementById("showProduct")


function readProduct( { title, description, price, images } ){

    return `
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div class="h-[250px] w-full" >
                <img class="rounded-t-lg w-full h-[100%]" src="${images[0]}" alt="product image" />
            </div>
            <div class="px-5 pb-5">
                <a href="#">
                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">${title}</h5>
                </a>
                
                <section class="flex items-center justify-between">
                    <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                </section>
            </div>
        </div>
    `

}


async function fetchProducts(){

    try{
        const datas = await fetch("https://api.escuelajs.co/api/v1/products/")
        const datas_json = await datas.json()
        if( datas_json.length < 1 ){
            showProduct.innerHTML = `
                <h1 class="text-center p-2 text-red-600 text-2xl font-bold" >Something wrong</h1> 
            `
        }else{
            datas_json.map(product => {
                showProduct.insertAdjacentHTML("beforeend", readProduct(product) )
            })
            // showProduct.insertAdjacentHTML("beforeend" , )
        }
    }catch(e){
        showProduct.innerHTML = `
            <h1 class="text-center p-2 text-red-600 text-2xl font-bold" >Something wrong</h1> 
        `
    }

}


fetchProducts()
