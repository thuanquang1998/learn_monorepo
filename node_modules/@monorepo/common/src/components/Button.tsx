import React from 'react'

type Props = {
    children: React.ReactNode;
    textColor: string;
}

export default function Button(props: Props) {
  return (
    <button style={{'color':props.textColor}}>{props.children}</button>
  )
}