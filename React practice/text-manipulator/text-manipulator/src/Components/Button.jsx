import PropTypes from 'prop-types';
function Button({label , color, intensity , onClick}) {
  return (
    <div>
       <button className={`text-2xl text-white px-2 py-4 m-2 rounded-lg bg-${color}-${intensity} `} onClick={onClick}>{label}</button>
    </div>
  )
}
Button.propTypes = {
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  intensity : PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
  
}

export default Button
