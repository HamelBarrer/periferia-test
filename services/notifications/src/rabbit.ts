import amqp from 'amqplib';

export const receiveEventRabbit = async () => {
  try {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();
    const exchange = 'notifications';

    await channel.assertExchange(exchange, 'direct', { durable: false });

    const queue = 'notification_queue';
    await channel.assertQueue(queue, { exclusive: true });

    channel.bindQueue(queue, exchange, '');
    channel.consume(
      queue,
      (message) => {
        if (message?.content) {
          const response = JSON.parse(message.content.toString());
          return response.data;
        }
      },
      { noAck: true },
    );
  } catch (error) {
    const err = error as Error;
    throw new Error(err.message);
  }
};
