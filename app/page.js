'use client'
import styles from "./page.module.css";
import {useState} from "react";
import React from "react";
import { TextField,Grid } from "@material-ui/core";



export default function Home() {
  const [Login,setLogin] = useState(false);
  const[open,setOpen] = useState(false);
  
  const [values, setValues] = useState({ 
    name: '', 
    Code: '', 
    Credits: '',
    Description: '',
    Imageurl: '',
  }); 
  const handleChange = (e) => { const { name, value } = e.target; setValues({ ...values, [name]: value, }); };

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
         
        <div className="course1" style={{width:'400px',height:'250px', border:'1px solid black',marginLeft:'20px',marginTop:'10px'}}>
            <div className="course11" style={{width:'400px',height:'125px', border:'1px solid black',backgroundImage:'url(https://cdn5.slideserve.com/10665168/machine-learning-n.jpg)'}} >
           
            </div>
            <div className="course12" >
            <h1 style={{fontSize:'15px',textAlign:'center'}}>Machine Learning </h1>
            <h2 style={{fontSize:'15px',textAlign:'center'}}>CS771</h2>
            <h3 style={{fontSize:'15px',textAlign:'center'}}>Credits:9</h3>
            <h4 style={{fontSize:'15px',textAlign:'center'}}>An advanced course on machine learning</h4>
            </div>

         </div>
        <div className="course1" style={{width:'400px',height:'250px', border:'1px solid black',marginLeft:'500px',marginTop:'-250px'}}>
           <div className="course21" style={{width:'400px',height:'125px', border:'1px solid black',backgroundImage:'url(https://static.yueya.net/shuomingshu.cn//wp-content/uploads/images/2022/11/30/144ca4324c7e4e74aab8fbe2d30ea1ae_1mfg1g4k2yp.png)'}} >
             
           </div>
           <div className="course22" >
           <h1 style={{fontSize:'15px',textAlign:'center'}}>Introduction to Electronics </h1>
           <h2 style={{fontSize:'15px',textAlign:'center'}}>Code: ESO201</h2>
           <h3 style={{fontSize:'15px',textAlign:'center'}}>Credits:11</h3>
           <h4 style={{fontSize:'15px',textAlign:'center'}}>An introductory course of electrical circuits</h4>
           </div>

        </div>
        
        <div className="course1" style={{width:'400px',height:'250px', border:'1px solid black',marginLeft:'1000px',marginTop:'-250px'}}>
           <div className="course21" style={{width:'400px',height:'125px', border:'1px solid black',backgroundImage:'url(https://th.bing.com/th/id/OIP.Udy1pUNY-W-V2cGwvG9OXgAAAA?rs=1&pid=ImgDetMain)'}} >
           
           </div>
           <div className="course22" >
           <h1 style={{fontSize:'15px',textAlign:'center'}}>Fluid Mechanics </h1>
           <h2 style={{fontSize:'15px',textAlign:'center'}}>code:ME302</h2>
           <h3 style={{fontSize:'15px',textAlign:'center'}}>Credits:9</h3>
           <h4 style={{fontSize:'15px',textAlign:'center'}}>Fundamentals of fluid mechanics and applications</h4>
           </div>

        </div>
        <div className="course1" style={{width:'400px',height:'250px', border:'1px solid black',marginTop:'20px',marginLeft:'20px'}}>
           <div className="course21" style={{width:'400px',height:'125px', border:'1px solid black',backgroundImage: 'url(https://i.pinimg.com/originals/cc/6a/4c/cc6a4c8465a0d2d77ddf8a6ef93e1f3c.png)'}} >
           
           </div>
           <div className="course22" >
           <h1 style={{fontSize:'15px',textAlign:'center'}}>Data Structures </h1>
           <h2 style={{fontSize:'15px',textAlign:'center'}}>Code:ESO207</h2>
           <h3 style={{fontSize:'15px',textAlign:'center'}}>Credits:11</h3>
           <h4 style={{fontSize:'15px',textAlign:'center'}}>Learn about arrays,linked lists,trees and more</h4>
           </div>

        </div>
        <button onClick={()=> setOpen(true)} style={{marginLeft:'1400px',width:'80px',height:'40px',marginTop:'20px'}}>Add Course</button>
         {
            open&&
        
            <div className="form1" style={{width:'800px',border:'1px solid black',marginLeft:'200px',padding:'10px'}}>
                   <button  onClick={()=> setOpen(false)} style={{marginLeft:'760px',width:'20px',background:'none',border:'none',fontSize:'20px'}}>x</button>
                   <h1 style={{paddingBottom:'10px',marginLeft:'20px'}}>Add Course</h1>
           
                   <Grid container spacing={4}>
                        <Grid item xs={12} >
                            <TextField 
                            label="Full Name*" 
                            variant="outlined"
                             fullWidth name="name" 
                             value={values.name} 
                             onChange={handleChange} />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField 
                            label="Course Code*" 
                            variant="outlined"
                             fullWidth 
                             name="name" 
                             value={values.Code} 
                             onChange={handleChange} />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField 
                            label="credits*" 
                            variant="outlined"
                             fullWidth name="name" 
                             value={values.Credits} 
                             onChange={handleChange} />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField 
                            label="Description" 
                            variant="outlined"
                             fullWidth name="name" 
                             value={values.Description} 
                             onChange={handleChange} />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField 
                            label="Image Url" 
                            variant="outlined"
                             fullWidth name="name" 
                             value={values.Imageurl} 
                             onChange={handleChange} />
                        </Grid>
           
                   </Grid>
                   <button type="submit" style={{width:'70px',height:'30px',backgroundColor:'#1569C7',marginLeft:'350px',marginTop:'20px',color:'white'}}>submit</button>
                </div>
        } 
      </div>

    </>
    
  );
}
