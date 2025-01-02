import React from 'react'

const Description = ({text, myClass}) => {
    return (
        // <div>
            <p className={`text-center mx-auto max-w-[500px] py-10 ${myClass}`}>{text}</p>
        // </div>
    )
}

export default Description
