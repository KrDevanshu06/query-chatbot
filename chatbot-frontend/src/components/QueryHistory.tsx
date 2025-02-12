import * as React from 'react';
import { List, ListItem, ListItemText, Paper, Typography } from '@mui/material';

interface QueryHistoryProps {
  history: string[];
}

const QueryHistory: React.FC<QueryHistoryProps> = ({ history }) => {
  return (
    <Paper sx={{ width: '250px', p: 2, height: '100%', overflow: 'auto' }}>
      <Typography variant="h6" sx={{ mb: 2 }}>Recent Queries</Typography>
      <List>
        {history.map((query, index) => (
          <ListItem key={index}>
            <ListItemText primary={query} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default QueryHistory; 