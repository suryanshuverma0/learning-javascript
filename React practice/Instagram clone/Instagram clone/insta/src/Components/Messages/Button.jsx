import PropTypes from "prop-types";

function Button(props) {
  return (
    <>
      <div>
        <button className="text-blue-600 bg-transparent hover:text-white p-2">
          {props.text}
        </button>
      </div>
    </>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Button;
