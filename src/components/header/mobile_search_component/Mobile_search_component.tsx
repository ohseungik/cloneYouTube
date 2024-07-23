import { useEffect, useRef } from 'react';
import styles from './Mobile_search_component.module.scss';
import searchImg from "../../../assets/search.png";

const MobileSearchComponent = ({ onSearch, setState }: any) => {
    const formRef: any = useRef();
    const inputRef: any = useRef();

    const onSubmit = (event: any) => {
        event.preventDefault();
        const input = inputRef.current.value;
        input && onSearch(input);
        formRef.current.reset();
    }

    const viewChange = (event: any) => {
        !event.matches && setState(false);
    }

    useEffect(() => {
        const mediaQuery = window.matchMedia("screen and (max-width:650px)");
        mediaQuery.addEventListener('change', viewChange);
        return () => {
            mediaQuery.removeEventListener('change', viewChange);
        }

    }, [])

    return (
        <div className={styles.header}>
            <button className={styles.btn} onClick={() => setState(false)}>
                <i className="fas fa-arrow-left"></i>
            </button>
            <form ref={formRef} className={styles.search} onSubmit={onSubmit}>
                <input
                    ref={inputRef}
                    placeholder='검색'
                    type="text"
                    className={styles.searchInput}
                    autoFocus
                />
                <button className={styles.searchIconBtn} >
                    <img className={styles.searchIcon} src={searchImg} alt="search icon" />
                </button>
            </form>
            <button className={styles.btn}><i className="fas fa-microphone"></i></button>
        </div>

    );

};

export default MobileSearchComponent