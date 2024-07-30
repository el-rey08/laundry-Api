const mongoose = require('mongoose')
const orderSchema = mongoose.Schema({
    short:{
        quantity:{
            type:Number,
            deafult:0,
            
        },
        price: {
            type:Number,
            default:500
        },
        total:{
            type:Number,
            default:0
        }
    },
    jeans:{
        quantity:{
            type:Number,
            deafult:0,
            
        },
        price:{
            type:Number,
            default:700
        },
        total:{
            type:Number,
            default:0
        }
    },
    shirts:{
        quantity:{
            type:Number,
            deafult:0,
            
        },
        price:{
            type:Number,
            default:500
        },
        total:{
            type:Number,
            default:0
        }
    },
    white:{
        quantity:{
            type:Number,
            deafult:0,
            
        },
        price:{
            type:Number,
            default:1000
        },
        total:{
            type:Number,
            default:0
        }
    },
    sweatshirt:{
        quantity:{
            type:Number,
            deafult:0,
            
        },
        price:{
            type:Number,
            default:900
        },
        total:{
            type:Number,
            default:0
        }
    },
        curtain:{
            quantity:{
                type:Number,
                default:0
            },
            price:{
                type:Number,
                default:1500
            },
            total:{
                type:Number,
                default:0
            }
        },
        bedsheet:{
            quantity:{
                type:Number,
                default:0
            },
            price:{
                type:Number,
                default:2000
            },
            total:{
                type:Number,
                default:0
            }
        },
        sumTotal: {
            type: Number,
            default: 0
        }
    },{timestamps:true})
const userOrder= mongoose.model('userOrder', orderSchema)
module.exports=userOrder