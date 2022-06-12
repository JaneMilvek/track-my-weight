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
  IonBackButton,
  IonItemDivider,
  IonItem,
  IonInput

} from '@ionic/react';
import './Weights.css';

const Weights: React.FC = () => {

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="weights-page">
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
            <IonTitle id="title" size="large">Add your weight!</IonTitle>
          </IonRow>
          <IonRow>
            <IonCol size="9">
              <IonItem class="rowStyle">
                <IonInput placeholder="Insert weight here"></IonInput>
              </IonItem>
            </IonCol>
            <IonCol></IonCol>
            
          </IonRow>
          <IonRow>
            <IonCol></IonCol>
            <IonCol>
                <IonButton class="button" fill="outline" color="primary">Add weight!</IonButton>
            </IonCol>
            <IonCol></IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Weights;
