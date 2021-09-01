import React from 'react';
import classnames from 'classnames';
import Header from './header/index';
import { BrowserRouter} from 'react-router-dom';
import styles from './App.module.css';
import NannyImg from './assets/service_img.png';
import ProfilePhoto from './assets/profile_img.png';
import NannyMap from './assets/nanny_map.png';
import BudgetImg from './assets/budget_img.png';
import NannyHistoric from './assets/nanny_available.png';
import NewsImg from './assets/news_incoming.png';
import Footer from './footer/index';
import Form from './components/form/index';
import { Storage } from './context/formContext';
const App = () => {

 
  return (
      <div >
        <Header/>
          <BrowserRouter>
          <section className = {classnames(styles.introBG)}>  
            <div className = {styles.appContainer}>
              <div className = {styles.introAdArea}>
                <div className = {styles.quoteArea}>
                  <h1 className = {styles.quoteTitle}>Easily create or join a local nanny share with Hapu</h1>
                  <p className = {styles.quoteStyle}>Hapu is Airbnb for nanny share. Share your home, nanny and costs 
                  and create new flexible, affordable solutions in childcare.</p>    
                  <div className = {styles.buttonArea}>
                    <button className = {styles.buttonStyle}></button>
                    <p className = {styles.buttonPhrase}>See hapu in action (27 seconds)</p>
                  </div>
                </div>
                <div className = {styles.serviceArea}>
                  <img src= {NannyImg} alt="search for a nanny" />
                </div>
              </div>
            </div>
          </section>  
         
          <section className = {classnames(styles.appContainer, styles.memberNannyArea)}>
            <h1 className = {styles.hiddenH1}>nanny available</h1>
            <img className = {styles.imgNannyContainer} src={ProfilePhoto} alt="pictures of the nannies" />
            <p className = {styles.pContainerNanny}>
              <b className = {classnames(styles.linkStyle , styles.memberBStyle)}>Sarah’s day care available now in North Sydney </b>
              <b className = {styles.nannyBStyle}>Wednesday, Thursday, Friday - 7:30 - 5:30</b> 
            </p>
          </section>
          <section className = {styles.bgGeneral}>
            <div className = {classnames(styles.appContainer, styles.fetchNannyArea)}>
              <div className = {styles.serviceExempleArea}>
                <h1 className = {styles.titleStyle}>Share your home,<br/> nanny and costs</h1>
                <p className = {styles.pStyle}>You have a fantastic home, a fantastic 
                  nanny and wouldn’t cutting your costs in 
                  half be, well, fantastic?! If only it was
                  easy to connect with other parents to share
                  your costs? Well now it is, with Hapu. <b className = {styles.linkStyle}>Hapu 
                  means tribe</b>  and it’s our foundational 3 tribal
                  principles that empowers you to create and manage
                  your own tribe. A tribe that together has the power
                  to create new affordable solutions in childcare that
                  work for you and your community.</p>
                  <span className = {styles.linkStyle}>Ready to get started?</span>
              </div>
              <div className = {styles.nannyMap}>
                <img className ={styles.imgFetchNanny} src={NannyMap} alt="location where nannies are on the map" />
              </div>
            </div>
          <hr className = { styles.separatorSection}/>
          </section>
          <section className = {styles.bgGeneral}>
            <div className = {classnames(styles.appContainer, styles.emailSection)}>
              <h1 className ={styles.h1EmailStyle}>Are you a parent without a nanny and looking to share?</h1>
              <p className = {styles.pEmailStyle}>Leave us your name and email and we’ll update you as soon as
              a share becomes available in your area!</p>
              <div className ={styles.registrationArea}>
                <Form/>
              </div>
            </div>
          <hr className = {styles.separatorSection}/>      
          </section>         
      <section className = {styles.bgGeneral}>
            <div className = {classnames(styles.appContainer, styles.budgetArea)}>
              <img className = {styles.budgetSystem} src={BudgetImg} alt="make your budget" />
              <div className = {styles.mobileContainer}>
                <h1 className = { classnames(styles.titleMobileStyle, styles.titleStyle)}>Shared payments made simple</h1>
                <p className = {styles.pStyle }>Sometimes it’s hard enough just sharing 
                  a restaurant bill. Try sharing that bill 
                  week in, week out and you might encounter 
                  more than a few snares. But not with Hapu. 
                  Simply set your rates and our automated payment 
                  system takes care of the rest. You need never talk 
                  money or who owes what.</p>
                <span className = {classnames(styles.linkStyle, styles.budgetSpanMobile)}>Read how Bridget’s share (without Hapu) ended over $15</span>
              </div>
            </div>
          <hr className = {styles.separatorSection}/>
          </section>
           <section className = {styles.bgGeneral}>
            <div className = {classnames(styles.appContainer, styles.operationArea)}>
              <h1 className = {classnames( styles.titleOperationMobile, styles.titleStyle)}>A framework built for the long term</h1>
              <p className = {styles.operationP}>Childcare is for the long term. And you need 
                a framework you can count on that gives your share 
                long term viability and success. That’s why we’ve defined 
                Hapu around our three tribal principles; clearly defined 
                process, transparency over money and equality of participation.
              </p>
              <span className = {classnames( styles.operationSpanMobile, styles.linkStyle)}>Read how Hapu’s tribal background defines our app </span>

            </div>
          </section>
          <section className = {styles.bgGeneral}>
            <div className = {classnames(styles.appContainer, styles.nannyHistoricArea)}>
              <h1 className = {styles.hiddenH1}>payment history</h1>
              <img  src= {NannyHistoric} alt="nannies' billing history" />
            </div>
          <hr className = {styles.separatorSection}/>
          </section>
          <section className = {styles.bgGeneral} >
            <div className = {classnames(styles.appContainer, styles.newsSectionArea)}>
              <img src= {NewsImg} alt="nannies notifying your baby's daily life" />
              <h1 className = {styles.titleStyle}>Coming soon: Nanny Share Daily Diary!</h1>
              <p className = {classnames(styles.sectionPMobile, styles.operationP)}>With the Hapu daily diary your nanny will be able to update you and your 
                sharers with photos and commentary of the day. You and sharers will receive 
                notifications and you’ll be able to login to view the daily adventures fo your 
                little ones. We can’t wait!
              </p>
            </div>
          </section>
          <Footer/>
        </BrowserRouter>

      </div>
  );
}

export default App;
