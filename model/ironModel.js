const mongoose = require ('mongoose')

const ironSchema = mongoose.Schema({
    short:{
       quantity:{
        type:Number,
        default:0
       },
       price:{
        type:Number,
        default:300
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
            default:500
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
            default:300
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
            default:500
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
            default:600
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
                default:1000
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
                default:1000
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
const ironModel= mongoose.model('ironOrder', ironSchema)
module.exports=ironModel