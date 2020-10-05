import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  Button,
  TouchableHighlight,
  ScrollView,
  Alert,
  Dimensions,
} from "react-native";

/*README README README README README
You need to install the following modules below.
Run the following commands below using your terminal: (Make sure your are on your project folder)

>npm install @react-navigation/native
>npm install @react-navigation/stack
>expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context
>npm install react-native-maps --save-exact
*/

//Additional Modules
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { withSafeAreaInsets } from "react-native-safe-area-context";
/*Menu Lobbys Dataset*/
const Menus = [
  {
    url: "https://i.imgur.com/j9fNmRe.jpg",
    menuTitle: "INTERNATIONAL",
  },
];

const Menu = [
  {
    url: "https://i.imgur.com/zzbvJDv.png",
    menuTitle: "LOCAL",
  },
];

/*Home Screen Component*/
function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("./assets/background1.jpeg")}
      style={{ flex: 1, width: "100%", height: "100%" }}
    >

  <View style={styles.container}>
        {/* Logo Image */}
        <Image
          source={{ uri: "https://i.imgur.com/GlhBODz.png" }}
          style={{ width: 100, height: 100, marginBottom: 0 }}
        />
        <Text style={styles.desc2}> Kuwadro Virtual Museum</Text>

        {/* Lobby Menu Button */}
        <TouchableHighlight
          activeOpacity={0}
          underlayColor="#DDDDDD"
          onPress={() => navigation.navigate("Lobby")}
        >
          <View style={styles.btn}>
            <Text style={styles.btnText}>EXPLORE</Text>
          </View>
        </TouchableHighlight>

        {/* About Menu Button */}
        <TouchableHighlight
          activeOpacity={0.9}
          underlayColor="#DDDDDD"
          onPress={() => navigation.navigate("About")}
        >
          <View style={styles.btn}>
            <Text style={styles.btnText}>ABOUT</Text>
          </View>
        </TouchableHighlight>

        {/* Contact Menu Button */}
        <TouchableHighlight
          activeOpacity={0.9}
          underlayColor="#DDDDDD"
          onPress={() => navigation.navigate("Contact")}
        >
          <View style={styles.btn}>
            <Text style={styles.btnText}>CONTACT</Text>
          </View>
        </TouchableHighlight>
      </View>
    </ImageBackground>
  );
}

/*About Screen Component*/
function AboutScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("./assets/background1.jpeg")}
      style={{ flex: 1, width: "100%", height: "100%" }}
    >
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text style={styles.Title}>About us: </Text>
      <Text style={styles.desc3}>A Virtual Museum is a digital entity that draws on the characteristics of a museum, in order to complement, enhance, or augment the museum experience through personalization, interactivity and richness of content. 
      Virtual museums can perform as the digital footprint of a physical museum, or can act independently. 
       The virtual museum is also committed to public access; to both the knowledge systems imbedded in the collections and the systematic, and coherent organization of their display, as well as to their long-term preservation.
       Moreover, a virtual museum can refer to the mobile or World Wide Web offerings of traditional museums (e.g., displaying digital representations of its collections or exhibits); or can be born digital content such as, net art, virtual reality and digital art.
       </Text>
    </ImageBackground>
  );
}

/*Contact Screen Component*/
function ContactScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("./assets/background1.jpeg")}
      style={{ flex: 1, width: "100%", height: "100%" }}
    >
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
  <Text style={styles.Title}>Contacts:</Text>
  <Text style={styles.desc3}>Bill Mercado: 091753335889 {"\n"}
  Lorraine Anne Deoduco: 09458922333</Text>
  
 
    </ImageBackground>
  );
}

/*Lobby Screen Component*/
function LobbyScreen({ navigation }) {
  const [keyword, setKeyword] = useState("");
  return (
    <ScrollView styles={styles.container2}>
      <Text
        style={{
          marginTop: 15,
          marginBottom: 10,
          marginLeft: 20,
          fontSize: 28,
          textAlign: "left",
          marginHorizontal: 15,
          color: "black",
          fontFamily: "Pangram",
        }}
      >
        SEARCH:{" "}
      </Text>
      <TextInput
        style={styles.inputStyle}
        onChangeText={(text) => setKeyword(text)}
      />

      {Menus.map((menu, key) => {
        if (menu.menuTitle.toLowerCase().includes(keyword.toLowerCase())) {
          return (
            <View key={key} style={{ flexDirection: "row" }}>
              <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#ecf0f1"
                onPress={() => navigation.navigate(menu.menuTitle)}
              >
                <View style={styles.card}>
                  <Image style={styles.cardImg} source={{ uri: menu.url }} />
                  <View
                    style={{ flexDirection: "row", alignContent: "flex-end" }}
                  ></View>
                  <Text style={styles.menuTitle}>{menu.menuTitle}</Text>
                </View>
              </TouchableHighlight>
            </View>
          );
        }
      })}

      {Menu.map((menu, key) => {
        if (menu.menuTitle.toLowerCase().includes(keyword.toLowerCase())) {
          return (
            <View key={key} style={{ flexDirection: "row" }}>
              <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#ecf0f1"
                onPress={() => navigation.navigate(menu.menuTitle)}
              >
                <View style={styles.card}>
                  <Image style={styles.cardImg} source={{ uri: menu.url }} />
                  <View
                    style={{ flexDirection: "row", alignContent: "flex-end" }}
                  ></View>
                  <Text style={styles.menuTitle}>{menu.menuTitle}</Text>
                </View>
              </TouchableHighlight>
            </View>
          );
        }
      })}
    </ScrollView>
  );
}

