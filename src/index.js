import React from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import TodoApp from './components/todo-app'

const root = document.getElementById('app')

createRoot(root).render(<TodoApp />)
