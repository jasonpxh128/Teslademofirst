import React from 'react'
import Button from './Button.js'
import './Items.css'

const items = ({title, desc, desclink, backgroundImg,leftbtnTxt, leftbtnLink, rightbtnTxt, rightbtnLink, twoButtons}) => {
    return (
      <div className="item" style={{
          backgroundImage : `url(${backgroundImg})`
      }}>
          <div className="item__container">
              <div className= "item__text">
                  <p>{title}</p>
                  <div className="item__textDesc">
                      <p>{desc}</p>
                  </div>
              </div>
              <div className="item__lowerThird">
                  <div className="item__buttons">
                  <Button imp = 'primary' text = {leftbtnTxt} link = {leftbtnLink}/> 
                  { twoButtons && ( 
                      <Button imp = 'secondary' text = {rightbtnTxt} link = {rightbtnLink}/>
                  )}   

                </div>

              </div>
          </div>
          
      </div>
    )
}

export default items
