import React from "react";
import styles from "./styles.module.css";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PageSwitcher = ({ HandleCurrentPage, Pages, TotalPages }) => {
    return (
        <div className={styles.container}>
            <Stack spacing={2} className={styles.wrapper}>
                <Pagination
                    count={TotalPages}
                    color="primary"
                    page={Pages}
                    onChange={HandleCurrentPage}
                />
            </Stack>
        </div>
    )
};

export default PageSwitcher;