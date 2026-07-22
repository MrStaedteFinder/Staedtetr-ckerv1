const cities = [
  {"id": "berlin", "name": "Berlin", "state": "Berlin", "population": 3700577, "lat": 52.52437, "lng": 13.41053, "capital": true},
  {"id": "hamburg", "name": "Hamburg", "state": "Hamburg", "population": 1869473, "lat": 53.55073, "lng": 9.99302, "capital": true},
  {"id": "muenchen", "name": "München", "state": "Bayern", "population": 1505036, "lat": 48.13743, "lng": 11.57549, "capital": true},
  {"id": "koeln", "name": "Köln", "state": "Nordrhein-Westfalen", "population": 1025523, "lat": 50.93333, "lng": 6.95, "capital": false},
  {"id": "frankfurt-main", "name": "Frankfurt am Main", "state": "Hessen", "population": 760656, "lat": 50.11552, "lng": 8.68417, "capital": false},
  {"id": "duesseldorf", "name": "Düsseldorf", "state": "Nordrhein-Westfalen", "population": 619444, "lat": 51.22319, "lng": 6.77927, "capital": true},
  {"id": "leipzig", "name": "Leipzig", "state": "Sachsen", "population": 615932, "lat": 51.33962, "lng": 12.37129, "capital": false},
  {"id": "stuttgart", "name": "Stuttgart", "state": "Baden-Württemberg", "population": 612663, "lat": 48.78232, "lng": 9.17702, "capital": true},
  {"id": "dortmund", "name": "Dortmund", "state": "Nordrhein-Westfalen", "population": 600880, "lat": 51.51494, "lng": 7.466, "capital": false},
  {"id": "bremen", "name": "Bremen", "state": "Bremen", "population": 588413, "lat": 53.07582, "lng": 8.80717, "capital": true},
  {"id": "essen", "name": "Essen", "state": "Nordrhein-Westfalen", "population": 573618, "lat": 51.45657, "lng": 7.01228, "capital": false},
  {"id": "dresden", "name": "Dresden", "state": "Sachsen", "population": 562764, "lat": 51.05089, "lng": 13.73832, "capital": true},
  {"id": "nuernberg", "name": "Nürnberg", "state": "Bayern", "population": 531159, "lat": 49.45421, "lng": 11.07752, "capital": false},
  {"id": "hannover", "name": "Hannover", "state": "Niedersachsen", "population": 522803, "lat": 52.37052, "lng": 9.73322, "capital": true},
  {"id": "duisburg", "name": "Duisburg", "state": "Nordrhein-Westfalen", "population": 500810, "lat": 51.43247, "lng": 6.76516, "capital": false},
  {"id": "bochum", "name": "Bochum", "state": "Nordrhein-Westfalen", "population": 358880, "lat": 51.48165, "lng": 7.21648, "capital": false},
  {"id": "wuppertal", "name": "Wuppertal", "state": "Nordrhein-Westfalen", "population": 357243, "lat": 51.25627, "lng": 7.14816, "capital": false},
  {"id": "bielefeld", "name": "Bielefeld", "state": "Nordrhein-Westfalen", "population": 331419, "lat": 52.03333, "lng": 8.53333, "capital": false},
  {"id": "bonn", "name": "Bonn", "state": "Nordrhein-Westfalen", "population": 323587, "lat": 50.73438, "lng": 7.09549, "capital": false},
  {"id": "mannheim", "name": "Mannheim", "state": "Baden-Württemberg", "population": 318035, "lat": 49.4891, "lng": 8.46694, "capital": false},
  {"id": "karlsruhe", "name": "Karlsruhe", "state": "Baden-Württemberg", "population": 309050, "lat": 49.00937, "lng": 8.40444, "capital": false},
  {"id": "muenster", "name": "Münster", "state": "Nordrhein-Westfalen", "population": 306368, "lat": 51.96236, "lng": 7.62571, "capital": false},
  {"id": "augsburg", "name": "Augsburg", "state": "Bayern", "population": 301786, "lat": 48.37154, "lng": 10.89851, "capital": false},
  {"id": "wiesbaden", "name": "Wiesbaden", "state": "Hessen", "population": 288584, "lat": 50.08601, "lng": 8.24435, "capital": true},
  {"id": "moenchengladbach", "name": "Mönchengladbach", "state": "Nordrhein-Westfalen", "population": 267176, "lat": 51.18539, "lng": 6.44172, "capital": false},
  {"id": "gelsenkirchen", "name": "Gelsenkirchen", "state": "Nordrhein-Westfalen", "population": 266199, "lat": 51.50508, "lng": 7.09654, "capital": false},
  {"id": "aachen", "name": "Aachen", "state": "Nordrhein-Westfalen", "population": 263703, "lat": 50.77664, "lng": 6.08342, "capital": false},
  {"id": "braunschweig", "name": "Braunschweig", "state": "Niedersachsen", "population": 252811, "lat": 52.26594, "lng": 10.52673, "capital": false},
  {"id": "kiel", "name": "Kiel", "state": "Schleswig-Holstein", "population": 251842, "lat": 54.32133, "lng": 10.13489, "capital": true},
  {"id": "chemnitz", "name": "Chemnitz", "state": "Sachsen", "population": 247252, "lat": 50.8357, "lng": 12.92922, "capital": false},
  {"id": "magdeburg", "name": "Magdeburg", "state": "Sachsen-Anhalt", "population": 244494, "lat": 52.13129, "lng": 11.63189, "capital": true},
  {"id": "freiburg", "name": "Freiburg im Breisgau", "state": "Baden-Württemberg", "population": 237460, "lat": 47.9959, "lng": 7.85222, "capital": false},
  {"id": "krefeld", "name": "Krefeld", "state": "Nordrhein-Westfalen", "population": 230738, "lat": 51.33645, "lng": 6.55381, "capital": false},
  {"id": "halle", "name": "Halle (Saale)", "state": "Sachsen-Anhalt", "population": 226186, "lat": 51.48158, "lng": 11.97947, "capital": false},
  {"id": "mainz", "name": "Mainz", "state": "Rheinland-Pfalz", "population": 223888, "lat": 49.98185, "lng": 8.28008, "capital": true},
  {"id": "erfurt", "name": "Erfurt", "state": "Thüringen", "population": 218793, "lat": 50.97734, "lng": 11.03536, "capital": true},
  {"id": "luebeck", "name": "Lübeck", "state": "Schleswig-Holstein", "population": 217061, "lat": 53.86893, "lng": 10.68729, "capital": false},
  {"id": "oberhausen", "name": "Oberhausen", "state": "Nordrhein-Westfalen", "population": 213178, "lat": 51.47805, "lng": 6.8625, "capital": false},
  {"id": "rostock", "name": "Rostock", "state": "Mecklenburg-Vorpommern", "population": 204929, "lat": 54.0887, "lng": 12.14049, "capital": false},
  {"id": "kassel", "name": "Kassel", "state": "Hessen", "population": 196799, "lat": 51.31667, "lng": 9.5, "capital": false},
  {"id": "hagen", "name": "Hagen", "state": "Nordrhein-Westfalen", "population": 189983, "lat": 51.36081, "lng": 7.47168, "capital": false},
  {"id": "potsdam", "name": "Potsdam", "state": "Brandenburg", "population": 185137, "lat": 52.39886, "lng": 13.06566, "capital": true},
  {"id": "saarbruecken", "name": "Saarbrücken", "state": "Saarland", "population": 182859, "lat": 49.23262, "lng": 7.00982, "capital": true},
  {"id": "hamm", "name": "Hamm", "state": "Nordrhein-Westfalen", "population": 179108, "lat": 51.68033, "lng": 7.82089, "capital": false},
  {"id": "ludwigshafen-am-rhein", "name": "Ludwigshafen am Rhein", "state": "Rheinland-Pfalz", "population": 177355, "lat": 49.48121, "lng": 8.44641, "capital": false},
  {"id": "oldenburg", "name": "Oldenburg", "state": "Niedersachsen", "population": 177055, "lat": 53.14039, "lng": 8.21479, "capital": false},
  {"id": "muelheim-an-der-ruhr", "name": "Mülheim an der Ruhr", "state": "Nordrhein-Westfalen", "population": 171674, "lat": 51.43218, "lng": 6.87967, "capital": false},
  {"id": "leverkusen", "name": "Leverkusen", "state": "Nordrhein-Westfalen", "population": 168299, "lat": 51.0303, "lng": 6.98432, "capital": false},
  {"id": "darmstadt", "name": "Darmstadt", "state": "Hessen", "population": 168253, "lat": 49.87167, "lng": 8.65027, "capital": false},
  {"id": "osnabrueck", "name": "Osnabrück", "state": "Niedersachsen", "population": 166257, "lat": 52.27264, "lng": 8.0498, "capital": false},
  {"id": "solingen", "name": "Solingen", "state": "Nordrhein-Westfalen", "population": 164621, "lat": 51.17343, "lng": 7.0845, "capital": false},
  {"id": "paderborn", "name": "Paderborn", "state": "Nordrhein-Westfalen", "population": 155906, "lat": 51.71905, "lng": 8.75439, "capital": false},
  {"id": "herne", "name": "Herne", "state": "Nordrhein-Westfalen", "population": 156266, "lat": 51.5388, "lng": 7.22572, "capital": false},
  {"id": "heidelberg", "name": "Heidelberg", "state": "Baden-Württemberg", "population": 155756, "lat": 49.40768, "lng": 8.69079, "capital": false},
  {"id": "neuss", "name": "Neuss", "state": "Nordrhein-Westfalen", "population": 153767, "lat": 51.19807, "lng": 6.68504, "capital": false},
  {"id": "regensburg", "name": "Regensburg", "state": "Bayern", "population": 151517, "lat": 49.01513, "lng": 12.10161, "capital": false},
  {"id": "ingolstadt", "name": "Ingolstadt", "state": "Bayern", "population": 140799, "lat": 48.76508, "lng": 11.42372, "capital": false},
  {"id": "pforzheim", "name": "Pforzheim", "state": "Baden-Württemberg", "population": 134912, "lat": 48.88436, "lng": 8.69892, "capital": false},
  {"id": "wuerzburg", "name": "Würzburg", "state": "Bayern", "population": 133753, "lat": 49.79391, "lng": 9.95121, "capital": false},
  {"id": "offenbach-am-main", "name": "Offenbach am Main", "state": "Hessen", "population": 133195, "lat": 50.10061, "lng": 8.76647, "capital": false},
  {"id": "fuerth", "name": "Fürth", "state": "Bayern", "population": 131344, "lat": 49.47593, "lng": 10.98856, "capital": false},
  {"id": "heilbronn", "name": "Heilbronn", "state": "Baden-Württemberg", "population": 131986, "lat": 49.13995, "lng": 9.22054, "capital": false},
  {"id": "ulm", "name": "Ulm", "state": "Baden-Württemberg", "population": 129882, "lat": 48.39841, "lng": 9.99155, "capital": false},
  {"id": "wolfsburg", "name": "Wolfsburg", "state": "Niedersachsen", "population": 129813, "lat": 52.42452, "lng": 10.7815, "capital": false},
  {"id": "goettingen", "name": "Göttingen", "state": "Niedersachsen", "population": 130521, "lat": 51.53443, "lng": 9.93228, "capital": false},
  {"id": "reutlingen", "name": "Reutlingen", "state": "Baden-Württemberg", "population": 118852, "lat": 48.49144, "lng": 9.20427, "capital": false},
  {"id": "bremerhaven", "name": "Bremerhaven", "state": "Bremen", "population": 118502, "lat": 53.55357, "lng": 8.57553, "capital": false},
  {"id": "bottrop", "name": "Bottrop", "state": "Nordrhein-Westfalen", "population": 118482, "lat": 51.52392, "lng": 6.9285, "capital": false},
  {"id": "erlangen", "name": "Erlangen", "state": "Bayern", "population": 116450, "lat": 49.59099, "lng": 11.00783, "capital": false},
  {"id": "recklinghausen", "name": "Recklinghausen", "state": "Nordrhein-Westfalen", "population": 114851, "lat": 51.61379, "lng": 7.19738, "capital": false},
  {"id": "remscheid", "name": "Remscheid", "state": "Nordrhein-Westfalen", "population": 113333, "lat": 51.17983, "lng": 7.1925, "capital": false},
  {"id": "koblenz", "name": "Koblenz", "state": "Rheinland-Pfalz", "population": 113020, "lat": 50.35357, "lng": 7.57883, "capital": false},
  {"id": "bergisch-gladbach", "name": "Bergisch Gladbach", "state": "Nordrhein-Westfalen", "population": 111174, "lat": 50.9856, "lng": 7.13298, "capital": false},
  {"id": "jena", "name": "Jena", "state": "Thüringen", "population": 109725, "lat": 50.92878, "lng": 11.5899, "capital": false},
  {"id": "salzgitter", "name": "Salzgitter", "state": "Niedersachsen", "population": 104433, "lat": 52.15705, "lng": 10.4154, "capital": false},
  {"id": "trier", "name": "Trier", "state": "Rheinland-Pfalz", "population": 105054, "lat": 49.75565, "lng": 6.63935, "capital": false},
  {"id": "siegen", "name": "Siegen", "state": "Nordrhein-Westfalen", "population": 102450, "lat": 50.87481, "lng": 8.02431, "capital": false},
  {"id": "moers", "name": "Moers", "state": "Nordrhein-Westfalen", "population": 101298, "lat": 51.45342, "lng": 6.6326, "capital": false},
  {"id": "kaiserslautern", "name": "Kaiserslautern", "state": "Rheinland-Pfalz", "population": 100247, "lat": 49.443, "lng": 7.77161, "capital": false},
  {"id": "guetersloh", "name": "Gütersloh", "state": "Nordrhein-Westfalen", "population": 99854, "lat": 51.90693, "lng": 8.37853, "capital": false},
  {"id": "hanau", "name": "Hanau", "state": "Hessen", "population": 98582, "lat": 50.13423, "lng": 8.91418, "capital": false},
  {"id": "hildesheim", "name": "Hildesheim", "state": "Niedersachsen", "population": 98207, "lat": 52.15077, "lng": 9.95112, "capital": false},
  {"id": "schwerin", "name": "Schwerin", "state": "Mecklenburg-Vorpommern", "population": 97922, "lat": 53.62937, "lng": 11.41316, "capital": true},
  {"id": "flensburg", "name": "Flensburg", "state": "Schleswig-Holstein", "population": 95568, "lat": 54.78805, "lng": 9.43722, "capital": false},
  {"id": "esslingen-am-neckar", "name": "Esslingen am Neckar", "state": "Baden-Württemberg", "population": 96182, "lat": 48.73961, "lng": 9.30473, "capital": false},
  {"id": "gera", "name": "Gera", "state": "Thüringen", "population": 95608, "lat": 50.88029, "lng": 12.08187, "capital": false},
  {"id": "cottbus", "name": "Cottbus", "state": "Brandenburg", "population": 95140, "lat": 51.75769, "lng": 14.32888, "capital": false},
  {"id": "dueren", "name": "Düren", "state": "Nordrhein-Westfalen", "population": 94539, "lat": 50.80434, "lng": 6.49299, "capital": false},
  {"id": "ludwigsburg", "name": "Ludwigsburg", "state": "Baden-Württemberg", "population": 92858, "lat": 48.89731, "lng": 9.19161, "capital": false},
  {"id": "tuebingen", "name": "Tübingen", "state": "Baden-Württemberg", "population": 92322, "lat": 48.52266, "lng": 9.05222, "capital": false},
  {"id": "iserlohn", "name": "Iserlohn", "state": "Nordrhein-Westfalen", "population": 91317, "lat": 51.37547, "lng": 7.70281, "capital": false},
  {"id": "witten", "name": "Witten", "state": "Nordrhein-Westfalen", "population": 91474, "lat": 51.44362, "lng": 7.35258, "capital": false},
  {"id": "villingen-schwenningen", "name": "Villingen-Schwenningen", "state": "Baden-Württemberg", "population": 89756, "lat": 48.06226, "lng": 8.49358, "capital": false},
  {"id": "ratingen", "name": "Ratingen", "state": "Nordrhein-Westfalen", "population": 88914, "lat": 51.29724, "lng": 6.84929, "capital": false},
  {"id": "giessen", "name": "Gießen", "state": "Hessen", "population": 88544, "lat": 50.58727, "lng": 8.67554, "capital": false},
  {"id": "zwickau", "name": "Zwickau", "state": "Sachsen", "population": 86405, "lat": 50.72724, "lng": 12.48839, "capital": false},
  {"id": "konstanz", "name": "Konstanz", "state": "Baden-Württemberg", "population": 86919, "lat": 47.66033, "lng": 9.17582, "capital": false},
  {"id": "marl", "name": "Marl", "state": "Nordrhein-Westfalen", "population": 86899, "lat": 51.65671, "lng": 7.09038, "capital": false},
  {"id": "worms", "name": "Worms", "state": "Rheinland-Pfalz", "population": 86921, "lat": 49.63278, "lng": 8.35916, "capital": false},
  {"id": "luenen", "name": "Lünen", "state": "Nordrhein-Westfalen", "population": 85844, "lat": 51.61634, "lng": 7.52872, "capital": false},
  {"id": "minden", "name": "Minden", "state": "Nordrhein-Westfalen", "population": 83598, "lat": 52.28953, "lng": 8.91455, "capital": false},
  {"id": "norderstedt", "name": "Norderstedt", "state": "Schleswig-Holstein", "population": 83196, "lat": 53.70177, "lng": 9.99328, "capital": false},
  {"id": "velbert", "name": "Velbert", "state": "Nordrhein-Westfalen", "population": 82166, "lat": 51.33537, "lng": 7.04348, "capital": false},
  {"id": "delmenhorst", "name": "Delmenhorst", "state": "Niedersachsen", "population": 81274, "lat": 53.0511, "lng": 8.63091, "capital": false},
  {"id": "neumuenster", "name": "Neumünster", "state": "Schleswig-Holstein", "population": 80145, "lat": 54.07399, "lng": 9.98456, "capital": false},
  {"id": "viersen", "name": "Viersen", "state": "Nordrhein-Westfalen", "population": 78227, "lat": 51.25435, "lng": 6.39441, "capital": false},
  {"id": "rheine", "name": "Rheine", "state": "Nordrhein-Westfalen", "population": 77552, "lat": 52.28509, "lng": 7.44055, "capital": false},
  {"id": "bamberg", "name": "Bamberg", "state": "Bayern", "population": 77218, "lat": 49.89873, "lng": 10.90067, "capital": false},
  {"id": "troisdorf", "name": "Troisdorf", "state": "Nordrhein-Westfalen", "population": 75742, "lat": 50.80901, "lng": 7.14968, "capital": false},
  {"id": "wilhelmshaven", "name": "Wilhelmshaven", "state": "Niedersachsen", "population": 75324, "lat": 53.5476, "lng": 8.10395, "capital": false},
  {"id": "gladbeck", "name": "Gladbeck", "state": "Nordrhein-Westfalen", "population": 75647, "lat": 51.57077, "lng": 6.98593, "capital": false},
  {"id": "dessau", "name": "Dessau-Roßlau", "state": "Sachsen-Anhalt", "population": 75035, "lat": 51.8308, "lng": 12.2426, "capital": false},
  {"id": "dorsten", "name": "Dorsten", "state": "Nordrhein-Westfalen", "population": 74783, "lat": 51.66166, "lng": 6.96514, "capital": false},
  {"id": "arnsberg", "name": "Arnsberg", "state": "Nordrhein-Westfalen", "population": 74479, "lat": 51.38333, "lng": 8.08333, "capital": false},
  {"id": "lueneburg", "name": "Lüneburg", "state": "Niedersachsen", "population": 74502, "lat": 53.25122, "lng": 10.41548, "capital": false},
  {"id": "detmold", "name": "Detmold", "state": "Nordrhein-Westfalen", "population": 74438, "lat": 51.93855, "lng": 8.87318, "capital": false},
  {"id": "brandenburg-an-der-havel", "name": "Brandenburg an der Havel", "state": "Brandenburg", "population": 73945, "lat": 52.41667, "lng": 12.55, "capital": false},
  {"id": "marburg", "name": "Marburg", "state": "Hessen", "population": 73571, "lat": 50.80904, "lng": 8.77069, "capital": false},
  {"id": "castrop-rauxel", "name": "Castrop-Rauxel", "state": "Nordrhein-Westfalen", "population": 72353, "lat": 51.55657, "lng": 7.31155, "capital": false},
  {"id": "bocholt", "name": "Bocholt", "state": "Nordrhein-Westfalen", "population": 73048, "lat": 51.83879, "lng": 6.61531, "capital": false},
  {"id": "aschaffenburg", "name": "Aschaffenburg", "state": "Bayern", "population": 73326, "lat": 49.97704, "lng": 9.15214, "capital": false},
  {"id": "bayreuth", "name": "Bayreuth", "state": "Bayern", "population": 72919, "lat": 49.94782, "lng": 11.57893, "capital": false},
  {"id": "landshut", "name": "Landshut", "state": "Bayern", "population": 71922, "lat": 48.52961, "lng": 12.16179, "capital": false},
  {"id": "luedenscheid", "name": "Lüdenscheid", "state": "Nordrhein-Westfalen", "population": 70810, "lat": 51.21977, "lng": 7.6273, "capital": false},
  {"id": "lippstadt", "name": "Lippstadt", "state": "Nordrhein-Westfalen", "population": 68383, "lat": 51.67369, "lng": 8.34482, "capital": false},
  {"id": "kempten-allgaeu", "name": "Kempten (Allgäu)", "state": "Bayern", "population": 67916, "lat": 47.72674, "lng": 10.31389, "capital": false},
  {"id": "aalen", "name": "Aalen", "state": "Baden-Württemberg", "population": 67621, "lat": 48.83777, "lng": 10.0933, "capital": false},
  {"id": "herford", "name": "Herford", "state": "Nordrhein-Westfalen", "population": 67074, "lat": 52.11457, "lng": 8.67343, "capital": false},
  {"id": "neuwied", "name": "Neuwied", "state": "Rheinland-Pfalz", "population": 67201, "lat": 50.4336, "lng": 7.47057, "capital": false},
  {"id": "dinslaken", "name": "Dinslaken", "state": "Nordrhein-Westfalen", "population": 66869, "lat": 51.56227, "lng": 6.7434, "capital": false},
  {"id": "celle", "name": "Celle", "state": "Niedersachsen", "population": 66930, "lat": 52.62264, "lng": 10.08047, "capital": false},
  {"id": "kerpen", "name": "Kerpen", "state": "Nordrhein-Westfalen", "population": 66377, "lat": 50.86991, "lng": 6.69691, "capital": false},
  {"id": "grevenbroich", "name": "Grevenbroich", "state": "Nordrhein-Westfalen", "population": 65605, "lat": 51.09102, "lng": 6.5827, "capital": false},
  {"id": "weimar", "name": "Weimar", "state": "Thüringen", "population": 65954, "lat": 50.9803, "lng": 11.32903, "capital": false},
  {"id": "ruesselsheim-am-main", "name": "Rüsselsheim am Main", "state": "Hessen", "population": 66028, "lat": 49.98955, "lng": 8.42251, "capital": false},
  {"id": "plauen", "name": "Plauen", "state": "Sachsen", "population": 64893, "lat": 50.4973, "lng": 12.13782, "capital": false},
  {"id": "fulda", "name": "Fulda", "state": "Hessen", "population": 65755, "lat": 50.55162, "lng": 9.67518, "capital": false},
  {"id": "rosenheim", "name": "Rosenheim", "state": "Bayern", "population": 65808, "lat": 47.85637, "lng": 12.12247, "capital": false},
  {"id": "schwaebisch-gmuend", "name": "Schwäbisch Gmünd", "state": "Baden-Württemberg", "population": 64416, "lat": 48.79947, "lng": 9.79809, "capital": false},
  {"id": "dormagen", "name": "Dormagen", "state": "Nordrhein-Westfalen", "population": 63619, "lat": 51.09683, "lng": 6.83167, "capital": false},
  {"id": "offenburg", "name": "Offenburg", "state": "Baden-Württemberg", "population": 62993, "lat": 48.47377, "lng": 7.94495, "capital": false},
  {"id": "friedrichshafen", "name": "Friedrichshafen", "state": "Baden-Württemberg", "population": 62796, "lat": 47.65689, "lng": 9.47554, "capital": false},
  {"id": "neu-ulm", "name": "Neu-Ulm", "state": "Bayern", "population": 62843, "lat": 48.39279, "lng": 10.01112, "capital": false},
  {"id": "huerth", "name": "Hürth", "state": "Nordrhein-Westfalen", "population": 61732, "lat": 50.87079, "lng": 6.86761, "capital": false},
  {"id": "bergheim", "name": "Bergheim", "state": "Nordrhein-Westfalen", "population": 61976, "lat": 50.95572, "lng": 6.63986, "capital": false},
  {"id": "sindelfingen", "name": "Sindelfingen", "state": "Baden-Württemberg", "population": 61422, "lat": 48.7, "lng": 9.01667, "capital": false},
  {"id": "herten", "name": "Herten", "state": "Nordrhein-Westfalen", "population": 60707, "lat": 51.59638, "lng": 7.14387, "capital": false},
  {"id": "wesel", "name": "Wesel", "state": "Nordrhein-Westfalen", "population": 60717, "lat": 51.6669, "lng": 6.62037, "capital": false},
  {"id": "neubrandenburg", "name": "Neubrandenburg", "state": "Mecklenburg-Vorpommern", "population": 59494, "lat": 53.55735, "lng": 13.26105, "capital": false},
  {"id": "euskirchen", "name": "Euskirchen", "state": "Nordrhein-Westfalen", "population": 59977, "lat": 50.66057, "lng": 6.78722, "capital": false},
  {"id": "langenfeld-rheinland", "name": "Langenfeld (Rheinland)", "state": "Nordrhein-Westfalen", "population": 59821, "lat": 51.10821, "lng": 6.94831, "capital": false},
  {"id": "garbsen", "name": "Garbsen", "state": "Niedersachsen", "population": 60007, "lat": 52.41371, "lng": 9.5899, "capital": false},
  {"id": "goeppingen", "name": "Göppingen", "state": "Baden-Württemberg", "population": 58937, "lat": 48.70354, "lng": 9.65209, "capital": false},
  {"id": "unna", "name": "Unna", "state": "Nordrhein-Westfalen", "population": 57961, "lat": 51.53795, "lng": 7.68969, "capital": false},
  {"id": "hameln", "name": "Hameln", "state": "Niedersachsen", "population": 58152, "lat": 52.10397, "lng": 9.35623, "capital": false},
  {"id": "stolberg-rheinland", "name": "Stolberg (Rheinland)", "state": "Nordrhein-Westfalen", "population": 57678, "lat": 50.77368, "lng": 6.22595, "capital": false},
  {"id": "eschweiler", "name": "Eschweiler", "state": "Nordrhein-Westfalen", "population": 57573, "lat": 50.81854, "lng": 6.27184, "capital": false},
  {"id": "waiblingen", "name": "Waiblingen", "state": "Baden-Württemberg", "population": 57313, "lat": 48.83241, "lng": 9.31641, "capital": false},
  {"id": "frankfurt-oder", "name": "Frankfurt (Oder)", "state": "Brandenburg", "population": 56586, "lat": 52.34714, "lng": 14.55062, "capital": false},
  {"id": "meerbusch", "name": "Meerbusch", "state": "Nordrhein-Westfalen", "population": 56947, "lat": 51.25268, "lng": 6.68807, "capital": false},
  {"id": "nordhorn", "name": "Nordhorn", "state": "Niedersachsen", "population": 57372, "lat": 52.43081, "lng": 7.06833, "capital": false},
  {"id": "baden-baden", "name": "Baden-Baden", "state": "Baden-Württemberg", "population": 56881, "lat": 48.7606, "lng": 8.23975, "capital": false},
  {"id": "bad-homburg-vor-der-hoehe", "name": "Bad Homburg vor der Höhe", "state": "Hessen", "population": 56938, "lat": 50.22683, "lng": 8.61816, "capital": false},
  {"id": "sankt-augustin", "name": "Sankt Augustin", "state": "Nordrhein-Westfalen", "population": 56033, "lat": 50.77538, "lng": 7.197, "capital": false},
  {"id": "lingen-ems", "name": "Lingen (Ems)", "state": "Niedersachsen", "population": 56539, "lat": 52.52269, "lng": 7.32555, "capital": false},
  {"id": "pulheim", "name": "Pulheim", "state": "Nordrhein-Westfalen", "population": 55979, "lat": 50.99965, "lng": 6.80632, "capital": false},
  {"id": "greifswald", "name": "Greifswald", "state": "Mecklenburg-Vorpommern", "population": 56154, "lat": 54.08905, "lng": 13.40244, "capital": false},
  {"id": "goerlitz", "name": "Görlitz", "state": "Sachsen", "population": 55065, "lat": 51.15518, "lng": 14.98853, "capital": false},
  {"id": "hilden", "name": "Hilden", "state": "Nordrhein-Westfalen", "population": 54859, "lat": 51.16818, "lng": 6.93093, "capital": false},
  {"id": "wetzlar", "name": "Wetzlar", "state": "Hessen", "population": 54865, "lat": 50.56109, "lng": 8.50495, "capital": false},
  {"id": "schweinfurt", "name": "Schweinfurt", "state": "Bayern", "population": 54539, "lat": 50.04937, "lng": 10.22175, "capital": false},
  {"id": "bad-kreuznach", "name": "Bad Kreuznach", "state": "Rheinland-Pfalz", "population": 54347, "lat": 49.8414, "lng": 7.86713, "capital": false},
  {"id": "langenhagen", "name": "Langenhagen", "state": "Niedersachsen", "population": 54059, "lat": 52.44758, "lng": 9.73741, "capital": false},
  {"id": "stralsund", "name": "Stralsund", "state": "Mecklenburg-Vorpommern", "population": 55481, "lat": 54.30911, "lng": 13.0818, "capital": false},
  {"id": "bad-salzuflen", "name": "Bad Salzuflen", "state": "Nordrhein-Westfalen", "population": 53807, "lat": 52.0862, "lng": 8.74434, "capital": false},
  {"id": "hattingen", "name": "Hattingen", "state": "Nordrhein-Westfalen", "population": 52969, "lat": 51.39894, "lng": 7.18557, "capital": false},
  {"id": "passau", "name": "Passau", "state": "Bayern", "population": 53523, "lat": 48.5665, "lng": 13.43122, "capital": false},
  {"id": "kleve", "name": "Kleve", "state": "Nordrhein-Westfalen", "population": 53094, "lat": 51.78826, "lng": 6.13865, "capital": false},
  {"id": "neustadt-an-der-weinstrasse", "name": "Neustadt an der Weinstraße", "state": "Rheinland-Pfalz", "population": 52882, "lat": 49.35009, "lng": 8.13886, "capital": false},
  {"id": "ahlen", "name": "Ahlen", "state": "Nordrhein-Westfalen", "population": 52387, "lat": 51.76338, "lng": 7.8887, "capital": false},
  {"id": "wolfenbuettel", "name": "Wolfenbüttel", "state": "Niedersachsen", "population": 52511, "lat": 52.16442, "lng": 10.54095, "capital": false},
  {"id": "frechen", "name": "Frechen", "state": "Nordrhein-Westfalen", "population": 51927, "lat": 50.91485, "lng": 6.8118, "capital": false},
  {"id": "menden-sauerland", "name": "Menden (Sauerland)", "state": "Nordrhein-Westfalen", "population": 52121, "lat": 51.44337, "lng": 7.77825, "capital": false},
  {"id": "ibbenbueren", "name": "Ibbenbüren", "state": "Nordrhein-Westfalen", "population": 51596, "lat": 52.27964, "lng": 7.71457, "capital": false},
  {"id": "boeblingen", "name": "Böblingen", "state": "Baden-Württemberg", "population": 51483, "lat": 48.68212, "lng": 9.01171, "capital": false},
  {"id": "loerrach", "name": "Lörrach", "state": "Baden-Württemberg", "population": 51349, "lat": 47.61497, "lng": 7.66457, "capital": false},
  {"id": "elmshorn", "name": "Elmshorn", "state": "Schleswig-Holstein", "population": 51375, "lat": 53.74912, "lng": 9.66176, "capital": false},
  {"id": "gummersbach", "name": "Gummersbach", "state": "Nordrhein-Westfalen", "population": 51332, "lat": 51.02608, "lng": 7.56473, "capital": false},
  {"id": "peine", "name": "Peine", "state": "Niedersachsen", "population": 51005, "lat": 52.31928, "lng": 10.2352, "capital": false},
  {"id": "lahr-schwarzwald", "name": "Lahr/Schwarzwald", "state": "Baden-Württemberg", "population": 50775, "lat": 48.34042, "lng": 7.86886, "capital": false},
  {"id": "rastatt", "name": "Rastatt", "state": "Baden-Württemberg", "population": 50741, "lat": 48.85851, "lng": 8.20965, "capital": false},
  {"id": "ravensburg", "name": "Ravensburg", "state": "Baden-Württemberg", "population": 50628, "lat": 47.78198, "lng": 9.61062, "capital": false},
  {"id": "bad-oeynhausen", "name": "Bad Oeynhausen", "state": "Nordrhein-Westfalen", "population": 50515, "lat": 52.20699, "lng": 8.80365, "capital": false},
  {"id": "heidenheim-an-der-brenz", "name": "Heidenheim an der Brenz", "state": "Baden-Württemberg", "population": 50618, "lat": 48.67798, "lng": 10.15162, "capital": false},
  {"id": "gronau-westf", "name": "Gronau (Westf.)", "state": "Nordrhein-Westfalen", "population": 50349, "lat": 52.21099, "lng": 7.02238, "capital": false}
].map(city => ({
  ...city,
  category: city.population >= 100000 ? "metro" : "mid"
}));

