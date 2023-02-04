import React, { useState, useEffect } from 'react';

const Clock = () => {

    const initialState = {
        // Se genera una fecha como estado inicial del componente
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
     };
    const [data, setData] = useState(initialState);
    const updateAge = () => {
            let edad = data.edad + 1
            setData({
                ...data,
                fecha: new Date(),
                edad
            })
    }
    useEffect(() => {
        const interval = setInterval(() => {
           updateAge();
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [data])
    
  return (
    <div>
         <h2>
            Hora Actual:
            {data.fecha.toLocaleTimeString()}
         </h2>
         <h3>{data.nombre} {data.apellidos}</h3>
         <h1>Edad: {data.edad}</h1>
    </div>
  )
}

export default Clock