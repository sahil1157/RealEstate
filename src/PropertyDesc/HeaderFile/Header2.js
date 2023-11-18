import React, { useEffect, useState } from 'react'
import Address from '../Address/Address'
import YtLink from '../Contacts/YtLink'
import PropSlider from '../PropertySlider/PropSlider'
import PopularProps from '../../Components/Props/PopularProps'
import Buildings from '../../Components/Popular/Buildings'
import Comp1 from '../../MyWishList/Comp1'
import { useParams } from 'react-router-dom'
import { dataAarray } from '../../Components/Popular/Datas'

const Header2 = () => {
  const featured = {
    naam: "Similar",
    Residences: 'Related Residences',
    Explore: 'Explore All'
  }

  const dataFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')

  const showFromLocalStorage = JSON.parse(localStorage.getItem('show',) || '[]')

  const [cart, setCart] = useState(dataFromLocalStorage)

  const handleClicked = (dataItems) => {
    if (cart.indexOf(dataItems) !== -1) {
      const remove = cart.filter((items) => items.id !== dataItems.id)
      setCart(remove)
    }
    else setCart([...cart, dataItems])
  }

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])


  const handleDelete = (id) => {
    const removeItems = cart.filter((i) => i.id !== id)
    setCart(removeItems)
  }

  const [show, setShow] = useState(showFromLocalStorage)
  useEffect(() => {
    window.localStorage.setItem('click', JSON.stringify(show))
  }, [show])

  const [isActive, setIsActive] = useState(false)

  const Toggle = () => {
    setIsActive(!isActive)
  }


  let { itemName } = useParams();

  const dataItems = dataAarray.find((p) => p.id === Number(itemName))



  return (

    <>
      {
        show ? (
          <div>
            <PropSlider handleClicked={handleClicked} dataItems={dataItems} cart={cart} setShow={setShow} isActive={isActive} ChangeToggle={Toggle} />
            <Address />
            <YtLink />
            <div style={{ paddingInline: '8%' }}>
              <PopularProps {...featured} />
            </div>
            <Buildings />
          </div>
        ) : <Comp1 cart={cart} handleDelete={handleDelete} setShow={setShow} />
      }


    </>

  )
}

export default Header2
