 switch (item) {
    case "oeufs":
    case "œufs":
      return 1.19;
    case "pain":
    case "pains":
      return 2.0;
    case "fromage blanc":
    case "fromages blancs":
      return 1.63;
    case "lait":
    case "laits":
      return 0.99;
    case "beurre":
    case "beurres":
      return 1.5;
    case "farine":
    case "farines":
      return 0.8;
    case "sucre":
    case "sucres":
      return 0.75;
    case "chocolat":
    case "chocolats":
      return 2.5;
    case "poulet":
    case "poulets":
      return 5.0;
    case "riz":
    case "rizs":
      return 1.2;
    case "pâtes":
    case "pâte":
      return 1.1;
    case "tomate":
    case "tomates":
      return 1.3;
    case "fromage":
    case "fromages":
      return 3.0;
    case "jambon":
    case "jambons":
      return 2.7;
    case "salade":
    case "salades":
      return 1.5;
    case "pomme":
    case "pommes":
      return 2.0;
    case "banane":
    case "bananes":
      return 1.8;
    case "poisson":
    case "poissons":
      return 6.0;
    case "yaourt":
    case "yaourts":
      return 1.25;
    case "céréale":
    case "céréales":
      return 3.5;
    case "jus d'orange":
    case "jus d'oranges":
      return 2.9;
    case "thon":
    case "thons":
      return 2.2;
    case "huile d'olive":
    case "huiles d'olive":
      return 4.0;
    case "miel":
    case "miels":
      return 3.6;
    case "café":
    case "cafés":
      return 7.0;
    case "pêche":
    case "pêches":
      return 2.99;
    case "melon":
    case "melons":
      return 2.19;
    case "nectarine jaune":
    case "nectarines jaunes":
      return 2.99;
    case "framboise":
    case "framboises":
      return 1.99;
    case "abricot":
    case "abricots":
      return 4.39;
    case "figue fraîche":
    case "figues fraîches":
      return 6.99;
    case "grenade":
    case "grenades":
      return 1.99;
    case "prune":
    case "prunes":
      return 3.99;
    case "nectarine":
    case "nectarines":
      return 3.49;
    case "pastèque":
    case "pastèques":
      return 3.0;
    case "prune rouge":
    case "prunes rouges":
      return 1.49;
    case "pitahaya":
    case "pitahayas":
      return 6.79;
    default:
      return 0;
  }
}
