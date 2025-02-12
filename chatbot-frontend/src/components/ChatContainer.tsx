import React, { useState } from 'react';
import { Box, TextField, IconButton, Paper, Typography, CircularProgress } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Message from './Message';
import QueryHistory from './QueryHistory';
import { sendQuery } from '../api/api';

interface Message {
  text: string;
  isBot: boolean;
}

const ChatContainer: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const [history, setHistory] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    setIsLoading(true);
    const userMessage: Message = { text: input, isBot: false };
    setMessages((prev) => [...prev, userMessage]);
    setHistory((prev) => [...prev, input]);

    try {
      const response = await sendQuery(input);
      const botMessage: Message = { text: response.result, isBot: true };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = { text: "Sorry, I couldn't fetch the data.", isBot: true };
      setMessages((prev) => [...prev, errorMessage]);
    }

    setIsLoading(false);
    setInput('');
  };

  return (
    <Box sx={{ display: 'flex', height: '80vh', width: '80%', maxWidth: '1200px' }}>
      <QueryHistory history={history} />
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Paper sx={{ flexGrow: 1, overflow: 'auto', p: 2, mb: 2 }}>
          {messages.map((msg, index) => (
            <Message key={index} text={msg.text} isBot={msg.isBot} />
          ))}
          {isLoading && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <CircularProgress />
            </Box>
          )}
        </Paper>
        <Box sx={{ display: 'flex' }}>
          <TextField
            fullWidth
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ask about products or suppliers..."
            disabled={isLoading}
          />
          <IconButton onClick={handleSendMessage} color="primary" disabled={isLoading}>
            <SendIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatContainer;