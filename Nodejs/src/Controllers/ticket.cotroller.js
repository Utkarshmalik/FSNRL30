const userModal = require("../Models/user.modal");
const TicketModal =  require("../Models/ticket.modal");
const { ticketStatus, userTypes, userStatus } = require("../utils/constants");


exports.createTicket= async (req,res)=>{

    console.log(req.body);

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


    if(req.userRole===userTypes.CUSTOMER){
        condition.requestor = req.id
    }else if(req.userRole === userTypes.ENGINEER){
        condition.assignee = req.id;
    }

    console.log(condition);

    const tickets = await TicketModal.find(condition).populate("assignee").populate("requestor");
    return res.status(200).send(tickets);
    
}

exports.getTicket= async (req,res)=>{
    
}

exports.updateTicket = async (req,res)=>{
    
}

exports.deleteTicket = async (req,res)=>{
    
}