const STORAGE_KEY = "staedtetracker.visited.v0.1";
const DETAILS_KEY = "staedtetracker.details.v0.4";
const MAP_BOUNDS = { minLon: 5.5, maxLon: 15.5, minLat: 47.0, maxLat: 55.2, width: 520, height: 680, pad: 14 };
let visited = loadVisited();
let visitDetails = loadDetails();
let activeStatus = "all";
let activeDetailCityId = null;

const els = {
  visitedCount: document.querySelector("#visitedCount"),
  totalCount: document.querySelector("#totalCount"),
  overallPercent: document.querySelector("#overallPercent"),
  ringPercent: document.querySelector("#ringPercent"),
  progressRing: document.querySelector("#progressRing"),
  metroSummary: document.querySelector("#metroSummary"),
  midSummary: document.querySelector("#midSummary"),
  stateProgressList: document.querySelector("#stateProgressList"),
  nextCities: document.querySelector("#nextCities"),
  searchInput: document.querySelector("#searchInput"),
  stateFilter: document.querySelector("#stateFilter"),
  categoryFilter: document.querySelector("#categoryFilter"),
  sortSelect: document.querySelector("#sortSelect"),
  cityList: document.querySelector("#cityList"),
  resultCount: document.querySelector("#resultCount"),
  emptyState: document.querySelector("#emptyState"),
  statsVisited: document.querySelector("#statsVisited"),
  statsOpen: document.querySelector("#statsOpen"),
  bestState: document.querySelector("#bestState"),
  metroPercent: document.querySelector("#metroPercent"),
  statesReached: document.querySelector("#statesReached"),
  capitalStats: document.querySelector("#capitalStats"),
  stateRanking: document.querySelector("#stateRanking"),
  badgeGrid: document.querySelector("#badgeGrid"),
  badgeCount: document.querySelector("#badgeCount"),
  mapCities: document.querySelector("#mapCities"),
  mapVisitedCount: document.querySelector("#mapVisitedCount"),
  rulesDialog: document.querySelector("#rulesDialog"),
  cityDialog: document.querySelector("#cityDialog"),
  cityDetailForm: document.querySelector("#cityDetailForm"),
  detailState: document.querySelector("#detailState"),
  detailCityName: document.querySelector("#detailCityName"),
  detailMeta: document.querySelector("#detailMeta"),
  detailStatus: document.querySelector("#detailStatus"),
  firstVisitDate: document.querySelector("#firstVisitDate"),
  detailVisitButton: document.querySelector("#detailVisitButton"),
  badgeDialog: document.querySelector("#badgeDialog"),
  badgeDetailIcon: document.querySelector("#badgeDetailIcon"),
  badgeDetailTitle: document.querySelector("#badgeDetailTitle"),
  badgeDetailDescription: document.querySelector("#badgeDetailDescription"),
  badgeDetailProgressText: document.querySelector("#badgeDetailProgressText"),
  badgeDetailPercent: document.querySelector("#badgeDetailPercent"),
  badgeDetailProgressBar: document.querySelector("#badgeDetailProgressBar"),
  badgeDoneTitle: document.querySelector("#badgeDoneTitle"),
  badgeDoneCount: document.querySelector("#badgeDoneCount"),
  badgeDoneList: document.querySelector("#badgeDoneList"),
  badgeMissingTitle: document.querySelector("#badgeMissingTitle"),
  badgeMissingCount: document.querySelector("#badgeMissingCount"),
  badgeMissingList: document.querySelector("#badgeMissingList")
};

