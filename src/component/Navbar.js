import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const menuList = ['여성','Divided','남성','신생아/유아','아동','H&M HOME','Sale','지속가능성']
  return (
    <div>

      <div>
        <div className='login-button'>
            <FontAwesomeIcon icon={faUser} />
            <div>로그인</div>
        </div>
      </div >
        
      <div className='nav-section'>
        <img width={100}src="img/HnM.png"/>
      </div>

      <div className='menu-area'>
        <ul className='menu-list'>
            {menuList.map((menu)=><li>{menu}</li>)}
        </ul>


        <div className='input-area'>
            <FontAwesomeIcon className='search-icon' icon={faSearch} />
            <input className='inputbox' type="text" placeholder='제품검색'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
