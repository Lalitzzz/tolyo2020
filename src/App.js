import React, { useState } from 'react'

const App = () => {
  const[answer, setAnswer] = useState();
  const[error, setError] = useState(null);
  const[status, setStaus] = useState('typing');

  if (status === 'success') 
  {
    return <h1>thats right</h1>
  }

    async function handleSubmit(e) {
      e.preventDefault();
      setStaus('submitting')
      try {
        await submitForm(answer);
        setStaus('success');
      } catch (err) {
        setStaus('typing')
        setError(err)
      }
    }

    function handleTextareaChange(e) {
      setAnswer(e.target.value);
    }
  return (
    <div>
       <h2>City quiz</h2>
       <p>who won the gold medal in tokyo olympics in javlin throw in 2020 japan</p>

       <form onSubmit={handleSubmit}>
        <textarea
         value={answer}
         onChange={handleTextareaChange}
         disabled ={ status === 'submitting'}

        />
        <br/>
        <button disabled ={status ==='submitting'}>
          Submit
        </button> 
           {error !== null && 
             <p>{error.message}</p>
           }
       </form>
    </div>
  )
  function submitForm(answer) {
    return new Promise((resolve, reject) => {
      setTimeout(() =>{
        let shouldError = answer.toLowerCase() !== 'niraj chopra';

        if(shouldError) {
          reject(new Error( 'good guess but dear its wrong you shold work hard to get good knowledge from lalit sharma'))

        } else {
          resolve();
        }
       },1500)
    })
  }
}

export default App
