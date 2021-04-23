import * as React from "react";
import { motion } from "framer-motion";

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

const colors = ['#FF008C', "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
const items = ['menu 1','menu 2','menu 3','menu 4', 'menu 5', ]

export const MenuItem = ({ i }) => {
    const style = { border: `2px solid ${colors[i]}` };
    const menu = items[i]
    return (
        <motion.li
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className="icon-placeholder" style={style} />
            <div className="text-placeholder" style={style} children={menu}>
            </div>
        </motion.li>
    );
};
