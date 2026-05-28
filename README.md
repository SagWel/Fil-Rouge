# Fil-Rouge

Projet fil rouge = "D10H !"

Main project during the web and mobile web developer training at AFEC in Angoulême :

D10H ! is a Third-party application using the Deezer API to provide a complementary synchronized music learning service

## Installation

1. Clone Repository :

```bash
  git clone https://github.com/SagWel/Fil-Rouge.git
```

3. Install dependencies :

```bash
cd client
npm install
```

4. Start frontend :

```bash
npm run dev
```

5. Start backend :

   Start xampp or wampp Apache and MySQL system

6. Go to web app :

   _after the server has started_

```bash
o
```

## Technologies

- CSS / ChakraUI 2 / TypeScript
- React
- VexFlow 5
- JWT
- PHP

## Features

1. Implemented
   - Login
   - Registering
   - Select one or more instruments and the corresponding level at first login
   - Configure Profil (password, gender, username, instruments ans the corresponding level, birthday)
   - Search for Score, filter and sort the results
   - Delete Profil
   - Configure the display of explicit content (set to “no explicit content” by default for children)
   - Display Score and start playing it

2. Futur
   - Submit a suggestion for a score if it doesn't appear in the results
   - Full mailling system
   - Playlist system called 'Scorebraies'
   - Popularity system for scores
   - Shuffle score select button system for Favory page
   - Confidentialites infos and personal data management infos on account page
   - Add more security for deleting account
   - Add pause or playing choice if visibilityState change to 'hidden'
   - Full notifications system
   - All tools buttons fonction
   - Connect to a SDK
   - Renderring Scores new system
   - Button to simplifing score view
   - Preview audio on Score cards
   - New carousels for more than just scores
   - Searchbzr stabilisation

## Tree Structure

