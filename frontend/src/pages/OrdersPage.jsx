import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBoxOpen, FaTruck, FaCheckCircle, FaHourglassHalf } from 'react-icons/fa';

const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 30px;
  background: linear-gradient(135deg, #ffffff, #f3f4f6);
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.8s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: #333;
  font-size: 28px;
`;

const OrderCard = styled.div`
  background: #fff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const OrderId = styled.p`
  font-weight: bold;
  color: #555;
  font-size: 18px;
`;

const OrderDate = styled.p`
  color: #777;
  font-size: 16px;
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const TimelineItem = styled.div`
  display: flex;
  align-items: center;
`;

const TimelineIcon = styled.div`
  margin-right: 12px;
  font-size: 20px;
  color: ${(props) => (props.active ? '#27ae60' : '#bbb')};
`;

const TimelineText = styled.p`
  margin: 0;
  font-size: 16px;
  color: ${(props) => (props.active ? '#27ae60' : '#999')};
`;

const ordersData = [
  {
    id: '12345',
    date: '10/02/2025',
    timeline: [
      { step: 'Pedido Recebido', icon: <FaBoxOpen />, status: 'done' },
      { step: 'Processamento', icon: <FaHourglassHalf />, status: 'done' },
      { step: 'Enviado', icon: <FaTruck />, status: 'current' },
      { step: 'Entregue', icon: <FaCheckCircle />, status: 'pending' },
    ],
  },
  {
    id: '67890',
    date: '05/02/2025',
    timeline: [
      { step: 'Pedido Recebido', icon: <FaBoxOpen />, status: 'done' },
      { step: 'Processamento', icon: <FaHourglassHalf />, status: 'done' },
      { step: 'Enviado', icon: <FaTruck />, status: 'done' },
      { step: 'Entregue', icon: <FaCheckCircle />, status: 'done' },
    ],
  },
];

const OrdersPage = () => {
  const [orders] = useState(ordersData);

  return (
    <Container>
      <Title>Meus Pedidos</Title>
      {orders.map((order) => (
        <OrderCard key={order.id}>
          <OrderHeader>
            <OrderId>Pedido #{order.id}</OrderId>
            <OrderDate>{order.date}</OrderDate>
          </OrderHeader>
          <Timeline>
            {order.timeline.map((item, index) => {
              const isActive = item.status === 'done' || item.status === 'current';
              return (
                <TimelineItem key={index}>
                  <TimelineIcon active={isActive}>{item.icon}</TimelineIcon>
                  <TimelineText active={isActive}>{item.step}</TimelineText>
                </TimelineItem>
              );
            })}
          </Timeline>
        </OrderCard>
      ))}
    </Container>
  );
};

export default OrdersPage;
