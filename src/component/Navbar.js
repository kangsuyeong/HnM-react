import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Navbar = ({authenticate,setAuthenticate}) => {
    const [width,setWidth] = useState(0)
    const [query,setQuery] = useState('')
    const menuList = ['여성','Divided','남성','신생아/유아','아동','H&M HOME','Sale','지속가능성']
    const navigate = useNavigate()
    
    const goToLogin = ()=>{
      if(authenticate===false){
        navigate('/login')
      }
      else{
        setAuthenticate(false)
      }
    }

    const search = (event)=>{
      if(event.key==="Enter"){
        //입력한 검색어를 일거와서
        let keyword = event.target.value
        // url을 바꿔준다.
        navigate(`/?q=${keyword}`)
      }
    }

    const searchClick = ()=>{
        // url을 바꿔준다.
        navigate(`/?q=${query}`)
    }
    

    const goToHome = ()=>{
      setQuery('')
      navigate('/')
    }

    const openNav = ()=>{
      setWidth(250)
    }
    const closeNav = ()=>{
      setWidth(0)
    }

    const saveQuery = (event)=>{
      setQuery(event.target.value)
    }
  return (
    <div>
      {/* sidemenu */}
      <div className="side-menu" style={{width:width}}>
        <button className="closebtn" onClick={closeNav}>&times;</button>
        <div className="side-menu-list" id="menu-list">
          {menuList.map((menu)=>(
            <button>{menu}</button>
          ))}
        </div>
      </div>
      {/* 첫번째 줄 */}
      <div className='side-login-area'>
        <div className='side-menu-icon'>
        <FontAwesomeIcon icon={faBars} size="xl" onClick={openNav}/>
        </div>

        <div className='login-button'>
            <FontAwesomeIcon icon={faUser} />
            <div onClick={goToLogin}>{authenticate?"로그아웃":"로그인"}</div>
        </div>
      </div >
        
      <div className='nav-section'>
        <img alt="" width={100}src="img/HnM.png" onClick={goToHome} style={{cursor:"pointer"}}/>
      </div>

  {/* 세번째 줄 */}
      <div className='menu-area'>
        <ul className='menu-list'>
            {menuList.map((menu)=><li>{menu}</li>)}
        </ul>


        <div className='input-area'>
            <FontAwesomeIcon className='search-icon' icon={faSearch} onClick={searchClick}/>
            <input className='inputbox' value={query} type="text" placeholder='제품검색' onKeyDown={(event)=>search(event)} onChange={saveQuery}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
