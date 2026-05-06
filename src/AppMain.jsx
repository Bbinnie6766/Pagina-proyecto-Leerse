import React from 'react'
import { StatusGame } from './components/StatusGame'
import { ManuelaRMPage } from './pages/ManuelaRMPage'
import { EmanuelRMPage } from './pages/EmanuelRMPage'

export const AppMain = () => {
  return (
    <>
    <StatusGame />
    <ManuelaRMPage />
    <EmanuelRMPage />
    </>
  )
}