function loadVisited() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return new Set(Array.isArray(saved) ? saved : []);
  } catch {
    return new Set();
  }
}

function loadDetails() {
  try {
    const saved = JSON.parse(localStorage.getItem(DETAILS_KEY));
    return saved && typeof saved === "object" && !Array.isArray(saved) ? saved : {};
  } catch {
    return {};
  }
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...visited]));
  localStorage.setItem(DETAILS_KEY, JSON.stringify(visitDetails));
}

function percent(part, total) {
  return total ? Math.round((part / total) * 100) : 0;
}

function formatPopulation(value) {
  return new Intl.NumberFormat("de-DE").format(value);
}

function formatDate(value) {
  if (!value) return "Datum hinzufügen";
  const [year, month, day] = value.split("-").map(Number);
  if (!year || !month || !day) return value;
  return new Intl.DateTimeFormat("de-DE").format(new Date(year, month - 1, day));
}

function stateStats() {
  const states = [...new Set(cities.map(city => city.state))].sort((a, b) => a.localeCompare(b, "de"));
  return states.map(state => {
    const stateCities = cities.filter(city => city.state === state);
    const count = stateCities.filter(city => visited.has(city.id)).length;
    return { state, count, total: stateCities.length, percentage: percent(count, stateCities.length) };
  });
}