function MenuDetail({ navigation }) {
  const [keyword, setKeyword] = useState("");
  return (
    <ScrollView>
      <Text> </Text>
      <Text> </Text>

      <Image
        style={styles.localinter}
        resizeMode="contain"
        source={require("./assets/wave.png")}
      />
      <TouchableHighlight
        activeOpacity={0.9}
        underlayColor="#DDDDDD"
        onPress={() => navigation.navigate("TheGreatWaveofKanagawa")}
      >
        <View style={styles.btn1}>
          <Text style={styles.btnText}>The Great Wave of Kanagawa </Text>
        </View>
      </TouchableHighlight>
      <Text> </Text>

      <Image
        style={styles.localinter}
        resizeMode="contain"
        source={require("./assets/european.png")}
      />

      <TouchableHighlight
        activeOpacity={0.9}
        underlayColor="#DDDDDD"
        onPress={() => navigation.navigate("Automedon")}
      >
        <View style={styles.btn1}>
          <Text style={styles.btnText}>
            Automedon with the Horses of Achilles{" "}
          </Text>
        </View>
      </TouchableHighlight>
      <Text> </Text>

      <Image
        style={styles.localinter}
        resizeMode="contain"
        source={require("./assets/northamerican.png")}
      />
      <TouchableHighlight
        activeOpacity={0.9}
        underlayColor="#DDDDDD"
        onPress={() => navigation.navigate("WashingtonCrossingtheDelaware")}
      >
        <View style={styles.btn1}>
          <Text style={styles.btnText}>Washington Crossing the Delaware </Text>
        </View>
      </TouchableHighlight>

      <Text> </Text>
      <Image
        style={styles.localinter}
        resizeMode="contain"
        source={require("./assets/australia.png")}
      />

      <TouchableHighlight
        activeOpacity={0.9}
        underlayColor="#DDDDDD"
        onPress={() => navigation.navigate("InPursuitofVenus")}
      >
        <View style={styles.btn1}>
          <Text style={styles.btnText}>In Pursuit of Venus</Text>
        </View>
      </TouchableHighlight>
      <Text> </Text>
    </ScrollView>
  );
}

