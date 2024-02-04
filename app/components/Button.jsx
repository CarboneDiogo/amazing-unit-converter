import React from 'react'

const Button = (props) => {

    const buttonTitle = props.buttonTitle;
    const onClick = props.onClick;
    const fontSize = props.fontSize

  return (
    <button className={`hover:cursor-pointer hover:text-black hover:bg-white duration-500 p-2 text-${fontSize}`} onClick={onClick}>
        {buttonTitle}
    </button>
  )
}

export default Button