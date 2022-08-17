import React, { useState, useEffect } from 'react'
import { Grid, Button, TextField, Stack } from '@mui/material'
import '../styles/funnelsDir2.scss';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import axios from 'axios';

import CardImage from '../assets/images/dss-form.png'
import RightArrowIcon from "../assets/images/right-arrow_Icon.svg"
import ShildIcon from '../assets/images/shield_Icon.svg'
import MoneyIcon from '../assets/images/money_Icon.svg'
import ChartIcon from '../assets/images/chart_Icon.svg'
import LineChartIcon from '../assets/images/line-chart_Icon.svg'
import CustomerServiceIcon from '../assets/images/customer-service_Icon.svg'

const FunnelsDir2 = () => {
  const [defaultCountry, setDefaultCountry] = useState('us');

  const getIpInfo = async () => {
    const ipInfo = await axios.get('https://wiki-tech.website/res/ipapi.php').then(res => res.data);
    setDefaultCountry(ipInfo.toLowerCase())
  }

  useEffect(() => {
    getIpInfo()
  }, [])

  return (
    <div className='funnelsDir2-page'>
      <section className='hero_area'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3' />
            <div className='col-md-5'>
              <div className='hero-content'>
                <h3>Make Money With</h3>
                <h2>AMAZON</h2>
                <p>Grow your Capital from home</p>
                <Button href="#blablaform">Calculate your potential profit</Button>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='hero_form'>
                <div className="form_head">
                  <h3>Invest in Amazon</h3>
                </div>
                <form className='form_box'>
                  <input id="first_name" placeholder="First Name" />
                  <input id="last_name" placeholder="Last Name" variant="outlined" />
                  <input id="email_address" placeholder="Email Address" variant="outlined" />
                  <IntlTelInput
                    separateDialCode={true}
                    defaultCountry={defaultCountry}
                  />
                  <Button type="submit" name='submit'>Get The Information</Button>
                  <Button href="#">Compliant with GDPR policy</Button>
                </form>
                <div className='form_content'>
                  <p>To invest in Amazon you must be at least 18 years old. Minimum required capital $250</p>
                  <div className='form_image'>
                    <img src={CardImage} alt='card-image' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='nick_area'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='nick_content'>
                <p>Learn how to invest in the Million-Dollar Company. Start here</p>
                <img src={RightArrowIcon} alt='right-arrow' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='feature_area'>
        <div className='container'>
          <div className='feature_title'>
            <h3>It is easy to start. Receive access to:</h3>
          </div>
          <div className='feature_items_box'>
            <div className='row'>
              <div className='col-md-4'>
                <div className='feature_item'>
                  <div className='d-flex media'>
                    <img src={ShildIcon} alt="shild-icon" width={62} />
                    <div className="media-body align-self-center">
                      <p>Secure & Authorized
                        <br />Platform</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='feature_item'>
                  <div className='d-flex media'>
                    <img src={MoneyIcon} alt="money-icon" width={66} />
                    <div className="media-body align-self-center">
                      <p>Earnings in your
                        <br />account in 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='feature_item'>
                  <div className='d-flex media'>
                    <img src={ChartIcon} alt="chart-icon" width={70} />
                    <div className="media-body align-self-center">
                      <p>High Profit
                        <br />Potential</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-2' />
              <div className='col-md-4'>
                <div className='feature_item'>
                  <div className='d-flex media'>
                    <img src={LineChartIcon} alt="line-chart-icon" width={75} />
                    <div className="media-body align-self-center">
                      <p>Simple Learning
                        <br />Tools</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='feature_item'>
                  <div className='d-flex media'>
                    <img src={CustomerServiceIcon} alt="customer-service-icon" width={75} />
                    <div className="media-body">
                      <p>Dedicated
                        <br />Customer Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className='footer_area'>
        <div className='container'>
          <div className='footer_sec_1'>
            <div className='row'>
              <div className='col-md-12'>
                <div>
                  <Button href="#blablaform" sx={{ marginBottom: "10px" }}>Discover how to benefit from Amazon investment </Button>
                </div>
                <img src={CardImage} alt="card-image" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default FunnelsDir2