import { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonCol,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonButton,
  IonGrid,
  IonRow,
} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
       <IonHeader>
        <IonToolbar></IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <IonGrid>
          <IonRow>
            <IonTitle id="title" size="large">Hello!</IonTitle>
          </IonRow>
          <IonRow>
            <IonCol></IonCol>
            <IonCol>
              <IonButton class="button" fill="outline" color="primary">Add Weight!</IonButton>
            </IonCol>
            <IonCol></IonCol>
          </IonRow>
          <IonRow>
            <IonCol></IonCol>
            <IonCol>
              <IonButton class="button" fill="outline" color="secondary">See your progress!</IonButton>
            </IonCol>
            <IonCol></IonCol>
          </IonRow>
          <IonRow>
            <IonCol></IonCol>
            <IonCol>
                <IonButton class="button" fill="outline" color="tertiary">Set your goals!</IonButton>
            </IonCol>
            <IonCol></IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
