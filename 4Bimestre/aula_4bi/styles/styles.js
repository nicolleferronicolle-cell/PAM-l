import { StyleSheet } from "react-native";
import { COLORS } from "../data/dados";

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    paddingBottom: 40,
  },

  // CABEÇALHO
  headerContainer: {
    backgroundColor: COLORS.header,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  topBar: {
    height: 42,
    backgroundColor: COLORS.dark,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
  },
  topBarText: {
    color: COLORS.gray,
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 2,
  },
  topBarWiki: {
    color: COLORS.gold,
    fontSize: 12,
    fontWeight: "bold",
  },
  logoArea: {
    paddingHorizontal: 18,
    paddingVertical: 18,
  },
  logoTitle: {
    color: COLORS.white,
    fontSize: 25,
    fontWeight: "bold",
  },
  logoSubtitle: {
    color: COLORS.gold,
    fontSize: 9,
    marginTop: 6,
    letterSpacing: 1,
  },
  searchArea: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingBottom: 12,
  },
  searchInput: {
    flex: 1,
    height: 44,
    backgroundColor: COLORS.panelDark,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 4,
    paddingHorizontal: 12,
    color: COLORS.white,
  },
  searchButton: {
    width: 48,
    height: 44,
    marginLeft: 6,
    backgroundColor: COLORS.red,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  searchIcon: {
    fontSize: 19,
  },

  // RESULTADOS DA PESQUISA
  searchResults: {
    backgroundColor: COLORS.panel,
    marginHorizontal: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  searchResultsTitle: {
    color: COLORS.gold,
    fontSize: 11,
    fontWeight: "bold",
    padding: 10,
  },
  searchResult: {
    minHeight: 70,
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    padding: 8,
  },
  searchResultImage: {
    width: 52,
    height: 52,
    borderRadius: 4,
    backgroundColor: COLORS.dark,
  },
  searchResultText: {
    flex: 1,
    marginLeft: 10,
  },
  searchResultTitle: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "bold",
  },
  searchResultSubtitle: {
    color: COLORS.gray,
    fontSize: 11,
    marginTop: 4,
  },
  searchArrow: {
    color: COLORS.gold,
    fontSize: 28,
    paddingHorizontal: 8,
  },
  noResults: {
    padding: 15,
  },
  noResultsTitle: {
    color: COLORS.white,
    fontWeight: "bold",
  },
  noResultsText: {
    color: COLORS.gray,
    marginTop: 6,
    lineHeight: 18,
  },

  // MENU
  menu: {
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  menuItem: {
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  menuText: {
    color: COLORS.gray,
    fontSize: 11,
    fontWeight: "bold",
  },

  // INÍCIO
  hero: {
    margin: 15,
    padding: 25,
    backgroundColor: COLORS.panel,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: "center",
  },
  heroTitle: {
    color: COLORS.white,
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center",
  },
  heroSubtitle: {
    color: COLORS.gold,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 4,
  },
  heroText: {
    color: COLORS.gray,
    textAlign: "center",
    marginTop: 15,
    lineHeight: 20,
  },
  section: {
    padding: 15,
  },
  sectionTitle: {
    color: COLORS.gold,
    fontSize: 18,
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    paddingBottom: 10,
    marginBottom: 15,
  },
  sectionIntro: {
    color: COLORS.gray,
    marginBottom: 18,
    lineHeight: 20,
  },
  featureGrid: {
    gap: 12,
  },
  featureCard: {
    backgroundColor: COLORS.panel,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 18,
  },
  featureIcon: {
    fontSize: 30,
  },
  featureTitle: {
    color: COLORS.white,
    fontWeight: "bold",
    marginTop: 10,
  },
  featureText: {
    color: COLORS.gray,
    marginTop: 6,
    lineHeight: 18,
  },

  // CARTÃO DO PERFIL
  profileCard: {
    marginHorizontal: 15,
    padding: 18,
    backgroundColor: COLORS.panel,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.red,
  },
  profileCardTitle: {
    color: COLORS.gold,
    fontSize: 11,
    fontWeight: "bold",
  },
  profileCardName: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
  },
  profileCardText: {
    color: COLORS.gray,
    marginTop: 5,
  },

  // PERSONAGENS
  characterGrid: {
    gap: 15,
  },
  characterCard: {
    backgroundColor: COLORS.panel,
    borderWidth: 1,
    borderColor: COLORS.border,
    overflow: "hidden",
  },
  characterImage: {
    width: "100%",
    height: 330,
    backgroundColor: COLORS.dark,
  },
  characterInfo: {
    padding: 15,
  },
  characterName: {
    color: COLORS.white,
    fontSize: 19,
    fontWeight: "bold",
  },
  characterSpecies: {
    color: COLORS.gold,
    fontSize: 12,
    marginTop: 5,
  },
  characterDescription: {
    color: COLORS.gray,
    fontSize: 13,
    lineHeight: 20,
    marginTop: 10,
  },

  // TEMPORADAS
  seasonGrid: {
    gap: 15,
  },
  seasonCard: {
    backgroundColor: COLORS.panel,
    borderWidth: 1,
    borderColor: COLORS.border,
    overflow: "hidden",
  },
  seasonImage: {
    width: "100%",
    height: 180,
    backgroundColor: COLORS.dark,
  },
  seasonInfo: {
    padding: 15,
  },
  seasonTitle: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "bold",
  },
  seasonEpisodes: {
    color: COLORS.gold,
    marginTop: 5,
  },

  // LOCAIS
  locationCard: {
    backgroundColor: COLORS.panel,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 15,
    overflow: "hidden",
  },
  locationImage: {
    width: "100%",
    height: 210,
    backgroundColor: COLORS.dark,
  },
  locationInfo: {
    padding: 15,
  },
  locationTitle: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "bold",
  },
  locationSubtitle: {
    color: COLORS.gold,
    marginTop: 5,
  },

  // LOGIN
  loginContainer: {
    padding: 20,
    justifyContent: "center",
    flexGrow: 1,
  },
  loginLogo: {
    fontSize: 50,
    textAlign: "center",
  },
  loginTitle: {
    color: COLORS.white,
    textAlign: "center",
    fontSize: 23,
    fontWeight: "bold",
    marginTop: 10,
  },
  loginSubtitle: {
    color: COLORS.gold,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 25,
  },
  wikiBox: {
    backgroundColor: COLORS.panel,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  boxHeader: {
    backgroundColor: COLORS.dark,
    padding: 13,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  boxHeaderText: {
    color: COLORS.gold,
    fontWeight: "bold",
  },
  boxContent: {
    padding: 18,
  },
  label: {
    color: COLORS.gray,
    fontSize: 12,
    marginBottom: 6,
    marginTop: 10,
  },
  input: {
    height: 45,
    backgroundColor: COLORS.panelDark,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 4,
    paddingHorizontal: 12,
    color: COLORS.white,
  },
  textArea: {
    height: 100,
    paddingTop: 12,
    textAlignVertical: "top",
  },
  redButton: {
    backgroundColor: COLORS.red,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 18,
    borderRadius: 4,
  },
  redButtonText: {
    color: COLORS.white,
    fontWeight: "bold",
  },
  loginError: {
    backgroundColor: COLORS.redDark,
    padding: 12,
    marginTop: 15,
    borderWidth: 1,
    borderColor: COLORS.redLight,
  },
  loginErrorTitle: {
    color: COLORS.gold,
    fontWeight: "bold",
  },
  loginErrorText: {
    color: COLORS.white,
    marginTop: 5,
  },
  footerText: {
    color: COLORS.grayDark,
    textAlign: "center",
    marginTop: 18,
  },

  // PERFIL
  profileContainer: {
    paddingBottom: 40,
  },
  simpleHeader: {
    backgroundColor: COLORS.dark,
    padding: 18,
  },
  simpleHeaderTitle: {
    color: COLORS.gold,
    fontWeight: "bold",
    textAlign: "center",
  },
  profileWelcome: {
    color: COLORS.white,
    fontSize: 15,
    marginBottom: 10,
  },
});

export default styles;