function TheGreatWaveofKanagawa({ navigation }) {
  return (
    <ImageBackground
      source={require("./assets/wavesbg.png")}
      style={{ flex: 1, width: "100%", height: "100%" }}
    >
      <View>
        <Text style={styles.Title}> THE GREAT WAVE OF KANAGAWA</Text>

        <Image
          style={{
            width: 350,
            height: 218,
            marginLeft: 30,
            shadowOffset: { width: 0, height: 6 },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
          }}
          resizeMode="contain"
          source={require("./assets/wave.png")}
        />
        <Text> </Text>
        <Text> </Text>

        <Text style={styles.desc}>
          ARTIST: Hokusai {"\n"}
          CREATED: 1820-1831 {"\n"}
          ORIGIN: Japanese {"\n"}
          LOCATED: The Metropolitan Museum of art, New York{"\n"}
        </Text>
        <View
          style={{
            borderBottomColor: "white",
            borderBottomWidth: 3,
            marginLeft: 22,
            marginRight: 22,
          }}
        />
        <Text> </Text>
        <Text style={styles.desc}>
          The energetic and imposing picture The Great Wave (Kanagawa Oki Nami
          Ura) is the best-known work by Japanese artist Hokusai Katsushika
          (1760-1849), one of the greatest Japanese woodblock printmakers,
          painters and book illustrators. The Great Wave was created around 1831
          as part of a series of woodblock prints called Thirty-six Views of
          Mount Fuji (Fugaku Sanju-roku Kei). Hokusai (2004), a book written by
          the Italian professor of East Asian Art, Gian Carlo Calza, offers a
          general introduction to Hokusai’s works, looking at a chronologically
          arranged overview of his life and career. The collection of monographs
          by distinguished Western and Japanese scholars display’s wide research
          and keen discernment of present studies on Hokusai, while the abundant
          illustrations, amounting to over 700 in total, allow the readers to
          explore the fascinating world of Hokusai.
        </Text>

        <Text style={styles.desc}>
          The most eye-catching feature of the painting is the extended wave as
          it is about to break with the crash of its claw-like crest. The
          beautiful dark blue pigment used by Hokusai, called Prussian Blue, was
          a new material at the time, imported from England through China. The
          wave is about to strike the boats as if it were an enormous monster,
          one which seems to symbolise the irresistible force of nature and the
          weakness of human beings.
        </Text>

        <Text style={styles.desc}>
          In the print, Hokusai conceived the wave and the distant Mount Fuji in
          terms of geometric language. The curator at the Bibliothèque Nationale
          de France, Jocelyn Bouquillard, outlined Hokusai’s development of
          landscape prints, technical skills and creating processes in Hokusai’s
          Mount Fuji: The Complete Views in Colour. The book provides several
          statements about how Japanese culture and historical events influenced
          Hokusai’s creations as well as how he has been internationally
          perceived by the Western arts world. This informative book is a great
          guide to a deep appreciation of Hokusai’s art.
        </Text>

        <Text style={styles.desc}>
          The 39cm x 26cm small woodblock print portrays two contrasting aspects
          of existence. The wave in the foreground and Mount Fuji in the
          background are symbols chosen not only to provide a perspective
          effect, a European-style technique he had adapted in a very inventive
          way, but also to represent the unpredictability of life. Mount Fuji,
          on the other hand, signifies stillness and eternity; it is the symbol
          of Japan and, as a sacred object of worship, holds a significant place
          in Japanese beliefs.
        </Text>

        <Text style={styles.desc}>
          At the beginning of the 17th century, circa 1639, Japan had sealed
          itself off from the rest of the world and any contact with Western
          culture was forbidden. Fortunately today, this masterpiece, borne
          within Japan’s isolation, can be appreciated and admired throughout
          art exhibitions all over the world. Copies of the print are held in
          several Western institutions, including the Metropolitan Museum of Art
          in New York, the British Museum in London, the Art Institute of
          Chicago and the National Library of France.
        </Text>

        <Text> </Text>
      </View>
    </ImageBackground>
  );
}

function Automedon({ navigation }) {
  return (
    <ImageBackground
      source={require("./assets/europeanbg.png")}
      style={{ flex: 1, width: "100%", height: "100%" }}
    >
      <View>
        <Text style={styles.Title}>AUTOMEDON WITH THE HORSES OF ARCHILLES</Text>

        <Image
          style={{
            width: 350,
            height: 218,
            marginLeft: 30,
            shadowOffset: { width: 0, height: 6 },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
          }}
          resizeMode="contain"
          source={require("./assets/european.png")}
        />

        <Text> </Text>
        <Text> </Text>

        <Text Text style={styles.desc}>
          ARTIST: Henri Regnault {"\n"}
          CREATED: 1868 {"\n"}
          ORIGIN: French {"\n"}
          LOCATED: Metropolitan Museum of Art{"\n"}
        </Text>
        <View
          style={{
            borderBottomColor: "white",
            borderBottomWidth: 3,
            marginLeft: 22,
            marginRight: 22,
          }}
        />
        <Text> </Text>
        <Text style={styles.desc}>
          Henri Regnault painted this astonishing picture in Rome in 1868 at the
          age of 25. It shows the two divine horses of Achilles, Xanthos and
          Balios, with Automedon, Achilles’s muscle-bound groom. Three years
          later, Regnault was dead.
        </Text>

        <Text style={styles.desc}>
          Regarded by many as France’s most promising young painter, he was
          killed in battle during the last doomed attempt by Parisian troops to
          break out of their besieged city in the final days of the
          Franco-Prussian War. Edmond de Goncourt noted in his journal an
          “enormous crowd’’ at Regnault’s funeral (telling, because funerals
          were coming thick and fast in Paris at the time): “Over this young
          body of dead talent,’’ he wrote, “one wept for the interment of
          France.’’
        </Text>

        <Text style={styles.desc}>
          The painting was purchased by the Museum of Fine Arts in 1890, by
          subscription, and for many years was one of the museum’s most popular.
          It fell out of fashion and was relegated to storage, until curator
          George Shackelford had it cleaned and put back on display in 1996.
        </Text>

        <Text> </Text>

        <Text> </Text>

        <Text> </Text>
      </View>
    </ImageBackground>
  );
}

