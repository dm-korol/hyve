import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import { ITheme } from '../../theme';
import { DropZone, LayoutAdmin, PageHeader, SecondaryButton } from '../../components';
import { StatusPlate } from '../../components/StatusPlate';
import { Color } from '../../components/SecondaryButton';
import { useSelector } from 'react-redux';
import { getProjectState } from '../../store/projectDetails';
import { Size } from '../../components/PrimaryButton';

const useStyles = makeStyles((theme: ITheme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  details: {
    maxHeight: '370px',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  detail: {
    margin: '20px 5px',
    '& > b': {
      display: 'inline-block',
      minWidth: '100px',
      marginRight: '35px',
    },
  },
}));

export const ProjectDetails = () => {
  const classes = useStyles();
  const router = useRouter();
  const { projectId } = router.query;
  const details = useSelector(getProjectState);

  return (
    <LayoutAdmin>
      <>
        <div className={classes.header}>
          <PageHeader header={'Project details'} />
          <StatusPlate status={details.status} />
          <SecondaryButton
            size={Size.large}
            fillColor={details.status === 'new' ? Color.blue : Color.transparent}
            onClick={() => router.push(`/dashboard/projects/${projectId}/initialize`)}>
            {details.status === 'new' ? 'Initialize Project' : <u>edit</u>}
          </SecondaryButton>
        </div>
        <DropZone />
        <div className={classes.details}>
          {Object.keys(details).map((key) => {
            if (key !== 'status') {
              return (
                <span className={classes.detail} key={key}>
                  <b>{key}</b>
                  {details[key].length > 0 ? details[key] : 'No set'}
                </span>
              );
            }
          })}
        </div>
      </>
    </LayoutAdmin>
  );
};
