import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ITheme } from '../../theme';
import { useSelector } from 'react-redux';
import { getProjectState } from '../../store/projectDetails';

const useStyles = makeStyles((theme: ITheme) => ({
  root: {
    margin: '40px',
    borderRadius: '20px',
    background: theme.palette.text.primary,
    color: theme.palette.background.default,
    width: '350px',
    padding: '15px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    margin: '10px auto',
    ...theme.typography.hr4,
  },
  detail: {
    margin: '30px auto 0',
    textAlign: 'center',
    ...theme.typography.overlineL,
    '& > div': {
      marginTop: '5px',
      color: theme.palette.blue[600],
    },
  },
  endDate: {
    margin: '100px auto 20px',
  },
}));

export const TokenDetails = () => {
  const classes = useStyles();
  const details = useSelector(getProjectState);

  const [state, setState] = useState({
    salePrice: { name: 'Sale price', value: '' },
    tokensOffered: { name: 'Tokens offered', value: '' },
    userCap: { name: 'Hard cap per user', value: '' },
  });

  useEffect(() => {
    const salePrice = `${details.price} ${details.currency}`;
    const tokensOffered = `${details.offered} TKO`;
    const userCap = `${details.cap} TKO = ${details.cap * details.price} ${details.currency}`;
    setState({
      ...state,
      salePrice: { ...state.salePrice, value: salePrice },
      tokensOffered: { ...state.tokensOffered, value: tokensOffered },
      userCap: { ...state.userCap, value: userCap },
    });
  }, []);

  return (
    <div className={classes.root}>
      <h4 className={classes.header}>Name Project</h4>
      {details.name}
      {Object.entries(state).map((detail) => {
        return (
          <div className={classes.detail} key={detail[1].name}>
            <b>{detail[1].name}</b>
            <div>{detail[1].value}</div>
          </div>
        );
      })}
      <div className={classes.endDate}>
        Session end date: <b>{details.dateEnd}</b>
      </div>
    </div>
  );
};
