import amqp from 'amqplib';
import { Payment } from './domain/Payment';

export const sendEvent = async (data: Payment) => {
  try {
    const connection = await amqp.connect('amqp://localhost'); // URL de conexión a RabbitMQ
    const channel = await connection.createChannel();
    const exchange = 'PagoCompletado'; // Nombre del intercambio

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
