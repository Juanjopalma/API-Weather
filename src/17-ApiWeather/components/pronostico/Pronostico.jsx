import React from 'react'
import './pronostico.scss'
import { obtenerFecha, obtenerHora } from '../../utils/utils'
import { formatearFecha } from '../../utils/utils'

export const Pronostico = ({datos, city2}) => {
  return (
    <div className='pronostico'>
      <div className='pantallaPrincipal'>
        <div className='contenedor1'>
          <div className='cuadro'>
            <p className='city'>{city2}</p>
            <img src={`https://openweathermap.org/img/wn/${datos?.list[0].weather[0].icon}.png`} alt="icono del tiempo" />
            <p className='temperatura'>{parseInt(datos?.list[0].main.temp)} ºC</p>
            <p className='description'>{datos?.list[0].weather[0].description}</p>
            <p>{formatearFecha(datos?.list[0].dt_txt)}</p>
          </div>
        </div>
        <div className="contenedor2">
          <div className='cuadros'>
            {datos?.list.map((e, i) => {
                return (
                <div key={i} className='cuadritos'>
                  <p>{formatearFecha(e.dt_txt)}</p>
                  <p>{obtenerHora(e.dt_txt)}</p>
                  <img src={`https://openweathermap.org/img/wn/${e.weather[0].icon}.png`} alt="icono del tiempo" />
                  <p className='temperatura'>{parseInt(e.main.temp)} ºC</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="contenedor3">
        <h2>Más Información</h2>
        <div className='otraInfo'>
          <div className='caja'> 
            <h4>Sensación Térmica</h4>
            <div className='d-flex align-items-center'>
              <img class="icon-feels" src="/assets/tiempo/temperature.png" alt="temperatura" />
              <h5 className='m-0'>{datos?.list[0].main.feels_like}</h5>
            </div>
          </div>
          <div className='caja'> 
            <h4>Velocidad Viento</h4>
            <div className='d-flex align-items-center'>
              <img class="icon-feels" src="/assets/tiempo/viento2.png" alt="viento" />
              <h5 className='m-0'>{datos?.list[0].main.feels_like}</h5>
            </div>
          </div>
          <div className='caja'> 
            <h4>Humedad</h4>
            <div className='d-flex align-items-center'>
              <img class="icon-feels" src="/assets/tiempo/humidity2.png" alt="humedad" />
              <h5 className='m-0'>{datos?.list[0].main.feels_like}</h5>
            </div>
          </div>
          <div className='caja'> 
            <h4>Presión</h4>
            <div className='d-flex align-items-center'>
              <img class="icon-feels" src="/assets/tiempo/pressure.png" alt="presión" />
              <h5 className='m-0'>{datos?.list[0].main.feels_like}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
