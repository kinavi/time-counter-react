import React from 'react';
import { IconContext } from 'react-icons';
import {
  FaRegArrowAltCircleLeft,
  FaRegCircle,
  FaPlay,
  FaTimesCircle,
  FaStop,
} from 'react-icons/fa';
import { RiErrorWarningLine } from 'react-icons/ri';
import {
  CgProfile, CgMail, CgLock, CgClose,
} from 'react-icons/cg';

const IconWithContext = (Icon: JSX.Element): JSX.Element => (
  <IconContext.Provider value={{ style: { width: '20px', height: '20px' } }}>
    {Icon}
  </IconContext.Provider>
);

const plus = () => (
  <svg className="icon" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.6607 6.16071H9.10714C8.95922 6.16071 8.83929 6.04078 8.83929 5.89286V1.33929C8.83929 0.59967 8.23962 0 7.5 0C6.76038 0 6.16071 0.59967 6.16071 1.33929V5.89286C6.16071 6.04078 6.04078 6.16071 5.89286 6.16071H1.33929C0.59967 6.16071 0 6.76038 0 7.5C0 8.23962 0.59967 8.83929 1.33929 8.83929H5.89286C6.04078 8.83929 6.16071 8.95922 6.16071 9.10714V13.6607C6.16071 14.4003 6.76038 15 7.5 15C8.23962 15 8.83929 14.4003 8.83929 13.6607V9.10714C8.83929 8.95922 8.95922 8.83929 9.10714 8.83929H13.6607C14.4003 8.83929 15 8.23962 15 7.5C15 6.76038 14.4003 6.16071 13.6607 6.16071Z" fill="black" />
  </svg>
);

export const Icons = {
  arrowCircleLeft: IconWithContext(<FaRegArrowAltCircleLeft />),
  circle: IconWithContext(<FaRegCircle />),
  play: IconWithContext(<FaPlay />),
  timesCircle: IconWithContext(<FaTimesCircle />),
  stop: IconWithContext(<FaStop />),
  profile: IconWithContext(<CgProfile />),
  mail: IconWithContext(<CgMail />),
  password: IconWithContext(<CgLock />),
  close: IconWithContext(<CgClose />),
  warning: IconWithContext(<RiErrorWarningLine />),
  plus: plus(),
};