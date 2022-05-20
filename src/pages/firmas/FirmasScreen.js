// import React from 'react'

import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { Navbar } from "../../components/shared/navbar/navbar";
import { FirmasContent } from "./FirmasContent";

export const FirmasScreen = () => {

  const [value, setValue] = useState('1');

  const handleValue =(event, newValue)=>{
    setValue(newValue);
  }
  return (
    <>
        <Navbar />
        <div className="contenido-menu">
          <div className="container">
              <h2><b>Firmas</b></h2>
              <div className="row">
                <Box sx={{ width: '100%', typography: 'body1'}}>
                  <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                      <TabList onChange={ handleValue } aria-label="">
                        <Tab label="Registro de Firmas" value="1" />
                      </TabList>
                    </Box>
                    <TabPanel value="1">
                      <FirmasContent />
                    </TabPanel>
                  </TabContext>

                </Box>
              </div>
          </div>
        </div>
    </>
  );
}
