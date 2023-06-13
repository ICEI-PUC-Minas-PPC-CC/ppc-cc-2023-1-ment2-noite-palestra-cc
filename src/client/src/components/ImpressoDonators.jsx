import React from 'react';
import { LogoDefault } from './LogoDefault';

const ImpressoDoadores = React.forwardRef(({ data }, ref) => {
  const currentDate = new Date().toLocaleDateString('pt-BR');

  return (
    <div ref={ref} style={styles.container}>
      <div style={styles.header}>
        <div style={styles.logoContainer}>
          <LogoDefault style={styles.logo} />
        </div>
        <h1 style={styles.title}>DOADORES ATIVOS</h1>
      </div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>NOME</th>
            <th style={styles.tableHeader}>CPF</th>
            <th style={styles.tableHeader}>EMAIL</th>
            <th style={styles.tableHeader}>DATA</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row._id}>
              <td style={styles.tableCell}>{row.name}</td>
              <td style={styles.tableCell}>{row.cpf}</td>
              <td style={styles.tableCell}>{row.email}</td>
              <td style={styles.tableCell}>{new Date(row.createdAt).toLocaleDateString('pt-BR')}</td>
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
  footer: {
    marginTop: '20px',
  },
};

export default ImpressoDoadores;
