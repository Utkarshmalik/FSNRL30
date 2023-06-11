const userModal = require("../Models/user.modal");
const TicketModal =  require("../Models/ticket.modal");
const { ticketStatus, userTypes, userStatus } = require("../utils/constants");


exports.createTicket= async (req,res)=>{

    const {title, ticketPriority, description} = req.body;

    const ticket = {
        title,
        ticketPriority,
        description,
        status:ticketStatus.OPEN,
        requestor: req.id    
    }

    const allocatedEngineer = await userModal.findOne({
        userType: userTypes.ENGINEER,
        userStatus:userStatus.APPROVED
    });

    ticket.assignee=allocatedEngineer._id;

    const newTicket= new TicketModal(ticket);

    const createdTicket = await newTicket.save();
    

    return res.status(201).send(createdTicket);

}

exports.getAllTickets= async (req,res)=>{

    var condition = {};

    const {maxPriority , minPriority , page , limit} = req.query;

    if(maxPriority && minPriority){
        condition = {$and: [{ ticketPriority: { $gte: minPriority } }, { ticketPriority: { $lte: maxPriority } }]};
    }
    else if(req.query.maxPriority){
        //ticketPriority <= maxPriority
        condition.ticketPriority = {$lte :req.query.maxPriority}
    }


    if(req.userRole===userTypes.CUSTOMER){
        condition.requestor = req.id
    }else if(req.userRole === userTypes.ENGINEER){
        condition.assignee = req.id;
    }

    const skipValue = page * limit;


    try{
        const tickets = await TicketModal.find(condition).populate("assignee").populate("requestor").cache(30)
        .skip(skipValue).limit(limit).sort({ticketPriority:"asc"});
    return res.status(200).send(tickets);
    }catch(err){
        res.status(500).send(err.message);
    }

  
    
}

exports.getTicket= async (req,res)=>{
    
}

exports.updateTicket = async (req,res)=>{
    
}

exports.deleteTicket = async (req,res)=>{
    
}