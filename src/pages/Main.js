import React, { useEffect, useState } from 'react'
import '../pages/Main.css'
import EditableTable from '../components/EditableTable'
import clinicsData from '../data.json'
import plus from '../assets/plus.png'
import Modal from '../components/Modal.js'

const Main = () => {

  const [data, setData] = useState([])
  const [show, setShow] = useState(false);
  const closeModalHandler = () => setShow(false);

  useEffect(() => {
    setData(clinicsData)
  },[data])

  return (
    <>
      {!show ?
        <>
          <div id='content'>
            <div id='title'>
              Visualizador de Clínicas
            </div>

            <div>
              <img id='image' src={plus} alt="" onClick={() => setShow(true)}/>
            </div>
          </div>

          <div id="body">
            {data.length !== 0 ?
              data.map((item, index) => {
                return (
                  <EditableTable name={item.name} cep={item.cep} email={item.email} services={item.services} contact={item.contact}/>
                )
              }) : null}
          </div>
        </>
      :
      <>
        <div onClick={closeModalHandler} className="back-drop"></div>
        <Modal show={show} close={closeModalHandler} />
      </>
      }
    </>
  )
}

export default Main