let question_data;
const question_load=async()=>{
    question_data=await JSON.parse(localStorage.getItem("question"));
    waiting_for_data();
    console.log(question_data);
}

const waiting_for_data = () => {
  const question=document.querySelector('.question');
  const option1=document.querySelector('#option1');
  const option2=document.querySelector('#option2');
  const option3=document.querySelector('#option3');
  const option4=document.querySelector('#option4');
  const submit=document.querySelector('#submit');

  let question_count = 0;
  const current_question = () => {
    let each_question = question_data[question_count];
    console.log(each_question);
    question.innerText = each_question.question;
    option1.innerText = each_question.a;
    option2.innerText = each_question.b;
    option3.innerText = each_question.c;
    option4.innerText = each_question.d;
  };
  current_question();
};