function toggleVisited(id) {
  if (visited.has(id)) {
    visited.delete(id);
    delete visitDetails[id];
  } else {
    visited.add(id);
  }
  saveData();
  renderAll();
}

function renderOverview() {
  const visitedCount = cities.filter(city => visited.has(city.id)).length;
  const total = cities.length;
  const overall = percent(visitedCount, total);
  els.visitedCount.textContent = visitedCount;
  els.totalCount.textContent = total;
  els.overallPercent.textContent = overall;
  els.ringPercent.textContent = `${overall}%`;
  els.progressRing.style.setProperty("--progress", `${overall * 3.6}deg`);

  const metros = cities.filter(city => city.category === "metro");
  const mids = cities.filter(city => city.category === "mid");
  els.metroSummary.textContent = `${metros.filter(city => visited.has(city.id)).length} / ${metros.length}`;
  els.midSummary.textContent = `${mids.filter(city => visited.has(city.id)).length} / ${mids.length}`;

  els.stateProgressList.innerHTML = stateStats().map(item => `
    <button class="state-row state-link" data-state-open="${item.state}" aria-label="Alle Städte in ${item.state} anzeigen">
      <div class="state-row-header">
        <strong>${item.state}</strong>
        <span>${item.count} / ${item.total} · ${item.percentage} % <b aria-hidden="true">›</b></span>
      </div>
      <div class="progress-track" aria-hidden="true"><div class="progress-fill" style="width:${item.percentage}%"></div></div>
    </button>`).join("");

  const openCities = cities.filter(city => !visited.has(city.id)).sort((a, b) => b.population - a.population).slice(0, 5);
  els.nextCities.innerHTML = openCities.length ? openCities.map(city => `
    <article class="mini-city">
      <button class="mini-city-main" data-city-detail="${city.id}">
        <strong>${city.name}</strong><small>${city.state}</small>
      </button>
      <button class="quick-check" data-toggle="${city.id}" aria-label="${city.name} als besucht markieren">✓</button>
    </article>`).join("") : `<div class="empty-state"><strong>Alle Städte besucht!</strong><p>Deutschland ist komplett.</p></div>`;
}

