"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const CardContainer = ({ children, className }) => {
    return (
        <div
            className={cn(
                "perspective-[1000px] group relative flex items-center justify-center",
                className
            )}
        >
            {children}
        </div>
    );
};

export const CardBody = ({ children, className }) => {
    return (
        <motion.div
            initial={{ rotateX: 0, rotateY: 0 }}
            whileHover={{ rotateX: -10, rotateY: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={cn("transform-gpu relative transition-all duration-300", className)}
        >
            {children}
        </motion.div>
    );
};

export const CardItem = ({
    children,
    className,
    translateZ = 0,
    as: Tag = "div",
    ...props
}) => {
    return (
        <motion.div
            style={{ transform: `translateZ(${translateZ}px)` }}
            className={cn("transition-transform duration-300", className)}
            {...props}
        >
            <Tag>{children}</Tag>
        </motion.div>
    );
};
