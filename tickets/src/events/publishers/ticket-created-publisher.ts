import { Publisher, Subjects, TicketCreatedEvent } from "@bwtickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
