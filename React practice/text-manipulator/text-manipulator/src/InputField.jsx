import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

function InputField({onInputChange}) {
  const [text, setText] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      onInputChange(text);
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, [text , onInputChange]);
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <div>
        <textarea
          rows={4}
          cols={50}
          value={text}
          onChange={handleChange}
          className="border w-full text-2xl resize-none rounded-md p-2 h-64 border-black focus:border-none focus:shadow-lg focus: outline-none"
        ></textarea>
      </div>
    </>
  );
}
InputField.propTypes = {
  onInputChange: PropTypes.func.isRequired
}
export default InputField;
