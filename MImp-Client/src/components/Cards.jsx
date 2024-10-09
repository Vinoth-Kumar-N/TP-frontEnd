import React from 'react'
import Featurescard from './Featurescard'
import Card from './Card'

const Cards = () => {
  return (
    <>
      <div className='w-screen h-auto border overflow-x-auto flex space-x-4 p-4 bg-slate-200'>
        <div className='flex space-x-4'>
          <Featurescard/>
          <Featurescard/>
          <Featurescard/>
          <Featurescard/>
          <Featurescard/>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  )
}

export default Cards
