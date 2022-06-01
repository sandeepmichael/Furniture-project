import React,{useState} from 'react'
import { Link } from 'react-router-dom'


const Register = () => {

    const [formData, SetformData] = useState({
        name:'',
        email:'',
        password:'',
      })
      const {name, email, password} = formData;
      
      const handleChange = (e) => {
        SetformData({...formData, [e.target.id]: e.target.value})
      }

  return (
    <div>
           <div className='container shadow my-5'>
            <div className='row'>
                <div className='col-md-5 d-flex flex-column align-items-center justify-content-center form-1'>
                    <h1 className='display-4 fw-bolder'>Hello,</h1>
                    <p className='lead text-center'>Enter Your Details To Register</p>
                    <h1 className='mb-4'>OR</h1>
                    <Link to='/login'>
                    <button type="button" class="btn btn-outline-primary mb-2">Login</button>
                    </Link>
                </div>
                <div className='col-md-6 p-5'>
                    <h1 className='display-6 fw-bolder text-center'>Register</h1>

                    <form>
                    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" class="form-control" id="name" value={name} onChange={handleChange} />
    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="email" value={email} onChange={handleChange} aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="password" value={password} onChange={handleChange}/>
  </div>
 
  <button type="submit" class="btn btn-primary mb-2">Register</button>
</form>

                </div>

            </div>

        </div>
    </div>
  )
}

export default Register