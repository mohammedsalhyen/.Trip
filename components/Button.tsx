import React from 'react'
interface ButtonProps {
    label: string;
  }

const Button: React.FC<ButtonProps> = ({label}) => {
  return (
    <button type="button" className=" bg-orange-50 text-white py-2 px-3 rounded-lg">
    {label}
    </button>
  )
}

export default Button