function WashingtonCrossingtheDelaware({ navigation }) {
  return (
    <ImageBackground
      source={require("./assets/northamericanbg.png")}
      style={{ flex: 1, width: "100%", height: "100%" }}
    >
      <View>
        <Text style={styles.Title}>WASHINGTON CROSSING THE DELAWARE</Text>

        <Image
          style={{
            width: 350,
            height: 218,
            marginLeft: 30,
            shadowOffset: { width: 0, height: 6 },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
          }}
          resizeMode="contain"
          source={require("./assets/northamerican.png")}
        />

        <Text> </Text>
        <Text> </Text>

        <Text style={styles.desc}>
          ARTIST: Emanuel Leutze {"\n"}
          CREATED: 1851 {"\n"}
          ORIGIN: American {"\n"}
          LOCATED: Metropolitan Museum of Art and Minnesota Marine Art Museum
          {"\n"}
        </Text>
        <View
          style={{
            borderBottomColor: "white",
            borderBottomWidth: 3,
            marginLeft: 22,
            marginRight: 22,
          }}
        />
        <Text> </Text>
        <Text style={styles.desc}>
          Emanuel Gottlieb Leutze’s Washington Crossing the Delaware is one of
          the most famous works of art ever made. The piece has been endlessly
          parodied, with everyone from Richard Nixon to Darth Vader taking the
          pride of place of General George Washington. Leutze’s painting—there
          are two existing versions, one at New York’s Metropolitan Museum of
          Art and one at the the Minnesota Marine Art Museum—speaks to the
          heroic mythology that so many love to ascribe to America’s founding.
          It is, no doubt, an iconic work of history painting, though while it
          was masterfully executed, its historical accuracy leaves something to
          be desired
        </Text>

        <Text style={styles.desc}>
          It commemorates General George Washington's crossing of the Delaware
          River with the Continental Army on the night of December 25–26, 1776,
          during the American Revolutionary War. That action was the first move
          in a surprise attack and victory against Hessian forces at the Battle
          of Trenton in New Jersey on the morning of December 26.
        </Text>

        <Text> </Text>

        <Text> </Text>
      </View>
    </ImageBackground>
  );
}

function InPursuitofVenus({ navigation }) {
  return (
    <ImageBackground
      source={require("./assets/australiabg.png")}
      style={{ flex: 1, width: "100%", height: "100%" }}
    >
      <View>
        <Text style={styles.Title}>IN PURSUIT OF VENUS</Text>
        <Image
          style={{
            width: 350,
            height: 218,
            marginLeft: 30,
            shadowOffset: { width: 0, height: 6 },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
          }}
          resizeMode="contain"
          source={require("./assets/australia.png")}
        />

        <Text> </Text>
        <Text> </Text>

        <Text style={styles.desc}>
          ARTIST: Lisa Reihana {"\n"}
          CREATED: 2019 {"\n"}
          ORIGIN: Australian {"\n"}
          LOCATED: The J.S. McLean Centre for Indigenous and Canadian Art {"\n"}
        </Text>
        <View
          style={{
            borderBottomColor: "white",
            borderBottomWidth: 3,
            marginLeft: 22,
            marginRight: 22,
          }}
        />
        <Text> </Text>
        <Text style={styles.desc}>
          Over the past five hundred years, the colonial imagination has placed
          Indigenous bodies in positions that are pleasing, romantic and noble.
          By exerting power and maintaining control over the gaze, this practice
          debilitates Indigenous peoples’ sovereignty and self-determination. In
          this installation, Māori artist Lisa Reihana actively resists such
          static misrepresentations of the past and present in a video work that
          explores issues of identity, gender, and colonial violence. Conceived
          as a response to the 1800s wallpaper Les sauvages de la mer Pacifique
          (pictured below), this monumental installation brings to life Māori
          and Pacific Indigenous people’s relationships with their cultural
          knowledge and spaces. Although the wallpaper was said to represent
          Pacific landscapes and peoples, it was completely fictional, a mash-up
          of flora, fashions and people from other times and places. Reihana
          reimagines the wallpaper as a “panoramic pantomime,” creating
          historical and imagined scenes with Indigenous actors accompanied by a
          rich soundscape that includes dialogue in many Pacific languages.
        </Text>

        <Text> </Text>
      </View>
    </ImageBackground>
  );
}

