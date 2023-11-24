import amqp from 'amqplib';
import { Restaurant } from './domain/Restaurant';

export const sendEvent = async (data: Restaurant) => {
  try {
    const connection = await amqp.connect('amqp://localhost'); // URL de conexión a RabbitMQ
    const channel = await connection.createChannel();
    const exchange = 'ActualizaciónDeRestaurante'; // Nombre del intercambio

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
