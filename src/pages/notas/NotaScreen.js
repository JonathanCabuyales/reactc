// import React from 'react'

// import { Tabs, Panel, Tab, TabList, PanelList} from '@react-tabtab-next/tabtab';
// import { bulma } from '@react-tabtab-next/themes';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';




import './NotasStyle.css'; 

import { Navbar } from "../../components/shared/navbar/navbar"
import { NotasTabs } from './NotasTabs/NotasTabs';
import { useState } from 'react';

export const NotaScreen = () => {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) =>{
      setValue(newValue);
    }

  return (
      <>
        <Navbar />
        <div className="contenido-menu">
          <div className='container mt-4'>
            <h2><b>Notas</b></h2>
            <div className='row'>
              <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                      <Tab label="Notas" value="1" />
                    </TabList>
                  </Box>
                  <TabPanel value="1">
                    <NotasTabs />
                  </TabPanel>
                </TabContext>
              </Box>
            </div>
          </div>
        </div>
      </>
  )
}
