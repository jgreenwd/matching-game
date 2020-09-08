import React from 'react';
import MemoryBoard from './MemoryBoard';

function App() {
    // tile characters
    const icons = ['∀','∀','∃','∃','∈','∈','∧','∧','∨','∨','∩','∩','∪','∪','⊕','⊕'];

    return <MemoryBoard style={{textAlign: 'center'}} icons={icons}/>
}

export default App;
