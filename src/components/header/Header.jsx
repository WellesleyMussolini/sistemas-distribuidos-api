import React from "react";
import styles from "./styles.module.css";
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

const Header = ({show_seach_field, search, handleSearch}) => {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.home}>
                    <HomeIcon onClick={() => navigate("/")} />
                </div>
                {
                    show_seach_field
                    &&
                    <div className={styles.search}>
                        <input
                            type="text"
                            placeholder="digite algo..."
                            onChange={(event) => handleSearch(event.target.value)}
                            value={search}
                        />
                        <SearchIcon />
                    </div>
                }
            </div>
        </div>
    )
};

export default Header;