import './Login.css';
export default function Login() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 pt-3">
            <div className='row pt-5'>
              <div className="col-5 login-form">
                <div className='row justify-content-center'>
                  <div className='col-9 p-3 '>
                      <div className="image-container"> </div>
                      <div className='heading d-flex flex-column'>
                        <h1 className='pt-5'>Welcome Back.</h1>
                        <p>Please enter your credentials here to login.</p>
                      </div>
                      <div className='form-container pt-5'>
                        <form className='pb-5'>
                          <div className='d-flex mb-4 flex-column'>
                            <label htmlFor="emaillabel" className="form-label" >Email address</label>
                            <input type="email" className=" emailinput" id="inputemail" placeholder='something@gmail.com' aria-describedby="emailHelp" />
                          </div>
                          
                          <div className="mb-4 d-flex flex-column">
                            <label htmlFor="passwordlabel" className="form-label">Password<span>*</span></label>
                            <input type="password" className=" password" placeholder='********' id="passwordinput" />
                          </div>
                          <div className="mb-3 d-flex flex-column forgotpw">
                            <a href='/'>Forgot your password ?</a>
                          </div>
                          <button type="submit" className="btn login-btn btn-primary">Login</button>
                          <p className='l-register mb-5 pb-3'>Dont have an account yet? <span>Register.</span></p>
                        </form>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col-7 bimage ">
              </div>
                
              </div>
          </div>
          </div>
        </div>
    );
  }