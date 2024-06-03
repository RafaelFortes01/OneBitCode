import PropTypes from "prop-types"

TextInput.propTypes = {
   id: PropTypes.string,
   label: PropTypes.string,
   value: PropTypes.string,
   setValue: PropTypes.func
}

function TextInput({id, label, value, setValue}) {

   return(
      <div>
         <label htmlFor={id}>{label}:</label>
         <input 
         type="text"
         name={id} 
         id={id} 
         value={value} 
         onChange={(ev) => setValue(ev.target.value)} />
      </div>
   )
}

export default TextInput