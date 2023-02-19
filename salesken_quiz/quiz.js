let question_data;
// loading data from localStorage
const question_load=async()=>{
    question_data=await JSON.parse(localStorage.getItem("question"));
    waiting_for_data();
    console.log(question_data);
}

// wating for data until data comes from local storage
const waiting_for_data = () => {
  const question=document.querySelector('.question');
  const option1=document.querySelector('#option1');
  const option2=document.querySelector('#option2');
  const option3=document.querySelector('#option3');
  const option4=document.querySelector('#option4');
  const skip=document.querySelector('#skip');
  const answer=document.querySelectorAll('.answer')
  const store_result=[];
//   handle_Radio;

  let question_count = 0;

  //inserting question and answer on the UI
  const current_question = () => {
    let each_question = question_data[question_count];
    question.innerText = each_question.question;
    option1.innerText = each_question.a;
    option2.innerText = each_question.b;
    option3.innerText = each_question.c;
    option4.innerText = each_question.d;
  };
  // after insert data on UI calling the function
  current_question();

//   after click on any answer calling the function
  const handle_Radio=()=>{
    let each_question = question_data[question_count];
    let ans=checkedAnswer();
    let data;
    if(ans==each_question.ans){
        data={
            answer:"correct"
        }
    }
    else{
        data={
            answer:"incorrect"
        }
    }
    store_result.push(data);
    console.log(question_count)
    if(question_count==9){
        const remove_area=document.querySelector('.inner_div');
        remove_area.remove();
        document.querySelector(".inner_adjecent_div").style.display = "block";
        console.log("result",store_result)
        localStorage.setItem("final_result",JSON.stringify(store_result))
    }
    question_count++;
    current_question();
    deSelect()
  }


  const deSelect=()=>{
    answer.forEach((e)=> {
        if(e.checked){
           return e.checked=false;
        }
    })
  }

//   checking the selected answer
  const checkedAnswer=()=>{
    let store_answer;
        answer.forEach((e)=>{
            if(e.checked){
                store_answer=e.id
            }
        })
        return store_answer;
  }

//   handle if question skiped
  const handle_skip=()=>{
    data={
        answer:"skip"
    }
    if(question_count==9){
        const remove_area=document.querySelector('.inner_div');
        remove_area.remove();
        document.querySelector(".inner_adjecent_div").style.display = "block";
        console.log("result",store_result)
    }
    store_result.push(data);
    question_count++;
    current_question();
  }

  const See_result=()=>{
    window.location.href = "./result.html"
  }

  deSelect();

//   handling after user clicked on any answer
  document.getElementById("ans1").addEventListener("click",handle_Radio);
  document.getElementById("ans2").addEventListener("click",handle_Radio);
  document.getElementById("ans3").addEventListener("click",handle_Radio);
  document.getElementById("ans4").addEventListener("click",handle_Radio);
  document.getElementById("result").addEventListener("click",See_result);
  skip.addEventListener('click',handle_skip)
};