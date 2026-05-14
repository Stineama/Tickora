export function generateTicketId(ticketType) {
    const date = Date.now();

    const random = Math.floor(
        10000 + Math.random() * 90000);

        return `TKT-${ticketType.toUpperCase()}-${date}-${random}`;
}
