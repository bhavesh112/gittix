import { Subjects, Publisher, OrderCancelledEvent } from "@bwtickets21/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
