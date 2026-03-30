import React from 'react'
import { CssBaseline, Container, Typography, Button } from '@mui/material'
import '@fontsource/roboto/400.css'

export default function App() {
  return (
    <>
      <CssBaseline />
      <Container>
        <Typography variant="h4" sx={{ my: 4 }}>
          Chem4U - A chemistry learning platform for students and educators.
        </Typography>
        <Button variant="contained" color="primary">Get started</Button>
      </Container>
    </>
  )
}
