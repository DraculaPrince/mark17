import classNames from 'classnames'
import React, { FC } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'

const classPrefix = `adm-dropdown-item`

export type DropdownItemProps = {
  key: string
  title: React.ReactNode
  active?: boolean
  highlight?: boolean
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
} & NativeProps

const Item: FC<DropdownItemProps> = props => {
  const cls = classNames(classPrefix, {
    [`${classPrefix}-active`]: props.active,
    [`${classPrefix}-highlight`]: props.highlight,
  })

  return withNativeProps(
    props,
    <div className={cls} onClick={props.onClick}>
      <div className={`${classPrefix}-title`}>
        <span>{props.title}</span>
      </div>
    </div>
  )
}

export default Item
