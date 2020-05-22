const {db}=require('./admin')

exports.getAllShops= (req,res) =>{
    db.collection('shops').orderBy('name')
        .get()
        .then(data=>{
            let shops=[]
            data.forEach(doc=>{
                shops.push({
                    shopId:doc.id,
                    country:doc.data().country,
                    description:doc.data().description,
                    city:doc.data().city,
                    facebook:doc.data().facebook,
                    instagram:doc.data().instagram,
                    image:doc.data().image,
                    name:doc.data().name,
                    phone:doc.data().phone,
                    rating:doc.data().rating,
                    streetAddress:doc.data().streetAddress,
                    zipCode:doc.data().zipCode
                })
            })
            return res.json(shops)

        }).catch(err=>{
            console.log(err)
            return res.code(500).json({error:err.code})
    })
}

exports.getSingleShop=(req,res)=>{

        let shopData={}
        db.doc(`/shops/${req.params.shopId}`).get()
            .then(doc=>{
                if(!doc.exists){
                    return res.status(404).json({error:'Shop not found'})
                }
                shopData =doc.data()
                shopData.shopId=doc.id

                return res.json(shopData)
                    })
                    .catch(err=>{
                        console.log(err)
                        res.status(500).json(err.code)
                    })




}
