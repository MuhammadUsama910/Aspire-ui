import { twMerge } from "tailwind-merge";
import PropTypes from 'prop-types';

const Button = ({ children, classes, click }) => {
  return (
    <>
    <button
      onClick={click}
      className={twMerge("bg-btnColor text-xxs rounded-full font-normal text-white whitespace-nowrap cursor-pointer", 
        classes)}>

      {children}
    </button>
    </>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.string,
  click: PropTypes.func
}

export default Button