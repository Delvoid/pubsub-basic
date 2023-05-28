import { MessageBroker } from './MessageBroker';

export class Subscriber {
    private messageBroker: MessageBroker;

    constructor() {
        this.messageBroker = MessageBroker.getInstance();
    }

    public subscribe(topic: string, callback: Function): void {
        this.messageBroker.subscribe(topic, callback);
    }
}