function filteredCities() {
  const term = els.searchInput.value.trim().toLocaleLowerCase("de");
  const state = els.stateFilter.value;
  const category = els.categoryFilter.value;
  const sort = els.sortSelect.value;
  const result = cities.filter(city => {
    const matchesTerm = !term || `${city.name} ${city.state}`.toLocaleLowerCase("de").includes(term);
    const matchesState = state === "all" || city.state === state;
    const matchesCategory = category === "all" || city.category === category;
    const isVisited = visited.has(city.id);
    const matchesStatus = activeStatus === "all" || (activeStatus === "visited" && isVisited) || (activeStatus === "open" && !isVisited);
    return matchesTerm && matchesState && matchesCategory && matchesStatus;
  });
  result.sort((a, b) => {
    if (sort === "population") return b.population - a.population;
    if (sort === "state") return a.state.localeCompare(b.state, "de") || a.name.localeCompare(b.name, "de");
    return a.name.localeCompare(b.name, "de");
  });
  return result;
}

function renderCities() {
  const result = filteredCities();
  els.resultCount.textContent = result.length;
  els.emptyState.classList.toggle("hidden", result.length !== 0);
  els.cityList.innerHTML = result.map(city => {
    const isVisited = visited.has(city.id);
    const label = city.category === "metro" ? "Großstadt" : "Große Mittelstadt";
    const date = visitDetails[city.id]?.firstVisit || "";
    return `
      <article class="city-card ${isVisited ? "visited" : ""}">
        <div class="city-card-main">
          <button class="city-title-button" data-city-detail="${city.id}"><h3>${city.name}</h3></button>
          <div class="city-meta">
            <span>${city.state}</span><span>·</span><span>${formatPopulation(city.population)} Einwohner</span>
            <span class="category-badge">${label}</span>${city.capital ? '<span class="category-badge capital-badge">Landeshauptstadt</span>' : ''}
          </div>
          ${isVisited ? `<button class="date-link" data-city-detail="${city.id}">Erstbesuch: ${formatDate(date)} ›</button>` : ''}
        </div>
        <button class="visit-toggle ${isVisited ? "visited" : ""}" data-toggle="${city.id}" aria-pressed="${isVisited}" aria-label="${city.name} ${isVisited ? "als nicht besucht markieren" : "als besucht markieren"}">✓</button>
      </article>`;
  }).join("");
}