function Local({ navigation }) {
  const [keyword, setKeyword] = useState("");
  return (
    <ScrollView>
      <Text> </Text>
      <Text> </Text>

      <Image
        style={styles.localinter}
        resizeMode="contain"
        source={require("./assets/lasdaman.png")}
      />

      <TouchableHighlight
        activeOpacity={0.9}
        underlayColor="#DDDDDD"
        onPress={() => navigation.navigate("LasDamasRomanas")}
      >
        <View style={styles.btn1}>
          <Text style={styles.btnText}>Las Damas Romanas</Text>
        </View>
      </TouchableHighlight>
      <Text> </Text>
      <Image
        style={styles.localinter}
        resizeMode="contain"
        source={require("./assets/interaction.png")}
      />

      <TouchableHighlight
        activeOpacity={0.9}
        underlayColor="#DDDDDD"
        onPress={() => navigation.navigate("Interaction")}
      >
        <View style={styles.btn1}>
          <Text style={styles.btnText}>Interaction </Text>
        </View>
      </TouchableHighlight>
      <Text> </Text>
      <Image
        style={styles.localinter}
        resizeMode="contain"
        source={require("./assets/candle.png")}
      />

      <TouchableHighlight
        activeOpacity={0.9}
        underlayColor="#DDDDDD"
        onPress={() => navigation.navigate("CandleVendors")}
      >
        <View style={styles.btn1}>
          <Text style={styles.btnText}>Candle Vendors</Text>
        </View>
      </TouchableHighlight>

      <Text> </Text>
        <Image
          style={styles.localinter}
          resizeMode="contain"
          source={require("./assets/spoliarium.png")}
        />

        <TouchableHighlight
          activeOpacity={0.9}
          underlayColor="#DDDDDD"
          onPress={() => navigation.navigate("Spoliarium")}
        >
          <View style={styles.btn1}>
            <Text style={styles.btnText}>Spoliarium</Text>
          </View>
        </TouchableHighlight>

      <Text> </Text>
    </ScrollView>
  );
}

function LasDamasRomanas({ navigation }) {
  return (
    <ImageBackground
      source={require("./assets/lasdamasbg.png")}
      style={{ flex: 1, width: "100%", height: "100%" }}
    >
      <View>
        <Text style={styles.Title}>LAS DAMAS ROMANAS</Text>

        <Image
          style={{
            width: 350,
            height: 218,
            marginLeft: 30,
            shadowOffset: { width: 0, height: 6 },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
          }}
          resizeMode="contain"
          source={require("./assets/lasdaman.png")}
        />

        <Text> </Text>
        <Text> </Text>

        <Text style={styles.desc}>
          ARTIST: Juan Luna {"\n"}
          CREATED: 1882 {"\n"}
          LOCATED: Private Collection {"\n"}
        </Text>
        <View
          sstyle={{
            borderBottomColor: "white",
            borderBottomWidth: 3,
            marginLeft: 22,
            marginRight: 22,
          }}
        />
        <Text> </Text>
        <Text style={styles.desc}>
          Las damas Romanas (Roman maidens) by the Filipino painter Juan Luna y
          Novicio (1857-1899) was an unlocated work for over a century ever
          since it was painted. Documentation was scant: Las Damas Romanas was
          but a title in the 1957 biography of Luna by Carlos E. Da Silva; it
          was but a faded black and white photograph from the file of the
          pre-war art dealer and historian Alfonso T. Ongpin, reproduced by
          Santiago Pilar in the standard work on the artist (1980). Las Damas
          Romanas, an early work, enlarges our knowledge and appreciation of
          Luna who is unfortunately remembered for his largest work Spoliarium
          (1884) that may well be his most important painting historically, but
          is not necessarily the best aesthetically.
        </Text>

        <Text style={styles.desc}>
          To appreciate the dark and gory Spoliarium that now dominates the Hall
          of the Masters in the National Gallery in Manila, one has to remember
          that aside from being an artist, Juan Luna is also considered a hero
          and patriot of the Philippines. Spoliarium won the first gold medal in
          the Madrid Exposition of Fine Arts in 1884, a triumph that made Luna
          and his contemporary, Felix Resurrection Hidalgo, who won a silver
          medal, the first "international artists" of the Philippines. Luna
          painted a scene from ancient Roman history, the corpse of a gladiator
          being discarded in a room under the Coliseum. So powerful was this
          image it was used by Filipino propagandists as an allegory of the
          abuses of Spain in the colonial Philippines. It takes a bit of
          imagination and a heavy dose of textbook history for young Filipinos
          to see oppression and the Philippines in a painting best understood
          alongside the recent films like "Gladiator". One can read many
          meanings into a painting, sometimes, even meanings unintended by the
          artist. For example, in 1983, Spoliarium was seen to be quite
          prophetic. Benigno S. Aquino was assassinated on the tarmac of the
          Manila International Airport and one in a series of photographs
          showing soldiers dragging the corpse into a military van has been said
          to mirror the main element in Luna's 1884 canvas.
        </Text>

        <Text style={styles.desc}>
          There are three main pictorial elements here: women, dogs, and doves.
          Dogs were part of Roman life and were basically used: for hunting, as
          guardians of home or property, and in this case as women's companions.
          These slim and elegant dogs were pets, although they had to be kept on
          a leash. An inscription said to have been found in the ruins of
          Pompeii reads "cave canis." This is a warning still used
          today---"Beware of Dog". Doves were often given erotic connotations;
          in the Philippines, to refer to a woman as kalapatingmababaanglipad
          (low-flying dove) means she is of ill-repute. So is this an allegory
          of restrained lust or merely a way for Luna to execute many details
          copied from trips to Naples, Pompeii, Venice and Florence? It has even
          been suggested that the dark-haired woman on the right is Luna's wife,
          Paz Pardo de Tavera, who he shot and killed in Paris in 1892 at the
          height of a jealous rage. That would have fitted the theme of love and
          lust but unfortunately, Luna was not married when he painted Las Damas
          Romanas in Rome in 1882. He had not even met his future wife at the
          time. That multiple meanings, different interpretations can be found
          in one painting always adds to its interest.
        </Text>

        <Text style={styles.desc}>
          Las Damas Romanas is one of a number of drawings, watercolors, and
          oils by Luna that have surfaced in the past quarter of a century. As
          an important example of his early work, Las Damas Romanas helps us
          understand his training as an academic painter and enriches our
          knowledge of his life and work.
        </Text>

        <Text> </Text>
      </View>
    </ImageBackground>
  );
}

