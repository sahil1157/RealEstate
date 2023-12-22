import React, { useEffect, useState } from 'react'
import Address from '../Address/Address'
import YtLink from '../Contacts/YtLink'
import PropSlider from '../PropertySlider/PropSlider'
import Comp1 from '../../MyWishList/Comp1'
import { useParams } from 'react-router-dom'
import { dataAarray } from '../../Components/Popular/Datas'
import Featured from '../../Components/Featured/Featured'

const Header2 = () => {

  let { itemName } = useParams();
  const dataItems = dataAarray.find(p => p.id === Number(itemName))

  const dataFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')

  const [cart, setCart] = useState(dataFromLocalStorage)

  const handleClicked = () => {
    const exists = cart.find((x) => x.id === dataItems.id)
    if (exists) {
      const removeItems = cart.filter(x => x.id !== dataItems.id)
      setCart(removeItems)
    }
    else {
      setCart([...cart, dataItems])
    }

  }

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])


  const handleDelete = (id) => {
    const removeItems = cart.filter((i) => i.id !== id)
    setCart(removeItems)
  }

  const [show, setShow] = useState(true)

  const [isActive, setIsActive] = useState(false)


  const Toggle = () => {
    setIsActive(!isActive)
  }


  return (

    <>
      {
        show ? (
          <div>
            <PropSlider handleClicked={handleClicked} dataItems={dataItems} cart={cart} setShow={setShow} isActive={isActive} ChangeToggle={Toggle} />
            <Address />
            <YtLink />
            {/* <div style={{ paddingInline: '8%' }}>
              <PopularProps {...featured} />
            </div> */}
            {/* <Buildings /> */}
            <Featured />
          </div>
        ) : <Comp1 cart={cart} handleDelete={handleDelete} setShow={setShow} />
      }
    </>
  )
}

export default Header2
