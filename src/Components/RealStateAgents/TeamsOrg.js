import React from 'react'
import AgentProps from '../Props/AgentProps'

const TeamsOrg = () => {

  const Lists = [
    {
      Img: '/RealEstateGallery/A-Gent1.jpg',
      Name: 'Sahil Bohora',
      PhNum: '98-0000000',
      Role: 'Founder and CEO OF RealEstate'
    },
    {
      Name: 'Achyut Adhikari',
      Img: '/RealEstateGallery/imagess.jpg',
      PhNum: '90-00000000',
      Role: 'Agent and Co-worker OF RealEstate'

    },
    {
      Name: 'Aayush Aryal',
      Img: '/RealEstateGallery/images.jpg',
      PhNum: '90-00000000',
      Role: 'Agent OF RealEstate'

    },

    {
      Name: 'Mama Subedi',
      Img: '/RealEstateGallery/imagesss.jpg',
      PhNum: '90-00000000',
      Role: 'Agent'

    },
  ]


  return (
    <div className='pt-14' style={{ paddingInline: '8%' }}>
      <div className='flex text-center gap-6 justify-center md:grid-cols-2 mdLgrid flex-wrap md:justify-between'>
        {
          Lists.map((items) => {
            return (
              <div>
                <AgentProps items={items} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default TeamsOrg
