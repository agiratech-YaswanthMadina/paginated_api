const express = require('express')
const app = express()

users = [{
    id: 1, name:'yash'
},{
    id: 2, name:'yash'
},{
    id: 3, name:'yash'
},{
    id: 4, name:'yash'
},{
    id: 5, name:'yash'
},{
    id: 6, name:'yash'
},{
    id: 7, name:'yash'
},{
    id: 8, name:'yash'
},{
    id: 9, name:'yash'
},{
    id: 10, name:'yash'
},{
    id: 11, name:'yash'
}]

app.get('/users', (req, res) => {
    const page = req.query.page
    const limit = req.query.limit
    const startIndex = (page-1) * limit
    const endIndex = (page * limit)
    const result = {}
    result.next = {
        page: page+1,
        limit:limit
    }
    result.previous = {
        page: page-1,
        limit:limit 
    }
    result.result = users.slice(startIndex, endIndex)
    res.json(result)
})

app.listen(4000)