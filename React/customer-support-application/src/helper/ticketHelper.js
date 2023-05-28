export  const calculateStatusCount=(tickets)=>{

    const ticketStatus={
        open:0,
        progress:0,
        closed:0,
        blocked:0
    }

    tickets.forEach(ticket => {
        const status= ticket.status.toLowerCase();
        ticketStatus[status]+=1;
    });

    return ticketStatus;
}

