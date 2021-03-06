import queryString from 'query-string'

const create = async (params, credentials, product) => {
    try {
        let response = await fetch('/api/products/by/' + params.shopId, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + credentials.t
            },
            body: product
        })
        return response.json()
    } catch (e) {
        console.log(e)
    }
}

const read = async (params, signal) => {
    try {
        let response = await fetch('/api/products/' + params.productId, {
            method: 'GET',
            signal: signal
        })
        return response.json()
    } catch (e) {
        console.log(e)
    }
}

const update = async (params, credentials, product) => {
    try {
        let response = await fetch('/api/product' + params.shopId + '/' + params.productId, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + credentials.t
            },
            body: product
        })
        return response.json()
    } catch (e) {
        console.log(e)
    }
}

const remove = async (params, credentials) => {
    try {
        let response = await fetch('/api/product/' + params.shopId + '/' + params.productId, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application.json',
                'Authorization': 'Bearer ' + credentials.t
            }
        })
        return response.json()
    } catch (e) {
        console.log(e)
    }
}

const listByShop = async (params, signal) => {
    try {
        let response = await fetch('/api/products/by/' + params.shopId, {
            method: 'GET',
            signal: signal
        })
        return response.json()
    } catch (e) {
        console.log(e)
    }
}

const listLatest = async (signal) => {
    try {
        let response = await fetch('/api/products/latest', {
            method: 'GET',
            signal: signal
        })
        return response.json()
    } catch (e) {
        console.log(e)
    }
}

const listRelated = async (params, signal) => {
    try {
        let response = await fetch('/api/products/related/' + params.productId, {
            method: 'GET',
            signal: signal
        })
        return response.json()
    } catch (e) {
        console.log(e)
    }
}

const listCategories = async(signal) => {
    try{
        let response = await fetch('/api/products/categories', {
            method: 'GET',
            signal: signal
        })
        return response.json()
    }catch(e){console.log(e)}
}

const list = async (params, signal) => {
    const query = queryString.stringify(params)
    try {
        let response = await fetch('/api/products?' + query, {method: 'GET'})
        return response.json()
    } catch (e) {
        console.log(e)
    }
}

export {
    create,
    read,
    update,
    remove,
    list,
    listByShop,
    listLatest,
    listCategories,
    listRelated
}