import React, {useState} from "react";
import { motion } from "framer-motion";
import Scrollspy from "react-scrollspy";

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

export const MenuItem = () => {
    const [menus, setMenu] = useState([
        {
            id: 0,
            menu: 'Inicio',
            section: '#section1'
        },
        {
            id: 1,
            menu: 'Acerca de',
            section: '#section2'
        },
        {
            id: 2,
            menu: 'Servicios',
            section: '#section3'
        }
    ])
    return (
        <div className="items items-header-responsive">
                <Scrollspy
                    offset={-200}
                    items={["section1", "section2", "section3"]}
                    currentClassName="is-current"
                >
                    {
                        menus.map((item, key) =>
                            <motion.li
                                key={key}
                                variants={variants}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <a href={item.section} children={item.menu}>
                                </a>
                            </motion.li>
                        )
                    }

                </Scrollspy>
        </div>

    );
};
