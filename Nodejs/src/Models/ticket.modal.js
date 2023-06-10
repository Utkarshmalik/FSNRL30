const { default: mongoose } = require("mongoose");
const { ticketStatus } = require("../utils/constants");



const ticketSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true
    },
    ticketPriority:{
        type:Number,
        required:true,
        default:5
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true,
        enum: Object.values(ticketStatus)
    },
    requestor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'UserCollection'
    },  
    assignee:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'UserCollection'
    },
    createdAt:{
        type:Date,
        immutable:true,
        default:()=>Date.now()
    }
})

const ticketModal = mongoose.model('TicketCollection', ticketSchema);

module.exports = ticketModal;