function getBadges() {
  const visitedCount = visited.size;
  const metros = cities.filter(c => c.category === "metro");
  const capitals = cities.filter(c => c.capital);
  const topTen = [...cities].sort((a,b)=>b.population-a.population).slice(0,10);
  const stats = stateStats();
  const cityStates = new Set(["Berlin","Bremen","Hamburg"]);
  const fullAreaState = stats.some(s => !cityStates.has(s.state) && s.total > 0 && s.count === s.total);
  const reachedStates = stats.filter(s => s.count > 0).length;
  const cityStateIds = cities.filter(c => cityStates.has(c.state) && c.name !== "Bremerhaven").map(c=>c.id);
  return [
    { id:"first", icon:"1", title:"Erste Stadt", description:"Die erste Stadt besucht", current:visitedCount, target:1 },
    { id:"five", icon:"5", title:"Auf Tour", description:"Fünf Städte besucht", current:visitedCount, target:5 },
    { id:"collector", icon:"25", title:"Stadtsammler", description:"25 Städte besucht", current:visitedCount, target:25 },
    { id:"half", icon:"½", title:"Halbzeit", description:"Mindestens die Hälfte geschafft", current:visitedCount, target:Math.ceil(cities.length/2) },
    { id:"hundred", icon:"100", title:"Hundertmarke", description:"100 Städte besucht", current:visitedCount, target:100 },
    { id:"germany", icon:"DE", title:"Deutschland komplett", description:"Alle 195 Städte besucht", current:visitedCount, target:cities.length },
    { id:"metros", icon:"M", title:"Metropolenjäger", description:"Alle Großstädte besucht", current:metros.filter(c=>visited.has(c.id)).length, target:metros.length },
    { id:"capitals", icon:"H", title:"Hauptstadt-Tour", description:"Alle Landeshauptstädte besucht", current:capitals.filter(c=>visited.has(c.id)).length, target:capitals.length },
    { id:"nationwide", icon:"16", title:"Bundesweit", description:"Jedes Bundesland erreicht", current:reachedStates, target:16 },
    { id:"area-state", icon:"✓", title:"Flächenland komplett", description:"Ein Flächenland vollständig besucht", current:fullAreaState ? 1 : 0, target:1 },
    { id:"top-ten", icon:"10", title:"Top Ten", description:"Die zehn größten Städte besucht", current:topTen.filter(c=>visited.has(c.id)).length, target:10 },
    { id:"city-states", icon:"3", title:"Stadtstaaten-Trio", description:"Berlin, Hamburg und Bremen besucht", current:cityStateIds.filter(id=>visited.has(id)).length, target:3 }
  ];
}


function sortCitiesForBadge(items) {
  return [...items].sort((a, b) =>
    b.population - a.population || a.name.localeCompare(b.name, "de")
  );
}

