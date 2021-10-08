import * as React from 'react';
import { HoverPopper, HoverPopperProps } from '../HoverPopper/HoverPopper';
import { ClickPopper, ClickPopperProps } from '../ClickPopper/ClickPopper';
import { getClassName } from '../../helpers/getClassName';
import { usePlatform } from '../../hooks/usePlatform';
import './Dropdown.css';

export interface DropdownProps extends Omit<HoverPopperProps, 'arrow'>, Omit<ClickPopperProps, 'arrow'> {
  action?: 'click' | 'hover';
}

export const Dropdown: React.FC<DropdownProps> = ({ action = 'click', ...popperProps }: DropdownProps) => {
  const platform = usePlatform();

  let Component;

  switch (action) {
    case 'click':
      Component = ClickPopper;
      break;
    case 'hover':
      Component = HoverPopper;
      break;
  }

  return <Component vkuiClass={getClassName('Dropdown', platform)} {...popperProps} />;
};
