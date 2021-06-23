import { ButtonHTMLAttributes, ReactElement } from 'react'

import '../styles/button.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: ButtonProps): ReactElement {
  // eslint-disable-next-line react/jsx-props-no-spreading,react/button-has-type
  return <button className="button" {...props} />
}
