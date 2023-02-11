import React, { useState } from 'react';
import FlashcardList from './FlashcardList';
import './app.css'
// import axios from 'axios'
// for api use and want to import api, add 'useEffect' hook so the api works as soon as page load

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
  return (
    <div className='container'>
<FlashcardList flashcards={flashcards} /> 
    </div>
);
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: 'what is plus',
    answer: '4',
    options: [
      ' -1',
      ' -2',
      ' 4',
  
    ]
  },

  {
  id: 2,
  question: 'what is pie',
  answer: '3.14',
  options: [
    ' 1',
    ' 2',
    ' 3.14',

  ]
},
{
id: 3,
question: '2 + 2',
answer: '4',
options: [
  'Answer 5',
  'Answer 2',
  'Answer 4',

]
}
]

export default App;