function Interaction({ navigation }) {
  return (
    <ImageBackground
      source={require("./assets/interactionbg.png")}
      style={{ flex: 1, width: "100%", height: "100%" }}
    >
      <View>
        <Text style={styles.Title}>INTERACTION</Text>

        <Image
          style={{
            width: 350,
            height: 218,
            marginLeft: 30,
            shadowOffset: { width: 0, height: 6 },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
          }}
          resizeMode="contain"
          source={require("./assets/interaction.png")}
        />

        <Text> </Text>
        <Text> </Text>

        <Text style={styles.desc}>
          ARTIST: Victorio Edades {"\n"}
          CREATED: 1935 {"\n"}
          MOVEMENT: Modernism {"\n"}
          LOCATED: Eleuterio Pascual Collection{"\n"}
        </Text>
        <View
          style={{
            borderBottomColor: "white",
            borderBottomWidth: 3,
            marginLeft: 22,
            marginRight: 22,
          }}
        />
        <Text> </Text>
        <Text style={styles.desc}>
          Early styles after his stint in architecture already show his
          inclination towards modernist technique. In The Market and The Picnic,
          his choice of subject matter do not take flight from pleasant daily
          scenery; yet his brush strokes and observance of non-proportionality
          in the figures made his teachers consider him "very ambitious." His
          earlier works already showed his affinity towards the style of Cézanne
          and other Post-Impressionists
        </Text>

        <Text style={styles.desc}>
          The height of his artistic development is his dynamic entry into
          Philippine art in 1928 with his solo exhibit at the Philippine
          Columbia Club. Here he mounted his most renowned work, The Builders.
          This work is the sum total of all the other pieces included in the
          show. They are a far cry from the works of the first Philippine
          national artist and most popular painter Fernando Amorsolo and the
          other classicists who painted bright cheery scenes of flawless
          Filipinos and their idealized daily routines. Edades, on the other
          hand, presented figures in muddy earth colors – yellow ochres and raw
          sienna accented by bold black contours. Subjects are distorted figures
          (those whose proportions defy classical measure), and Edades’ brush
          strokes are agitated and harsh. The choice of his subject also caused
          quite a stir to those who viewed the show. He portrayed tough, dirty
          construction laborers and simple folk wrestling in dung and dust. Even
          his nudes are nothing like Amorsolo's portrayal of the Filipina at her
          best.
        </Text>

        <Text style={styles.desc}>
          There are three main pictorial elements here: women, dogs, and doves.
          Dogs were part of Roman life and were basically used: for hunting, as
          guardians of home or property, and in this case as women's companions.
          These slim and elegant dogs were pets, although they had to be kept on
          a leash. An inscription said to have been found in the ruins of
          Pompeii reads "cave canis." This is a warning still used
          today---"Beware of Dog". Doves were often given erotic connotations;
          in the Philippines, to refer to a woman as kalapatingmababaanglipad
          (low-flying dove) means she is of ill-repute. So is this an allegory
          of restrained lust or merely a way for Luna to execute many details
          copied from trips to Naples, Pompeii, Venice and Florence? It has even
          been suggested that the dark-haired woman on the right is Luna's wife,
          Paz Pardo de Tavera, who he shot and killed in Paris in 1892 at the
          height of a jealous rage. That would have fitted the theme of love and
          lust but unfortunately, Luna was not married when he painted Las Damas
          Romanas in Rome in 1882. He had not even met his future wife at the
          time. That multiple meanings, different interpretations can be found
          in one painting always adds to its interest.
        </Text>

        <Text style={styles.desc}>
          By introducing modern ideas into the Philippine art scene, Victorio
          Edades managed to destroy the conventions of domestic art, and also
          got rid of the clichéd ideology he believed stunted the development of
          Philippine art. His defiance to what the Conservatives structured as
          ‘art’ was a conscious call for real artistic expression. He attested
          that "art is ever the expression of man's emotion, and not a mere
          photographic likeness of nature. Thus to express his individual
          emotion, the artist is privileged to create in that distinctive form
          that best interprets his own experience. And the distortion of plastic
          elements of art such as line, mass and color – is one of the many ways
          of expressing one's rhythmic form." That was the reason why his
          disproportionate figures are made that way – for the sake of
          composition
        </Text>

        <Text> </Text>
      </View>
    </ImageBackground>
  );
}

