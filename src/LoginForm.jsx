import { useState } from 'react';

export function LoginForm() {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const onFormSubmitted = (event) => {
    event.preventDefault();
    console.log('Form submitted!');
  };

  const isSubmitDisabled = () => {
    return email.length < 1 || password.length < 1;
  };

  return (
     <form onSubmit={onFormSubmitted}>
       <input
         name="email"
         value={email}
         placeholder="Email"
         onChange={(e) => setEmail(e.target.value) }
       />
       <input
         name="password"
         type="password"
         placeholder="Password"
         value={password}
         onChange={(e) => setPassword(e.target.value) }
       />

       <button
         type="login"
         title="Login"
         disabled={isSubmitDisabled()}
         onClick={onFormSubmitted}
       >
         <span>Login</span>
       </button>
     </form>
  );
}
