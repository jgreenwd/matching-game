import React from 'react';
import MemoryBoard from './MemoryBoard';

function App() {
    // tile characters
    const icons = ['∀','∀','∃','∃','∈','∈','∧','∧','∨','∨','∩','∩','∪','∪','⊕','⊕'];

    return <MemoryBoard icons={icons}/>
}

export default App;