function cityBadgeItems(items) {
  const sorted = sortCitiesForBadge(items);
  return {
    doneTitle: "Besucht",
    missingTitle: "Fehlt noch",
    done: sorted.filter(city => visited.has(city.id)).map(city => ({
      kind: "city",
      id: city.id,
      label: city.name,
      meta: `${city.state} · ${formatPopulation(city.population)} Einwohner`
    })),
    missing: sorted.filter(city => !visited.has(city.id)).map(city => ({
      kind: "city",
      id: city.id,
      label: city.name,
      meta: `${city.state} · ${formatPopulation(city.population)} Einwohner`
    }))
  };
}

function getBadgeDetail(id) {
  const badges = getBadges();
  const badge = badges.find(item => item.id === id);
  if (!badge) return null;

  const cityStates = new Set(["Berlin", "Bremen", "Hamburg"]);
  let lists;

  if (["first", "five", "collector", "half", "hundred", "germany"].includes(id)) {
    lists = cityBadgeItems(cities);
    lists.doneTitle = "Angerechnete Städte";
    lists.missingTitle = "Weitere offene Städte";
  } else if (id === "metros") {
    lists = cityBadgeItems(cities.filter(city => city.category === "metro"));
  } else if (id === "capitals") {
    lists = cityBadgeItems(cities.filter(city => city.capital));
  } else if (id === "top-ten") {
    lists = cityBadgeItems([...cities].sort((a, b) => b.population - a.population).slice(0, 10));
  } else if (id === "city-states") {
    lists = cityBadgeItems(cities.filter(city =>
      city.name === "Berlin" || city.name === "Hamburg" || city.name === "Bremen"
    ));
  } else if (id === "nationwide") {
    const states = [...new Set(cities.map(city => city.state))].sort((a, b) => a.localeCompare(b, "de"));
    const reached = [];
    const missing = [];

    states.forEach(state => {
      const stateCities = cities.filter(city => city.state === state);
      const visitedCities = sortCitiesForBadge(stateCities.filter(city => visited.has(city.id)));
      const item = {
        kind: "state",
        state,
        label: state,
        meta: visitedCities.length
          ? `${visitedCities.length} besucht: ${visitedCities.map(city => city.name).join(", ")}`
          : "Noch keine Stadt besucht"
      };
      (visitedCities.length ? reached : missing).push(item);
    });

    lists = {
      doneTitle: "Erreichte Bundesländer",
      missingTitle: "Fehlende Bundesländer",
      done: reached,
      missing
    };
  } else if (id === "area-state") {
    const areaStates = [...new Set(cities.map(city => city.state))]
      .filter(state => !cityStates.has(state))
      .sort((a, b) => a.localeCompare(b, "de"));

    const complete = [];
    const incomplete = [];

    areaStates.forEach(state => {
      const stateCities = sortCitiesForBadge(cities.filter(city => city.state === state));
      const missingCities = stateCities.filter(city => !visited.has(city.id));
      const visitedCount = stateCities.length - missingCities.length;
      const item = {
        kind: "state",
        state,
        label: state,
        meta: missingCities.length
          ? `${visitedCount} / ${stateCities.length} · Es fehlen: ${missingCities.map(city => city.name).join(", ")}`
          : `${stateCities.length} / ${stateCities.length} · Komplett`
      };
      (missingCities.length ? incomplete : complete).push(item);
    });

    lists = {
      doneTitle: "Komplette Flächenländer",
      missingTitle: "Noch nicht komplett",
      done: complete,
      missing: incomplete
    };
  } else {
    lists = cityBadgeItems(cities);
  }

  return { badge, ...lists };
}

function badgeDetailItemMarkup(item, done) {
  const actionAttribute = item.kind === "state"
    ? `data-badge-state="${item.state}"`
    : `data-badge-city="${item.id}"`;

  return `<button class="badge-detail-item ${done ? "done" : "missing"}" ${actionAttribute}>
    <span class="badge-item-status" aria-hidden="true">${done ? "✓" : "○"}</span>
    <span class="badge-item-copy">
      <strong>${item.label}</strong>
      <small>${item.meta}</small>
    </span>
    <span class="badge-item-chevron" aria-hidden="true">›</span>
  </button>`;
}

function badgeEmptyMarkup(message) {
  return `<div class="badge-detail-empty">${message}</div>`;
}

function openBadgeDetail(id) {
  const detail = getBadgeDetail(id);
  if (!detail) return;

  const { badge, doneTitle, missingTitle, done, missing } = detail;
  const shownCurrent = Math.min(badge.current, badge.target);
  const progress = Math.min(100, percent(shownCurrent, badge.target));

  els.badgeDetailIcon.textContent = badge.icon;
  els.badgeDetailIcon.classList.toggle("unlocked", badge.current >= badge.target);
  els.badgeDetailTitle.textContent = badge.title;
  els.badgeDetailDescription.textContent = badge.description;
  els.badgeDetailProgressText.textContent = `${shownCurrent} / ${badge.target}`;
  els.badgeDetailPercent.textContent = `${progress} %`;
  els.badgeDetailProgressBar.style.width = `${progress}%`;

  els.badgeDoneTitle.textContent = doneTitle;
  els.badgeDoneCount.textContent = done.length;
  els.badgeDoneList.innerHTML = done.length
    ? done.map(item => badgeDetailItemMarkup(item, true)).join("")
    : badgeEmptyMarkup("Hier ist noch nichts erledigt.");

  els.badgeMissingTitle.textContent = missingTitle;
  els.badgeMissingCount.textContent = missing.length;
  els.badgeMissingList.innerHTML = missing.length
    ? missing.map(item => badgeDetailItemMarkup(item, false)).join("")
    : badgeEmptyMarkup("Nichts mehr offen – Abzeichen geschafft.");

  els.badgeDialog.showModal();
}

function closeBadgeDetail() {
  els.badgeDialog.close();
}

function renderStats() {
  const visitedCount = cities.filter(city => visited.has(city.id)).length;
  const metros = cities.filter(city => city.category === "metro");
  const capitals = cities.filter(city => city.capital);
  const capitalVisited = capitals.filter(city => visited.has(city.id)).length;
  const ranked = stateStats().sort((a,b)=>b.percentage-a.percentage || b.count-a.count || a.state.localeCompare(b.state,"de"));
  els.statsVisited.textContent = visitedCount;
  els.statsOpen.textContent = cities.length - visitedCount;
  els.metroPercent.textContent = `${percent(metros.filter(city=>visited.has(city.id)).length, metros.length)} %`;
  const cityStates = new Set(["Berlin","Bremen","Hamburg"]);
  const best = ranked.find(item => item.count > 0 && !cityStates.has(item.state));
  els.bestState.textContent = best ? `${best.state} (${best.percentage} %)` : "Noch keines";
  const reachedStates = ranked.filter(item=>item.count>0).length;
  els.statesReached.textContent = `${reachedStates} / ${ranked.length} · ${percent(reachedStates, ranked.length)} %`;
  els.capitalStats.textContent = `${capitalVisited} / ${capitals.length} · ${percent(capitalVisited, capitals.length)} %`;

  const badges = getBadges();
  const unlocked = badges.filter(b=>b.current>=b.target).length;
  els.badgeCount.textContent = `${unlocked} / ${badges.length}`;
  els.badgeGrid.innerHTML = badges.map(badge => {
    const done = badge.current >= badge.target;
    const progress = Math.min(100, percent(Math.min(badge.current,badge.target), badge.target));
    return `<button class="badge-card badge-button ${done ? "unlocked" : "locked"}" data-badge-detail="${badge.id}" aria-label="${badge.title}: Details anzeigen">
      <div class="badge-icon">${badge.icon}</div>
      <div class="badge-copy"><strong>${badge.title}</strong><p>${badge.description}</p>
      <div class="badge-progress"><span>${Math.min(badge.current,badge.target)} / ${badge.target}</span><div class="progress-track"><div class="progress-fill" style="width:${progress}%"></div></div></div></div>
      <span class="badge-chevron" aria-hidden="true">›</span>
    </button>`;
  }).join("");

  els.stateRanking.innerHTML = ranked.map((item,index)=>`<article class="ranking-row"><div class="rank-number">${index+1}</div><div><div class="ranking-row-header"><strong>${item.state}</strong><span>${item.count} / ${item.total} · ${item.percentage} %</span></div><div class="progress-track" aria-hidden="true"><div class="progress-fill" style="width:${item.percentage}%"></div></div></div></article>`).join("");
}

