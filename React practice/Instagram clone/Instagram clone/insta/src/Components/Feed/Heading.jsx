import PropTypes from "prop-types";
function Heading(props) {
  return (
    <>
     <div>
     <div className="flex flex-row gap-0 justify-center items-center">
              <div className="px-4">
                <img src={props.image} className="rounded-full w-12 h-12" />
              </div>
              <div className="flex flex-col gpa-1">
                <div>
                  <h1>{props.username}</h1>
                </div>
                <div>
                  <h3>{props.label}</h3>
                </div>
              </div>
            </div>
         </div> 
    </>
  )
}
Heading.propTypes = {
         username: PropTypes.string.isRequired,
         label: PropTypes.string.isRequired,
         image: PropTypes.string.isRequired
}
export default Heading
