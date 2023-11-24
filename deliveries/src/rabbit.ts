import amqp from 'amqplib';
import { Delivery } from './domain/Delivery';

export const sendEventRabbit = async (data: Delivery) => {
  try {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();
    const exchange = 'EntregadorAsignado';

    await channel.assertExchange(exchange, 'direct', { durable: false });

    const message = JSON.stringify(data);
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
