"use client";
import React, { useEffect, useRef } from "react";

export const Boxes = ({ className }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const boxes = Array.from({ length: 50 }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            size: 10 + Math.random() * 20,
            speedX: (Math.random() - 0.5) * 0.8,
            speedY: (Math.random() - 0.5) * 0.8,
        }));

        function animate() {
            ctx.clearRect(0, 0, width, height);
            boxes.forEach((box) => {
                box.x += box.speedX;
                box.y += box.speedY;

                if (box.x < 0 || box.x > width) box.speedX *= -1;
                if (box.y < 0 || box.y > height) box.speedY *= -1;

                ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
                ctx.fillRect(box.x, box.y, box.size, box.size);
            });

            requestAnimationFrame(animate);
        }

        animate();

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className={`absolute inset-0 -z-10 ${className || ""}`}
        />
    );
};
