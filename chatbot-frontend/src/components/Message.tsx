import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

interface MessageProps {
  text: string;
  isBot: boolean;
}

const Message: React.FC<MessageProps> = ({ text, isBot }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: isBot ? 'flex-start' : 'flex-end', mb: 2 }}>
      <Paper
        sx={{
          p: 2,
          bgcolor: isBot ? 'background.paper' : 'primary.light',
          color: isBot ? 'text.primary' : 'primary.contrastText',
          maxWidth: '70%',
        }}
      >
        <Typography variant="body1">{text}</Typography>
      </Paper>
    </Box>
  );
};

export default Message;