import React, { useState, useEffect } from "react";
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import { Button, CircularProgress, Stack } from "@mui/material";
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import welcomeStyles from "../css/Welcome.module.css";
import Rotas from "../api";

const Welcome = () => {
  const routes = new Rotas();
  const [counter, setCounter] = useState(0);
  const [counterValidade, setCounterValidade] = useState(undefined);
  const [configExpiration, setConfigExpiration] = useState(undefined);
  const [configStock, setConfigStock] = useState(undefined)
  const [stock, setStock] = useState(undefined)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllDonations()
    getConfig()
  }, [])

  useEffect(() => {
    if (configExpiration !== undefined) {
      getAllExpirationDonate()
    }
    if (configExpiration !== undefined) {
      getStockStatus()
    }


  }, [configExpiration])


  const getConfig = () => {
    routes.get('/config/648d162134b0f5ccf99f3a1b/find')
      .then((response) => {
        setConfigExpiration(response.data.expirationDays);
        setConfigStock(response.data.stock);
        console.log('Config Expiration:', response.data.expirationDays);
      })
      .catch((error) => {
        console.log(error);
      });
  };



  const getAllDonations = () => {
    return new Promise((resolve, reject) => {
      routes.get("/donation/sum-quantities")
        .then((response) => {
          setCounter(response.data);
          resolve();
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  };

  const getAllExpirationDonate = () => {
    routes.get(`/donation/expiring-products/${configExpiration}`)
      .then((res) => {
        console.log('API Response:', res.data);
        setCounterValidade(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };


  const getStockStatus = () => {
    routes.get(`/donation/isStockBelowMinimum/${configStock}`)
      .then((res) => {
        console.log('API Response AQUI:', res.data);
        setStock(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
  };

  console.log(configStock)

  return (
    <div className={welcomeStyles.welcome}>
      <div className={welcomeStyles.welcomeNotifications}>
        <div className={welcomeStyles.alimentos}>
          <div className={welcomeStyles.content}>
            <EqualizerOutlinedIcon sx={{ color: "#eb268f" }} />
            <div className={welcomeStyles.text}>
              <h4>Alimentos em estoque</h4>
              <div className={welcomeStyles.counter}>
                {loading ? (
                  <CircularProgress size={20} style={{ color: "#eb268f" }} />
                ) : (
                  <span>{counter.soma}</span>
                )}
              </div>
            </div>
          </div>
          <div className={welcomeStyles.notify}>
            <div>
              <p>Alimentos próximos da data de vencimento</p>
              {loading ? (
                <CircularProgress size={20} style={{ color: "#eb268f" }} />
              ) : (
                <span>{counterValidade.count}</span>
              )}
            </div>
          </div>
        </div>
        <div className={welcomeStyles.notify}>
          <div>
            <p>Situação do estoque</p>
            <div className={welcomeStyles.content}>
              {stock ? (
                <ThumbUpIcon fontSize="large" sx={{ color: '#00A85A' }} />
              ) : (
                <div>
                  <ReportProblemIcon fontSize="large" sx={{ color: '#A80000' }} />
                  Estoque abaixo do mínimo!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
