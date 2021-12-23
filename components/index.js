import React from 'react';
import { Button } from 'component-library-example';
import './styles.css';

export default function App() {
  return (
    <div className="App">
      <Box padding="small" paddingTop="medium" paddingBottom="medium">
        Simple Box Component
        <Columns space="small">
          <Box>
            {' '}
            Item 1{' '}
            <Button
              variant="solid"
              color="primary"
              size="small"
              enableElevation
              disabled
            >
              Small Outline Elevated Button
            </Button>
          </Box>
          <Box>
            {' '}
            Item 2{' '}
            <Button
              variant="solid"
              color="primary"
              size="small"
              enableElevation
              disabled
            >
              Small Outline Elevated Button
            </Button>
          </Box>
          <Box>
            {' '}
            Item 3{' '}
            <Button
              variant="solid"
              color="primary"
              size="small"
              enableElevation
              disabled
            >
              Small Outline Elevated Button
            </Button>
          </Box>
        </Columns>
        <Stack space="small">
          <Box marginTop="medium"> Item 1</Box>
          <Box> Item 2</Box>
          <Box> Item 3</Box>
        </Stack>
      </Box>
    </div>
  );
}
