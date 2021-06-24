import { ButtonHTMLAttributes, ReactElement } from 'react'

import '../styles/button.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  // eslint-disable-next-line react/require-default-props
  isOutlined?: boolean
}

export function Button({
  isOutlined = false,
  ...props
}: ButtonProps): ReactElement {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading,react/button-has-type
    <button className={`button ${isOutlined ? 'outlined' : ''}`} {...props} />
  )
}
