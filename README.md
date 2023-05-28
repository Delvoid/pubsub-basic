
# Real-Time Pub-Sub Application

This is a simple real-time application demonstrating the Pub-Sub design pattern using Node.js, Express.js, and Socket.IO.

## Setup and Installation

1. Make sure that you have Node.js and npm installed on your system. If not, you can download and install them from the [official Node.js website](https://nodejs.org/en/download/).

2. Clone this repository to your local machine:

```bash
git clone https://github.com/delvoid/pubsub-basic.git
```

3. Navigate into the project folder and install the dependencies:

```bash
pnpm install
```

4. Start the server:

```bash
pnpm dev
```

## Using the Application

1. Open a terminal and run the client:

```bash
npx ts-node src/client.ts
```

2. The client will prompt you to enter commands. You can publish or subscribe to events using the following commands:

- To subscribe to an event, type `subscribe [event]`. For example, `subscribe event1`.
- To publish a message to an event, type `publish [event] [message]`. For example, `publish event1 Hello, world!`.

Multiple clients can subscribe to the same event and will all receive any messages published to that event. A client can subscribe to multiple events.

Basic demo


The tester.ts script is designed to automate testing of the Pub-Sub application. Running npx ts-node src/tester.ts initiates a series of automated event subscriptions and publications, allowing developers to validate application functionality without manual input.


```bash
npx tst-node src/tester.ts
```

