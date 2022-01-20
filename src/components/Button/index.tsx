import React from 'react'
import { classNames } from '../../functions'

const SIZE = {
  xs: 'px-2 py-1 text-xs',
  sm: 'px-4 py-2 text-base',
  default: 'px-4 py-3 text-base',
  lg: 'px-6 py-[12px] text-base',
  none: 'p-0 text-base',
}

const FILLED = {
  default: 'bg-transparent hover:opacity-80 font-bold',
  red: 'font-bold bg-red w-full rounded-md text-high-emphesis hover:bg-opacity-80 disabled:bg-opacity-80',
  blue: 'font-bold bg-blue w-full rounded-md text-high-emphesis hover:bg-opacity-80 disabled:bg-opacity-80',
  pink: 'font-bold bg-gradient-to-r from-pink to-opaque-pink w-full rounded-md text-high-emphesis hover:opacity-80 disabled:bg-opacity-80',
  gray: 'font-bold border rounded-md shadow-sm focus:ring-2 focus:ring-offset-2 bg-dark-700 w-full text-primary border-dark-800 hover:bg-opacity-80 focus:ring-offset-dark-700 focus:ring-dark-800 disabled:bg-opacity-80',
  green: 'font-bold bg-green  w-full rounded-md text-high-emphesis hover:bg-opacity-80 disabled:bg-opacity-80',
  gradient:
    'font-bold w-full text-high-emphesis bg-gradient-to-r from-blue to-pink hover:opacity-80 disabled:bg-opacity-80',
}

const OUTLINED = {
  default: 'bg-transparent opacity-80 hover:opacity-100',
  red: 'bg-red bg-opacity-20 outline-red rounded-md text-red hover:bg-opacity-40 disabled:bg-opacity-20',
  blue: 'bg-yellow font-bold bg-linear-swap text-[20px] rounded-md text-white hover:bg-opacity-80 disabled:bg-opacity-80',
  gradientbg:
    'bg-yellow font-bold px-8 bg-linear-swap text-[16px] rounded-md text-white hover:bg-opacity-80 disabled:bg-opacity-80',
  pink: 'bg-pink bg-opacity-20 outline-pink rounded-md text-pink hover:bg-opacity-40 disabled:bg-opacity-20',
  gray: 'bg-dark-700 bg-opacity-20 outline-gray rounded-md text-gray hover:bg-opacity-40 disabled:bg-opacity-20',
  green: 'bg-green bg-opacity-20 border border-green rounded-md text-green hover:bg-opacity-40 disabled:bg-opacity-20',
  gradient:
    'border border-transparent border-gradient-r-blue-pink-dark-900 opacity-80 hover:opacity-100 disabled:bg-opacity-20',
}

const EMPTY = {
  default:
    'flex bg-transparent justify-center items-center disabled:opacity-50 disabled:cursor-auto bg-opacity-80 hover:bg-opacity-100',
}

const LINK = {
  default: 'text-primary hover:text-high-emphesis focus:text-high-emphesis whitespace-nowrap focus:ring-0',
  blue: 'text-blue text-opacity-80 hover:text-opacity-100 focus:text-opacity-100 whitespace-nowrap focus:ring-0',
}

const VARIANT = {
  outlined: OUTLINED,
  filled: FILLED,
  empty: EMPTY,
  link: LINK,
}

export type ButtonColor = 'blue' | 'pink' | 'gradient' | 'gray' | 'default' | 'red' | 'green' | 'gradientbg'

export type ButtonSize = 'xs' | 'sm' | 'lg' | 'default' | 'none'

export type ButtonVariant = 'outlined' | 'filled' | 'empty' | 'link'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor
  size?: ButtonSize
  variant?: ButtonVariant
  ref?: React.Ref<HTMLButtonElement>
}

function Button({
  children,
  className = undefined,
  color = 'default',
  size = 'default',
  variant = 'filled',
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <button
      className={classNames(
        VARIANT[variant][color],
        variant !== 'empty' && SIZE[size],
        'rounded-md disabled:cursor-not-allowed focus:outline-none',
        // 'rounded focus:outline-none focus:ring disabled:opacity-50 disabled:cursor-not-allowed font-medium',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button

export function ButtonConfirmed({
  confirmed,
  disabled,
  ...rest
}: { confirmed?: boolean; disabled?: boolean } & ButtonProps) {
  if (confirmed) {
    return (
      <Button
        variant="outlined"
        color="green"
        size="lg"
        className={classNames(disabled && 'cursor-not-allowed', 'border opacity-50')}
        disabled={disabled}
        {...rest}
      />
    )
  } else {
    return <Button color={disabled ? 'gray' : 'gradient'} size="lg" disabled={disabled} {...rest} />
  }
}

export function ButtonError({
  error,
  disabled,
  ...rest
}: {
  error?: boolean
  disabled?: boolean
} & ButtonProps) {
  if (error) {
    return <Button color="red" size="lg" {...rest} />
  } else {
    return <Button color={disabled ? 'gray' : 'gradient'} disabled={disabled} size="lg" {...rest} />
  }
}
