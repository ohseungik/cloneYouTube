import { useEffect, useState } from 'react';
import SearchComponent from './search_component/Search_component.tsx';
import MobileSearchComponent from './mobile_search_component/Mobile_search_component.tsx';

const Header = ({ onSearch, onLogoClick } : any) => {
    const [mobile, setMobile] = useState(window.innerWidth < 650 ? true : false);
    const [mobileSearch, setMobileSearch] = useState(false);

    const viewChange = (event: any) => {
        const matches = event.matches;
        setMobile(matches);
    }

    const setState = (state: any) => {
        setMobileSearch(state);
    }

    useEffect(() => {
        const mediaQuery = window.matchMedia("screen and (max-width:650px)");
        mediaQuery.addEventListener('change', viewChange);
        return () => {
            mediaQuery.removeEventListener('change', viewChange);
        }
    }, [])

    return (
        <>
            {mobileSearch ?
            (
                <MobileSearchComponent
                    onSearch={onSearch}
                    setState={setState}
                />
            ) : (
                <SearchComponent
                    onSearch={onSearch}
                    onLogoClick={onLogoClick}
                    mobile={mobile}
                    setMobileSearch={setMobileSearch}
                />
            )}
        </>
    )

}

export default Header;