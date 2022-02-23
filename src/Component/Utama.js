import React from 'react';
import { Routes ,Route } from 'react-router-dom';

import Beranda from './Beranda';
import DataSiswa from './DataSiswa';
import DataKelas from './DataKelas';
import DataPetugas from './DataPetugas';
import DataSpp from './DataSpp';
import TransaksiPembayaran from './TransaksiPembayaran';
import HistoryPembayaran from './HistoryPembayaran';

const Utama = () => (
    <Routes>
        <Route exact path="/" element={<Beranda/>}/>
        <Route path="/datasiswa" element={<DataSiswa/>}/>
        <Route path="/datakelas" element={<DataKelas/>}/>
        <Route path="/datapetugas" element={<DataPetugas/>}/>
        <Route path="/dataspp" element={<DataSpp/>}/>
        <Route path="/transaksipembayaran" element={<TransaksiPembayaran/>}/>
        <Route path="/historypembayaran" element={<HistoryPembayaran/>}/>
        
    </Routes>
)

export default Utama;