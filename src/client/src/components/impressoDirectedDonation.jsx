import React from 'react';
import { LogoDefault } from './LogoDefault';
import { format } from 'date-fns';


const ImpressoDirDonation = React.forwardRef(({ data }, ref) => {
  const currentDate = new Date().toLocaleDateString('pt-BR');

  return (
    <div ref={ref} style={styles.container}>
      <div style={styles.header}>
        <div style={styles.logoContainer}>
          <LogoDefault style={styles.logo} />
        </div>
        <h1 style={styles.title}>Relatório de Doações</h1>
      </div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>BENEFICIADO</th>
            <th style={styles.tableHeader}>DOAÇÃO</th>
            <th style={styles.tableHeader}>QUANTIDADE</th>
            <th style={styles.tableHeader}>DATA DE ENTREGA</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row._id}>
              <td style={styles.tableCell}>{row.nameBeneficiary}</td>
              <td style={styles.tableCell}>{row.donationName}</td>
              <td style={styles.tableCell}>{row.amountReceive}</td>
              <td style={styles.tableCell}>
                {format(new Date(row.deliveryDate), 'dd/MM/yyyy')}
              </td>
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
    width: '25%',
  },
  tableCell: {
    border: '1px solid #ddd',
    padding: '10px',
    color: '#333',
    width: '25%',
  },
  footer: {
    marginTop: '20px',
  },
};



export default ImpressoDirDonation;