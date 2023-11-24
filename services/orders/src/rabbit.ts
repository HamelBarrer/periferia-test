import amqp from 'amqplib';
import { Order } from './domain/Order';

export const sendEventRabbit = async (data: Order) => {
  try {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();
    const exchange = 'orders';

    await channel.assertExchange(exchange, 'direct', { durable: false });

    const message = JSON.stringify({
      content: 'PedidoCreado',
      data,
    });
    channel.publish(exchange, '', Buffer.from(message));

    setTimeout(() => {
      connection.close();
      process.exit(0);
    }, 500);
  } catch (error) {
    const err = error as Error;
    throw new Error(err.message);
  }
};
