import React from 'react'

export const Tickets = () => {
    return (

        <div id="tickets"  className="tickets bg-green">
            <h3>Tickets</h3>
            <div className="container content-tickets">

                <div className="basic ticket_card">
                    <p className="ticket_card-name">ticket-card 1 day.</p>
                    <header className="ticket_card-header">
                        <p>It includes</p>
                    </header>
                    <div className="ticket_card-body">
                        <ul>
                            <li>Access to both scenarios</li>
                            <li>Food and drinks</li>
                        </ul>
                    </div>
                    <footer className="ticket_card-footer">
                        <p>$100</p>
                    </footer>
                </div>

                <div className="premium ticket_card">
                    <p className="ticket_card-name">ticket-card 2 days.</p>
                    <header className="ticket_card-header">
                        <p>It includes</p>
                    </header>
                    <div className="ticket_card-body">
                        <ul>
                            <li>Access to both scenarios</li>
                            <li>Food and drinks</li>
                            <li>event shirt</li>
                            <li>VIP access</li>
                        </ul>
                    </div>
                    <footer className="ticket_card-footer">
                        <p>$180</p>
                    </footer>

                </div>
            </div>

        </div>

    )
}
