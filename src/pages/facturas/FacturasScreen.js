// import React from 'react'

import { TabContext, TabList, TabPanel } from "@mui/lab"
import { Box, Tab } from "@mui/material"
import { useState } from "react"
import { Navbar } from "../../components/shared/navbar/navbar"
import { FacturaContent } from "./FacturaContent"

export const FacturasScreen = () => {

  const [value, setValue] = useState('1');

  return (
      <>
        <Navbar />
        <div className="contenido-menu">
          <div className="container">
            <h2>Sección De Ventas</h2>
            <div className="row">
              <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList>
                      <Tab label="Factura" value='1' />
                    </TabList>
                  </Box>
                <TabPanel value="1">
                  <FacturaContent />
                </TabPanel>
                </TabContext>
                  


              </Box>
            </div>
          </div>
        </div>
      </>
  )
}
