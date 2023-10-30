import React from 'react'
import JoinUs from '../LoginComp/JoinUs'

const AdLeft = () => {

    const Adlogin = {
        name:'Form'
    }
   const AdleftProps = {
    firstText : 'Want To Sell Your Property?',
    secondText:'Just advertise your property to make it a hot topic Fill the details and leave the rest to our team members',
    thirdText :'(Might cost additional charges!)'

   }
  return (
    <div>
      <JoinUs{...AdleftProps} {...Adlogin}/>
    </div>
  )
}

export default AdLeft