function CandleVendors({ navigation }) {
  return (
    <ImageBackground
      source={require("./assets/candlebg.png")}
      style={{ flex: 1, width: "100%", height: "100%" }}
    >
      <View>
        <Text style={styles.Title}>CANDLE VENDORS</Text>

        <Image
          style={{
            width: 350,
            height: 218,
            marginLeft: 30,
            shadowOffset: { width: 0, height: 6 },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
          }}
          resizeMode="contain"
          source={require("./assets/candle.png")}
        />

        <Text> </Text>
        <Text> </Text>

        <Text style={styles.desc}>
          ARTIST: Vicente Manansala {"\n"}
          CREATED: 1976 {"\n"}
          MOVEMENT: Cubism {"\n"}
        </Text>
        <View
          style={{
            borderBottomColor: "white",
            borderBottomWidth: 3,
            marginLeft: 22,
            marginRight: 22,
          }}
        />
        <Text> </Text>
        <Text style={styles.desc}>
          Manansala up for auction is “Candle Vendors,” an oil-on-canvas dated
          and signed 1962 and sized 27” x 37” (69 cm x 94 cm). A fine example of
          Manansala using this "transparent and translucent" technique is his
          composition, "Kalabaw (Carabao)." Vicente Manansala Master painter
          Vicente Manansala is considered the most prolific and sought-after
          modernist of mid-20th century Philippine art, renowned for his
          signature visual of 'Translucent Cubism'.
        </Text>
      </View>
    </ImageBackground>
  );
}

function Spoliarium({ navigation }) {
  return (
    <ImageBackground
      source={require("./assets/spoliariumbg.png")}
      style={{ flex: 1, width: "100%", height: "100%" }}
    >
    <View>
      <Text style={styles.Title}>SPOLIARIUM</Text>

      <Image
        style={{
          width: 350,
          height: 218,
          marginLeft: 30,
          shadowOffset: { width: 0, height: 6 },
          shadowOpacity: 0.37,
          shadowRadius: 7.49,
        }}
        resizeMode="contain"
        source={require("./assets/spoliarium.png")}
      />

      <Text> </Text>
      <Text> </Text>

      <Text style={styles.desc}>
          ARTIST: Juan Luna {"\n"}
          CREATED: 1884 {"\n"}
          PERIOD: Romanticism {"\n"}
          LOCATION: National Museum of Fine Arts {"\n"}
        </Text>
      <Text>
        ______________________________________________________________________{" "}
      </Text>

      <Text> </Text>
      <Text style={styles.desc}>
      The painting features a glimpse of Roman history centered on the bloody carnage brought by gladiatorial matches.
      Spoliarium is a Latin word referring to the basement of the 
      Roman Colosseum where the fallen and dying gladiators are dumped and devoid of their worldly possessions.
      At the center of Luna’s painting are fallen gladiators being dragged by Roman soldiers.
      On the left, spectators ardently await their chance to strip off the combatants of their metal helmets and other armory. 
      In contrast with the charged emotions featured on the left, the right side meanwhile presents a somber mood. 
      An old man carries a torch perhaps searching for his son while a woman weeps the death of her loved one.
      The Spoliarium is the most valuable oil-on-canvas painting by Juan Luna, 
      a Filipino educated at the Academia de Dibujo y Pintura (Philippines) and at the Academia de San Fernando in Madrid, Spain. 
      With a size of 4.22 meters x 7.675 meters, it is the largest painting in the Philippines.
      A historical painting, it was made by Luna in 1884 as an entry to the prestigious Exposicion de Bellas Artes (Madrid Art Exposition, May 1884) and eventually won for him the First Gold Medal.

      </Text>

      <Text> </Text>
    </View>
    </ImageBackground>
  );
}

