import React, { useState } from "react";
import styled from "styled-components";

const ChatContainer = styled.div`
  width: 400px;
  max-width: 90%;
  margin: 2rem auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
`;

const MessagesContainer = styled.div`
  height: 300px;
  overflow-y: auto;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
`;

const MessageBubble = styled.div`
  margin-bottom: 1rem;
  text-align: ${({ isUser }) => (isUser ? "right" : "left")};
`;

const InputContainer = styled.form`
  display: flex;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.primary};
  border: none;
  color: white;
  cursor: pointer;
`;

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Adiciona a mensagem do usuário à lista
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    // Define o estado de loading enquanto aguarda a resposta da API
    setLoading(true);

    try {
      // Chamada para o endpoint do backend que gerencia o token e a chamada à API da Hugging Face
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          // Envia o histórico de mensagens do usuário para o contexto da IA
          text: newMessages
            .filter((msg) => msg.sender === "user")
            .map((msg) => msg.text)
            .join("\n")
        })
      });

      // Se a API retornar um status indicando limite de uso atingido (ex.: 429)
      if (response.status === 429) {
        setMessages([
          ...newMessages,
          { sender: "bot", text: "Limite de uso atingido. Por favor, retorne mais tarde." }
        ]);
      } else {
        const result = await response.json();
        // Consideramos que o campo "generated_text" contém a resposta do modelo
        const botReply = result.generated_text || "Desculpe, não consegui responder.";
        setMessages([...newMessages, { sender: "bot", text: botReply }]);
      }
    } catch (error) {
      console.error("Erro na chamada da API:", error);
      setMessages([
        ...newMessages,
        { sender: "bot", text: "Ocorreu um erro ao obter resposta." }
      ]);
    }
    setLoading(false);
  };

  return (
    <ChatContainer>
      <h2>Chat com IA</h2>
      <MessagesContainer>
        {messages.map((msg, index) => (
          <MessageBubble key={index} isUser={msg.sender === "user"}>
            <strong>{msg.sender === "user" ? "Você" : "IA"}:</strong> {msg.text}
          </MessageBubble>
        ))}
        {loading && <p>Carregando resposta...</p>}
      </MessagesContainer>
      <InputContainer onSubmit={handleSend}>
        <Input
          type="text"
          placeholder="Digite sua mensagem..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button type="submit">Enviar</Button>
      </InputContainer>
    </ChatContainer>
  );
};

export default Chat;
