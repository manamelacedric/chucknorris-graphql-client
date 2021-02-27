import React from 'react'
import Joke from './components/Joke'
import MainLayout from './layouts/MainLayout'

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: ':category', element: <Joke /> },
    ]
  }
]