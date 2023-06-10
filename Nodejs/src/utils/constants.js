

const userTypes={
    ADMIN:"ADMIN",
    CUSTOMER:"CUSTOMER",
    ENGINEER:"ENGINEER"
}

const userStatus={

    APPROVED : "APPROVED",
    PENDING:"PENDING",
    REJECTED : "REJECTED"
}

const ticketStatus = {

    OPEN : "OPEN",
    CLOSED:"CLOSED",
    BLOCKED:"BLOCKED",
    INPROGRESS:"INPROGRESS"
}

module.exports={
    userTypes, 
    userStatus,
    ticketStatus
}