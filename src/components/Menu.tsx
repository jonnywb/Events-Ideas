import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";

import { useLocation } from "react-router-dom";
import {
  basketOutline,
  basketSharp,
  calendarClearOutline,
  calendarClearSharp,
  calendarOutline,
  calendarSharp,
  chevronForward,
  heartOutline,
  heartSharp,
  personCircleOutline,
  personCircleSharp,
  trashOutline,
  trashSharp,
} from "ionicons/icons";
import "./Menu.css";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "Events",
    url: "/Events",
    iosIcon: calendarClearOutline,
    mdIcon: calendarClearSharp,
  },
  // {
  //   title: "Basket",
  //   url: "/Basket",
  //   iosIcon: basketOutline,
  //   mdIcon: basketSharp,
  // },
  // {
  //   title: "Favorites",
  //   url: "/Favorites",
  //   iosIcon: heartOutline,
  //   mdIcon: heartSharp,
  // },
  // {
  //   title: "Bookings",
  //   url: "/Bookings",
  //   iosIcon: calendarOutline,
  //   mdIcon: calendarSharp,
  // },
  // {
  //   title: "Account",
  //   url: "/Account",
  //   iosIcon: personCircleOutline,
  //   mdIcon: personCircleSharp,
  // },
  // {
  //   title: "Settings",
  //   url: "/Settings",
  //   iosIcon: trashOutline,
  //   mdIcon: trashSharp,
  // },
];

const filters = [
  "Launches & Signings",
  "Workshops & Seminars",
  "Book Clubs",
  "Festivals",
  "Childrens Activities",
  "Book Fairs & Markets",
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Book Events Platform</IonListHeader>
          <IonNote>Welcome back, Username.</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={location.pathname === appPage.url ? "selected" : ""}
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="filter-list">
          <IonListHeader>Event Filters</IonListHeader>
          {filters.map((filter, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon aria-hidden="true" slot="start" icon={chevronForward} />
              <IonLabel>{filter}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
