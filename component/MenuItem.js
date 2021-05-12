import React, {useState} from "react";
import { motion } from "framer-motion";
import Scrollspy from "react-scrollspy";
import dataItems from "../APIDATA/headerItems";

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

export const MenuItem = ({items, toggle}) => {
    return (
        <div className="items items-header-responsive">
                <Scrollspy
                    offset={-200}
                    items={["section1", "section2", "section3"]}
                    currentClassName="is-current"
                >
                    {
                        items.map((item, key) =>
                            <motion.li
                                onClick={toggle}
                                key={key}
                                variants={variants}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <a href={`#${item.section}`} children={item.name}>
                                </a>
                            </motion.li>
                        )
                    }

                </Scrollspy>
        </div>

    );
};
