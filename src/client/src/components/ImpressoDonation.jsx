import React from 'react';
import {LogoDefault} from './LogoDefault';

const ImpressoDonation = React.forwardRef(({ data }, ref) => {
    const currentDate = new Date().toLocaleDateString('pt-BR');
  return (
    <div ref={ref} style={styles.container}>
      <div style={styles.header}>
        <div style={styles.logoContainer}>
          <LogoDefault style={styles.logo} />
        </div>
        <h1 style={styles.title}>Doações em Estoque</h1>
      </div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>PRODUTO</th>
            <th style={styles.tableHeader}>DESCRIÇÃO</th>
            <th style={styles.tableHeader}>QUANTIDADE</th>
            <th style={styles.tableHeader}>PERECIVEL</th>
            <th style={styles.tableHeader}>ENTRADA</th>
            <th style={styles.tableHeader}>VENCIMENTO</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row._id}>
              <td style={styles.tableCell}>{row.name}</td>
              <td style={styles.tableCell}>{row.description}</td>
              <td style={styles.tableCell}>{row.amount}</td>
              <td style={styles.tableCell}>{row.perishable ? 'Sim' : 'Não'}</td>
              <td style={styles.tableCell}>{new Date(row.entryDate).toLocaleDateString('pt-BR')}</td>
              <td style={styles.tableCell}>{new Date(row.expirationDate).toLocaleDateString('pt-BR')}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p style={styles.footer}>Emitido em: {currentDate}</p>
    </div>
  );
});

const styles = {
  container: {
    border: '1px solid #ddd',
    borderRadius: '4px',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  },
  logoContainer: {
    alignSelf: 'flex-start',
    marginBottom: '10px',
  },
  logo: {
    width: '50px',
  },
  title: {
    fontSize: '24px',
    margin: '0',
    fontWeight: 'bold',
    color: '#333',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
  },
  tableHeader: {
    border: '1px solid #ddd',
    padding: '10px',
    backgroundColor: '#f9f9f9',
    fontWeight: 'bold',
    color: '#555',
    textAlign: 'left',
  },
  tableCell: {
    border: '1px solid #ddd',
    padding: '10px',
    color: '#333',
  },
};

export default ImpressoDonation;
