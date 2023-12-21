import React, { useState } from 'react'
import PopularProps from '../Props/PopularProps'
import Buildings from '../Popular/Buildings'
import LoadMore from './LoadMore'
import { dataAarray } from '../Popular/Datas'
import ShowLess from './ShowLess'


const Featured = () => {
  const Featured = {
    naam: "Featured",
    Residences: 'Featured Residences',
    Explore: 'Explore All',
  }


  const [load, setLoad] = useState(4)

  const loadMore = () => {
    setLoad(prev => prev + 4)
  }
  const showLess = () => {
    setLoad(prev => prev - load + 4)
  }

  return (
    <div className=''>
      <div style={{ paddingInline: '8%' }}>
        <PopularProps {...Featured} showLess={showLess} load={load} dataAarray={dataAarray} loadMore={loadMore} />
      </div>
      <Buildings load={load} />
      {
        load && load < dataAarray.length ? <LoadMore setLoad={loadMore} /> : <ShowLess setLoad={showLess} />
      }
    </div>
  )
}

export default Featured
