import { Publisher, OrderCreatedEvent, Subjects } from "@bwtickets21/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
