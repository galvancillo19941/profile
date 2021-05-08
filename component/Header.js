import {useEffect, useRef} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { motion, useCycle } from "framer-motion";
import {MenuToggle} from "./MenuToogle";
import {Navigation} from "./Navigation";
import Scrollspy from "react-scrollspy";
import useScrollPosition from "@react-hook/window-scroll";

import {HeaderItems} from '../redux/reducers/header/actions'

export const useDimensions = ref => {
    const dimensions = useRef({ width: 0, height: 0 });

    useEffect(() => {
        dimensions.current.width = ref.current.offsetWidth;
        dimensions.current.height = ref.current.offsetHeight;
    }, []);

    return dimensions.current;
};

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

export default function Header() {

    const headerItem = useSelector((state) => state.get('headerItems').get('headerDataReducer'))

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(HeaderItems())
    },[])

    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
    const scrollY = useScrollPosition(60 /*frames per second*/);

    return (
        <div>
            <div className={` Header d-none d-lg-block ${scrollY > 30 ? 'header-scroll' : 'header-not-scroll'}`}>
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center container--items">
                        <div>
                            {
                                scrollY > 30 ? <img src="/static/asset/img/LogoBlack.png" alt="" style={{ height: '45px'}}/> :
                                    <img src="/static/asset/img/Logo.png" alt="" style={{ height: '45px'}}/>
                            }
                        </div>
                        <div className="items">
                            <Scrollspy
                                offset={-200}
                                items={["section1", "section2", "section3"]}
                                currentClassName="is-current"
                            >
                                {headerItem && headerItem.map((item) =>
                                       <li key={item.id}>
                                           <a href={`#${item.section}`}>{item.name}</a>
                                       </li>
                                )}
                            </Scrollspy>
                        </div>
                    </div>
                </div>
            </div>

            {/*MOVIL*/}

           <div className="Header_responsive d-block d-lg-none">
               <div>
                   <motion.nav
                       initial={false}
                       animate={isOpen ? "open" : "closed"}
                       custom={height}
                       ref={containerRef}
                   >
                       <motion.div className="background" variants={sidebar} />
                       <Navigation/>
                       <MenuToggle toggle={() => toggleOpen()}/>
                   </motion.nav>
               </div>
               <img src="/static/asset/img/LogoBlack.png" alt="" className="Logo"/>
           </div>
        </div>
    )
}

