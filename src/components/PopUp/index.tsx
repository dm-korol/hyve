import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ITheme } from '../../theme';
import Modal from '@material-ui/core/Modal';
import { getModalStyle } from '../../helpers';
import { PrimaryButton, SecondaryButton } from '../index';
import { Color } from '../SecondaryButton';
import { Size } from '../PrimaryButton';

const useStyles = makeStyles((theme: ITheme) => ({
  root: {
    position: 'absolute',
    width: 400,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  inform: {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.default,
  },
  confirm: {
    color: 'white',
    backgroundColor: '#4e505e',
  },
  empty: {},
  closeModal: {
    position: 'absolute',
    top: '2px',
    right: '10px',
    cursor: 'pointer',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
    '& > svg': {
      marginTop: '10px',
    },
  },
  text: {
    textAlign: 'center',
    padding: '3px',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  informButtons: {
    flexDirection: 'column',
  },
  confirmButtons: {
    flexDirection: 'row',
  },
  emptyButtons: {
    flexDirection: 'column',
  },
}));

export enum Type {
  inform,
  confirm,
  empty,
}

interface Props {
  type: Type;
  isOpen: boolean;
  header?: React.ReactChild;
  text?: string;
  children?: React.ReactChild;
  handleClose: () => void;
}

export const PopUp = ({ type, isOpen, header, text, children, handleClose }: Props) => {
  const classes = useStyles();

  const [modalStyle] = useState(getModalStyle);

  const className = {
    [Type.inform]: classes.inform,
    [Type.confirm]: classes.confirm,
    [Type.empty]: classes.empty,
  };

  const btnClass = {
    [Type.inform]: classes.informButtons,
    [Type.confirm]: classes.confirmButtons,
    [Type.empty]: classes.emptyButtons,
  };

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <div style={modalStyle} className={`${classes.root} ${className[type]}`}>
        {type === Type.confirm && (
          <div className={classes.closeModal} onClick={handleClose}>
            x
          </div>
        )}
        <div className={classes.header}>{header && type === Type.inform && header}</div>
        {type !== Type.empty && <p className={classes.text}>{text}</p>}
        <div className={`${classes.buttons} ${btnClass[type]}`}>
          {type === Type.confirm || (type === Type.empty && children)}
          {type === Type.inform ? (
            <SecondaryButton size={Size.large} onClick={handleClose} fillColor={Color.blue}>
              {'Ok'}
            </SecondaryButton>
          ) : (
            <SecondaryButton size={Size.large} onClick={handleClose} fillColor={Color.transparent}>
              {'Cancel'}
            </SecondaryButton>
          )}
          {type === Type.inform && children}
        </div>
      </div>
    </Modal>
  );
};
