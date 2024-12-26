'use client'
import styles from "./page.module.css";
import {useState} from "react";
import React from "react";
import Button from '@mui/material/Button';
import MyCard from './card';
import DialogForm from "./form";

export default function Home() {
  const [Login,setLogin] = useState(false);
  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const [values, setValues] = useState({ 
    name: '', 
    Code: '', 
    Credits: '',
    Description: '',
    Imageurl: '',
  }); 
  const handleChange = (e) => { const { name, value } = e.target; setValues({ ...values, [name]: value, }); };
  
    const cards = [ 
      { 
        name: 'Machine Learning', Description: 'An advanced course on machine learning algorithms',Code:'Code:CS711', Credits:'Credits:9',image: 'https://www.hfsresearch.com/wp-content/uploads/2019/09/5b5f1a8e048a3267059501.png' }, 
      {name: 'Data Structures and algorithms', Description: 'Learn about arrays,linked lists and more',Code:'Code:ESO207',Credits:'Credits:11', image: 'https://www.seedprogramming.org/wp-content/uploads/2023/02/PicsArt_03-24-07.25.58-1.webp' }, 
      { name: 'Fluid Mechanics', Description: 'Fundamentals of fluid mechanics and applications',Code:'Code:ME302',Credits:'Credits:9', image: 'https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/dfb3dc65-ad56-4554-a184-b151ef2d70a4_CI.jpg' }, 
      {name: 'Introduction to electronics', Description: 'An introductory course of electric circuits & applications',Code:'Code:ESC201', credits:'Credits:14',image: 'https://th.bing.com/th/id/OIP.d8WM4VWYPHKx09WEcAD3eAHaE7?rs=1&pid=ImgDetMain'}];



    return (
    <>
    <div className={styles.header}>
        <ul>
          <li className={styles.h1}>Course Helper</li>
          <li className={styles.h3}><button className={styles.h2} onClick={()=> setLogin(true)}>LOGIN</button></li>
        </ul>
    
     {
      Login&&
      <div className={styles.popup}>
          
        <div className={styles.pop}>
         <div className={styles.pop1}>
          
         </div>
          <div className={styles.Pop}>
            
            <button className={styles.button} onClick={()=> setLogin(false)}>x</button>
            <h4 className={styles.h4}>Login</h4>
            <form className={styles.form} action='#'>
              <div className={styles.input_box}>
                <span className={styles.icon}>
                </span>
                <input className={styles.input} type="email" required />
                <label>Email</label>
              </div>
              <div className={styles.input_box}>
              <span className={styles.icon}>
              </span>
                <input className={styles.input} type="password" required />
                <label>Password</label>
              </div>
              <div className={styles.remember}>
                <label><input type="checkbox"></input>
                Remember me </label>
                <a href="#" >Forgot Password?</a>
              </div>
              
              
            </form>
            <button type="submit" className={styles.btn}>Login</button>
          </div>
        </div>
      </div>
    
     } 
    </div>  
      <div >
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
         {cards.map((card, index) => ( 
          <MyCard
           key={index} name={card.name} Description={card.Description} image={card.image} Code={card.Code} Credits={card.Credits}  /> 
           
           ))} 
           


      </div>
        
        <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Course
      </Button>
      <DialogForm open={open} handleClose={handleClose} values={values}/>
        
    </React.Fragment>
      </div>

    </>
    
  );
}
