import React, { useState } from 'react';
import {TextField,FormControl,Button, FormControlLabel, Checkbox, InputLabel, MenuItem, Select, FormLabel, FormGroup} from "@mui/material";
import "./FormComponent.css";
import {  Man, Man2Outlined, Woman, WomanOutlined } from '@mui/icons-material';

import SuccessModal from '../SuccessModal/SuccessModal';

function FormComponent() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    password: '',
    repeatPassword: '',
    graduated: false,
    event: 'Hackathon1',
    dob:'',
    gender: ''
  });
  
  const [open, setOpen] = React.useState(false);
  const [validPass,setValidPass] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setFormData({
      ...formData,
      firstName: '',
      lastName: '',
      mobileNumber: '',
      password: '',
      email: '',
      repeatPassword: '',
      graduated: false,
      event: 'Hackathon1',
      dob:'',
      gender: ''
    });
    setOpen(false)
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
  
    if (type === 'checkbox' && name === 'gender') {
      console.log("gender option");
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
      }));
   
    }else if(type === 'checkbox' ){
      console.log('in check box handle change');
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: checked
      }));
    }
     else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
      }));
    }
  };
  

    const submitFormHandler = (e) => {
      e.preventDefault();
      if(formData.repeatPassword === formData.password){
        console.log("form submit handler");
        console.log(formData);
        let storedJson = localStorage.getItem('submittedData');
        if(storedJson){
          let storedArr = JSON.parse(storedJson);
          console.log(typeof(storedArr));
          storedArr.push(formData);
          localStorage.setItem('submittedData',JSON.stringify(storedArr));
        }else{
          var arr = [];
          arr.push(formData);
          localStorage.setItem('submittedData',JSON.stringify(arr));
          
        }
        handleOpen();

   
        
      }else{
        alert('passwords dont match,also do check other details!')
      }
    }

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



    const validatePassword = () => {
      // Password should have at least 8 characters
      // It should contain at least one lowercase letter, one uppercase letter, one digit, and one special character
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
      setValidPass(RegExp.test(formData.password));
    };
    
  return (
    <React.Fragment>
      <form autoComplete='true' onSubmit={submitFormHandler}>

      <TextField 
                  label="First Name"
                  name='firstName'
                  onChange={handleChange}
                  required
                  variant="outlined"
                  color="secondary"
                  type="text"
                  value={formData.firstName}
                  fullWidth
                  sx={{mb: 3}}
              />

            <TextField 
                        label="Last Name"
                        name='lastName'
                        onChange={handleChange}
                        required
                        variant="outlined"
                        color="secondary"
                        type="text"
                        value={formData.lastName}
                        fullWidth
                        sx={{mb: 3}}
                    />  
               <TextField 
            label="Mobile"
            name='mobileNumber'
            onChange={handleChange}
            required
            variant="outlined"
            color="secondary"
            type="text"
            value={formData.mobileNumber}
            fullWidth
            sx={{mb: 3}}
         /> 

            <TextField 
            name='email'
            onChange={handleChange}
            required
            variant="outlined"
            color="info"
            label="email"
            type="email"
            value={formData.email}
            fullWidth
            sx={{ mb: 3 }}
          
          />   
         <InputLabel htmlFor="dob" sx={{ marginBottom: '8px', display: 'block' }}>
          DOB
        </InputLabel>
          <TextField 
            name='dob'
            onChange={handleChange}
            required
            variant="filled"
            color="secondary"
            type="date"
            value={formData.dob}
            fullWidth
            sx={{ mb: 3 }}
          
          />  
         


          <FormControlLabel
            label="Graduated"
            name='graduated'
            control={
              <Checkbox
                checked={formData.graduated}
                onChange={handleChange}
              />
            }
            sx={{mb: 3}}
          />


      <FormControl fullWidth sx={{mb: 3}}>
        <InputLabel id="demo-simple-select-label">Event</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name='event'
          value={formData.event}
          label="event"
          onChange={handleChange}
        >
          <MenuItem value="Hackathon1">Hack1</MenuItem>
          <MenuItem value="Hackathon2">Hack2</MenuItem>
          <MenuItem value="Hackathon3">Hack3</MenuItem>
        </Select>
      </FormControl>


  {/* change icons for gender male female option */}

<FormControl sx={{ mb: 3 }} component="fieldset" variant="standard">
<FormLabel component="legend">Gender</FormLabel>
<FormGroup sx={{
  display: "flex",
  flexDirection:"row"
}}>
  <FormControlLabel
  name='gender'
    control={
      <Checkbox checked={formData.gender === 'male'} onChange={handleChange} name='gender' value="male"  icon={<Man2Outlined />}
      checkedIcon={<Man />} />
    }
    label="Male"
  />
  <FormControlLabel
  name='gender'
    control={
      <Checkbox checked={formData.gender === 'female'} onChange={handleChange} name="gender" value="female" icon={<WomanOutlined />}
      checkedIcon={<Woman />} />
    }
    label="Female"
  />
  
</FormGroup>

</FormControl>
             
    <TextField 
            label="Password"
            name='password'
            onChange={handleChange}
            required
            variant="outlined"
            color="secondary"
            type="password"
            value={formData.password}
            error={false}
            helperText="Password must have atleast 1 Uppercase 1 lowercase letter 1 digit and a special char"
            fullWidth
            sx={{mb: 3}}
         />
<TextField 
            label="repeat password"
            name='repeatPassword'
            onChange={handleChange}
            required
            variant="outlined"
            color="secondary"
            type="password"
            value={formData.repeatPassword}
            error={()=>alert("password doesnt match")}
            fullWidth
            sx={{mb: 3}}
         />
         <Button variant="outlined" color="secondary" type="submit">Register</Button>
</form>
<SuccessModal formData={formData} handleClose={handleClose} open={open} />
    </React.Fragment>
  )
}

export default FormComponent