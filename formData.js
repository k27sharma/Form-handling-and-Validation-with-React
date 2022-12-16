import React, { useEffect } from "react"
import "./formData.css"


export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
            birthday: "", 
            age:"",
            batch: "",
            changebatch:""
        }
    )
    const[formErrors, setFormErrors] = React.useState({});

    const[isSubmit, setIsSubmit] = React.useState(false);

    const[isClick, setIsClick] = React.useState(false);
    
 


    function handleChange(event) {
      const{name,value} = event.target;
      setFormData({...formData, [name]: value});
    };

    function handleClick(event){
        event.preventDefault();
       setFormErrors(validate2(formData));
        setIsClick(true);
    }

    function handleSubmit(event){
       
            event.preventDefault();
            setFormErrors(validate(formData));
            setIsSubmit(true);
        
    };
     
     useEffect(() =>{
        console.log(formErrors);
        if(Object.keys(formErrors).length===0 && isSubmit){
            console.log(formData);
        }
     }, [formErrors]);


     useEffect(() => {
        if(date!==1 && isClick){
            console.log(formData);
        }
     }, [formErrors.changebatch])

      let newDate = new Date()
      let date = newDate.getDate();

    const validate2 = (value) => {
        const error = {};
          if(date!== 1){
        error.changebatch = "You can only change your batch on 1st of every month!"
    }
        return error;
    }
    const validate = (values) => {
        const errors = {};
        const regex1 =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i;
        const regex2 = /^(?:1[8-9]|[2-6][0-5])$/i;
    if(!values.firstName){
        errors.firstName = "Firstname is required!"
    }
    if(!values.lastName){
        errors.lastName = "Lastname is required!"
    }
    if(!values.email){
        errors.email = "Email is required!"
    }else if(!regex1.test(values.email)){
        errors.email = " This is not a valid email format"
    }
    if(!values.birthday){
        errors.birthday = "DOB is required!"
    }
    if(!values.age){
        errors.age = "Age is required!"
    }
    else if(values.age<18  ){
        errors.age = "Your age must be between 18 to 65!"
    }else if(values.age>65){
        errors.age = "Your age must be between 18 to 65!"
    }
  
    return errors;
    }
    return (
        <div>
            {Object.keys(formErrors).length === 0 && isSubmit && isClick ? (<div className="signed-in"> {alert("Registered Successfully!!")} </div>) :"" 
           }



        <form onSubmit={handleSubmit}>
            <div className="logo">
            
            <h1> REGISTER FOR YOGA CLASS</h1>
            </div>
             <p className="error">{formErrors.firstName}</p>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                errorMessage="Username should be 3-16 characters and must not include any special characters."
                value={formData.firstName}
            />
              <p className="error">{formErrors.lastName}</p>
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
              <p className="error">{formErrors.email}</p>
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                errorMessage="Include special characters like @_ and a valid address."
                value={formData.email}
            />
          
             <p className="error">{formErrors.birthday}</p>
            <input 
                type="date" className="date" 
                placeholder="Date of Birth"
                value={formData.birthday}
                onChange={handleChange}
                name="birthday"
            />
            <p className="error">{formErrors.age}</p>
            <input 
                type="number" className="age" 
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
                name="age"
            />
            
            <select 
                id="batch"
                value={formData.batch}
                onChange={handleChange}
                name="batch"
               
            >
                <option value="">-- Select Your batch --</option>
                <option value="batch1">6-7 AM</option>
                <option value="batch2">7-8 AM</option>
                <option value="batch3">8-9 AM</option>
                <option value="batch4">5-6 PM</option>
            </select>
             
              <p className="error">{formErrors.changebatch}</p>
             <select 
                id="changebatch"
                value={formData.changebatch}
                // onChange={handleChange}
                name="changebatch"
                onClick={handleClick}
            >
                <option value="">-- Change Your batch --</option>
                <option value="batch1">6-7 AM</option>
                <option value="batch2">7-8 AM</option>
                <option value="batch3">8-9 AM</option>
                <option value="batch4">5-6 PM</option>
            </select>

            <button >Pay 500/-</button>
            <p className="note"><b>Note: </b> 
             Irrespective of the date , you have to pay the fee for the whole month!!</p>
        </form>
        </div>
    )
}
