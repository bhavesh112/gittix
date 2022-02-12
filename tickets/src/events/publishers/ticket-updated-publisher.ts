import { Publisher, Subjects, TicketUpdatedEvent } from "@bwtickets21/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
