import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Anwar','Jafor','Alomgir','Salman','kabila','raifur']; 

  const products = [
    {name:'Adobe Photoshop',price:'$99.09'},
    {name:'Adobe Illustrator',price:'$90.99'},
  {name:'PDF Reader',price:'$60.30'},
  {name:'premiere Al',price:'$410.30'}
  ]



  const Friends =[
    {name:'Redoy',age:'25'},
    {name:'shuvo',age:'28'},
    {name:'sorif',age:'27'},
    {name:'maruf',age:'26'}
  ]
  // const products=[
  //   {name:'Sejuti',fatherName:'Kader Sekh',motherName:'kamrunnahar'},
  //   {name:'Sejuti',fatherName:'Kader Sekh',motherName:'kamrunnahar'},
  //   {name:'Sejuti',fatherName:'Kader Sekh',motherName:'kamrunnahar'}
  // ]
  // const nayok = ['Anwar','jafor','Alomgir','Salman'];
  // const products = [
  //   {name:'Photoshop',price:'$90.99'},
  //   {name:'Illustrator',price:'$60.99'},
  //   {name:'PDF Reader',price:'$6.99'}

  // ]

  // const productsNames = products.map(products => products.name);
  // console.log(productsNames);
  return (
    <div className="App">
      <header className="App-header">
        
        <p>I am a React person</p>
        <Company></Company>
        <CompanyName></CompanyName>
        <Website></Website>
        <ZipCodes></ZipCodes>
        <Phones></Phones>
        <Cities></Cities>
        <UserName></UserName>
        <Emails></Emails>

        <Counter></Counter>
        <Users></Users>

        <ul>
  {Friends.map(friend => <li>{friend.name}{friend.age}</li>)}
  </ul>
<Number></Number>  
     


       
        </header>
    </div>
  );
  }

  function Company(){
    const [companies,setCompany] = useState([])
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=>res.json())
      .then(data=>setCompany(data));
    },[])

    return(
      <div>
        <h1>Company: </h1>
        {
          companies.map(company=><li>{company.company.catchPhrase}</li>)
        }
      </div>
    )
  }
  //effect on company attributes
  function CompanyName(){
    const [companiesName,setCompany] = useState([]);
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=>res.json())
      .then(data=>setCompany(data));
    },[])

    return(
      <div>
        <h1>Company name:</h1>
        {
          companiesName.map(companyName=><li>{companyName.company.name}</li>)
        }
      </div>
    )
  }

  //effect practise on website////
  function Website(){
    const [websites,setWebsite] = useState([]);
    useEffect(()=>{fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json())
  .then(data=>setWebsite(data))},[])

  return(
    <div>
      <h1>Website: </h1>
      {
        websites.map(website=><li>{website.website}</li>)
      }
    </div>
  )
  }

  //////// how to change state//////////////
  function Counter(){
    const [count, setCount] = useState(10);
    const handleIncrease = () =>setCount(count+1);
    return(
      <div>
        <h1>Count: {count}</h1>
        <button onMouseMove={()=>setCount(count - 1)}>Decrease</button>
        <button onClick={handleIncrease}>Increase</button>
      </div>
    )
  }

  //use effect on zipcode/////
  function ZipCodes(){
    const [zipcodes,setZipcode] = useState([]);
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=>res.json())
      .then(data=>setZipcode(data));

    },[])
    return(
      <div>
        <h1>Zip CODE: </h1>
        {
          zipcodes.map(zipcode=><li>{zipcode.address.zipcode}</li>)
        }
      </div>
    )
  }

  //use phone for effect practise
  function Phones(){
    const [phones,setPhone] = useState([]);
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=>res.json())
      .then(data=>setPhone(data));
    },[])

    return(
      <div>
        <h2>Phone number:</h2>
        {
          phones.map (phone=><li>{phone.phone}</li>)
        }
      </div>
    )
  }

  //use effect on city list////
  function Cities(){
    const [cities,setCity] = useState([]);
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=>res.json())
      .then(data=>setCity(data));
    },[])

    return(
      <div>
        <h2>City Names: </h2>
        <ul>
          {
            cities.map(cityName=><li>{cityName.address.city}</li>)
          }
        </ul>
      </div>
    )
  }

  //use effect on user name//////
  function UserName(){
    const [userNames,setUserName] = useState([]);
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=>res.json())
      .then(data=>setUserName(data));
    },[])

    return(
      <div>
        <h2>User-Name: </h2>
        <ul>
          {
            userNames.map(userName=><li>{userName.username}</li>)
          }
        </ul>
      </div>
    )
  }

  //use effect for practise 
  function Emails(){
    const [email,setEmail] = useState([]);
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=>res.json())
      .then(data =>setEmail(data));
    },[])

    return(
      <div>
        <h1>E-mail:{email.length}</h1>
        <ul>
          {
             email.map(emails=><li>{emails.email}</li>)
            
          }
        </ul>
      </div>
    )
  }

/////////use effect for data loading/////
function Users(){
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data =>setUsers(data));
  },[])

  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user=> <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}


////////counter//////////
function Number(){
  const [count,setCount] = useState(0);
  return(
    <div>
      <h1>Number: {count}</h1>
      <button onMouseMoveCapture={()=>setCount(count+1)}>Increase</button>
      <button onMouseMove={()=>setCount(count-1)}>Decrease</button>
    </div>
  )

}

function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }

  const {name,price} = props.products;
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
  <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
}
  
export default App;
