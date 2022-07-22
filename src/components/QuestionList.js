import React, { useState, useEffect  } from "react";
import QuestionItem from "./QuestionItem.js";


function QuestionList() {
  const [questions, setQuestions] = useState([]);
 
  
  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(res => res.json())
    .then(res => {
      setQuestions(res);
    
    });
  }, [])




  function handleDeleteQuestions(id){
  
    fetch(`http://localhost:4000/questions/${id}`, {
      method : "DELETE"
    })
    .then(res => res.json())

    fetch("http://localhost:4000/questions")
    .then(res => res.json())
    .then(res => {
      setQuestions(res);
   
    });
  }

  const questionItem = questions.map(quest => (
    <QuestionItem question = { quest } onDelete = { handleDeleteQuestions }/>
  ))
  console.log(questions)
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questionItem}
      </ul>
    </section>
  );
}

export default QuestionList;
