import React from 'react';
import {LogoDefault} from './LogoDefault';

const ImpressoEquipamentos = React.forwardRef(({ data }, ref) => {
  const currentDate = new Date().toLocaleDateString('pt-BR');

  return (
    <div ref={ref} style={styles.container}>
      <div style={styles.header}>
        <div style={styles.logoContainer}>
          <LogoDefault style={styles.logo} />
        </div>
        <h1 style={styles.title}>Situação dos Equipamentos</h1>
      </div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>Cód. Equip</th>
            <th style={styles.tableHeader}>Emprestado</th>
            <th style={styles.tableHeader}>Beneficiado</th>
            <th style={styles.tableHeader}>Telefone</th>
            <th style={styles.tableHeader}>Endereço</th>
            <th style={styles.tableHeader}>Empréstimo</th>
            <th style={styles.tableHeader}>Devolução</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row._id}>
              <td style={styles.tableCell}>{row.code}</td>
              <td style={styles.tableCell}>{row.lend ? 'Sim' : 'Não'}</td>
              <td style={styles.tableCell}>{row.beneficiary}</td>
              <td style={styles.tableCell}>{row.phone}</td>
              <td style={styles.tableCell}>{row.address}</td>
              <td style={styles.tableCell}>{new Date(row.lendedAt).toLocaleDateString('pt-BR')}</td>
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

export default ImpressoEquipamentos;
