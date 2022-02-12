import { Publisher, Subjects, TicketCreatedEvent } from "@bwtickets21/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
