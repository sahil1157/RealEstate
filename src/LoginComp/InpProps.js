import React from 'react'
import JoinUs from './JoinUs'

const InpProps = () => {

    const inputMap =
    {
        firstText: 'Want To Join Our Community?',
        secondText: 'Simple! just fill the details and verify your identity.',
        thirdText: "Join us to get best loans, sell, buy and advertise your property.."

    }
    return (
        <>
            <JoinUs {...inputMap} />
        </>
    )
}

export default InpProps



