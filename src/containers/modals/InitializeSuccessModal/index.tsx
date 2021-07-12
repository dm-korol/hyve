import { makeStyles } from "@material-ui/core";
import React from "react"
import { PopUp, Type } from '../../../components/PopUp';

interface InitializeSuccessModalProps {
    handleClose: () => void;
    isOpen: boolean;
};

const useStyles = makeStyles({
    linkBtn: {
        textDecoration: 'underline',
        cursor: 'pointer',
    },
})

export const InitializeSuccessModal: React.FC<InitializeSuccessModalProps> = ({
    handleClose, isOpen
}) => {
    const classes = useStyles();
    return (
        <PopUp
        handleClose={handleClose}
        isOpen={isOpen}
        type={Type.inform}
        text="The project has been successfully created and published">
        <div className={classes.linkBtn}>View</div>
        </PopUp>
    )
}