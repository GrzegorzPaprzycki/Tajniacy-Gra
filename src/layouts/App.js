import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Page from './Page';
import Header from './Header';

class App extends Component {
  state = {
    numbers: [1, 1, 1, 1],
    sumNumbers: 0,
    startingColor: "",
    colors: ["#292c24", "white", "white", "white", "white", "white", "white", "white", "red", "red", "red", "red", "red", "red", "red", "red", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"],
    role: "/szefowie",
    cards: [
      { id: 0, text: "Melon", color: "blue", active: false, checked: false },
      { id: 1, text: "Lampa", color: "red", active: false, checked: false },
      { id: 2, text: "Koc", color: "white", active: false, checked: false },
      { id: 3, text: "Samolot", color: "red", active: false, checked: false },
      { id: 4, text: "Chiny", color: "white", active: false, checked: false },
      { id: 5, text: "Mieszkanie", color: "blue", active: false, checked: false },
      { id: 6, text: "Klawiatura", color: "white", active: false, checked: false },
      { id: 7, text: "Ronaldo", color: "#292c24", active: false, checked: false },
      { id: 8, text: "Bajka", color: "blue", active: false, checked: false },
      { id: 9, text: "Smok", color: "red", active: false, checked: false },
      { id: 10, text: "Chleb", color: "red", active: false, checked: false },
      { id: 11, text: "Kapeć", color: "red", active: false, checked: false },
      { id: 12, text: "Opona", color: "blue", active: false, checked: false },
      { id: 13, text: "Małpa", color: "white", active: false, checked: false },
      { id: 14, text: "Czapka", color: "blue", active: false, checked: false },
      { id: 15, text: "Oddech", color: "blue", active: false, checked: false },
      { id: 16, text: "Gips", color: "blue", active: false, checked: false },
      { id: 17, text: "Autostrada", color: "red", active: false, checked: false },
      { id: 18, text: "Zapach", color: "white", active: false, checked: false },
      { id: 19, text: "Skóra", color: "red", active: false, checked: false },
      { id: 20, text: "Batuta", color: "red", active: false, checked: false },
      { id: 21, text: "Wzrok", color: "blue", active: false, checked: false },
      { id: 22, text: "Skarpeta", color: "white", active: false, checked: false },
      { id: 23, text: "Plaża", color: "blue", active: false, checked: false },
      { id: 24, text: "Księżyc", color: "white", active: false, checked: false },
    ],
    selectedCard: -1,
    gameEnded: false,
  }

  words = ["WIDELEC", "MRÓZ", "LATARKA", "DZWONEK", "PIT", "RADAR", "AKWARIUM", "SZCZOTECZKA", "NAPOLEON", "WIKING", "DREWNO", "DZIAŁKA", "STOPIEŃ", "NOE", "DATA", "SZCZOTKA", "MGŁA", "GARNITUR", "WIOSNA", "WIERSZ", "KUNG FU", "SFINKS", "PLAŻA", "KAPTUR", "MOSTEK", "STONOGA", "KORA", "KLIF", "BIBLIA", "LODY", "BAKTERIA", "WIELKANOC", "KOŁO", "OBCY", "ŚWINIA", "ZNACZEK", "MAGIK", "SĘDZIA", "KIJ", "CHOROBA", "ŁYŻKA", "KOSA", "ZMIANA", "WIŚNIA", "FARBA", "FALA", "ZBROJA", "ZŁOTO", "HELIKOPTER", "CZAS", "KOWAL", "WDZIĘK", "SUPERBOHATER", "GRZMOT", "RÓŻA", "PASTA", "ZIEMNIAK", "TRUCIZNA", "ZŁOTOWŁOSA", "KAMYK", "CEBULA", "PODRÓŻ", "MERKURY", "MUSZTARDA", "DŻIN", "KOTWICA", "BANK", "SKALA", "PIERŚCIEŃ", "ODRZUTOWIEC", "TRAMPOLINA", "WILKOŁAK", "NOWY JORK", "ZAMEK", "PRYSZCZ", "BLOK", "ŚMIECI", "BRAZYLIA", "LAMPA", "ROWER", "JOANNA D'ARC", "CHORĄGIEW", "HOLLYWOOD", "PRASA", "REKORD", "PANTOFELEK", "FARTUCH", "TARGI", "DOLAR", "ZLEWOZMYWAK", "SMOKING", "CZECHY", "JAJKO", "MINUTA", "NÓŻ", "KOŚCIÓŁ", "KRÓL", "LONDYN", "GANGSTER", "POSTERUNEK", "BAŃKA", "ŁZA", "LINA", "PIANINO", "PRYSZNIC", "ROCK", "GARDEROBA", "FABRYKA", "ZUPA", "LAS", "OSIOŁ", "BATUTA", "SKOCZEK", "HAK", "ŁÓŻKO", "PEKIN", "SMAK", "FAJKA", "LINIA", "FRANCJA", "TABELA", "MIESZKANIE", "KOT", "ŁAWKA", "ORZEŁ", "OGRODZENIE", "RYBY", "WÓZ", "DYSK", "TEKSAS", "POLE", "SUKIENKA", "ZĄB", "PISTOLET", "JEDWAB", "SOSNA", "POCIĆ SIĘ", "SIEKIERA", "EKRAN", "KRATA", "PAPUGA", "KANADA", "GITARA", "CZEKOLADA", "BONSAI", "TERMOMETR", "HALLOWEEN", "ŻÓŁW", "DRZEWO", "OŁÓW", "TABLET", "RULETKA", "ZAPAS", "CIĘŻARÓWKA", "TOM", "DZBAN", "PRACA", "SERCE", "MUSZLA", "TOAST", "OPŁATA", "POWIETRZE", "WYBUCH", "TEATR", "KATAPULTA", "POCISK", "KONCERT", "KACZKA", "FUNT", "WULKAN", "MANICURE", "BRAMKA", "KOLEJKA", "HOTEL", "PROJEKT", "NIUTON", "BATERIA", "KORZENIE", "WYKRES", "GUMA", "AS", "AUSTRALIA", "TOFU", "POCIĄG", "PIŁKA", "WOJNA", "MOSKWA", "KABEL", "MOSIĄDZ", "BAS", "HOKEJ", "LALKA", "SKÓRA", "MENNICA", "ŚW. PATRYK", "KOŁO ZĘBATE", "MARAKASY", "PALIWO", "PAMIĘĆ", "KSIĘGOWA", "RYCERZ", "ROBAK", "POTWÓR", "BRZYTWA", "MODEL", "SIOSTRA", "GRUZ", "SKLEP", "NIEDŹWIEDŹ", "KROWA", "WEŁNA", "RENIFER", "LENIWIEC", "MARZENIE", "CHEERLEADERKA", "OKŁADKA", "WIĄZANIE", "POCAŁUNEK", "KECZUP", "UCHO", "CEZAR", "KURCZAK", "SEN", "PLIK", "LIŚĆ", "LOKI", "EINSTEIN", "RANCZO", "DRUK", "SĄD", "SZEF", "JUBILER", "MASŁO", "WSKAZÓWKA", "OKNO", "BIURKO", "MISKA", "BŁOTO", "MYŚLIWIEC", "BARAN", "KRÓLOWA", "BUTY", "WETERYNARZ", "BOŻE NARODZENIE", "CZOŁG", "MYJKA", "ŚLIMAK", "BUTELKA", "MOJŻESZ", "PROCHY", "TUNEL", "RYSUNEK", "POMARAŃCZA", "UMOWA", "KRZYŻOWIEC", "KOPALNIA", "ZIELONY", "RAMIĘ", "ETYKIETA", "FLET", "KRYKIET", "INDIANIN", "ARTYKUŁ", "WÓZEK INWALIDZKI", "TRÓJKĄT", "ŁYŻWY", "WDOWA", "RYŻ", "PAJĄK", "DŻEM", "TORNADO", "GNOM", "PIĘCIOKĄT", "RACHUNEK", "POLSKA", "STOKROTKA", "ŁAWKA", "ASTRONAUTA", "KOSZ", "PORTMONETKA", "EDEN", "GWIAZDA", "DUCH", "KARTA", "ĆWIERĆ", "ROZPYLACZ", "KALKULATOR", "BUDKA", "KLUB", "CZASOPISMO", "GRZEBIEŃ", "DOM", "GROSZEK", "LUNCH", "SŁOŃ", "ŚLUB", "KURTYNA", "MECZ", "TRAWA", "WIECZÓR", "HAMBURGER", "POŻAR", "BAŁAGAN", "WŁADCA", "PARKOMETR", "KRASNOLUDEK", "DŁUGOPIS", "SŁOŃCE", "TRZCINA", "MŁYN", "SMOK", "ZADRAŚNIĘCIE", "KUKUŁKA", "OKO", "DYNIA", "MÓZG", "SAMOLOT", "ŚWIĘTY", "GROBOWIEC", "KŁAPNIĘCIE", "KIESZEŃ", "MIĄŻSZ", "WARKOT", "OLEJ", "POKŁAD", "KSIĘŻYC", "CZASZKA", "SKORPION", "ŚRUBA", "ODDECH", "DZIENNIK", "GARNCARZ", "PAŃSTWO", "SZCZUR", "BOCZEK", "PODDASZE", "MARATON", "BOKSER", "ZAGADKA", "PELERYNA", "MUZYKA", "TRENER", "KRĘGOSŁUP", "KOMPUTER", "BAŁWAN", "BARIERKA", "TORF", "POPIÓŁ", "OSTROGI", "TROLL", "BIKINI", "WIADRO", "SZEKSPIR", "NOTRE DAME", "FLAMENCO", "SAŁATKA", "GROSZ", "PROMIEŃ", "ZAKŁAD", "SAHARA", "ŻARTOWNIŚ", "MAKIJAŻ", "SPODNIE", "MINOTAUR", "UWAGA", "KORONA", "RÓG", "BŁYSKAWICA", "PODŁOGA", "RĘKA", "PILOT", "ZIMNO", "ZWÓJ", "PRODUKT", "PIEKARZ", "MOTYL", "DRON", "ARCHAIZM", "MUMIA", "WIELORYB", "MECH", "OLIMP", "RAKIETA", "KLEOPATRA", "CYKL", "USTA", "RURA", "WOREK", "PODANIE", "ŚWIĄTYNIA", "CIEŃ", "NOC", "GRANIT", "FIGURA", "ROLKA", "MAPA", "ARKUSZ", "PAZNOKIEĆ", "BRZOSKWINIA", "PORT", "ŻETON", "NINJA", "WIESZAK", "PAN", "PLAC", "LUSTRO", "CZOŁO", "GWÓŹDŹ", "KOMÓRKA", "KOŃ", "KLAUN", "KOLUMB", "OGON", "MAMUT", "WASZYNGTON", "SUSZARKA", "PREZYDENT", "FIOLETOWY", "SERWER", "BRODA", "SAMOCHÓD", "BAGAŻ", "POWIEŚĆ", "OCET", "DOKTOR", "KURZ", "KCIUK", "PODKŁADKA", "MLEKO", "CERTYFIKAT", "TYGRYS", "OKRĘT", "PUNKT", "DINOZAUR", "ŻELAZO", "TURCJA", "AMBASADA", "RADIO", "STOLICA", "WENUS", "STAW", "ŻABA", "ŻYCIE", "WTYCZKA", "WĄŻ", "CMENTARZ", "SPADOCHRON", "WYCIECZKA", "MOL", "PINGWIN", "KUCHNIA", "MŁOT", "RZEKA", "ANTENA", "ZNAK", "KRYSZTAŁ", "LÓD", "ZAKŁADKA", "AFRYKA", "PŁAZ", "KALAFIOR", "ZATOKA", "NASZYJNIK", "POWÓDŹ", "STRUMIEŃ", "MARZEC", "SZMUGLER", "MIEDŹ", "STATEK", "OLIWKA", "OPARZENIE", "TOKIO", "SPRAWDZIAN", "PAROWIEC", "BIG BEN", "AMBULANS", "NAKLEJKA", "TARTA", "PIZZA", "NAUCZYCIEL", "ŁAPÓWKA", "BURZA ŚNIEŻNA", "CYTRYNA", "FENIKS", "MAKARON", "RZEMIOSŁO", "KSIĘŻNICZKA", "KREDA", "PRZEDSIĘBIORCA", "CIASTO", "SIODŁO", "KRAB", "WIERTŁO", "DENTYSTA", "GENIUSZ", "OGRÓD", "DYREKTOR", "ŻOŁNIERZ", "WIELKI WYBUCH", "GLOBUS", "LEW", "OAZA", "OSZUST", "ŚRÓDZIEMIE", "DRWAL", "PERŁA", "GIEŁDA", "GWIZDEK", "MELON", "PODKOWA", "CURRY", "KOSTKI", "ŚWIATŁO", "OŚMIORNICA", "OTWÓR", "KLON", "JAGODA", "STOŻEK", "PROSZEK", "PRZEPUSTKA", "KOMAR", "PUDŁO", "ATLANTYDA", "RUNDA", "FILM", "TOPÓR", "BAWEŁNA", "SZYNA", "IGLOO", "GORĄCZKA", "ELEKTRONIK", "CZĘŚĆ", "KASK", "SZORTY", "PAPIER", "KRÓL ARTUR", "PELIKAN", "OKULARY", "MONA LISA", "OBWÓD", "ŻYRANDOL", "WODA", "TIPI", "SKRZYPCE", "GOTOWANIE", "ALPY", "FLAGA", "SZNURÓWKA", "ZŁODZIEJ", "ŁYŻWIARSTWO", "MELONIK", "RĘKAWICA", "PIWO", "ULICA", "EUROPA", "POP", "KARABIN", "KRAJ", "UCHWYT", "NUREK", "CEGŁA", "SANKI", "LABORATORIUM", "PRZERWA", "WALENTYNKI", "UKŁON", "KONFERENCJA", "OPERA", "POLKA", "MILA", "ROSJA", "GUBERNATOR", "STÓŁ", "SKARPETKA", "MSZA ŚW.", "BAGAŻNIK", "NURT", "HERBATNIK", "BITWA", "ULEWA", "MARIONETKA", "SILNIK", "TACA", "CZAROWNICA", "ŁĄKA", "PIEPRZ", "CIELĘCINA", "ANTARKTYDA", "PIELĘGNIARKA", "KUBEK", "PERSONEL", "UCZEŃ", "SZPITAL", "PLOTKA", "KASYNO", "INTERNET", "ŻARÓWKA", "GIGANT", "KOLEC", "JABŁKO", "ALASKA", "IGŁA", "ORGAN", "NAMIOT", "FABUŁA", "WIEŻOWIEC", "TĘCZA", "POLICJA", "PODATEK", "ZAKLĘCIE", "KUKURYDZA", "GAZ", "ŚNIEG", "NARTY", "EGIPT", "PRZESTRZEŃ", "KAPITAN", "TATUAŻ", "SZKLARNIA", "SPOT", "POP CORN", "HOMER", "OBÓZ", "SALSA", "MILIONER", "WIRUS", "DUBELTÓWKA", "PIRAMIDA", "ŁAŃCUCH", "CHMURA", "KUCHENKA MIKROFALOWA", "ŚCIEŻKA", "CIERPLIWY", "SATELITA", "WAMPIR", "DELTA", "SZKOŁA", "SŁOMKA", "DYRYGENT", "BLUES", "ŚMIERĆ", "KIEŁ", "SKOK", "GNIAZDO", "BELKA", "PRALNIA", "NERW", "WYPADEK", "ORZECH", "SHERWOOD", "ARMIA", "KIWI", "TRUSKAWKA", "SZEWC", "OBSERWATORIUM", "UNIWERSYTET", "BĘBEN", "LIST", "ŻYCZENIE", "WARGA", "RODEO", "DOBRO", "CENTAUR", "SKRZYDŁO", "SUPERMARKET", "STAL", "MARCHEWKA", "BIEDRONKA", "TANIEC", "KRZYŻ", "ZASADA", "PRAWNIK", "NIEMCY", "ARMATA", "SIŁA", "DŹWIĘK", "MORS", "MUSZKIETER", "KELNER", "STRÓJ", "DUSZA", "PRZEŁĄCZNIK", "PODUSZKA", "HIMALAJE", "CZAPKA", "JASKINIA", "KOD", "ZIEMIA", "MAŁPA", "HYMN", "DRABINA", "STRONA", "SZYNKA", "ATRAMENT", "TEST", "KRASNOLUD", "TERMOS", "PRÓŻNIA", "ZAPACH", "PAN MŁODY", "KOMBINERKI", "PANNA MŁODA", "BRAT", "INDIE", "GOSPODARSTWO", "STRUNA", "WHISKY", "AZTEK", "GRANICA", "STETOSKOP", "ZWIĄZEK", "SZCZĘŚCIE", "MIÓD", "SZPIEG", "SZAMPON", "WIEWIÓRKA", "MIKROSKOP", "ZESPÓŁ", "ROBIN", "JASTRZĄB", "KAWA", "SZNUR", "KROK", "ŚCIANA", "GRA", "SHERLOCK", "MARMUR", "LOT", "STRACH NA WRÓBLE", "PARAFIA", "BERLIN", "MIECZ", "CZARODZIEJ", "KRET", "PIRAT", "KĄPIEL", "HUŚTAWKA", "METR", "RZYM", "KANGUR", "NIETOPERZ", "BANAN", "WIĘZIENIE", "CHLEB", "ROBOT", "ŚLEPIEC", "BURZA", "STRAJK", "SATURN", "CYNA", "PRZYCISK", "TEMBLAK", "HERBATA", "POCZTA", "FASOLA", "STOCZNIA", "RDZA", "KIEROWCA", "MŁOTEK", "CHINY", "OKRUCHY", "NAUKOWIEC", "ŻAGIEL", "DIAMENT", "KOKTAJL", "PIĘTRO", "WRONA", "KOWBOJ", "STADION", "WŁOSY", "DRZWI", "TACZKA", "MEKSYK", "MYDŁO", "JOWISZ", "KOZA", "DZIEŃ", "NYLON", "TRAFIENIE", "STOPA", "ZARZĄD", "KOŚĆ SŁONIOWA", "KORPORACJA", "PIES", "HERKULES", "MIŁOŚĆ", "GÓRA", "BOMBA", "KOŁNIERZ", "SZTUCZKA", "BERMUDY", "AGENT", "PULA", "ZEGAR", "CENTRUM", "TWARZ", "PALMA", "KSIĄŻKA", "TWORZYWO SZTUCZNE", "YELLOWSTONE", "KOMETA", "REKIN", "LIMUZYNA", "SIANO", "ANIOŁ", "KLUCZ", "REWOLUCJA", "FLOTA", "TRZĘSIENIE ZIEMI", "TKANINA", "ŻURAW", "GIMNASTYK", "MRÓWKA", "WIOSŁO", "GRILL", "FLISAK", "PIASEK", "SÓL", "KOPNIĘCIE", "KUCHARZ", "BAWÓŁ", "CUKIER", "MAMA", "KRYJÓWKA", "SZPILKA", "WENTYLATOR", "TELESKOP", "KOMIK", "SIEĆ", "SZARAŃCZA", "PARK", "POETA", "OMDLENIE", "DŹWIG", "ANGLIA", "WĘZEŁ", "MYSZ", "BAGNO", "WYBRZEŻE", "LODOWIEC", "SPADEK", "SALON", "BLONDYNKA", "PAPIEROS", "PARADA", "PACYFIK", "TRĄBKA", "AMAZONKA", "SER", "LAWINA", "SUMO", "ISLANDIA", "LASER", "DZIECKO", "WIEŻA", "PASEK", "KRÓLIK", "BAR", "STRZAŁ", "KRAN", "KATEDRA", "BALON", "ANTYK", "SZKŁO"];

  handleChangeRole = id => {
    this.setState({
      role: id,
    })
  }

  handleChangeNumber = e => {
    const numbers = this.state.numbers;
    numbers[e.target.id] = e.target.value;
    this.setState({
      numbers
    })
  }

  handleDrawClick = () => {
    const { numbers } = this.state;
    // Sum of given numbers
    let sumNumbers = 0;
    for (let i = 0; i < numbers.length; i++) {
      sumNumbers = sumNumbers + numbers[i] * 1
    }
    // Choosing starting color
    let startingColor = "";
    if (sumNumbers % 2 === 0) startingColor = "blue";
    else startingColor = "red";
    // Adding starting color to colors array
    let colors = [...this.state.colors];
    colors.push(startingColor);
    // Choosing card text and color
    const multiplicator = (numbers[0] * 1000 + numbers[1] * 100 + numbers[2] * 10 + numbers[3]);
    let cards = [...this.state.cards];
    cards.forEach(card => {
      const multiplicator2 = (multiplicator + card.id) * (card.id + 1);
      card.text = this.words[multiplicator2 % this.words.length];
      card.color = colors[multiplicator2 % colors.length];
      this.words.splice(multiplicator2 % this.words.length, 1);
      colors.splice(multiplicator2 % colors.length, 1);
    })
    // setState
    this.setState({ cards, sumNumbers, startingColor })
  }

  handleActiveCard = id => {
    if (!this.state.gameEnded) {
      const cards = [...this.state.cards];
      const selectedCard = cards.findIndex(card => card.id === id);
      if (!cards[selectedCard].checked) {
        cards.forEach(card => card.active = false);
        cards[selectedCard].active = true;
        this.setState({ cards, selectedCard });
      }
    }
  }

  removeActive = () => {
    const cards = [...this.state.cards];
    cards.forEach(card => card.active = false);
    this.setState({ cards })
  }

  handleTurnCard = () => {
    const cards = [...this.state.cards];
    const index = cards.findIndex(card => card.active);
    if (index >= 0) {
      cards[index].text = "";
      cards[index].active = false;
      cards[index].checked = true;
      this.setState({ cards })
    }
  }

  handleEndGame = () => {
    this.setState({
      gameEnded: true,
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            {<Header />}
          </header>
          <main>
            <section className="page">
              {<Page
                numbers={this.state.numbers}
                startingColor={this.state.startingColor}
                role={this.state.role}
                cards={this.state.cards}
                selectedCard={this.state.selectedCard}
                gameEnded={this.state.gameEnded}
                changeNumber={this.handleChangeNumber}
                changeRole={this.handleChangeRole}
                drawClick={this.handleDrawClick}
                activeCard={this.handleActiveCard}
                removeActive={this.removeActive}
                turnCard={this.handleTurnCard}
                endGame={this.handleEndGame}
              />}
            </section>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
