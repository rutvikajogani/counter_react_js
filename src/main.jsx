import React from 'react'
import { createRoot } from 'react-dom/client'
import Counter from './componet/counter.jsx'
import './counter.css'
import {Counter1} from './componet/counter1.jsx'


createRoot(document.getElementById('root')).render(
 <>
    <Counter/>
    <Counter1/>
    </>  
  
);
