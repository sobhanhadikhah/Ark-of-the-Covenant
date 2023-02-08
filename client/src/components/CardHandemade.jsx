import React, { useState, useRef } from 'react'
import "../styles/cardStyle.css";
import nikeshoes from "../assets/Nike-Shoe.png";
function CardHandemade() {
    const [xRotation, setXRotation] = useState(0);
    const [yRotation, setYRotation] = useState(0);
    const cardRef = useRef(null);
    const imgRef = useRef(null);
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const sizesboxRef = useRef(null);
    const purchaseRef = useRef(null);

    function handleMouseMove(event) {
        const card = cardRef.current;
        const { offsetWidth: width, offsetHeight: height } = card;
        const { clientX, clientY } = event;
        const x = clientX - card.offsetLeft - width / 2;
        const y = clientY - card.offsetTop - height / 2;
        var mult = 40;
        setXRotation((y / height) * mult);
        setYRotation((x / width) * mult);
    }
    function handleMouseEnter() {
        const img = imgRef.current;
        const title = titleRef.current;
        const sizesBox = sizesboxRef.current;
        const purchase = purchaseRef.current;
        const desc = descRef.current
        title.style.transform = "translateZ(150px)";
        img.style.transform = "translateZ(100px) rotateZ(-45deg)";
        sizesBox.style.transform = "translateZ(100px)";
        purchase.style.transform = "translateZ(75px)";
        desc.style.transform = "translateZ(75px)";
    }
    function handleMouseLeave() {
        setXRotation(0);
        setYRotation(0);

        const img = imgRef.current;
        const title = titleRef.current;
        const sizesBox = sizesboxRef.current;
        const purchase = purchaseRef.current;
        title.style.transform = "translateZ(0px)";
        img.style.transform = "translateZ(0px) rotateZ(0deg)";
        sizesBox.style.transform = "translateZ(0px)";
        purchase.style.transform = "translateZ(0px)";
    }
    return (
        <div
            className=" mx-3 bg-orange-300 "
            ref={cardRef}
            style={{
                transform: `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`,
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img
                ref={imgRef}
                src={nikeshoes}
                alt="Nike-Shoe"
                className=""
            />
            <h1 className="" ref={titleRef}>
                Nike Dunk High
            </h1>
            <p ref={descRef}>
                Nike Dunk High is a high-top version of the classic Nike Dunk sneaker,
                featuring a padded collar for added support and comfort.
            </p>

            <div className="" ref={purchaseRef}>
                <button className=" w-full bg-blue-500 rounded-md " >
                    Purchase
                </button>
            </div>
        </div>
    )
}

export default CardHandemade