import { MessageBroker } from './MessageBroker';

export class Publisher {
  private messageBroker: MessageBroker;

  constructor() {
    this.messageBroker = MessageBroker.getInstance();
  }

  public publish(topic: string, message: any): void {
    this.messageBroker.publish(topic, message);
  }
}
