export class MessageBroker {
    private static instance: MessageBroker;
    private subscribers: Map<string, Function[]>;

    private constructor() {
        this.subscribers = new Map<string, Function[]>();
    }

    public static getInstance(): MessageBroker {
        if (!MessageBroker.instance) {
            MessageBroker.instance = new MessageBroker();
        }

        return MessageBroker.instance;
    }

    public subscribe(topic: string, callback: Function): void {
        if (!this.subscribers.has(topic)) {
            this.subscribers.set(topic, []);
        }

        this.subscribers.get(topic)!.push(callback);
    }

    public publish(topic: string, message: any): void {
       const callbacks = this.subscribers.get(topic);
       if (callbacks) {
           callbacks.forEach(callback => callback(message));
       } 
    }
}