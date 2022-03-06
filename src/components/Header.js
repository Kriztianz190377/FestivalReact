import React, { useCallback, useEffect,  useState } from 'react'

export const Header = () => {

    const [addClassFixed, setaddClassFixed] = useState("header");
    function sectionScroll(e) {
        e.preventDefault();
        const scrollHref = e.target.attributes.href.value;
        const scrollSection = document.querySelector(scrollHref);
        scrollSection.scrollIntoView({ behavior: "smooth" });
    };

    const [scrolly, setScrollY] = useState(window.scrollY);
    console.log(scrolly);

    const handleNavigation = useCallback(
        e => {
            const window = e.currentTarget;

            if (window.scrollY<713){
                console.log("aun no");
                setaddClassFixed("header")                
            } else {
                console.log("ya esta fijo");
                setaddClassFixed("header fixed")
            }            
            setScrollY(window.scrollY);
        }, []
    );
    useEffect(() => {
        setScrollY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);
        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);




    return (
        <header className={addClassFixed}
        // ref={inputRef}
        >
            <div className="container content-header">
                <h1>Rock & EDM Festival</h1>

                <nav className="main-navigation">
                    <a onClick={sectionScroll} href="#lineup">Line Up</a>
                    <a onClick={sectionScroll} href="#gallery">Gallery</a>
                    <a onClick={sectionScroll} href="#tickets">Tickets</a>
                </nav>
            </div>
        </header>


    )
}