/*Main Navigations*/
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#2980b9",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        {/*HomeScreen*/}
        <Stack.Screen name="Home" component={HomeScreen} />

        {/*AboutScreen*/}
        <Stack.Screen name="About" component={AboutScreen} />

        {/*ContactScreen*/}
        <Stack.Screen name="Contact" component={ContactScreen} />

        {/*LobbyScreen*/}
        <Stack.Screen name="Lobby" component={LobbyScreen} />

        <Stack.Screen
          name="TheGreatWaveofKanagawa"
          component={TheGreatWaveofKanagawa}
        />
        <Stack.Screen name="Automedon" component={Automedon} />
        <Stack.Screen
          name="WashingtonCrossingtheDelaware"
          component={WashingtonCrossingtheDelaware}
        />
        <Stack.Screen name="InPursuitofVenus" component={InPursuitofVenus} />
        <Stack.Screen name="Local" component={Local} />
        <Stack.Screen name="LasDamasRomanas" component={LasDamasRomanas} />
        <Stack.Screen name="Interaction" component={Interaction} />
        <Stack.Screen name="CandleVendors" component={CandleVendors} />
        <Stack.Screen name="Spoliarium" component={Spoliarium} />
        {/*Looping of Screens for each Lobby*/}
        {Menus.map((menu, key) => (
          <Stack.Screen
            key={key}
            initialParams={{
              image: menu.url,
              menuTitle: menu.menuTitle,
              menuDesc: menu.menuDesc,
            }}
            name={menu.menuTitle}
            component={MenuDetail}
          />
        ))}

        {/*Looping of Screens for each Lobby*/}
        {Menu.map((menu, key) => (
          <Stack.Screen
            key={key}
            initialParams={{
              image: menu.url,
              menuTitle: menu.menuTitle,
              menuDesc: menu.menuDesc,
            }}
            name={menu.menuTitle}
            component={Local}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//Custom Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    backgroundColor: "#2980b9",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  localinter: {
    width: 390,
    height: 198,
    margin: 13,
    shadowOffset: { width: 2, height: 7 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  btn: {
    backgroundColor: "#5BAEAE",
    height: 50,
    width: 300,
    borderRadius: 5,
    margin: 5,
    justifyContent: "center",
    alignSelf: "center",
  },
  btn1: {
    backgroundColor: "#5BAEAE",
    height: 40,
    width: 355,
    borderRadius: 10,
    margin: 0,
    justifyContent: "center",
    alignSelf: "center",
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.31,
    shadowRadius: 5,
  },
  card: {
    alignSelf: "center",
    height: 225,
    backgroundColor: "#BBDDDD",
    marginHorizontal: 25,
    marginTop: 4,
    marginBottom: 8,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  cardImg: {
    width: 363,
    height: 180,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  btnText: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#ecf0f1",
    textAlign: "center",
    fontFamily: "Pangram",
  },
  Title: {
    color: "red",
    alignSelf: "center",
    fontSize: 32,
    fontWeight: "bold",
    fontFamily: "Pangram",
    color: "#FFFFFF",
    marginBottom: 15,
    textAlign: "center",
    margin: 20,
  },

  desc: {
    color: "red",
    alignSelf: "left",
    fontSize: 15,
    color: "#FFFFFF",
    margin: 20,
    textAlign: "justified",
    fontFamily: "pangram",
  },

  inputStyle: {
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    width: "90%",
    height: 40,
    fontSize: 28,
    padding: 8,
    borderWidth: 4,
    borderRadius: 2,
    borderStyle: "solid",
    borderColor: "white",
    backgroundColor: "white",
    margin: 20,
    marginTop: 0,
    alignSelf: "flex-end",
    fontFamily: "Pangram",
    color: "black",
  },
  menuTitle: {
    fontSize: 24,
    textAlign: "left",
    fontFamily: "Pangram",
    marginTop: 5,
    marginLeft: 10,
  },
  menuDesc: {
    paddingLeft: 12,
    paddingRight: 12,
    fontFamily: "Pangram",
  },
  desc2: {
    color: "red",
    alignSelf: "left",
    textAlign: "center",
    fontSize: 23,
    color: "#FFFFFF",
    marginTop: 15,
    marginBottom: 30,
    fontFamily: "Pangram light",
  },
  desc3: {
    color: "red",
    alignSelf: "left",
    textAlign: "center",
    fontSize: 23,
    color: "#FFFFFF",
    marginTop: 15,
    marginBottom: 30,
    marginLeft: 10,
    marginRight:10,
    fontFamily: "Pangram light",
    backgroundColor: "#067867",
  },
  btn: {
    height: 50,
    width: 300,
    borderRadius: 5,
    margin: 5,
    borderColor: "white",
    backgroundColor: "#067867",
    opacity: 0.85,
    borderWidth: 2,
    borderRadius: 5,
    justifyContent: "center",
    alignSelf: "center",
  },
});
