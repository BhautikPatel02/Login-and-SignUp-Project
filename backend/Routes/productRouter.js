const router = require('express').router
router.get('/',(req,res)=>{
    res.status(200).json([
        {
            name:"mobile",
            price:10000
        },
        {
            name:"tv",
            price:12000
        }
    ])
})
module.exports = router