import { motion, useCycle } from "framer-motion";
import { useEffect, useRef } from "react";
import {MenuToggle} from "./MenuToogle";
import {Navigation} from "./Navigation";
import Scrollspy from "react-scrollspy";
import useScrollPosition from "@react-hook/window-scroll";

// export const useDimensions = ref => {
//     const dimensions = useRef({ width: 0, height: 0 });
//
//     useEffect(() => {
//         dimensions.current.width = ref.current.offsetWidth;
//         dimensions.current.height = ref.current.offsetHeight;
//     }, []);
//
//     return dimensions.current;
// };
//
// const sidebar = {
//     open: (height = 1000) => ({
//         clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
//         transition: {
//             type: "spring",
//             stiffness: 20,
//             restDelta: 2
//         }
//     }),
//     closed: {
//         clipPath: "circle(30px at 40px 40px)",
//         transition: {
//             delay: 0.5,
//             type: "spring",
//             stiffness: 400,
//             damping: 40
//         }
//     }
// };

export default function Header() {
    // const [isOpen, toggleOpen] = useCycle(false, true);
    // const containerRef = useRef(null);
    // const { height } = useDimensions(containerRef);
    const scrollY = useScrollPosition(60 /*frames per second*/);

    console.log(scrollY)

    return (
        <div className={` Header ${scrollY > 30 ? 'header-scroll' : 'header-not-scroll'}`}>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center container--items">
                    <div>
                        {/*<div className="text-white">scrollY: {scrollY}</div>*/}
                        <span className="Logo" style={{ fontSize: '28px'}}>Logo</span>
                    </div>
                    <div className="items">
                        <Scrollspy
                            offset={-200}
                            items={["section1", "section2", "section3"]}
                            currentClassName="is-current"
                        >
                            <li>
                                <a href="#section1">section 1</a>
                            </li>
                            <li>
                                <a href="#section2">section 2</a>
                            </li>
                            <li>
                                <a href="#section3">section 3</a>
                            </li>
                        </Scrollspy>
                    </div>
                </div>
            </div>

            {/*<motion.nav*/}
            {/*    initial={false}*/}
            {/*    animate={isOpen ? "open" : "closed"}*/}
            {/*    custom={height}*/}
            {/*    ref={containerRef}*/}
            {/*>*/}
            {/*    <motion.div className="background" variants={sidebar} />*/}
            {/*    <Navigation/>*/}
            {/*    <MenuToggle toggle={() => toggleOpen()}/>*/}
            {/*</motion.nav>*/}
        </div>
    )
}

