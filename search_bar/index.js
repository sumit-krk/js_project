// let data=[
//     {
//       "id": 1,
//       "Title": "Photosnap",
//       "JobRole" : "Senior Frontend Developer",
//       "JobDetails" : ["1d ago", "Full Time", "USA only"],
//       "TechStacks" : [ "Frontend", "Senior", "HTML", "CSS", "JavaScript"],
//       "LogoLink":"https://previews.123rf.com/images/ahasoft2000/ahasoft20001604/ahasoft2000160400234/54818668-links-glyph-toolbar-icon-for-software-design-style-is-a-white-symbol-on-a-round-blue-circle-with-gra.jpg",
//       "Show" :"true"
//     },
//     {
//       "id": 2,
//       "Title": "Manage",
//       "JobRole" : "Fullstack Developer",
//       "JobDetails" : ["1w ago", "Full Time", "UK only"],
//       "TechStacks" : [ "Fullstack", "Midweight", "Python", "React"],
//       "LogoLink": "https://news.cgtn.com/news/2020-11-02/Analysis-China-is-betting-on-science-and-tech-like-never-before-V68V871ula/img/871ca9ce8b9941088260b6ed4ced4eeb/871ca9ce8b9941088260b6ed4ced4eeb.jpeg",
//       "Show" :"true"
//     },
//     {
//       "id": 3,
//       "Title": "Account",
//       "JobRole" : "Junior Frontend Developer",
//       "JobDetails" : ["3d ago", "Part Time", "India only"],
//       "TechStacks" : [ "Frontend", "Junior" , "React", "Sass", "JavaScript"],
//       "LogoLink": "https://media.licdn.com/dms/image/C4E22AQEx1Cn2VmdhCw/feedshare-shrink_800/0/1664217146275?e=2147483647&v=beta&t=m-1zbd0d9g2-nes_W2ztNSfP5UOX5ilaZYBJfJAGeJE"
//     },
//     {
//       "id": 4,
//       "Title": "MyHome",
//       "JobRole" : "Junior Frontend Developer",
//       "JobDetails" : ["2d ago", "Full Time", "Remote"],
//       "TechStacks" : [ "Frontend", "Junior", "CSS", "JavaScript"],
//       "LogoLink": "https://img.freepik.com/premium-vector/abstract-classic-blue-background_23-2148417583.jpg?w=2000"

//     },
//     {
//       "id": 5,
//       "Title": "Software Engineer",
//       "JobRole" : "Senior Software Engineer",
//       "JobDetails" : ["4d ago", "Full Time", "UK only"],
//       "TechStacks" : [ "Fullstack","Midweight", "JavaScript", "Sass","Ruby"],
//       "LogoLink": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/stockvault-person-studying-and-learning---knowledge-concept178241_0.jpeg?size=690:388"
//     },
//     {
//       "id": 6,
//       "Title": "Facelt",
//       "JobRole" : "Junior Backend Developer",
//       "JobDetails" : ["1d ago", "Full Time", "Remote"],
//       "TechStacks" : [ "Backend","Junior","HTML","Sass","JavaScript"],
//       "LogoLink": "https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2019/12/23174648/B-Tech-Degree.jpg"
//     },
//     {
//         "id": 7,
//         "Title": "Shortly",
//         "JobRole" : "Junior Developer",
//         "JobDetails" : ["2w ago", "Full Time", "UK only"],
//         "TechStacks" : [ "Backend","Junior","Ruby","RoR"],
//         "LogoLink": "https://www.siliconrepublic.com/wp-content/uploads/2020/12/AdobeStock_389071495-718x523.jpeg"
//       },
//       {
//         "id": 8,
//         "Title": "Insure",
//         "JobRole" : "Junior Frontend Developer",
//         "JobDetails" : ["2w ago", "Full Time", "USA only"],
//         "TechStacks" : ["Frontend","Junior","Vue","JavaScript","Sass"],
//         "LogoLink": "https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.webp"

//       },
//       {
//         "id": 9,
//         "Title": "Eyecam Co.",
//         "JobRole" : "Full Stack Engineer",
//         "JobDetails" : ["3w ago", "Full Time", "Worldwide"],
//         "TechStacks" : [ "Fullstack", "Midweight", "JavaScript","Djanjo" , "Python"],
//         "LogoLink": "https://mixpanel.com/wp-content/uploads/2021/05/Data-Stack-Hero-Census-Blog.png"
//       },
//       {
//         "id": 10,
//         "Title": "The Air Filter Company",
//         "JobRole" : "Front-end Dev",
//         "JobDetails" : ["1mo ago", "Part Time", "Worldwide"],
//         "TechStacks" : [ "Frontend", "Junior", "React", "Sass", "JavaScript"],
//         "LogoLink": "https://www.hcltech.com/sites/default/files/images/campaign-images/rich-snippet/Home-Twitter.png"
//       }
//   ]
// import data from './db.js'
let data;
async function getData(){
  my_data=await fetch("http://localhost:3500/data")
  my_data=await my_data.json();
  return my_data;
}
async function jsonload(){
  let x=await getData(); 
  data=x;
}
  let new_data=[];
  for(let i=0;i<data.length;i++){
    for(let j=0;j<data[i].TechStacks.length;j++){
        new_data.push(data[i].TechStacks[j]);
    }
}
 function showData(new_data_1){
    let div=document.createElement("div");
    div.setAttribute('id','ShowData');
    document.body.appendChild(div);
    for(let i=0;i<new_data_1.length;i++){
        let showData=document.getElementById("ShowData");
        let h1=document.createElement("h1");
        h1.innerText=new_data_1[i];
        showData.appendChild(h1);
      }
  }

function HandleInput(){
    let parent=document.getElementById("ShowData");
    document.body.removeChild(parent);
    let val=document.getElementById("input").value;
    new_data_1=new_data.filter((e)=>{
        if(e.toLowerCase().includes(val)){
            return e;
        }
    })
    showData(new_data_1);
}
