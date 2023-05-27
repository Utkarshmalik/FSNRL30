import MaterialTable  from "material-table";

function TicketsTable(props){

   

    return (
      <div style={{ maxWidth: '100%' }}>
        <MaterialTable
          columns={[
            { title: 'TICKET ID', field: '_id' },
            { title: 'TITLE', field: 'title' },
            { title: 'DESCRIPTION', field: 'description' },
            { title: 'REQUESTOR', field: 'requestor' },
            { title: 'PRIORITY', field: 'ticketPriority' },
            { title: 'ASSIGNEE', field: 'assignee' },
            { title: 'STATUS', field: 'status' }

          ]}
          data={props.ticketDetails}
          title="Tickets Available"
          onRowClick={props.onTicketClick}
        />
      </div>
    )

}

export default TicketsTable;