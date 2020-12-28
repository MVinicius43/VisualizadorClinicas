import React from 'react'
import '../components/EditableTable.css'

const EditableTable = (props) => {
  return (
    <div id='contant'>
      <div id='side'>
          CLÍNICA
      </div>

      <div id='container'>
        <div id='contantClinic'>
          <div id='name'>{props.name}</div>

          <div id='cepEmail'>
            <div id='cep'>{props.cep}</div>
            <div id='email'>{props.email}</div>
          </div>
        </div>

        <div>
          {props.services.map(item => {
            return (
              <div id='services'>
                {item}
              </div>
            )
          })}
        </div>

        <div id='contact'>
          {props.contact}
        </div>
      </div>
    </div>
  )
}

export default EditableTable