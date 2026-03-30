import React from 'react'
import { CssBaseline, Container, Typography, Button } from '@mui/material'
import '@fontsource/roboto/400.css'

export default function App() {
  return (
    <>
      <CssBaseline />
      <Container>
        <Typography variant="h4" sx={{ my: 4 }}>
          Chem4U — MUI + React
        </Typography>
        <Button variant="contained" color="primary">Get started</Button>
      </Container>
    </>
  )
}
