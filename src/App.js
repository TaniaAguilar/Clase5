import React from 'react';
import './App.css';
import ItemCount from './components/ItemCount';


export default function App () {
  return <ItemCount initial={1} stock={10} />;
}