function mapPoint(city) {
  const x = MAP_BOUNDS.pad + (city.lng - MAP_BOUNDS.minLon) / (MAP_BOUNDS.maxLon - MAP_BOUNDS.minLon) * (MAP_BOUNDS.width - 2 * MAP_BOUNDS.pad);
  const y = MAP_BOUNDS.pad + (MAP_BOUNDS.maxLat - city.lat) / (MAP_BOUNDS.maxLat - MAP_BOUNDS.minLat) * (MAP_BOUNDS.height - 2 * MAP_BOUNDS.pad);
  return {x,y};
}

function renderMap() {
  els.mapVisitedCount.textContent = `${visited.size} / ${cities.length}`;
  els.mapCities.innerHTML = [...cities].sort((a,b)=>a.population-b.population).map(city => {
    const p = mapPoint(city);
    const isVisited = visited.has(city.id);
    return `<g class="map-marker ${isVisited ? "visited" : "open"} ${city.capital ? "capital" : ""}" data-city-detail="${city.id}" tabindex="0" role="button" aria-label="${city.name}, ${isVisited ? "besucht" : "noch offen"}">
      <circle class="map-hit" cx="${p.x.toFixed(2)}" cy="${p.y.toFixed(2)}" r="9"></circle>
      ${city.capital ? `<circle class="map-capital-ring" cx="${p.x.toFixed(2)}" cy="${p.y.toFixed(2)}" r="5.6"></circle>` : ''}
      <circle class="map-dot" cx="${p.x.toFixed(2)}" cy="${p.y.toFixed(2)}" r="${isVisited ? 3.5 : 2.8}"><title>${city.name} · ${isVisited ? "Besucht" : "Noch offen"}</title></circle>
    </g>`;
  }).join("");
}

function renderAll() { renderOverview(); renderCities(); renderStats(); renderMap(); }

function populateStateFilter() {
  const states=[...new Set(cities.map(city=>city.state))].sort((a,b)=>a.localeCompare(b,"de"));
  els.stateFilter.insertAdjacentHTML("beforeend",states.map(state=>`<option value="${state}">${state}</option>`).join(""));
}

function openCityDetail(id) {
  const city = cities.find(c=>c.id===id);
  if (!city) return;
  activeDetailCityId=id;
  const isVisited=visited.has(id);
  els.detailState.textContent=city.state + (city.capital ? " · Landeshauptstadt" : "");
  els.detailCityName.textContent=city.name;
  els.detailMeta.textContent=`${formatPopulation(city.population)} Einwohner · ${city.category === "metro" ? "Großstadt" : "Große Mittelstadt"}`;
  els.detailStatus.innerHTML=`<span class="status-pill ${isVisited ? "visited" : "open"}">${isVisited ? "Besucht" : "Noch nicht besucht"}</span>`;
  els.firstVisitDate.value=visitDetails[id]?.firstVisit || "";
  els.firstVisitDate.disabled=!isVisited;
  els.detailVisitButton.textContent=isVisited ? "Als nicht besucht markieren" : "Als besucht markieren";
  els.detailVisitButton.classList.toggle("danger-button",isVisited);
  els.cityDialog.showModal();
}

function closeCityDetail() {
  activeDetailCityId=null;
  els.cityDialog.close();
}

function openStateCities(state) {
  els.searchInput.value="";
  els.stateFilter.value=state;
  els.categoryFilter.value="all";
  els.sortSelect.value="population";
  activeStatus="all";
  document.querySelectorAll(".segment").forEach(button=>button.classList.toggle("active",button.dataset.status==="all"));
  renderCities(); activateView("citiesView");
}

function activateView(viewId) {
  document.querySelectorAll(".view").forEach(view=>view.classList.toggle("active",view.id===viewId));
  document.querySelectorAll(".nav-item").forEach(button=>button.classList.toggle("active",button.dataset.view===viewId));
  window.scrollTo({top:0,behavior:"smooth"});
}

document.addEventListener("click", event => {
  const toggle=event.target.closest("[data-toggle]");
  if (toggle) { toggleVisited(toggle.dataset.toggle); return; }

  const badgeCity=event.target.closest("[data-badge-city]");
  if (badgeCity) {
    closeBadgeDetail();
    openCityDetail(badgeCity.dataset.badgeCity);
    return;
  }

  const badgeState=event.target.closest("[data-badge-state]");
  if (badgeState) {
    closeBadgeDetail();
    openStateCities(badgeState.dataset.badgeState);
    return;
  }

  const badgeDetail=event.target.closest("[data-badge-detail]");
  if (badgeDetail) {
    openBadgeDetail(badgeDetail.dataset.badgeDetail);
    return;
  }

  const detail=event.target.closest("[data-city-detail]");
  if (detail) { openCityDetail(detail.dataset.cityDetail); return; }
  const nav=event.target.closest("[data-view]");
  if (nav) activateView(nav.dataset.view);
  const textNav=event.target.closest("[data-nav-target]");
  if (textNav) activateView(textNav.dataset.navTarget);
  const stateOpen=event.target.closest("[data-state-open]");
  if (stateOpen) openStateCities(stateOpen.dataset.stateOpen);
});

document.addEventListener("keydown", event => {
  if ((event.key === "Enter" || event.key === " ") && event.target.matches(".map-marker[data-city-detail]")) {
    event.preventDefault(); openCityDetail(event.target.dataset.cityDetail);
  }
});

document.querySelectorAll(".segment").forEach(button=>button.addEventListener("click",()=>{
  document.querySelectorAll(".segment").forEach(item=>item.classList.remove("active"));
  button.classList.add("active"); activeStatus=button.dataset.status; renderCities();
}));
[els.searchInput,els.stateFilter,els.categoryFilter,els.sortSelect].forEach(control=>{control.addEventListener("input",renderCities);control.addEventListener("change",renderCities);});
document.querySelector("#rulesButton").addEventListener("click",()=>els.rulesDialog.showModal());
document.querySelector("#closeCityDialog").addEventListener("click",closeCityDetail);
document.querySelector("#closeBadgeDialog").addEventListener("click",closeBadgeDetail);

els.detailVisitButton.addEventListener("click",()=>{
  if (!activeDetailCityId) return;
  const cityId = activeDetailCityId;
  toggleVisited(cityId);
  closeCityDetail();
  openCityDetail(cityId);
});

els.cityDetailForm.addEventListener("submit",event=>{
  event.preventDefault();
  if (!activeDetailCityId) return;
  const value=els.firstVisitDate.value;
  if (value && value > new Date().toISOString().slice(0,10)) { alert("Das Erstbesuchsdatum kann nicht in der Zukunft liegen."); return; }
  if (value) { visited.add(activeDetailCityId); visitDetails[activeDetailCityId]={firstVisit:value}; }
  else if (visited.has(activeDetailCityId)) { delete visitDetails[activeDetailCityId]; }
  saveData(); renderAll(); closeCityDetail();
});

document.querySelector("#resetButton").addEventListener("click",()=>{
  const confirmed=window.confirm("Wirklich alle besuchten Städte und Erstbesuchsdaten löschen?");
  if (!confirmed) return;
  visited.clear(); visitDetails={}; saveData(); renderAll();
});

els.firstVisitDate.max=new Date().toISOString().slice(0,10);
populateStateFilter(); renderAll();
if ("serviceWorker" in navigator && location.protocol.startsWith("http")) navigator.serviceWorker.register("sw.js").catch(()=>{});
