import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import PublishIcon from '@material-ui/icons/Publish';
import { makeStyles } from '@material-ui/core/styles';
import { ITheme } from '../../theme';

const useStyles = makeStyles((theme: ITheme) => ({
  root: {
    background: 'grey',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10px auto',
    width: '250px',
    height: '150px',
  },
  button: {
    cursor: 'pointer',
    userSelect: 'none',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export const DropZone = () => {
  const classes = useStyles();

  const [file, setFile] = useState('');

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0].path);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const UploadButton = () => (
    <div className={classes.button}>
      <PublishIcon />
      Upload
    </div>
  );

  return (
    <div className={classes.root} {...getRootProps()}>
      <input {...getInputProps()} />
      <>
        {file && file}
        <UploadButton />
      </>
    </div>
  );
};
