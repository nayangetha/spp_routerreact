import React from 'react';
import Utama from './Component/Utama';
import {Link} from 'react-router-dom';

class App extends React.Component {
  render() {
    return(
      <div> <hr />
        <Link to="/">Beranda</Link> |
        <Link to="/DataSiswa">DataSiswa</Link>  |
        <Link to="/DataKelas">DataKelas</Link>  |
        <Link to="/DataPetugas">DataPetugas</Link>  |
        <Link to="/DataSpp">DataSpp</Link>  |
        <Link to="/TransaksiPembayaran">TransaksiPembayaran</Link>  |
        <Link to="/HistoryPembayaran">HistroyPembayaran</Link>  |
        {/* <Link to="/List" className="nav-link">List</Link> | */}
        {/* <Link to="/Pegawai" className="nav-link">Daftar Pegawai</Link> <hr /> */}
        <p><Utama /></p>
      </div>
    );
  }
}

export default App;