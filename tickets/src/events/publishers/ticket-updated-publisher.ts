import { Publisher, Subjects, TicketUpdatedEvent } from "@bwtickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