D10H\_!  
├── client  
│ ├── index.html  
│ ├── public  
│ │ ├── data  
│ │ │ └── scores.json  
│ │ ├── imgs  
│ │ │ └── FondPart.jpg  
│ │ └── svg  
│ │ └── logo-horizontal-white-text.svg  
│ ├── seed.cjs  
│ ├── src  
│ │ ├── App.tsx  
│ │ ├── components  
│ │ │ ├── MenuSelect.tsx  
│ │ │ ├── OtherCarousel.tsx  
│ │ │ ├── ScoreCarousel.tsx  
│ │ │ ├── ScoreRender.tsx  
│ │ │ ├── UserInstrumentManagement.tsx  
│ │ │ ├── buttons  
│ │ │ │ ├── StandardButton.tsx  
│ │ │ │ └── ToolButton.tsx  
│ │ │ ├── cards  
│ │ │ │ ├── InstrumentCard.tsx  
│ │ │ │ ├── OtherInstrumentCard.tsx  
│ │ │ │ └── ScoreCard.tsx  
│ │ │ ├── layout  
│ │ │ │ ├── BarNav.tsx  
│ │ │ │ ├── BarNavMin.tsx  
│ │ │ │ ├── Header.tsx  
│ │ │ │ ├── HeaderMin.tsx  
│ │ │ │ ├── Playeur.tsx  
│ │ │ │ ├── PlayeurMin.tsx  
│ │ │ │ └── Tools.tsx  
│ │ │ ├── modals  
│ │ │ │ ├── ModalManager.tsx  
│ │ │ │ ├── StandardModal.tsx  
│ │ │ │ └── childrens  
│ │ │ │ └── FirstEditProfil.tsx  
│ │ │ └── svg.tsx  
│ │ ├── context  
│ │ │ ├── AuthContext.tsx  
│ │ │ ├── ModalsContext.tsx  
│ │ │ ├── ScoreContext.tsx  
│ │ │ └── SearchContext.tsx  
│ │ ├── hooks  
│ │ │ ├── useAuth.tsx  
│ │ │ ├── useModals.tsx  
│ │ │ ├── useScore.tsx  
│ │ │ ├── useSearchHistory.tsx  
│ │ │ └── useWindowWidth.tsx  
│ │ ├── img  
│ │ │ ├── Rock.png  
│ │ │ ├── au-coin-du-feu.png  
│ │ │ ├── dont-stop-the-party.png  
│ │ │ └── var.png  
│ │ ├── main.tsx  
│ │ ├── pages  
│ │ │ ├── connected  
│ │ │ │ ├── PageAllInstruments.tsx  
│ │ │ │ ├── PageHome.tsx  
│ │ │ │ ├── PageMorceau.tsx  
│ │ │ │ ├── PageSearch.tsx  
│ │ │ │ ├── PageSearchInstrument.tsx  
│ │ │ │ ├── PageUserInstruments.tsx  
│ │ │ │ ├── account  
│ │ │ │ │ ├── PageAccount.tsx  
│ │ │ │ │ ├── PageAccountCountry.tsx  
│ │ │ │ │ ├── PageAccountDevices.tsx  
│ │ │ │ │ ├── PageAccountDisplay.tsx  
│ │ │ │ │ ├── PageAccountNotifications.tsx  
│ │ │ │ │ ├── PageAccountShare.tsx  
│ │ │ │ │ └── PageApps.tsx  
│ │ │ │ └── favoris  
│ │ │ │ ├── PageFavoris.tsx  
│ │ │ │ ├── PageHistory.tsx  
│ │ │ │ ├── PageScorbaries.tsx  
│ │ │ │ └── PageScorbrary.tsx  
│ │ │ └── disconnected  
│ │ │ ├── PageInfos.tsx  
│ │ │ ├── PageLogin.tsx  
│ │ │ ├── PageResetPassword.tsx  
│ │ │ └── PageSignup.tsx  
│ │ ├── style.css  
│ │ ├── theme.ts  
│ │ └── types  
│ │ ├── Deezer.ts  
│ │ ├── Score.ts  
│ │ ├── global.ts  
│ │ ├── instrument.ts  
│ │ └── user.ts  
├── db  
│ ├── init.sql  
│ └── seed.sql  
└── server  
├── config  
│ └── db.php  
├── controllers  
│ ├── adduserhistoryController.php  
│ ├── allinstrumentsController.php  
│ ├── authController.php  
│ ├── checkAuthController.php  
│ ├── creatuserController.php  
│ ├── creatuserinstrumentsController.php  
│ ├── deleteaccountController.php  
│ ├── editpasswordController.php  
│ ├── filterexplicitController.php  
│ ├── foundbyemailController.php  
│ ├── historyController.php  
│ ├── logoutController.php  
│ ├── newsController.php  
│ ├── popularController.php  
│ ├── scoreController.php  
│ ├── scoresInstrumentController.php  
│ ├── searchscoreController.php  
│ ├── suggestionsController.php  
│ ├── updateprofilController.php  
│ └── userinstrumentsController.php  
├── middlewares  
│ ├── CheckCreatUser.php  
│ ├── CheckEditPassword.php  
│ ├── CheckEmail.php  
│ ├── CheckFilterExplicitChoice.php  
│ ├── CheckInstrument.php  
│ ├── CheckLogin.php  
│ ├── CheckNumericId.php  
│ ├── CheckProfilInputs.php  
│ └── CheckQuery.php  
├── models  
│ ├── instrumentsModel.php  
│ ├── scoresModel.php  
│ └── userModel.php  
├── public  
│ ├── index.php  
│ └── uploads  
│ ├── avatars  
│ │ ├── avatar_35_69f38d7b2e7d8.jpg  
│ │ └── avatar_46_69f86c941ae55.jpeg  
│ ├── instruments  
│ │ ├── Basse.png  
│ │ ├── Batterie.png  
│ │ ├── Chant.png  
│ │ ├── Flute.png  
│ │ ├── Guitare.png  
│ │ ├── Piano.png  
│ │ ├── Saxo.png  
│ │ └── Ukulele.png  
│ └── previews  
│ └── partition_1.png  
└── utils  
└── mapperScores.php  

## Preview

![Screenshot of app](./screenshot.png)
