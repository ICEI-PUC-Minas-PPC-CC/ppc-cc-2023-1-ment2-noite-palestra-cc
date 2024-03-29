import * as React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import Rotas from '../api';
import { ArrowDropDownIcon } from '@mui/x-date-pickers';
import { Fab } from '@mui/material';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import '../css/vertical-load-more.css';
import { green } from '@mui/material/colors';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/br';
import dayjs from 'dayjs';

export default function TimeLine() {
  const routes = new Rotas();
  const [donations, setDonations] = React.useState([]);
  const [expiration, setExpiration] = React.useState(undefined)

  React.useEffect(() => {
    getConfig();
  }, []);

  
  React.useEffect(() => {
    if (expiration !== undefined){
      getAllDonations()
    }
  }, [expiration]);

  const getConfig = async () => {
    try {
      const response = await routes.get('/config/648d162134b0f5ccf99f3a1b/find');
      setExpiration(response.data.expirationDays);
    } catch (error) {
      console.log('Erro ao obter configuração:', error);
    }
  };

  const getAllDonations = async () => {
    try {
      const response = await routes.get(`/donation/expiring-donations/${expiration}`);
      setDonations(response.data);
    } catch (error) {
      console.log('Erro ao obter doações:', error);
    }
  };

  const [indice, setIndice] = React.useState(0);
  const [listaVazia, setListaVazia] = React.useState([]);




  // const loadMore = () => {
  //   console.log('Indice: ', indice)
  //   console.log('lista: ', listaVazia)
  //   setListaVazia([...listaVazia, ...donations.slice(indice, indice+2)]);
  //   setIndice(indice+2);
  // };


  const loadMore = () => {
    console.log('Indice: ', indice);
    console.log('lista: ', listaVazia);
  
    const startIndex = indice;
    const endIndex = indice + 2;
  
    if (startIndex < donations.length) {
      const slicedItems = donations.slice(startIndex, endIndex);
      setListaVazia([...listaVazia, ...slicedItems]);
  
      if (slicedItems.length < 2) {
        // Último elemento não foi adicionado, adicioná-lo manualmente
        const lastItem = donations[donations.length - 1];
        setListaVazia([...listaVazia, lastItem]);
      }
  
      setIndice(indice + 2);
    } else {
      console.log('Não há mais elementos para adicionar.');
    }
  }

  const addButton = () => (
    <Fab classes={{ root: 'fab-button' }} color="primary" aria-label="add">
      <ArrowDropDownIcon />
    </Fab>
  );


  //intersectionObserverProps={ Object }
  //Custom props pass to useInView component (default: { rootMargin: '0px 0px 40px 0px' }). See

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <VerticalTimeline lineColor={ '#E9E9E9' }>
        
        {listaVazia.map(donation => (
          <VerticalTimelineElement 
          key={donation._id}
          date={dayjs(donation.expirationDate).format('DD/MM/YYYY')}
          className= 'vertical-timeline-element--work'
          contentStyle= {{ background: '#0584BE', color: '#CECECE' }}
          contentArrowStyle= {{ borderRight: '7px solid  #F4F4F4' }}
          icon={ <ReportProblemOutlinedIcon /> }
          iconStyle= {{ background: '#eb2690', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Nome: {donation.name}</h3>
            <h4 className="vertical-timeline-element-title">Quantidade: {donation.amount}</h4>
            <h4 className="vertical-timeline-element-title">Vencimento: {dayjs(donation.expirationDate).format('DD/MM/YYYY')}</h4>
          </VerticalTimelineElement>))
        }
        
        <VerticalTimelineElement
          iconOnClick={loadMore}
          iconClassName="vertical-timeline-element-icon--button"
          icon={addButton()}
        />
      </VerticalTimeline>

    </div>
  )
}
