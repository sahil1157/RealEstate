import React from 'react'
import PopularProps from '../../Components/Props/PopularProps'
import OurTeams from '../../Components/RealStateAgents/OurTeam'
import Teams from '../../Components/RealStateAgents/TeamsOrg'

const AboutTeam = () => {
    const featured = {
        naam :'Our Team',
        Residences:'Our Real Estate Agents'
    }
  return (
    <div>
     <OurTeams/>
     <Teams/>
    </div>
  )
}

export default AboutTeam
