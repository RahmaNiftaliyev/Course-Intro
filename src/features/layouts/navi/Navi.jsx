import React from 'react';
import styles from './navi.module.css';
import {FaBars} from "react-icons/fa";
import {Collapse, IconButton, useDisclosure} from "@chakra-ui/react";

const DesktopNavi = () => {
    return (
        <div className={styles.navRight}>
            <ul className={styles.navList}>
                <li><a rel={"tag"} href={"#header"}>Ana shifə</a></li>
                <li><a rel={"tag"} href={"#teleblerimiz"}>Tələblər</a></li>
                <li><a rel={"tag"} href={"#dersler"}>Dersler</a></li>
                <li><a rel={"tag"} href={"#questions"}>Suallar</a></li>
            </ul>
            <button className={styles.applyBtn}>Əlaqə</button>
        </div>
    )
}
const MobileNavi = () => {
    const {isOpen:OpenMenu, onToggle:MenuToggle} = useDisclosure();
    return (
        <div className={styles.mobileNaviContainer}>
            <div className={styles.mobileNavi}>
                <IconButton onClick={MenuToggle} colorScheme={"blackAlpha"} icon={<FaBars className={styles.bar}/>}/>
            </div>
           <Collapse in={OpenMenu}>
                   <ul className={styles.collapseMenuList}>
                       <li><a onClick={MenuToggle} rel={"tag"} href={"#header"}>Ana shifə</a></li>
                       <li><a onClick={MenuToggle} rel={"tag"} href={"#teleblerimiz"}>Tələblər</a></li>
                       <li><a onClick={MenuToggle} rel={"tag"} href={"#dersler"}>Dersler</a></li>
                       <li><a onClick={MenuToggle} rel={"tag"} href={"#questions"}>Suallar</a></li>
                   </ul>

           </Collapse>
        </div>
    )
}
const Navi = () => {
    return (
        <div id={"nav"} className={styles.navContainer}>
            <div className={styles.navIconDiv}>
            </div>
            <div></div>
            <DesktopNavi/>
            <MobileNavi/>
        </div>
    );
};

export default Navi;
