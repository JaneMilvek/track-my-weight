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
  IonButtons,
  IonBackButton

} from '@ionic/react';
import './Goals.css';

const Goals: React.FC = () => {

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="goals-page">
       <IonHeader>
        <IonToolbar>
            <IonButtons slot="start">
                <IonBackButton class="back_button" defaultHref="/" />
            </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <IonGrid>
          <IonRow>
            <IonTitle id="title" size="large">Set your goals!</IonTitle>
          </IonRow>
          <IonRow class="rowStyle">
            <IonCol>Starting weight:</IonCol>
            <IonCol>98 kg</IonCol>
          </IonRow>
          <IonRow class="rowStyle">
            <IonCol>Current weight:</IonCol>
            <IonCol>88 kg</IonCol>
          </IonRow>
          <IonRow class="rowStyle">
            <IonCol>Goal weight:</IonCol>
            <IonCol>64 kg</IonCol>
          </IonRow>
          <IonRow class="rowStyle">
            <IonCol>Weekly goal:</IonCol>
            <IonCol>-1 kg</IonCol>
          </IonRow>
          <IonRow>
            <IonCol></IonCol>
            <IonCol>
                <IonButton class="button" fill="outline" color="primary">Save goals!</IonButton>
            </IonCol>
            <IonCol></IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Goals;
