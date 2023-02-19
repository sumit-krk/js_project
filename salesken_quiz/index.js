// all the question data
let all_question=[
    {
        question: "1. The full form of CSS is:",
        a:"Cascading Style Sheets",
        b:"Coloured Special Sheets",
        c:"Color and Style Sheets",
        d:"None of the above",
        ans:"ans1"
    },
    {
        question: "2. The property in CSS used to change the background color of an element is:",
        a:"bgcolor",
        b:"color",
        c:"background-color",
        d:"All of the above",
        ans:"ans3"
    },
    {
        question: "3. The CSS property used to control the element's font-size is:",
        a:"text-style",
        b:"text-size",
        c:"font-size",
        d:"None of the above",
        ans:"ans3"
    },
    {
        question: "4. The HTML attribute used to define the inline styles is:",
        a:"style",
        b:"styles",
        c:"class",
        d:"None of the above",
        ans:"ans1"
    },
    {
        question: "5. The HTML attribute used to define the internal stylesheet is:",
        a:"<style>",
        b:"style",
        c:"<link>",
        d:"<script>",
        ans:"ans1"
    },
    {
        question: "6. Which of the following CSS property is used to set the background image of an element?:",
        a:"background-attachment",
        b:"background-image",
        c:"background-color",
        d:"None of the above",
        ans:"ans2"
    },
    {
        question: "7. The CSS property used to make the text bold is:",
        a:"font-weight : bold",
        b:"weight: bold",
        c:"font: bold",
        d:"style: bold",
        ans:"ans1"
    },
    {
        question: "8. Are the negative values allowed in padding property?:",
        a:"Yes",
        b:"No",
        c:"Can't say",
        d:"May be",
        ans:"ans2"
    },
    {
        question: "9. The CSS property used to specify the transparency of an element is:",
        a:"opacity",
        b:"filter",
        c:"visibility",
        d:"overlay",
        ans:"ans1"
    },
    {
        question: "10. Which of the following is used to specify the subscript of text using CSS?:",
        a:"vertical-align: sub",
        b:"vertical-align: super",
        c:"vertical-align: subscript",
        d:"None of the above",
        ans:"ans1"
    }
]

// store all data in local storage on the load of index.html
const onbody_load=()=>{
    localStorage.setItem("question",JSON.stringify(all_question));
}

//logout functionlity

const logOut=()=>{
    let value=confirm("Are you sure want to log out");
    if(value==true){
        localStorage.removeItem('login');
        window.location.href = "./index.html"
    }
}