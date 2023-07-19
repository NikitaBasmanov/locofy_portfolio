import {useCallback} from 'react';
import styles from "./figma/form.module.css";

const sendFormData = async (event,) => {
  


  // Get data from the form.
  const data = {
    message: event.target.message.value,
  }

  if (event.target.message.value.length< 5){
    alert('Введите минимум 5 символов')
    return
  }
  // Send the data to the server in JSON format.
  const JSONdata = JSON.stringify(data)

  // API endpoint where we send form data.
  const endpoint = '/api/ contact'

  // Form the request for sending data to the server.
  const options = {
    // The method is POST because we are sending data.
    method: 'POST',
    // Tell the server we're sending JSON.
    headers: {
      'Content-Type': 'application/ json',
    },
    // Body of the request is the JSON data we created above.
    body: JSONdata,

  }

  // Send the form data to our forms API on Vercel and get a response.
  const response = await fetch(endpoint, options)

  // Get the response data from server as JSON.
  // If server returns the name submitted, that means the form works.
  const result = await response.json()
  alert(`${result.data}`)
}
const Form = ({ buttonText }) => {
  const onSubmitClick = useCallback( (e) => {
    console.log('submit')
    sendFormData(e)
    e.target.reset()
    e.preventDefault()

  },  []);
  return (
    <form  className={styles.feedback} onSubmit={onSubmitClick}>
      <div className={styles.inputParent}>
        <input className={styles.input} name= {'message'} type="text" placeholder='  Обртная связь' maxLength= {500} minLength= {5} />
        <button className={styles.button} type="submit"  autoFocus>
          <div className={styles.textbutton}>{buttonText}</div>
        </button>
      </div>
    </form>
  );
};

export default Form;
