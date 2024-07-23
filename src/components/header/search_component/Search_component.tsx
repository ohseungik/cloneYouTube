import React, { useRef } from "react";
import styles from "./Search_component.module.scss";
import { Link } from "react-router-dom";
import logoImg from "../../../assets/logo.png";
import searchImg from "../../../assets/search.png";

interface SearchComponentProps {
    onSearch: (query: string) => void;
    onLogoClick: () => void;
    mobile: boolean;
    setMobileSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ onSearch, onLogoClick, mobile, setMobileSearch }: any) => {
    const formRef: any = useRef();
    const inputRef: any = useRef();

    const onSubmit = (event: any) => {
        event.preventDefault();
        const input = inputRef.current.value;
        input && onSearch(input);
        inputRef.current.value = '';
    }

    return (
        <div className={styles.header}>
            <div className={styles.start}>
                <button className={styles.menuBtn}>
                    <i className="fas fa-bars"></i>
                </button>
                <Link to='/'>
                    <div className={styles.logo} onClick={onLogoClick}>
                        <img className={styles.logoImage} src={logoImg} alt="logo" />
                        <h4 className={styles.logoTitle}>Youtube</h4>
                    </div>
                </Link>
            </div>
            {mobile ? (
                <></>
            ) : (
                <div className={styles.center}>
                    <form ref={formRef} className={styles.search} onSubmit={onSubmit}>
                        <input
                            ref={inputRef}
                            placeholder='검색'
                            type="text"
                            className={styles.searchInput}
                        />
                        <button className={styles.searchIconBtn} >
                            <img className={styles.searchIcon} src={searchImg} alt="search icon" />
                        </button>
                    </form>
                    <button className={styles.btn}><i className="fas fa-microphone"></i></button>
                </div>
            )}
            <div className={styles.end}>
                {mobile && (<button className={styles.btn} onClick={() => setMobileSearch(true)}>
                    <i className="fas fa-search"></i>
                </button>)}
                <button className={styles.btn}><i className="fas fa-plus-square"></i></button>
                <button className={styles.btn}><i className="fas fa-th"></i></button>
                <button className={styles.btn}><i className="fas fa-bell"></i></button>
            </div>
        </div>
    ) 
}

export default SearchComponent;