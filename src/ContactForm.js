import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("mqkoqrqz");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
    <div className='formMain'>
        <div className='mail'>
      <label htmlFor="email">
        Ваш email-адрес
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      </div>
      <div className='mail'>
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
       </div>
       <div className='mail'>
      <button className='btnForm' type="submit" disabled={state.submitting}>
        Отправить
      </button>
      </div>

    </div>
    </form>
  );
}
export default ContactForm;