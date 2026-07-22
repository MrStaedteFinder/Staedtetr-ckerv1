const cities = [{"id":"berlin","name":"Berlin","state":"Berlin","population":3685265,"capital":true,"lat":52.52437,"lng":13.41053},{"id":"hamburg","name":"Hamburg","state":"Hamburg","population":1862565,"capital":true,"lat":53.55073,"lng":9.99302},{"id":"muenchen","name":"München","state":"Bayern","population":1505005,"capital":true,"lat":48.13743,"lng":11.57549},{"id":"koeln","name":"Köln","state":"Nordrhein-Westfalen","population":1024621,"capital":false,"lat":50.93333,"lng":6.95},{"id":"frankfurt-main","name":"Frankfurt am Main","state":"Hessen","population":756021,"capital":false,"lat":50.11552,"lng":8.68417},{"id":"duesseldorf","name":"Düsseldorf","state":"Nordrhein-Westfalen","population":618685,"capital":true,"lat":51.22319,"lng":6.77927},{"id":"stuttgart","name":"Stuttgart","state":"Baden-Württemberg","population":612663,"capital":true,"lat":48.78232,"lng":9.17702},{"id":"leipzig","name":"Leipzig","state":"Sachsen","population":611850,"capital":false,"lat":51.33962,"lng":12.37129},{"id":"dortmund","name":"Dortmund","state":"Nordrhein-Westfalen","population":603462,"capital":false,"lat":51.51494,"lng":7.466},{"id":"bremen","name":"Bremen","state":"Bremen","population":586271,"capital":true,"lat":53.07582,"lng":8.80717},{"id":"essen","name":"Essen","state":"Nordrhein-Westfalen","population":574682,"capital":false,"lat":51.45657,"lng":7.01228},{"id":"dresden","name":"Dresden","state":"Sachsen","population":564904,"capital":true,"lat":51.05089,"lng":13.73832},{"id":"nuernberg","name":"Nürnberg","state":"Bayern","population":529508,"capital":false,"lat":49.45421,"lng":11.07752},{"id":"hannover","name":"Hannover","state":"Niedersachsen","population":522131,"capital":true,"lat":52.37052,"lng":9.73322},{"id":"duisburg","name":"Duisburg","state":"Nordrhein-Westfalen","population":502270,"capital":false,"lat":51.43247,"lng":6.76516},{"id":"bochum","name":"Bochum","state":"Nordrhein-Westfalen","population":358676,"capital":false,"lat":51.48165,"lng":7.21648},{"id":"wuppertal","name":"Wuppertal","state":"Nordrhein-Westfalen","population":358193,"capital":false,"lat":51.25627,"lng":7.14816},{"id":"bielefeld","name":"Bielefeld","state":"Nordrhein-Westfalen","population":331605,"capital":false,"lat":52.03333,"lng":8.53333},{"id":"bonn","name":"Bonn","state":"Nordrhein-Westfalen","population":323336,"capital":false,"lat":50.73438,"lng":7.09549},{"id":"mannheim","name":"Mannheim","state":"Baden-Württemberg","population":318035,"capital":false,"lat":49.4891,"lng":8.46694},{"id":"karlsruhe","name":"Karlsruhe","state":"Baden-Württemberg","population":309050,"capital":false,"lat":49.00937,"lng":8.40444},{"id":"muenster","name":"Münster","state":"Nordrhein-Westfalen","population":308258,"capital":false,"lat":51.96236,"lng":7.62571},{"id":"augsburg","name":"Augsburg","state":"Bayern","population":301105,"capital":false,"lat":48.37154,"lng":10.89851},{"id":"wiesbaden","name":"Wiesbaden","state":"Hessen","population":288850,"capital":true,"lat":50.08601,"lng":8.24435},{"id":"gelsenkirchen","name":"Gelsenkirchen","state":"Nordrhein-Westfalen","population":267930,"capital":false,"lat":51.50508,"lng":7.09654},{"id":"moenchengladbach","name":"Mönchengladbach","state":"Nordrhein-Westfalen","population":267213,"capital":false,"lat":51.18539,"lng":6.44172},{"id":"aachen","name":"Aachen","state":"Nordrhein-Westfalen","population":262670,"capital":false,"lat":50.77664,"lng":6.08342},{"id":"braunschweig","name":"Braunschweig","state":"Niedersachsen","population":252962,"capital":false,"lat":52.26594,"lng":10.52673},{"id":"kiel","name":"Kiel","state":"Schleswig-Holstein","population":252668,"capital":true,"lat":54.32133,"lng":10.13489},{"id":"chemnitz","name":"Chemnitz","state":"Sachsen","population":245618,"capital":false,"lat":50.8357,"lng":12.92922},{"id":"magdeburg","name":"Magdeburg","state":"Sachsen-Anhalt","population":244329,"capital":true,"lat":52.13129,"lng":11.63189},{"id":"freiburg","name":"Freiburg im Breisgau","state":"Baden-Württemberg","population":237460,"capital":false,"lat":47.9959,"lng":7.85222},{"id":"krefeld","name":"Krefeld","state":"Nordrhein-Westfalen","population":231406,"capital":false,"lat":51.33645,"lng":6.55381},{"id":"halle","name":"Halle (Saale)","state":"Sachsen-Anhalt","population":226767,"capital":false,"lat":51.48158,"lng":11.97947},{"id":"mainz","name":"Mainz","state":"Rheinland-Pfalz","population":224684,"capital":true,"lat":49.98185,"lng":8.28008},{"id":"erfurt","name":"Erfurt","state":"Thüringen","population":218793,"capital":true,"lat":50.97734,"lng":11.03536},{"id":"luebeck","name":"Lübeck","state":"Schleswig-Holstein","population":216889,"capital":false,"lat":53.86893,"lng":10.68729},{"id":"oberhausen","name":"Oberhausen","state":"Nordrhein-Westfalen","population":213646,"capital":false,"lat":51.47805,"lng":6.8625},{"id":"rostock","name":"Rostock","state":"Mecklenburg-Vorpommern","population":205307,"capital":false,"lat":54.0887,"lng":12.14049},{"id":"kassel","name":"Kassel","state":"Hessen","population":197230,"capital":false,"lat":51.31667,"lng":9.5},{"id":"hagen","name":"Hagen","state":"Nordrhein-Westfalen","population":190384,"capital":false,"lat":51.36081,"lng":7.47168},{"id":"potsdam","name":"Potsdam","state":"Brandenburg","population":184754,"capital":true,"lat":52.39886,"lng":13.06566},{"id":"saarbruecken","name":"Saarbrücken","state":"Saarland","population":182971,"capital":true,"lat":49.23262,"lng":7.00982},{"id":"hamm","name":"Hamm","state":"Nordrhein-Westfalen","population":179968,"capital":false,"lat":51.68033,"lng":7.82089},{"id":"ludwigshafen-am-rhein","name":"Ludwigshafen am Rhein","state":"Rheinland-Pfalz","population":177222,"capital":false,"lat":49.48121,"lng":8.44641},{"id":"oldenburg","name":"Oldenburg","state":"Niedersachsen","population":176614,"capital":false,"lat":53.14039,"lng":8.21479},{"id":"muelheim-an-der-ruhr","name":"Mülheim an der Ruhr","state":"Nordrhein-Westfalen","population":173050,"capital":false,"lat":51.43218,"lng":6.87967},{"id":"leverkusen","name":"Leverkusen","state":"Nordrhein-Westfalen","population":168581,"capital":false,"lat":51.0303,"lng":6.98432},{"id":"darmstadt","name":"Darmstadt","state":"Hessen","population":167029,"capital":false,"lat":49.87167,"lng":8.65027},{"id":"osnabrueck","name":"Osnabrück","state":"Niedersachsen","population":166057,"capital":false,"lat":52.27264,"lng":8.0498},{"id":"solingen","name":"Solingen","state":"Nordrhein-Westfalen","population":165626,"capital":false,"lat":51.17343,"lng":7.0845},{"id":"paderborn","name":"Paderborn","state":"Nordrhein-Westfalen","population":156378,"capital":false,"lat":51.71905,"lng":8.75439},{"id":"herne","name":"Herne","state":"Nordrhein-Westfalen","population":155851,"capital":false,"lat":51.5388,"lng":7.22572},{"id":"heidelberg","name":"Heidelberg","state":"Baden-Württemberg","population":155756,"capital":false,"lat":49.40768,"lng":8.69079},{"id":"neuss","name":"Neuss","state":"Nordrhein-Westfalen","population":154317,"capital":false,"lat":51.19807,"lng":6.68504},{"id":"regensburg","name":"Regensburg","state":"Bayern","population":151389,"capital":false,"lat":49.01513,"lng":12.10161},{"id":"ingolstadt","name":"Ingolstadt","state":"Bayern","population":141185,"capital":false,"lat":48.76508,"lng":11.42372},{"id":"pforzheim","name":"Pforzheim","state":"Baden-Württemberg","population":134912,"capital":false,"lat":48.88436,"lng":8.69892},{"id":"wuerzburg","name":"Würzburg","state":"Bayern","population":133258,"capital":false,"lat":49.79391,"lng":9.95121},{"id":"offenbach-am-main","name":"Offenbach am Main","state":"Hessen","population":132746,"capital":false,"lat":50.10061,"lng":8.76647},{"id":"fuerth","name":"Fürth","state":"Bayern","population":132036,"capital":false,"lat":49.47593,"lng":10.98856},{"id":"heilbronn","name":"Heilbronn","state":"Baden-Württemberg","population":131986,"capital":false,"lat":49.13995,"lng":9.22054},{"id":"ulm","name":"Ulm","state":"Baden-Württemberg","population":129882,"capital":false,"lat":48.39841,"lng":9.99155},{"id":"wolfsburg","name":"Wolfsburg","state":"Niedersachsen","population":129560,"capital":false,"lat":52.42452,"lng":10.7815},{"id":"goettingen","name":"Göttingen","state":"Niedersachsen","population":127259,"capital":false,"lat":51.53443,"lng":9.93228},{"id":"reutlingen","name":"Reutlingen","state":"Baden-Württemberg","population":118852,"capital":false,"lat":48.49144,"lng":9.20427},{"id":"bremerhaven","name":"Bremerhaven","state":"Bremen","population":118610,"capital":false,"lat":53.55357,"lng":8.57553},{"id":"bottrop","name":"Bottrop","state":"Nordrhein-Westfalen","population":118535,"capital":false,"lat":51.52392,"lng":6.9285},{"id":"erlangen","name":"Erlangen","state":"Bayern","population":115928,"capital":false,"lat":49.59099,"lng":11.00783},{"id":"recklinghausen","name":"Recklinghausen","state":"Nordrhein-Westfalen","population":115344,"capital":false,"lat":51.61379,"lng":7.19738},{"id":"remscheid","name":"Remscheid","state":"Nordrhein-Westfalen","population":113828,"capital":false,"lat":51.17983,"lng":7.1925},{"id":"koblenz","name":"Koblenz","state":"Rheinland-Pfalz","population":113378,"capital":false,"lat":50.35357,"lng":7.57883},{"id":"bergisch-gladbach","name":"Bergisch Gladbach","state":"Nordrhein-Westfalen","population":111361,"capital":false,"lat":50.9856,"lng":7.13298},{"id":"jena","name":"Jena","state":"Thüringen","population":109725,"capital":false,"lat":50.92878,"lng":11.5899},{"id":"salzgitter","name":"Salzgitter","state":"Niedersachsen","population":104970,"capital":false,"lat":52.15705,"lng":10.4154},{"id":"trier","name":"Trier","state":"Rheinland-Pfalz","population":104342,"capital":false,"lat":49.75565,"lng":6.63935},{"id":"siegen","name":"Siegen","state":"Nordrhein-Westfalen","population":102685,"capital":false,"lat":50.87481,"lng":8.02431},{"id":"moers","name":"Moers","state":"Nordrhein-Westfalen","population":101503,"capital":false,"lat":51.45342,"lng":6.6326},{"id":"guetersloh","name":"Gütersloh","state":"Nordrhein-Westfalen","population":100479,"capital":false,"lat":51.90693,"lng":8.37853},{"id":"kaiserslautern","name":"Kaiserslautern","state":"Rheinland-Pfalz","population":100426,"capital":false,"lat":49.443,"lng":7.77161},{"id":"hildesheim","name":"Hildesheim","state":"Niedersachsen","population":98510,"capital":false,"lat":52.15077,"lng":9.95112},{"id":"schwerin","name":"Schwerin","state":"Mecklenburg-Vorpommern","population":98308,"capital":true,"lat":53.62937,"lng":11.41316},{"id":"hanau","name":"Hanau","state":"Hessen","population":97956,"capital":false,"lat":50.13423,"lng":8.91418},{"id":"flensburg","name":"Flensburg","state":"Schleswig-Holstein","population":96326,"capital":false,"lat":54.78805,"lng":9.43722},{"id":"esslingen-am-neckar","name":"Esslingen am Neckar","state":"Baden-Württemberg","population":96182,"capital":false,"lat":48.73961,"lng":9.30473},{"id":"gera","name":"Gera","state":"Thüringen","population":95608,"capital":false,"lat":50.88029,"lng":12.08187},{"id":"cottbus","name":"Cottbus","state":"Brandenburg","population":95123,"capital":false,"lat":51.75769,"lng":14.32888},{"id":"dueren","name":"Düren","state":"Nordrhein-Westfalen","population":94568,"capital":false,"lat":50.80434,"lng":6.49299},{"id":"ludwigsburg","name":"Ludwigsburg","state":"Baden-Württemberg","population":92858,"capital":false,"lat":48.89731,"lng":9.19161},{"id":"tuebingen","name":"Tübingen","state":"Baden-Württemberg","population":92322,"capital":false,"lat":48.52266,"lng":9.05222},{"id":"iserlohn","name":"Iserlohn","state":"Nordrhein-Westfalen","population":91811,"capital":false,"lat":51.37547,"lng":7.70281},{"id":"witten","name":"Witten","state":"Nordrhein-Westfalen","population":91808,"capital":false,"lat":51.44362,"lng":7.35258},{"id":"villingen-schwenningen","name":"Villingen-Schwenningen","state":"Baden-Württemberg","population":89756,"capital":false,"lat":48.06226,"lng":8.49358},{"id":"ratingen","name":"Ratingen","state":"Nordrhein-Westfalen","population":89368,"capital":false,"lat":51.29724,"lng":6.84929},{"id":"giessen","name":"Gießen","state":"Hessen","population":89179,"capital":false,"lat":50.58727,"lng":8.67554},{"id":"zwickau","name":"Zwickau","state":"Sachsen","population":87410,"capital":false,"lat":50.72724,"lng":12.48839},{"id":"konstanz","name":"Konstanz","state":"Baden-Württemberg","population":86919,"capital":false,"lat":47.66033,"lng":9.17582},{"id":"marl","name":"Marl","state":"Nordrhein-Westfalen","population":86766,"capital":false,"lat":51.65671,"lng":7.09038},{"id":"worms","name":"Worms","state":"Rheinland-Pfalz","population":86753,"capital":false,"lat":49.63278,"lng":8.35916},{"id":"luenen","name":"Lünen","state":"Nordrhein-Westfalen","population":86163,"capital":false,"lat":51.61634,"lng":7.52872},{"id":"minden","name":"Minden","state":"Nordrhein-Westfalen","population":84013,"capital":false,"lat":52.28953,"lng":8.91455},{"id":"norderstedt","name":"Norderstedt","state":"Schleswig-Holstein","population":82844,"capital":false,"lat":53.70177,"lng":9.99328},{"id":"velbert","name":"Velbert","state":"Nordrhein-Westfalen","population":82463,"capital":false,"lat":51.33537,"lng":7.04348},{"id":"delmenhorst","name":"Delmenhorst","state":"Niedersachsen","population":81406,"capital":false,"lat":53.0511,"lng":8.63091},{"id":"neumuenster","name":"Neumünster","state":"Schleswig-Holstein","population":79809,"capital":false,"lat":54.07399,"lng":9.98456},{"id":"viersen","name":"Viersen","state":"Nordrhein-Westfalen","population":78373,"capital":false,"lat":51.25435,"lng":6.39441},{"id":"rheine","name":"Rheine","state":"Nordrhein-Westfalen","population":77209,"capital":false,"lat":52.28509,"lng":7.44055},{"id":"bamberg","name":"Bamberg","state":"Bayern","population":77150,"capital":false,"lat":49.89873,"lng":10.90067},{"id":"troisdorf","name":"Troisdorf","state":"Nordrhein-Westfalen","population":75901,"capital":false,"lat":50.80901,"lng":7.14968},{"id":"wilhelmshaven","name":"Wilhelmshaven","state":"Niedersachsen","population":75745,"capital":false,"lat":53.5476,"lng":8.10395},{"id":"gladbeck","name":"Gladbeck","state":"Nordrhein-Westfalen","population":75499,"capital":false,"lat":51.57077,"lng":6.98593},{"id":"dessau","name":"Dessau-Roßlau","state":"Sachsen-Anhalt","population":75402,"capital":false,"lat":51.8308,"lng":12.2426},{"id":"dorsten","name":"Dorsten","state":"Nordrhein-Westfalen","population":75277,"capital":false,"lat":51.66166,"lng":6.96514},{"id":"arnsberg","name":"Arnsberg","state":"Nordrhein-Westfalen","population":74879,"capital":false,"lat":51.38333,"lng":8.08333},{"id":"lueneburg","name":"Lüneburg","state":"Niedersachsen","population":74785,"capital":false,"lat":53.25122,"lng":10.41548},{"id":"detmold","name":"Detmold","state":"Nordrhein-Westfalen","population":74278,"capital":false,"lat":51.93855,"lng":8.87318},{"id":"brandenburg-an-der-havel","name":"Brandenburg an der Havel","state":"Brandenburg","population":74113,"capital":false,"lat":52.41667,"lng":12.55},{"id":"marburg","name":"Marburg","state":"Hessen","population":73544,"capital":false,"lat":50.80904,"lng":8.77069},{"id":"castrop-rauxel","name":"Castrop-Rauxel","state":"Nordrhein-Westfalen","population":73282,"capital":false,"lat":51.55657,"lng":7.31155},{"id":"bocholt","name":"Bocholt","state":"Nordrhein-Westfalen","population":73257,"capital":false,"lat":51.83879,"lng":6.61531},{"id":"aschaffenburg","name":"Aschaffenburg","state":"Bayern","population":73091,"capital":false,"lat":49.97704,"lng":9.15214},{"id":"bayreuth","name":"Bayreuth","state":"Bayern","population":72940,"capital":false,"lat":49.94782,"lng":11.57893},{"id":"landshut","name":"Landshut","state":"Bayern","population":71863,"capital":false,"lat":48.52961,"lng":12.16179},{"id":"luedenscheid","name":"Lüdenscheid","state":"Nordrhein-Westfalen","population":71212,"capital":false,"lat":51.21977,"lng":7.6273},{"id":"lippstadt","name":"Lippstadt","state":"Nordrhein-Westfalen","population":68739,"capital":false,"lat":51.67369,"lng":8.34482},{"id":"kempten-allgaeu","name":"Kempten (Allgäu)","state":"Bayern","population":67645,"capital":false,"lat":47.72674,"lng":10.31389},{"id":"aalen","name":"Aalen","state":"Baden-Württemberg","population":67621,"capital":false,"lat":48.83777,"lng":10.0933},{"id":"herford","name":"Herford","state":"Nordrhein-Westfalen","population":67503,"capital":false,"lat":52.11457,"lng":8.67343},{"id":"neuwied","name":"Neuwied","state":"Rheinland-Pfalz","population":67083,"capital":false,"lat":50.4336,"lng":7.47057},{"id":"dinslaken","name":"Dinslaken","state":"Nordrhein-Westfalen","population":66993,"capital":false,"lat":51.56227,"lng":6.7434},{"id":"celle","name":"Celle","state":"Niedersachsen","population":66834,"capital":false,"lat":52.62264,"lng":10.08047},{"id":"kerpen","name":"Kerpen","state":"Nordrhein-Westfalen","population":66585,"capital":false,"lat":50.86991,"lng":6.69691},{"id":"grevenbroich","name":"Grevenbroich","state":"Nordrhein-Westfalen","population":65983,"capital":false,"lat":51.09102,"lng":6.5827},{"id":"weimar","name":"Weimar","state":"Thüringen","population":65954,"capital":false,"lat":50.9803,"lng":11.32903},{"id":"ruesselsheim-am-main","name":"Rüsselsheim am Main","state":"Hessen","population":65627,"capital":false,"lat":49.98955,"lng":8.42251},{"id":"plauen","name":"Plauen","state":"Sachsen","population":65599,"capital":false,"lat":50.4973,"lng":12.13782},{"id":"fulda","name":"Fulda","state":"Hessen","population":65434,"capital":false,"lat":50.55162,"lng":9.67518},{"id":"rosenheim","name":"Rosenheim","state":"Bayern","population":65274,"capital":false,"lat":47.85637,"lng":12.12247},{"id":"schwaebisch-gmuend","name":"Schwäbisch Gmünd","state":"Baden-Württemberg","population":64416,"capital":false,"lat":48.79947,"lng":9.79809},{"id":"dormagen","name":"Dormagen","state":"Nordrhein-Westfalen","population":63799,"capital":false,"lat":51.09683,"lng":6.83167},{"id":"offenburg","name":"Offenburg","state":"Baden-Württemberg","population":62993,"capital":false,"lat":48.47377,"lng":7.94495},{"id":"friedrichshafen","name":"Friedrichshafen","state":"Baden-Württemberg","population":62796,"capital":false,"lat":47.65689,"lng":9.47554},{"id":"neu-ulm","name":"Neu-Ulm","state":"Bayern","population":62641,"capital":false,"lat":48.39279,"lng":10.01112},{"id":"huerth","name":"Hürth","state":"Nordrhein-Westfalen","population":62160,"capital":false,"lat":50.87079,"lng":6.86761},{"id":"bergheim","name":"Bergheim","state":"Nordrhein-Westfalen","population":61611,"capital":false,"lat":50.95572,"lng":6.63986},{"id":"sindelfingen","name":"Sindelfingen","state":"Baden-Württemberg","population":61422,"capital":false,"lat":48.7,"lng":9.01667},{"id":"herten","name":"Herten","state":"Nordrhein-Westfalen","population":60941,"capital":false,"lat":51.59638,"lng":7.14387},{"id":"wesel","name":"Wesel","state":"Nordrhein-Westfalen","population":60785,"capital":false,"lat":51.6669,"lng":6.62037},{"id":"neubrandenburg","name":"Neubrandenburg","state":"Mecklenburg-Vorpommern","population":60344,"capital":false,"lat":53.55735,"lng":13.26105},{"id":"euskirchen","name":"Euskirchen","state":"Nordrhein-Westfalen","population":60021,"capital":false,"lat":50.66057,"lng":6.78722},{"id":"langenfeld-rheinland","name":"Langenfeld (Rheinland)","state":"Nordrhein-Westfalen","population":59975,"capital":false,"lat":51.10821,"lng":6.94831},{"id":"garbsen","name":"Garbsen","state":"Niedersachsen","population":59903,"capital":false,"lat":52.41371,"lng":9.5899},{"id":"goeppingen","name":"Göppingen","state":"Baden-Württemberg","population":58937,"capital":false,"lat":48.70354,"lng":9.65209},{"id":"unna","name":"Unna","state":"Nordrhein-Westfalen","population":58333,"capital":false,"lat":51.53795,"lng":7.68969},{"id":"hameln","name":"Hameln","state":"Niedersachsen","population":58244,"capital":false,"lat":52.10397,"lng":9.35623},{"id":"stolberg-rheinland","name":"Stolberg (Rheinland)","state":"Nordrhein-Westfalen","population":57684,"capital":false,"lat":50.77368,"lng":6.22595},{"id":"eschweiler","name":"Eschweiler","state":"Nordrhein-Westfalen","population":57534,"capital":false,"lat":50.81854,"lng":6.27184},{"id":"waiblingen","name":"Waiblingen","state":"Baden-Württemberg","population":57313,"capital":false,"lat":48.83241,"lng":9.31641},{"id":"frankfurt-oder","name":"Frankfurt (Oder)","state":"Brandenburg","population":57107,"capital":false,"lat":52.34714,"lng":14.55062},{"id":"meerbusch","name":"Meerbusch","state":"Nordrhein-Westfalen","population":57078,"capital":false,"lat":51.25268,"lng":6.68807},{"id":"nordhorn","name":"Nordhorn","state":"Niedersachsen","population":56973,"capital":false,"lat":52.43081,"lng":7.06833},{"id":"baden-baden","name":"Baden-Baden","state":"Baden-Württemberg","population":56881,"capital":false,"lat":48.7606,"lng":8.23975},{"id":"bad-homburg-vor-der-hoehe","name":"Bad Homburg vor der Höhe","state":"Hessen","population":56688,"capital":false,"lat":50.22683,"lng":8.61816},{"id":"sankt-augustin","name":"Sankt Augustin","state":"Nordrhein-Westfalen","population":56521,"capital":false,"lat":50.77538,"lng":7.197},{"id":"lingen-ems","name":"Lingen (Ems)","state":"Niedersachsen","population":56498,"capital":false,"lat":52.52269,"lng":7.32555},{"id":"pulheim","name":"Pulheim","state":"Nordrhein-Westfalen","population":56150,"capital":false,"lat":50.99965,"lng":6.80632},{"id":"greifswald","name":"Greifswald","state":"Mecklenburg-Vorpommern","population":56092,"capital":false,"lat":54.08905,"lng":13.40244},{"id":"goerlitz","name":"Görlitz","state":"Sachsen","population":55186,"capital":false,"lat":51.15518,"lng":14.98853},{"id":"hilden","name":"Hilden","state":"Nordrhein-Westfalen","population":55157,"capital":false,"lat":51.16818,"lng":6.93093},{"id":"wetzlar","name":"Wetzlar","state":"Hessen","population":54665,"capital":false,"lat":50.56109,"lng":8.50495},{"id":"schweinfurt","name":"Schweinfurt","state":"Bayern","population":54481,"capital":false,"lat":50.04937,"lng":10.22175},{"id":"bad-kreuznach","name":"Bad Kreuznach","state":"Rheinland-Pfalz","population":54168,"capital":false,"lat":49.8414,"lng":7.86713},{"id":"langenhagen","name":"Langenhagen","state":"Niedersachsen","population":54142,"capital":false,"lat":52.44758,"lng":9.73741},{"id":"stralsund","name":"Stralsund","state":"Mecklenburg-Vorpommern","population":54094,"capital":false,"lat":54.30911,"lng":13.0818},{"id":"bad-salzuflen","name":"Bad Salzuflen","state":"Nordrhein-Westfalen","population":53958,"capital":false,"lat":52.0862,"lng":8.74434},{"id":"hattingen","name":"Hattingen","state":"Nordrhein-Westfalen","population":53044,"capital":false,"lat":51.39894,"lng":7.18557},{"id":"passau","name":"Passau","state":"Bayern","population":53039,"capital":false,"lat":48.5665,"lng":13.43122},{"id":"kleve","name":"Kleve","state":"Nordrhein-Westfalen","population":53028,"capital":false,"lat":51.78826,"lng":6.13865},{"id":"neustadt-an-der-weinstrasse","name":"Neustadt an der Weinstraße","state":"Rheinland-Pfalz","population":52945,"capital":false,"lat":49.35009,"lng":8.13886},{"id":"ahlen","name":"Ahlen","state":"Nordrhein-Westfalen","population":52666,"capital":false,"lat":51.76338,"lng":7.8887},{"id":"wolfenbuettel","name":"Wolfenbüttel","state":"Niedersachsen","population":52604,"capital":false,"lat":52.16442,"lng":10.54095},{"id":"frechen","name":"Frechen","state":"Nordrhein-Westfalen","population":52309,"capital":false,"lat":50.91485,"lng":6.8118},{"id":"menden-sauerland","name":"Menden (Sauerland)","state":"Nordrhein-Westfalen","population":52255,"capital":false,"lat":51.44337,"lng":7.77825},{"id":"ibbenbueren","name":"Ibbenbüren","state":"Nordrhein-Westfalen","population":51803,"capital":false,"lat":52.27964,"lng":7.71457},{"id":"boeblingen","name":"Böblingen","state":"Baden-Württemberg","population":51483,"capital":false,"lat":48.68212,"lng":9.01171},{"id":"loerrach","name":"Lörrach","state":"Baden-Württemberg","population":51349,"capital":false,"lat":47.61497,"lng":7.66457},{"id":"elmshorn","name":"Elmshorn","state":"Schleswig-Holstein","population":51342,"capital":false,"lat":53.74912,"lng":9.66176},{"id":"gummersbach","name":"Gummersbach","state":"Nordrhein-Westfalen","population":51290,"capital":false,"lat":51.02608,"lng":7.56473},{"id":"peine","name":"Peine","state":"Niedersachsen","population":50987,"capital":false,"lat":52.31928,"lng":10.2352},{"id":"lahr-schwarzwald","name":"Lahr/Schwarzwald","state":"Baden-Württemberg","population":50775,"capital":false,"lat":48.34042,"lng":7.86886},{"id":"rastatt","name":"Rastatt","state":"Baden-Württemberg","population":50741,"capital":false,"lat":48.85851,"lng":8.20965},{"id":"ravensburg","name":"Ravensburg","state":"Baden-Württemberg","population":50628,"capital":false,"lat":47.78198,"lng":9.61062},{"id":"bad-oeynhausen","name":"Bad Oeynhausen","state":"Nordrhein-Westfalen","population":50620,"capital":false,"lat":52.20699,"lng":8.80365},{"id":"heidenheim-an-der-brenz","name":"Heidenheim an der Brenz","state":"Baden-Württemberg","population":50618,"capital":false,"lat":48.67798,"lng":10.15162},{"id":"gronau-westf","name":"Gronau (Westf.)","state":"Nordrhein-Westfalen","population":50547,"capital":false,"lat":52.21099,"lng":7.02238},{"id":"ars-033520011011","name":"Cuxhaven","state":"Niedersachsen","population":49697,"capital":false},{"id":"ars-073180000000","name":"Speyer","state":"Rheinland-Pfalz","population":49564,"capital":false},{"id":"ars-081150028028","name":"Leonberg","state":"Baden-Württemberg","population":49480,"capital":false},{"id":"ars-051660036036","name":"Willich","state":"Nordrhein-Westfalen","population":49413,"capital":false},{"id":"ars-034020000000","name":"Emden","state":"Niedersachsen","population":49202,"capital":false},{"id":"ars-059780004004","name":"Bergkamen","state":"Nordrhein-Westfalen","population":49143,"capital":false},{"id":"ars-120650256256","name":"Oranienburg","state":"Brandenburg","population":49122,"capital":false},{"id":"ars-092630000000","name":"Straubing","state":"Bayern","population":49002,"capital":false},{"id":"ars-091780124124","name":"Freising","state":"Bayern","population":48928,"capital":false},{"id":"ars-053340004004","name":"Alsdorf","state":"Nordrhein-Westfalen","population":48810,"capital":false},{"id":"ars-053620020020","name":"Erftstadt","state":"Nordrhein-Westfalen","population":48772,"capital":false},{"id":"ars-033590038038","name":"Stade","state":"Niedersachsen","population":48633,"capital":false},{"id":"ars-053340016016","name":"Herzogenrath","state":"Nordrhein-Westfalen","population":48574,"capital":false},{"id":"ars-073130000000","name":"Landau in der Pfalz","state":"Rheinland-Pfalz","population":48209,"capital":false},{"id":"ars-053820012012","name":"Bornheim","state":"Nordrhein-Westfalen","population":48203,"capital":false},{"id":"ars-053820020020","name":"Hennef (Sieg)","state":"Nordrhein-Westfalen","population":48188,"capital":false},{"id":"ars-073110000000","name":"Frankenthal (Pfalz)","state":"Rheinland-Pfalz","population":48140,"capital":false},{"id":"ars-057540028028","name":"Rheda-Wiedenbrück","state":"Nordrhein-Westfalen","population":48030,"capital":false},{"id":"ars-055580016016","name":"Dülmen","state":"Nordrhein-Westfalen","population":47989,"capital":false},{"id":"ars-082155003009","name":"Bruchsal","state":"Baden-Württemberg","population":47784,"capital":false},{"id":"ars-059740040040","name":"Soest","state":"Nordrhein-Westfalen","population":47776,"capital":false},{"id":"ars-083355005075","name":"Singen (Hohentwiel)","state":"Baden-Württemberg","population":47621,"capital":false},{"id":"ars-031530017017","name":"Goslar","state":"Niedersachsen","population":47419,"capital":false},{"id":"ars-100430114114","name":"Neunkirchen","state":"Saarland","population":47344,"capital":false},{"id":"ars-091740115115","name":"Dachau","state":"Bayern","population":47138,"capital":false},{"id":"ars-081190020020","name":"Fellbach","state":"Baden-Württemberg","population":47120,"capital":false},{"id":"ars-084175001079","name":"Albstadt","state":"Baden-Württemberg","population":46950,"capital":false},{"id":"ars-094640000000","name":"Hof","state":"Bayern","population":46778,"capital":false},{"id":"ars-064340008008","name":"Oberursel (Taunus)","state":"Hessen","population":46736,"capital":false},{"id":"ars-034590024024","name":"Melle","state":"Niedersachsen","population":46436,"capital":false},{"id":"ars-160670029029","name":"Gotha","state":"Thüringen","population":46400,"capital":false},{"id":"ars-057580004004","name":"Bünde","state":"Nordrhein-Westfalen","population":46365,"capital":false},{"id":"ars-081160077077","name":"Filderstadt","state":"Baden-Württemberg","population":46243,"capital":false},{"id":"ars-097620000000","name":"Kaufbeuren","state":"Bayern","population":46193,"capital":false},{"id":"ars-082260096096","name":"Weinheim","state":"Baden-Württemberg","population":45852,"capital":false},{"id":"ars-059780028028","name":"Schwerte","state":"Nordrhein-Westfalen","population":45821,"capital":false},{"id":"ars-120630080080","name":"Falkensee","state":"Brandenburg","population":45720,"capital":false},{"id":"ars-084165003036","name":"Rottenburg am Neckar","state":"Baden-Württemberg","population":45677,"capital":false},{"id":"ars-053620012012","name":"Brühl","state":"Nordrhein-Westfalen","population":45555,"capital":false},{"id":"ars-053700004004","name":"Erkelenz","state":"Nordrhein-Westfalen","population":45315,"capital":false},{"id":"ars-064380011011","name":"Rodgau","state":"Hessen","population":45277,"capital":false},{"id":"ars-150910375375","name":"Wittenberg","state":"Sachsen-Anhalt","population":45249,"capital":false},{"id":"ars-010560039039","name":"Pinneberg","state":"Schleswig-Holstein","population":44865,"capital":false},{"id":"ars-032410012012","name":"Neustadt am Rübenberge","state":"Niedersachsen","population":44668,"capital":false},{"id":"ars-120600020020","name":"Bernau bei Berlin","state":"Brandenburg","population":44597,"capital":false},{"id":"ars-032410011011","name":"Lehrte","state":"Niedersachsen","population":44255,"capital":false},{"id":"ars-097640000000","name":"Memmingen","state":"Bayern","population":44192,"capital":false},{"id":"ars-051580004004","name":"Erkrath","state":"Nordrhein-Westfalen","population":43706,"capital":false},{"id":"ars-051580026026","name":"Monheim am Rhein","state":"Nordrhein-Westfalen","population":43630,"capital":false},{"id":"ars-081185002079","name":"Bietigheim-Bissingen","state":"Baden-Württemberg","population":43556,"capital":false},{"id":"ars-100450114114","name":"Homburg","state":"Saarland","population":43382,"capital":false},{"id":"ars-130740087087","name":"Wismar","state":"Mecklenburg-Vorpommern","population":43329,"capital":false},{"id":"ars-051620016016","name":"Kaarst","state":"Nordrhein-Westfalen","population":43295,"capital":false},{"id":"ars-053700016016","name":"Heinsberg","state":"Nordrhein-Westfalen","population":43163,"capital":false},{"id":"ars-055540012012","name":"Borken","state":"Nordrhein-Westfalen","population":43035,"capital":false},{"id":"ars-031510009009","name":"Gifhorn","state":"Niedersachsen","population":42726,"capital":false},{"id":"ars-034520001001","name":"Aurich","state":"Niedersachsen","population":42612,"capital":false},{"id":"ars-081275009076","name":"Schwäbisch Hall","state":"Baden-Württemberg","population":42598,"capital":false},{"id":"ars-093610000000","name":"Amberg","state":"Bayern","population":42553,"capital":false},{"id":"ars-053820060060","name":"Siegburg","state":"Nordrhein-Westfalen","population":42445,"capital":false},{"id":"ars-093630000000","name":"Weiden i.d.OPf.","state":"Bayern","population":42444,"capital":false},{"id":"ars-059780020020","name":"Kamen","state":"Nordrhein-Westfalen","population":42319,"capital":false},{"id":"ars-081165001033","name":"Kirchheim unter Teck","state":"Baden-Württemberg","population":42299,"capital":false},{"id":"ars-051660016016","name":"Nettetal","state":"Nordrhein-Westfalen","population":41955,"capital":false},{"id":"ars-032410009009","name":"Laatzen","state":"Niedersachsen","population":41838,"capital":false},{"id":"ars-033530005005","name":"Buchholz in der Nordheide","state":"Niedersachsen","population":41737,"capital":false},{"id":"ars-064380002002","name":"Dreieich","state":"Hessen","population":41692,"capital":false},{"id":"ars-081195003067","name":"Schorndorf","state":"Baden-Württemberg","population":41647,"capital":false},{"id":"ars-145220180180","name":"Freiberg","state":"Sachsen","population":41519,"capital":false},{"id":"ars-120600052052","name":"Eberswalde","state":"Brandenburg","population":41481,"capital":false},{"id":"ars-032410021021","name":"Wunstorf","state":"Niedersachsen","population":41211,"capital":false},{"id":"ars-053700020020","name":"Hückelhoven","state":"Nordrhein-Westfalen","population":41192,"capital":false},{"id":"ars-081160078078","name":"Leinfelden-Echterdingen","state":"Baden-Württemberg","population":41185,"capital":false},{"id":"ars-064310002002","name":"Bensheim","state":"Hessen","population":41124,"capital":false},{"id":"ars-093730147147","name":"Neumarkt i.d.OPf.","state":"Bayern","population":41103,"capital":false},{"id":"ars-094630000000","name":"Coburg","state":"Bayern","population":41064,"capital":false},{"id":"ars-100410519519","name":"Völklingen","state":"Saarland","population":40952,"capital":false},{"id":"ars-091790123123","name":"Germering","state":"Bayern","population":40916,"capital":false},{"id":"ars-033590010010","name":"Buxtehude","state":"Niedersachsen","population":40886,"capital":false},{"id":"ars-095650000000","name":"Schwabach","state":"Bayern","population":40835,"capital":false},{"id":"ars-057580024024","name":"Löhne","state":"Nordrhein-Westfalen","population":40826,"capital":false},{"id":"ars-081165005049","name":"Nürtingen","state":"Baden-Württemberg","population":40773,"capital":false},{"id":"ars-160620041041","name":"Nordhausen","state":"Thüringen","population":40767,"capital":false},{"id":"ars-160630105105","name":"Eisenach","state":"Thüringen","population":40747,"capital":false},{"id":"ars-095610000000","name":"Ansbach","state":"Bayern","population":40742,"capital":false},{"id":"ars-053820024024","name":"Königswinter","state":"Nordrhein-Westfalen","population":40574,"capital":false},{"id":"ars-055540004004","name":"Ahaus","state":"Nordrhein-Westfalen","population":40176,"capital":false},{"id":"ars-053340036036","name":"Würselen","state":"Nordrhein-Westfalen","population":40145,"capital":false},{"id":"ars-146285229270","name":"Pirna","state":"Sachsen","population":40128,"capital":false},{"id":"ars-057660044044","name":"Lemgo","state":"Nordrhein-Westfalen","population":39905,"capital":false},{"id":"ars-081160080080","name":"Ostfildern","state":"Baden-Württemberg","population":39778,"capital":false},{"id":"ars-073170000000","name":"Pirmasens","state":"Rheinland-Pfalz","population":39761,"capital":false},{"id":"ars-083170057057","name":"Kehl","state":"Baden-Württemberg","population":39584,"capital":false},{"id":"ars-051580024024","name":"Mettmann","state":"Nordrhein-Westfalen","population":39542,"capital":false},{"id":"ars-120610260260","name":"Königs Wusterhausen","state":"Brandenburg","population":39360,"capital":false},{"id":"ars-146280110110","name":"Freital","state":"Sachsen","population":39281,"capital":false},{"id":"ars-064360007007","name":"Hofheim am Taunus","state":"Hessen","population":39259,"capital":false},{"id":"ars-064350019019","name":"Maintal","state":"Hessen","population":38987,"capital":false},{"id":"ars-160700029029","name":"Ilmenau","state":"Thüringen","population":38834,"capital":false},{"id":"ars-081195001008","name":"Backnang","state":"Baden-Württemberg","population":38818,"capital":false},{"id":"ars-064380006006","name":"Langen (Hessen)","state":"Hessen","population":38785,"capital":false},{"id":"ars-082150017017","name":"Ettlingen","state":"Baden-Württemberg","population":38578,"capital":false},{"id":"ars-053820044044","name":"Niederkassel","state":"Nordrhein-Westfalen","population":38485,"capital":false},{"id":"ars-055580012012","name":"Coesfeld","state":"Nordrhein-Westfalen","population":38237,"capital":false},{"id":"ars-051700020020","name":"Kamp-Lintfort","state":"Nordrhein-Westfalen","population":38217,"capital":false},{"id":"ars-055660012012","name":"Greven","state":"Nordrhein-Westfalen","population":38212,"capital":false},{"id":"ars-055620016016","name":"Haltern am See","state":"Nordrhein-Westfalen","population":38142,"capital":false},{"id":"ars-053620040040","name":"Wesseling","state":"Nordrhein-Westfalen","population":38106,"capital":false},{"id":"ars-150840550550","name":"Weißenfels","state":"Sachsen-Anhalt","population":37929,"capital":false},{"id":"ars-064380009009","name":"Neu-Isenburg","state":"Hessen","population":37926,"capital":false},{"id":"ars-150850135135","name":"Halberstadt","state":"Sachsen-Anhalt","population":37898,"capital":false},{"id":"ars-150900535535","name":"Stendal","state":"Sachsen-Anhalt","population":37850,"capital":false},{"id":"ars-055700052052","name":"Warendorf","state":"Nordrhein-Westfalen","population":37703,"capital":false},{"id":"ars-100440115115","name":"Saarlouis","state":"Saarland","population":37667,"capital":false},{"id":"ars-146250020020","name":"Bautzen / Budyšin","state":"Sachsen","population":37566,"capital":false},{"id":"ars-091790121121","name":"Fürstenfeldbruck","state":"Bayern","population":37420,"capital":false},{"id":"ars-034540041041","name":"Papenburg","state":"Niedersachsen","population":37206,"capital":false},{"id":"ars-091770117117","name":"Erding","state":"Bayern","population":37171,"capital":false},{"id":"ars-055700008008","name":"Beckum","state":"Nordrhein-Westfalen","population":37133,"capital":false},{"id":"ars-083275006050","name":"Tuttlingen","state":"Baden-Württemberg","population":37109,"capital":false},{"id":"ars-082265008085","name":"Sinsheim","state":"Baden-Württemberg","population":37036,"capital":false},{"id":"ars-033530040040","name":"Winsen (Luhe)","state":"Niedersachsen","population":36961,"capital":false},{"id":"ars-034540035035","name":"Meppen","state":"Niedersachsen","population":36930,"capital":false},{"id":"ars-150820015015","name":"Bitterfeld-Wolfen","state":"Sachsen-Anhalt","population":36592,"capital":false},{"id":"ars-034530004004","name":"Cloppenburg","state":"Niedersachsen","population":36565,"capital":false},{"id":"ars-057700032032","name":"Porta Westfalica","state":"Nordrhein-Westfalen","population":36521,"capital":false},{"id":"ars-160640046046","name":"Mühlhausen/Thüringen","state":"Thüringen","population":36353,"capital":false},{"id":"ars-055660008008","name":"Emsdetten","state":"Nordrhein-Westfalen","population":36159,"capital":false},{"id":"ars-064400003003","name":"Bad Vilbel","state":"Hessen","population":35961,"capital":false},{"id":"ars-065330009009","name":"Limburg a. d. Lahn","state":"Hessen","population":35938,"capital":false},{"id":"ars-081275002014","name":"Crailsheim","state":"Baden-Württemberg","population":35755,"capital":false},{"id":"ars-051700044044","name":"Voerde (Niederrhein)","state":"Nordrhein-Westfalen","population":35661,"capital":false},{"id":"ars-084175002002","name":"Balingen","state":"Baden-Württemberg","population":35623,"capital":false},{"id":"ars-064380001001","name":"Dietzenbach","state":"Hessen","population":35561,"capital":false},{"id":"ars-055620008008","name":"Datteln","state":"Nordrhein-Westfalen","population":35473,"capital":false},{"id":"ars-100450117117","name":"St. Ingbert","state":"Saarland","population":35453,"capital":false},{"id":"ars-057660040040","name":"Lage","state":"Nordrhein-Westfalen","population":35054,"capital":false},{"id":"ars-092710119119","name":"Deggendorf","state":"Bayern","population":35044,"capital":false},{"id":"ars-073390030030","name":"Ingelheim am Rhein","state":"Rheinland-Pfalz","population":35016,"capital":false},{"id":"ars-059620016016","name":"Hemer","state":"Nordrhein-Westfalen","population":35005,"capital":false},{"id":"ars-051540012012","name":"Geldern","state":"Nordrhein-Westfalen","population":34962,"capital":false},{"id":"ars-010560050050","name":"Wedel","state":"Schleswig-Holstein","population":34912,"capital":false},{"id":"ars-051540016016","name":"Goch","state":"Nordrhein-Westfalen","population":34907,"capital":false},{"id":"ars-053580024024","name":"Jülich","state":"Nordrhein-Westfalen","population":34890,"capital":false},{"id":"ars-055660084084","name":"Steinfurt","state":"Nordrhein-Westfalen","population":34860,"capital":false},{"id":"ars-160540000000","name":"Suhl","state":"Thüringen","population":34685,"capital":false},{"id":"ars-083365004069","name":"Rheinfelden (Baden)","state":"Baden-Württemberg","population":34674,"capital":false},{"id":"ars-051620020020","name":"Korschenbroich","state":"Nordrhein-Westfalen","population":34600,"capital":false},{"id":"ars-084265003021","name":"Biberach an der Riß","state":"Baden-Württemberg","population":34576,"capital":false},{"id":"ars-010620001001","name":"Ahrensburg","state":"Schleswig-Holstein","population":34534,"capital":false},{"id":"ars-064310020020","name":"Viernheim","state":"Hessen","population":34426,"capital":false},{"id":"ars-150880220220","name":"Merseburg","state":"Sachsen-Anhalt","population":34392,"capital":false},{"id":"ars-053780032032","name":"Wermelskirchen","state":"Nordrhein-Westfalen","population":34375,"capital":false},{"id":"ars-032410015015","name":"Seelze","state":"Niedersachsen","population":34364,"capital":false},{"id":"ars-081155003021","name":"Herrenberg","state":"Baden-Württemberg","population":34192,"capital":false},{"id":"ars-051660012012","name":"Kempen","state":"Nordrhein-Westfalen","population":34105,"capital":false},{"id":"ars-034570013013","name":"Leer (Ostfriesland)","state":"Niedersachsen","population":34025,"capital":false},{"id":"ars-081180046046","name":"Kornwestheim","state":"Baden-Württemberg","population":33980,"capital":false},{"id":"ars-032410002002","name":"Barsinghausen","state":"Niedersachsen","population":33941,"capital":false},{"id":"ars-120735051532","name":"Schwedt/Oder","state":"Brandenburg","population":33730,"capital":false},{"id":"ars-034600009009","name":"Vechta","state":"Niedersachsen","population":33728,"capital":false},{"id":"ars-010530032032","name":"Geesthacht","state":"Schleswig-Holstein","population":33519,"capital":false},{"id":"ars-073200000000","name":"Zweibrücken","state":"Rheinland-Pfalz","population":33323,"capital":false},{"id":"ars-094740126126","name":"Forchheim","state":"Bayern","population":33017,"capital":false},{"id":"ars-146270210210","name":"Radebeul","state":"Sachsen","population":32979,"capital":false},{"id":"ars-064400002002","name":"Bad Nauheim","state":"Hessen","population":32894,"capital":false},{"id":"ars-033610001001","name":"Achim","state":"Niedersachsen","population":32870,"capital":false},{"id":"ars-033600025025","name":"Uelzen","state":"Niedersachsen","population":32821,"capital":false},{"id":"ars-010610046046","name":"Itzehoe","state":"Schleswig-Holstein","population":32725,"capital":false},{"id":"ars-032560022022","name":"Nienburg (Weser)","state":"Niedersachsen","population":32608,"capital":false},{"id":"ars-064310013013","name":"Lampertheim","state":"Hessen","population":32400,"capital":false},{"id":"ars-083360091091","name":"Weil am Rhein","state":"Baden-Württemberg","population":32236,"capital":false},{"id":"ars-150850370370","name":"Wernigerode","state":"Sachsen-Anhalt","population":32167,"capital":false},{"id":"ars-057740020020","name":"Delbrück","state":"Nordrhein-Westfalen","population":32166,"capital":false},{"id":"ars-120670144144","name":"Fürstenwalde/Spree","state":"Brandenburg","population":32002,"capital":false},{"id":"ars-120680320320","name":"Neuruppin","state":"Brandenburg","population":31962,"capital":false},{"id":"ars-150840355355","name":"Naumburg (Saale)","state":"Sachsen-Anhalt","population":31940,"capital":false},{"id":"ars-051540008008","name":"Emmerich am Rhein","state":"Nordrhein-Westfalen","population":31829,"capital":false},{"id":"ars-083350063063","name":"Radolfzell am Bodensee","state":"Baden-Württemberg","population":31734,"capital":false},{"id":"ars-100420113113","name":"Merzig","state":"Saarland","population":31697,"capital":false},{"id":"ars-064330008008","name":"Mörfelden-Walldorf","state":"Hessen","population":31638,"capital":false},{"id":"ars-055620028028","name":"Oer-Erkenschwick","state":"Nordrhein-Westfalen","population":31404,"capital":false},{"id":"ars-034590019019","name":"Georgsmarienhütte","state":"Niedersachsen","population":31244,"capital":false},{"id":"ars-051700032032","name":"Rheinberg","state":"Nordrhein-Westfalen","population":31172,"capital":false},{"id":"ars-160770001001","name":"Altenburg","state":"Thüringen","population":31093,"capital":false},{"id":"ars-033520062062","name":"Geestland","state":"Niedersachsen","population":31093,"capital":false},{"id":"ars-032410003003","name":"Burgdorf","state":"Niedersachsen","population":31051,"capital":false},{"id":"ars-033580024024","name":"Walsrode","state":"Niedersachsen","population":31019,"capital":false},{"id":"ars-150890030030","name":"Bernburg (Saale)","state":"Sachsen-Anhalt","population":30992,"capital":false},{"id":"ars-053820028028","name":"Lohmar","state":"Nordrhein-Westfalen","population":30992,"capital":false},{"id":"ars-059700024024","name":"Kreuztal","state":"Nordrhein-Westfalen","population":30905,"capital":false},{"id":"ars-066320002002","name":"Bad Hersfeld","state":"Hessen","population":30846,"capital":false},{"id":"ars-146250240240","name":"Hoyerswerda / Wojerecy","state":"Sachsen","population":30759,"capital":false},{"id":"ars-010580135135","name":"Rendsburg","state":"Schleswig-Holstein","population":30633,"capital":false},{"id":"ars-150890305305","name":"Schönebeck (Elbe)","state":"Sachsen-Anhalt","population":30419,"capital":false},{"id":"ars-064400008008","name":"Friedberg (Hessen)","state":"Hessen","population":30409,"capital":false},{"id":"ars-082155002007","name":"Bretten","state":"Baden-Württemberg","population":30274,"capital":false},{"id":"ars-059780040040","name":"Werne","state":"Nordrhein-Westfalen","population":30202,"capital":false},{"id":"ars-071340045045","name":"Idar-Oberstein","state":"Rheinland-Pfalz","population":30170,"capital":false},{"id":"ars-064390015015","name":"Taunusstein","state":"Hessen","population":30145,"capital":false},{"id":"ars-091850149149","name":"Neuburg a.d.Donau","state":"Bayern","population":30135,"capital":false},{"id":"ars-055700028028","name":"Oelde","state":"Nordrhein-Westfalen","population":30129,"capital":false},{"id":"ars-051580008008","name":"Haan","state":"Nordrhein-Westfalen","population":30086,"capital":false},{"id":"ars-057540032032","name":"Rietberg","state":"Nordrhein-Westfalen","population":30055,"capital":false},{"id":"ars-071370003003","name":"Andernach","state":"Rheinland-Pfalz","population":30039,"capital":false},{"id":"ars-059540012012","name":"Gevelsberg","state":"Nordrhein-Westfalen","population":30006,"capital":false},{"id":"ars-097710130130","name":"Friedberg","state":"Bayern","population":29953,"capital":false},{"id":"ars-093760161161","name":"Schwandorf","state":"Bayern","population":29877,"capital":false},{"id":"ars-081195006085","name":"Winnenden","state":"Baden-Württemberg","population":29876,"capital":false},{"id":"ars-031550013013","name":"Einbeck","state":"Niedersachsen","population":29751,"capital":false},{"id":"ars-033560007007","name":"Osterholz-Scharmbeck","state":"Niedersachsen","population":29710,"capital":false},{"id":"ars-059580032032","name":"Meschede","state":"Nordrhein-Westfalen","population":29615,"capital":false},{"id":"ars-059740052052","name":"Werl","state":"Nordrhein-Westfalen","population":29600,"capital":false},{"id":"ars-082160015015","name":"Gaggenau","state":"Baden-Württemberg","population":29529,"capital":false},{"id":"ars-120720240240","name":"Ludwigsfelde","state":"Brandenburg","population":29514,"capital":false},{"id":"ars-083165003011","name":"Emmendingen","state":"Baden-Württemberg","population":29502,"capital":false},{"id":"ars-059540008008","name":"Ennepetal","state":"Nordrhein-Westfalen","population":29446,"capital":false},{"id":"ars-146270230230","name":"Riesa","state":"Sachsen","population":29373,"capital":false},{"id":"ars-064320008008","name":"Griesheim","state":"Hessen","population":29309,"capital":false},{"id":"ars-091810130130","name":"Landsberg am Lech","state":"Bayern","population":29257,"capital":false},{"id":"ars-051660028028","name":"Tönisvorst","state":"Nordrhein-Westfalen","population":29251,"capital":false},{"id":"ars-053340008008","name":"Baesweiler","state":"Nordrhein-Westfalen","population":29206,"capital":false},{"id":"ars-064380008008","name":"Mühlheim am Main","state":"Hessen","population":29194,"capital":false},{"id":"ars-053660028028","name":"Mechernich","state":"Nordrhein-Westfalen","population":29187,"capital":false},{"id":"ars-055620036036","name":"Waltrop","state":"Nordrhein-Westfalen","population":29177,"capital":false},{"id":"ars-160730077077","name":"Saalfeld/Saale","state":"Thüringen","population":29086,"capital":false},{"id":"ars-130720043043","name":"Güstrow","state":"Mecklenburg-Vorpommern","population":28959,"capital":false},{"id":"ars-081185008073","name":"Vaihingen an der Enz","state":"Baden-Württemberg","population":28798,"capital":false},{"id":"ars-146270140140","name":"Meißen","state":"Sachsen","population":28753,"capital":false},{"id":"ars-064380012012","name":"Rödermark","state":"Hessen","population":28753,"capital":false},{"id":"ars-053780028028","name":"Rösrath","state":"Nordrhein-Westfalen","population":28709,"capital":false},{"id":"ars-032410017017","name":"Springe","state":"Niedersachsen","population":28669,"capital":false},{"id":"ars-160700004004","name":"Arnstadt","state":"Thüringen","population":28615,"capital":false},{"id":"ars-082165002007","name":"Bühl","state":"Baden-Württemberg","population":28608,"capital":false},{"id":"ars-053700012012","name":"Geilenkirchen","state":"Nordrhein-Westfalen","population":28494,"capital":false},{"id":"ars-091840149149","name":"Unterschleißheim","state":"Bayern","population":28482,"capital":false},{"id":"ars-064360005005","name":"Hattersheim am Main","state":"Hessen","population":28467,"capital":false},{"id":"ars-084365007081","name":"Wangen im Allgäu","state":"Baden-Württemberg","population":28412,"capital":false},{"id":"ars-150840590590","name":"Zeitz","state":"Sachsen-Anhalt","population":28328,"capital":false},{"id":"ars-051540032032","name":"Kevelaer","state":"Nordrhein-Westfalen","population":28296,"capital":false},{"id":"ars-010620060060","name":"Reinbek","state":"Schleswig-Holstein","population":28274,"capital":false},{"id":"ars-034590014014","name":"Bramsche","state":"Niedersachsen","population":28220,"capital":false},{"id":"ars-064360008008","name":"Kelkheim (Taunus)","state":"Hessen","population":28175,"capital":false},{"id":"ars-057620020020","name":"Höxter","state":"Nordrhein-Westfalen","population":28166,"capital":false},{"id":"ars-034600006006","name":"Lohne (Oldenburg)","state":"Niedersachsen","population":28089,"capital":false},{"id":"ars-053700040040","name":"Wegberg","state":"Nordrhein-Westfalen","population":28089,"capital":false},{"id":"ars-053780016016","name":"Leichlingen (Rheinland)","state":"Nordrhein-Westfalen","population":28078,"capital":false},{"id":"ars-071310007007","name":"Bad Neuenahr-Ahrweiler","state":"Rheinland-Pfalz","population":27961,"capital":false},{"id":"ars-059540024024","name":"Schwelm","state":"Nordrhein-Westfalen","population":27953,"capital":false},{"id":"ars-066330003003","name":"Baunatal","state":"Hessen","population":27929,"capital":false},{"id":"ars-097720163163","name":"Königsbrunn","state":"Bayern","population":27879,"capital":false},{"id":"ars-064310011011","name":"Heppenheim (Bergstraße)","state":"Hessen","population":27864,"capital":false},{"id":"ars-081175004024","name":"Geislingen an der Steige","state":"Baden-Württemberg","population":27791,"capital":false},{"id":"ars-084255005033","name":"Ehingen (Donau)","state":"Baden-Württemberg","population":27764,"capital":false},{"id":"ars-082265010098","name":"Wiesloch","state":"Baden-Württemberg","population":27731,"capital":false},{"id":"ars-120640472472","name":"Strausberg","state":"Brandenburg","population":27719,"capital":false},{"id":"ars-120690616616","name":"Teltow","state":"Brandenburg","population":27682,"capital":false},{"id":"ars-059580044044","name":"Sundern (Sauerland)","state":"Nordrhein-Westfalen","population":27654,"capital":false},{"id":"ars-147290160160","name":"Grimma","state":"Sachsen","population":27529,"capital":false},{"id":"ars-031550011011","name":"Northeim","state":"Niedersachsen","population":27326,"capital":false},{"id":"ars-091790142142","name":"Olching","state":"Bayern","population":27310,"capital":false},{"id":"ars-051700028028","name":"Neukirchen-Vluyn","state":"Nordrhein-Westfalen","population":27140,"capital":false},{"id":"ars-033610012012","name":"Verden (Aller)","state":"Niedersachsen","population":27121,"capital":false},{"id":"ars-081190091091","name":"Weinstadt","state":"Baden-Württemberg","population":27074,"capital":false},{"id":"ars-120690656656","name":"Werder (Havel)","state":"Brandenburg","population":27065,"capital":false},{"id":"ars-064400005005","name":"Butzbach","state":"Hessen","population":27046,"capital":false},{"id":"ars-091860143143","name":"Pfaffenhofen a.d.Ilm","state":"Bayern","population":26996,"capital":false},{"id":"ars-053820048048","name":"Rheinbach","state":"Nordrhein-Westfalen","population":26918,"capital":false},{"id":"ars-051700012012","name":"Hamminkeln","state":"Nordrhein-Westfalen","population":26873,"capital":false},{"id":"ars-082260041041","name":"Leimen","state":"Baden-Württemberg","population":26873,"capital":false},{"id":"ars-120650144144","name":"Hohen Neuendorf","state":"Brandenburg","population":26857,"capital":false},{"id":"ars-057700020020","name":"Lübbecke","state":"Nordrhein-Westfalen","population":26815,"capital":false},{"id":"ars-082365004040","name":"Mühlacker","state":"Baden-Württemberg","population":26787,"capital":false},{"id":"ars-083175001001","name":"Achern","state":"Baden-Württemberg","population":26733,"capital":false},{"id":"ars-120650136136","name":"Hennigsdorf","state":"Brandenburg","population":26677,"capital":false},{"id":"ars-053780024024","name":"Overath","state":"Nordrhein-Westfalen","population":26663,"capital":false},{"id":"ars-094770128128","name":"Kulmbach","state":"Bayern","population":26625,"capital":false},{"id":"ars-064320023023","name":"Weiterstadt","state":"Hessen","population":26583,"capital":false},{"id":"ars-081255008065","name":"Neckarsulm","state":"Baden-Württemberg","population":26431,"capital":false},{"id":"ars-057540036036","name":"Schloß Holte-Stukenbrock","state":"Nordrhein-Westfalen","population":26297,"capital":false},{"id":"ars-051580012012","name":"Heiligenhaus","state":"Nordrhein-Westfalen","population":26252,"capital":false},{"id":"ars-095730134134","name":"Zirndorf","state":"Bayern","population":26243,"capital":false},{"id":"ars-081180081081","name":"Remseck am Neckar","state":"Baden-Württemberg","population":26188,"capital":false},{"id":"ars-095740138138","name":"Lauf a.d.Pegnitz","state":"Bayern","population":26106,"capital":false},{"id":"ars-059540032032","name":"Wetter (Ruhr)","state":"Nordrhein-Westfalen","population":26090,"capital":false},{"id":"ars-091730126126","name":"Geretsried","state":"Bayern","population":25997,"capital":false},{"id":"ars-059780032032","name":"Selm","state":"Nordrhein-Westfalen","population":25969,"capital":false},{"id":"ars-147300070070","name":"Delitzsch","state":"Sachsen","population":25895,"capital":false},{"id":"ars-034610007007","name":"Nordenham","state":"Niedersachsen","population":25889,"capital":false},{"id":"ars-064340002002","name":"Friedrichsdorf","state":"Hessen","population":25871,"capital":false},{"id":"ars-097760116116","name":"Lindau (Bodensee)","state":"Bayern","population":25845,"capital":false},{"id":"ars-057540044044","name":"Verl","state":"Nordrhein-Westfalen","population":25762,"capital":false},{"id":"ars-091830148148","name":"Waldkraiburg","state":"Bayern","population":25737,"capital":false},{"id":"ars-064390008008","name":"Idstein","state":"Hessen","population":25736,"capital":false},{"id":"ars-081265005066","name":"Öhringen","state":"Baden-Württemberg","population":25673,"capital":false},{"id":"ars-082375003040","name":"Horb am Neckar","state":"Baden-Württemberg","population":25651,"capital":false},{"id":"ars-150890015015","name":"Aschersleben","state":"Sachsen-Anhalt","population":25647,"capital":false},{"id":"ars-032570031031","name":"Rinteln","state":"Niedersachsen","population":25602,"capital":false},{"id":"ars-057700008008","name":"Espelkamp","state":"Nordrhein-Westfalen","population":25576,"capital":false},{"id":"ars-057540016016","name":"Harsewinkel","state":"Nordrhein-Westfalen","population":25523,"capital":false},{"id":"ars-095760143143","name":"Roth","state":"Bayern","population":25458,"capital":false},{"id":"ars-100460117117","name":"St. Wendel","state":"Saarland","population":25441,"capital":false},{"id":"ars-057740036036","name":"Salzkotten","state":"Nordrhein-Westfalen","population":25429,"capital":false},{"id":"ars-059580012012","name":"Brilon","state":"Nordrhein-Westfalen","population":25424,"capital":false},{"id":"ars-064320018018","name":"Pfungstadt","state":"Hessen","population":25415,"capital":false},{"id":"ars-150870370370","name":"Sangerhausen","state":"Sachsen-Anhalt","population":25392,"capital":false},{"id":"ars-064330006006","name":"Groß-Gerau","state":"Hessen","population":25388,"capital":false},{"id":"ars-073390005005","name":"Bingen am Rhein","state":"Rheinland-Pfalz","population":25384,"capital":false},{"id":"ars-010590075075","name":"Schleswig","state":"Schleswig-Holstein","population":25352,"capital":false},{"id":"ars-057700028028","name":"Petershagen","state":"Nordrhein-Westfalen","population":25340,"capital":false},{"id":"ars-147290260260","name":"Markkleeberg","state":"Sachsen","population":25331,"capital":false},{"id":"ars-053620004004","name":"Bedburg","state":"Nordrhein-Westfalen","population":25316,"capital":false},{"id":"ars-064380010010","name":"Obertshausen","state":"Hessen","population":25316,"capital":false},{"id":"ars-146260610610","name":"Zittau","state":"Sachsen","population":25286,"capital":false},{"id":"ars-032510041041","name":"Syke","state":"Niedersachsen","population":25270,"capital":false},{"id":"ars-055580024024","name":"Lüdinghausen","state":"Nordrhein-Westfalen","population":25265,"capital":false},{"id":"ars-082150109109","name":"Stutensee","state":"Baden-Württemberg","population":25259,"capital":false},{"id":"ars-034520019019","name":"Norden","state":"Niedersachsen","population":25178,"capital":false},{"id":"ars-053740048048","name":"Wiehl","state":"Nordrhein-Westfalen","population":25164,"capital":false},{"id":"ars-031540028028","name":"Helmstedt","state":"Niedersachsen","population":25099,"capital":false},{"id":"ars-120630252252","name":"Rathenow","state":"Brandenburg","population":25087,"capital":false},{"id":"ars-053820008008","name":"Bad Honnef","state":"Nordrhein-Westfalen","population":25061,"capital":false},{"id":"ars-083375007126","name":"Waldshut-Tiengen","state":"Baden-Württemberg","population":25019,"capital":false},{"id":"ars-160665050042","name":"Meiningen","state":"Thüringen","population":25002,"capital":false},{"id":"ars-082355006085","name":"Calw","state":"Baden-Württemberg","population":25001,"capital":false},{"id":"ars-081365003019","name":"Ellwangen (Jagst)","state":"Baden-Württemberg","population":25001,"capital":false},{"id":"ars-059740044044","name":"Warstein","state":"Nordrhein-Westfalen","population":24988,"capital":false},{"id":"ars-083255003049","name":"Rottweil","state":"Baden-Württemberg","population":24985,"capital":false},{"id":"ars-084365005082","name":"Weingarten","state":"Baden-Württemberg","population":24940,"capital":false},{"id":"ars-053820032032","name":"Meckenheim","state":"Nordrhein-Westfalen","population":24925,"capital":false},{"id":"ars-160730076076","name":"Rudolstadt","state":"Thüringen","population":24852,"capital":false},{"id":"ars-010620004004","name":"Bad Oldesloe","state":"Schleswig-Holstein","population":24846,"capital":false},{"id":"ars-059580040040","name":"Schmallenberg","state":"Nordrhein-Westfalen","population":24711,"capital":false},{"id":"ars-034550026026","name":"Varel","state":"Niedersachsen","population":24704,"capital":false},{"id":"ars-120670120120","name":"Eisenhüttenstadt","state":"Brandenburg","population":24703,"capital":false},{"id":"ars-059660024024","name":"Olpe","state":"Nordrhein-Westfalen","population":24695,"capital":false},{"id":"ars-091880139139","name":"Starnberg","state":"Bayern","population":24471,"capital":false},{"id":"ars-082375002028","name":"Freudenstadt","state":"Baden-Württemberg","population":24464,"capital":false},{"id":"ars-082255005058","name":"Mosbach","state":"Baden-Württemberg","population":24459,"capital":false},{"id":"ars-059620052052","name":"Plettenberg","state":"Nordrhein-Westfalen","population":24429,"capital":false},{"id":"ars-034540018018","name":"Haren (Ems)","state":"Niedersachsen","population":24365,"capital":false},{"id":"ars-053700028028","name":"Übach-Palenberg","state":"Nordrhein-Westfalen","population":24277,"capital":false},{"id":"ars-059660020020","name":"Lennestadt","state":"Nordrhein-Westfalen","population":24238,"capital":false},{"id":"ars-095720132132","name":"Herzogenaurach","state":"Bayern","population":24237,"capital":false},{"id":"ars-059540028028","name":"Sprockhövel","state":"Nordrhein-Westfalen","population":24232,"capital":false},{"id":"ars-084365004055","name":"Leutkirch im Allgäu","state":"Baden-Württemberg","population":24226,"capital":false},{"id":"ars-150820180180","name":"Köthen (Anhalt)","state":"Sachsen-Anhalt","population":24110,"capital":false},{"id":"ars-010540056056","name":"Husum","state":"Schleswig-Holstein","population":24090,"capital":false},{"id":"ars-081285001007","name":"Bad Mergentheim","state":"Baden-Württemberg","population":24023,"capital":false},{"id":"ars-034510007007","name":"Westerstede","state":"Niedersachsen","population":23938,"capital":false},{"id":"ars-051620012012","name":"Jüchen","state":"Nordrhein-Westfalen","population":23926,"capital":false},{"id":"ars-082355007046","name":"Nagold","state":"Baden-Württemberg","population":23864,"capital":false},{"id":"ars-145220080080","name":"Döbeln","state":"Sachsen","population":23819,"capital":false},{"id":"ars-032410014014","name":"Ronnenberg","state":"Niedersachsen","population":23814,"capital":false},{"id":"ars-145245114180","name":"Limbach-Oberfrohna","state":"Sachsen","population":23673,"capital":false},{"id":"ars-097750152152","name":"Senden","state":"Bayern","population":23641,"capital":false},{"id":"ars-059660004004","name":"Attendorn","state":"Nordrhein-Westfalen","population":23554,"capital":false},{"id":"ars-010600044044","name":"Kaltenkirchen","state":"Schleswig-Holstein","population":23502,"capital":false},{"id":"ars-031590017017","name":"Hann. Münden","state":"Niedersachsen","population":23478,"capital":false},{"id":"ars-120660304304","name":"Senftenberg/Zły Komorow","state":"Brandenburg","population":23466,"capital":false},{"id":"ars-032410016016","name":"Sehnde","state":"Niedersachsen","population":23431,"capital":false},{"id":"ars-097720147147","name":"Gersthofen","state":"Bayern","population":23427,"capital":false},{"id":"ars-064350010010","name":"Gelnhausen","state":"Hessen","population":23290,"capital":false},{"id":"ars-091900157157","name":"Weilheim i.OB","state":"Bayern","population":23279,"capital":false},{"id":"ars-057620036036","name":"Warburg","state":"Nordrhein-Westfalen","population":23252,"capital":false},{"id":"ars-096720114114","name":"Bad Kissingen","state":"Bayern","population":23223,"capital":false},{"id":"ars-150890310310","name":"Staßfurt","state":"Sachsen-Anhalt","population":23181,"capital":false},{"id":"ars-084155002050","name":"Metzingen","state":"Baden-Württemberg","population":23178,"capital":false},{"id":"ars-064330011011","name":"Riedstadt","state":"Hessen","population":23146,"capital":false},{"id":"ars-150850235235","name":"Quedlinburg","state":"Sachsen-Anhalt","population":23139,"capital":false},{"id":"ars-033570039039","name":"Rotenburg (Wümme)","state":"Niedersachsen","population":23117,"capital":false},{"id":"ars-064360001001","name":"Bad Soden am Taunus","state":"Hessen","population":23103,"capital":false},{"id":"ars-055540068068","name":"Vreden","state":"Nordrhein-Westfalen","population":23099,"capital":false},{"id":"ars-059700032032","name":"Netphen","state":"Nordrhein-Westfalen","population":23080,"capital":false},{"id":"ars-065320006006","name":"Dillenburg","state":"Hessen","population":22974,"capital":false},{"id":"ars-150810455455","name":"Salzwedel","state":"Sachsen-Anhalt","population":22964,"capital":false},{"id":"ars-096750141141","name":"Kitzingen","state":"Bayern","population":22936,"capital":false},{"id":"ars-097720184184","name":"Neusäß","state":"Bayern","population":22904,"capital":false},{"id":"ars-066350015015","name":"Korbach","state":"Hessen","population":22901,"capital":false},{"id":"ars-081280131131","name":"Wertheim","state":"Baden-Württemberg","population":22874,"capital":false},{"id":"ars-160720018018","name":"Sonneberg","state":"Thüringen","population":22843,"capital":false},{"id":"ars-084265005070","name":"Laupheim","state":"Baden-Württemberg","population":22839,"capital":false},{"id":"ars-160710001001","name":"Apolda","state":"Thüringen","population":22787,"capital":false},{"id":"ars-059540020020","name":"Herdecke","state":"Nordrhein-Westfalen","population":22772,"capital":false},{"id":"ars-084355007059","name":"Überlingen","state":"Baden-Württemberg","population":22735,"capital":false},{"id":"ars-081255002006","name":"Bad Rappenau","state":"Baden-Württemberg","population":22703,"capital":false},{"id":"ars-034530007007","name":"Friesoythe","state":"Niedersachsen","population":22685,"capital":false},{"id":"ars-081180011011","name":"Ditzingen","state":"Baden-Württemberg","population":22666,"capital":false},{"id":"ars-081255004026","name":"Eppingen","state":"Baden-Württemberg","population":22666,"capital":false},{"id":"ars-032570035035","name":"Stadthagen","state":"Niedersachsen","population":22638,"capital":false},{"id":"ars-064400012012","name":"Karben","state":"Hessen","population":22600,"capital":false},{"id":"ars-150860015015","name":"Burg","state":"Sachsen-Anhalt","population":22585,"capital":false},{"id":"ars-160635051003","name":"Bad Salzungen","state":"Thüringen","population":22557,"capital":false},{"id":"ars-055660040040","name":"Lengerich","state":"Nordrhein-Westfalen","population":22557,"capital":false},{"id":"ars-010560041041","name":"Quickborn","state":"Schleswig-Holstein","population":22521,"capital":false},{"id":"ars-033580021021","name":"Soltau","state":"Niedersachsen","population":22511,"capital":false},{"id":"ars-150870130130","name":"Eisleben","state":"Sachsen-Anhalt","population":22505,"capital":false},{"id":"ars-091830128128","name":"Mühldorf a.Inn","state":"Bayern","population":22503,"capital":false},{"id":"ars-082150106106","name":"Waghäusel","state":"Baden-Württemberg","population":22466,"capital":false},{"id":"ars-064400004004","name":"Büdingen","state":"Hessen","population":22411,"capital":false},{"id":"ars-064360003003","name":"Eschborn","state":"Hessen","population":22403,"capital":false},{"id":"ars-081175003019","name":"Eislingen/Fils","state":"Baden-Württemberg","population":22325,"capital":false},{"id":"ars-097710113113","name":"Aichach","state":"Bayern","population":22015,"capital":false},{"id":"ars-010510044044","name":"Heide","state":"Schleswig-Holstein","population":22002,"capital":false},{"id":"ars-051540044044","name":"Rees","state":"Nordrhein-Westfalen","population":21913,"capital":false},{"id":"ars-150810135135","name":"Gardelegen","state":"Sachsen-Anhalt","population":21822,"capital":false},{"id":"ars-083265001012","name":"Donaueschingen","state":"Baden-Württemberg","population":21790,"capital":false},{"id":"ars-053660044044","name":"Zülpich","state":"Nordrhein-Westfalen","population":21780,"capital":false},{"id":"ars-082260084084","name":"Schwetzingen","state":"Baden-Württemberg","population":21767,"capital":false},{"id":"ars-083155001006","name":"Bad Krozingen","state":"Baden-Württemberg","population":21755,"capital":false},{"id":"ars-084165002025","name":"Mössingen","state":"Baden-Württemberg","population":21751,"capital":false},{"id":"ars-097800139139","name":"Sonthofen","state":"Bayern","population":21734,"capital":false},{"id":"ars-073340007007","name":"Germersheim","state":"Rheinland-Pfalz","population":21715,"capital":false},{"id":"ars-082265004032","name":"Hockenheim","state":"Baden-Württemberg","population":21623,"capital":false},{"id":"ars-053740052052","name":"Wipperfürth","state":"Nordrhein-Westfalen","population":21604,"capital":false},{"id":"ars-031590026026","name":"Osterode am Harz","state":"Niedersachsen","population":21598,"capital":false},{"id":"ars-057740016016","name":"Büren","state":"Nordrhein-Westfalen","population":21593,"capital":false},{"id":"ars-053740036036","name":"Radevormwald","state":"Nordrhein-Westfalen","population":21565,"capital":false},{"id":"ars-010580043043","name":"Eckernförde","state":"Schleswig-Holstein","population":21563,"capital":false},{"id":"ars-100440111111","name":"Dillingen/ Saar","state":"Saarland","population":21529,"capital":false},{"id":"ars-057540048048","name":"Versmold","state":"Nordrhein-Westfalen","population":21513,"capital":false},{"id":"ars-083165006056","name":"Waldkirch","state":"Baden-Württemberg","population":21510,"capital":false},{"id":"ars-145240080080","name":"Glauchau","state":"Sachsen","population":21442,"capital":false},{"id":"ars-065340018018","name":"Stadtallendorf","state":"Hessen","population":21425,"capital":false},{"id":"ars-053620016016","name":"Elsdorf","state":"Nordrhein-Westfalen","population":21424,"capital":false},{"id":"ars-097740135135","name":"Günzburg","state":"Bayern","population":21423,"capital":false},{"id":"ars-120720477477","name":"Zossen","state":"Brandenburg","population":21412,"capital":false},{"id":"ars-057540012012","name":"Halle (Westf.)","state":"Nordrhein-Westfalen","population":21393,"capital":false},{"id":"ars-073380025025","name":"Schifferstadt","state":"Rheinland-Pfalz","population":21387,"capital":false},{"id":"ars-064360004004","name":"Flörsheim am Main","state":"Hessen","population":21344,"capital":false},{"id":"ars-064380013013","name":"Seligenstadt","state":"Hessen","population":21298,"capital":false},{"id":"ars-082150108108","name":"Rheinstetten","state":"Baden-Württemberg","population":21267,"capital":false},{"id":"ars-064320010010","name":"Groß-Umstadt","state":"Hessen","population":21245,"capital":false},{"id":"ars-051700052052","name":"Xanten","state":"Nordrhein-Westfalen","population":21179,"capital":false},{"id":"ars-034580014014","name":"Wildeshausen","state":"Niedersachsen","population":21155,"capital":false},{"id":"ars-120710372372","name":"Spremberg/Grodk","state":"Brandenburg","population":21140,"capital":false},{"id":"ars-150820430430","name":"Zerbst/Anhalt","state":"Sachsen-Anhalt","population":21124,"capital":false},{"id":"ars-120720232232","name":"Luckenwalde","state":"Brandenburg","population":21010,"capital":false},{"id":"ars-034550015015","name":"Schortens","state":"Niedersachsen","population":20995,"capital":false},{"id":"ars-055540056056","name":"Stadtlohn","state":"Nordrhein-Westfalen","population":20946,"capital":false},{"id":"ars-059740020020","name":"Geseke","state":"Nordrhein-Westfalen","population":20930,"capital":false},{"id":"ars-160650067067","name":"Sondershausen","state":"Thüringen","population":20910,"capital":false},{"id":"ars-091890155155","name":"Traunstein","state":"Bayern","population":20877,"capital":false},{"id":"ars-091790145145","name":"Puchheim","state":"Bayern","population":20858,"capital":false},{"id":"ars-084365002009","name":"Bad Waldsee","state":"Baden-Württemberg","population":20838,"capital":false},{"id":"ars-092790112112","name":"Dingolfing","state":"Bayern","population":20749,"capital":false},{"id":"ars-051580036036","name":"Wülfrath","state":"Nordrhein-Westfalen","population":20731,"capital":false},{"id":"ars-057580008008","name":"Enger","state":"Nordrhein-Westfalen","population":20688,"capital":false},{"id":"ars-083255005053","name":"Schramberg","state":"Baden-Württemberg","population":20610,"capital":false},{"id":"ars-084355006057","name":"Tettnang","state":"Baden-Württemberg","population":20520,"capital":false},{"id":"ars-145240300300","name":"Werdau","state":"Sachsen","population":20520,"capital":false},{"id":"ars-064350006006","name":"Bruchköbel","state":"Hessen","population":20509,"capital":false},{"id":"ars-059780012012","name":"Fröndenberg/Ruhr","state":"Nordrhein-Westfalen","population":20504,"capital":false},{"id":"ars-094780139139","name":"Lichtenfels","state":"Bayern","population":20488,"capital":false},{"id":"ars-146270010010","name":"Coswig","state":"Sachsen","population":20479,"capital":false},{"id":"ars-065320012012","name":"Herborn","state":"Hessen","population":20421,"capital":false},{"id":"ars-055660068068","name":"Ochtrup","state":"Nordrhein-Westfalen","population":20394,"capital":false},{"id":"ars-032410004004","name":"Burgwedel","state":"Niedersachsen","population":20379,"capital":false},{"id":"ars-091890154154","name":"Traunreut","state":"Bayern","population":20379,"capital":false},{"id":"ars-031590010010","name":"Duderstadt","state":"Niedersachsen","population":20375,"capital":false},{"id":"ars-097790194194","name":"Nördlingen","state":"Bayern","population":20352,"capital":false},{"id":"ars-083365007081","name":"Schopfheim","state":"Baden-Württemberg","population":20332,"capital":false},{"id":"ars-130710156156","name":"Waren (Müritz)","state":"Mecklenburg-Vorpommern","population":20260,"capital":false},{"id":"ars-100450112112","name":"Blieskastel","state":"Saarland","population":20197,"capital":false},{"id":"ars-130710110110","name":"Neustrelitz","state":"Mecklenburg-Vorpommern","population":20191,"capital":false},{"id":"ars-055660016016","name":"Hörstel","state":"Nordrhein-Westfalen","population":20166,"capital":false},{"id":"ars-147290050050","name":"Borna","state":"Sachsen","population":20131,"capital":false},{"id":"ars-064350021021","name":"Nidderau","state":"Hessen","population":20119,"capital":false},{"id":"ars-083155012074","name":"Müllheim im Markgräflerland","state":"Baden-Württemberg","population":20097,"capital":false},{"id":"ars-055700044044","name":"Telgte","state":"Nordrhein-Westfalen","population":20069,"capital":false},{"id":"ars-034620019019","name":"Wittmund","state":"Niedersachsen","population":20037,"capital":false},{"id":"ars-059620036036","name":"Meinerzhagen","state":"Nordrhein-Westfalen","population":20019,"capital":false},{"id":"ars-091780143143","name":"Moosburg a.d.Isar","state":"Bayern","population":20012,"capital":false}].map(city => ({
  ...city,
  category: city.population >= 100000 ? "metro" : city.population >= 50000 ? "mid" : "small"
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
  smallSummary: document.querySelector("#smallSummary"),
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

function categoryLabel(category) {
  return category === "metro" ? "Großstadt" : category === "mid" ? "Mittelstadt" : "Kleinstadt";
}

function categoryLabel(category) {
  return category === "metro" ? "Großstadt" : category === "mid" ? "Mittelstadt" : "Kleinstadt";
}

function categoryLabel(category) {
  return category === "metro" ? "Großstadt" : category === "mid" ? "Mittelstadt" : "Kleinstadt";
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
  syncCityToCloud(id);
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
  const smalls = cities.filter(city => city.category === "small");
  els.metroSummary.textContent = `${metros.filter(city => visited.has(city.id)).length} / ${metros.length}`;
  els.midSummary.textContent = `${mids.filter(city => visited.has(city.id)).length} / ${mids.length}`;
  els.smallSummary.textContent = `${smalls.filter(city => visited.has(city.id)).length} / ${smalls.length}`;
  els.smallSummary.textContent = `${smalls.filter(city => visited.has(city.id)).length} / ${smalls.length}`;
  els.smallSummary.textContent = `${smalls.filter(city => visited.has(city.id)).length} / ${smalls.length}`;

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
    const label = categoryLabel(city.category);
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
  const visitedCount = cities.filter(city => visited.has(city.id)).length;
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
    { id:"germany", icon:"DE", title:"Deutschland komplett", description:"Alle Städte ab 20.000 Einwohnern besucht", current:visitedCount, target:cities.length },
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
  const mappedCities = cities.filter(city => Number.isFinite(city.lat) && Number.isFinite(city.lng));
  const mappedVisited = mappedCities.filter(city => visited.has(city.id)).length;
  els.mapVisitedCount.textContent = `${mappedVisited} / ${mappedCities.length}`;
  els.mapCities.innerHTML = [...mappedCities].sort((a,b)=>a.population-b.population).map(city => {
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
  els.detailMeta.textContent=`${formatPopulation(city.population)} Einwohner · ${categoryLabel(city.category)}`;
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
  saveData(); renderAll(); syncCityToCloud(activeDetailCityId); closeCityDetail();
});

document.querySelector("#resetButton").addEventListener("click",()=>{
  const confirmed=window.confirm("Wirklich alle besuchten Städte und Erstbesuchsdaten löschen?");
  if (!confirmed) return;
  visited.clear(); visitDetails={}; saveData(); renderAll(); clearCloudVisits();
});

els.firstVisitDate.max=new Date().toISOString().slice(0,10);
populateStateFilter(); renderAll();
if ("serviceWorker" in navigator && location.protocol.startsWith("http")) navigator.serviceWorker.register("sw.js").catch(()=>{});

// Cloud, accounts and friends (Supabase)
const SUPABASE_URL = "https://yxgjxmzlsbazkxrywojy.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_cGd4ffADOCFMI1DixWg4TA_-j407jmF";
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
let cloudUser = null;
let registering = false;

const accountEls = {
  dialog: document.querySelector("#accountDialog"), button: document.querySelector("#accountButton"),
  close: document.querySelector("#closeAccountDialog"), title: document.querySelector("#accountTitle"),
  authPanel: document.querySelector("#authPanel"), accountPanel: document.querySelector("#accountPanel"),
  form: document.querySelector("#authForm"), email: document.querySelector("#authEmail"),
  password: document.querySelector("#authPassword"), username: document.querySelector("#authUsername"),
  signupNameField: document.querySelector("#signupNameField"), hint: document.querySelector("#authHint"),
  submit: document.querySelector("#authSubmitButton"), mode: document.querySelector("#authModeButton"),
  accountName: document.querySelector("#accountName"), friendForm: document.querySelector("#friendForm"),
  friendUsername: document.querySelector("#friendUsername"), friendHint: document.querySelector("#friendHint"),
  friendList: document.querySelector("#friendList"), leaderboard: document.querySelector("#leaderboardList"),
  signOut: document.querySelector("#signOutButton")
};

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, char => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", "'":"&#39;", '"':"&quot;" })[char]);
}

function cloudError(error, fallback = "Das hat gerade nicht funktioniert.") {
  console.error(error);
  return error?.message || fallback;
}

function renderAuthState() {
  const signedIn = Boolean(cloudUser);
  accountEls.button.textContent = signedIn ? "Freunde" : "Anmelden";
  accountEls.authPanel.classList.toggle("hidden", signedIn);
  accountEls.accountPanel.classList.toggle("hidden", !signedIn);
  accountEls.title.textContent = signedIn ? "Dein Konto" : (registering ? "Konto erstellen" : "Anmelden");
  accountEls.signupNameField.classList.toggle("hidden", !registering);
  accountEls.username.required = registering;
  accountEls.submit.textContent = registering ? "Konto erstellen" : "Anmelden";
  accountEls.mode.textContent = registering ? "Ich habe schon ein Konto" : "Konto erstellen";
  accountEls.hint.textContent = registering
    ? "Nach der Registrierung bestätigst du gegebenenfalls deine E-Mail."
    : "Noch kein Konto? Erstelle eins kostenlos.";
  if (signedIn) accountEls.accountName.textContent = cloudUser.user_metadata?.username || cloudUser.email;
}

async function ensureProfile() {
  if (!cloudUser) return;
  const { data: profile, error: lookupError } = await supabaseClient.from("profiles").select("id").eq("id", cloudUser.id).maybeSingle();
  if (lookupError || profile) return;
  const metadata = cloudUser.user_metadata || {};
  const username = String(metadata.username || cloudUser.email.split("@")[0]).toLowerCase().replace(/[^a-z0-9_]/g, "_").slice(0, 24);
  const { error } = await supabaseClient.from("profiles").insert({ id: cloudUser.id, username, display_name: metadata.display_name || username });
  if (error) alert(`Profil konnte nicht angelegt werden: ${cloudError(error)}`);
}

async function syncCloudProgress() {
  if (!cloudUser) return;
  const localVisits = cities.filter(city => visited.has(city.id)).map(city => ({
    user_id: cloudUser.id, city_id: city.id, first_visit: visitDetails[city.id]?.firstVisit || null
  }));
  if (localVisits.length) {
    const { error } = await supabaseClient.from("visits").upsert(localVisits, { onConflict: "user_id,city_id" });
    if (error) console.error("Cloud sync failed", error);
  }
  const { data, error } = await supabaseClient.from("visits").select("city_id, first_visit").eq("user_id", cloudUser.id);
  if (error) return console.error("Cloud read failed", error);
  const validIds = new Set(cities.map(city => city.id));
  data.forEach(row => {
    if (!validIds.has(row.city_id)) return;
    visited.add(row.city_id);
    if (row.first_visit) visitDetails[row.city_id] = { firstVisit: row.first_visit };
  });
  saveData(); renderAll();
}

async function syncCityToCloud(cityId) {
  if (!cloudUser) return;
  if (visited.has(cityId)) {
    const { error } = await supabaseClient.from("visits").upsert({
      user_id: cloudUser.id, city_id: cityId, first_visit: visitDetails[cityId]?.firstVisit || null
    }, { onConflict: "user_id,city_id" });
    if (error) console.error("Cloud update failed", error);
  } else {
    const { error } = await supabaseClient.from("visits").delete().eq("user_id", cloudUser.id).eq("city_id", cityId);
    if (error) console.error("Cloud delete failed", error);
  }
  loadLeaderboard();
}

async function clearCloudVisits() {
  if (!cloudUser) return;
  const { error } = await supabaseClient.from("visits").delete().eq("user_id", cloudUser.id);
  if (error) console.error("Cloud reset failed", error);
  loadLeaderboard();
}

async function loadFriends() {
  if (!cloudUser) return;
  const { data: friendships, error } = await supabaseClient.from("friendships").select("id, requester_id, addressee_id, status");
  if (error) { accountEls.friendList.textContent = cloudError(error); return; }
  if (!friendships.length) { accountEls.friendList.innerHTML = '<p class="form-hint">Noch keine Freunde hinzugefügt.</p>'; return; }
  const ids = [...new Set(friendships.flatMap(item => [item.requester_id, item.addressee_id]))];
  const { data: profiles } = await supabaseClient.from("profiles").select("id, username, display_name").in("id", ids);
  const people = new Map((profiles || []).map(profile => [profile.id, profile]));
  accountEls.friendList.innerHTML = friendships.map(friendship => {
    const incoming = friendship.addressee_id === cloudUser.id;
    const other = people.get(incoming ? friendship.requester_id : friendship.addressee_id);
    const name = escapeHtml(other?.display_name || other?.username || "Unbekannt");
    const status = friendship.status === "accepted" ? "Freund" : incoming ? "Anfrage erhalten" : "Anfrage gesendet";
    const action = incoming && friendship.status === "pending" ? `<button class="secondary-button friend-accept" data-friend-id="${friendship.id}">Annehmen</button>` : "";
    return `<div class="account-row"><span><strong>${name}</strong><small>${status}</small></span>${action}</div>`;
  }).join("");
}

async function loadLeaderboard() {
  if (!cloudUser) return;
  const { data, error } = await supabaseClient.rpc("leaderboard");
  if (error) {
    accountEls.leaderboard.innerHTML = '<p class="form-hint">Die Rangliste wird gerade eingerichtet.</p>';
    return;
  }
  accountEls.leaderboard.innerHTML = data.length ? data.map((row, index) =>
    `<div class="account-row"><span><strong>${index + 1}. ${escapeHtml(row.display_name || row.username)}</strong><small>${row.visited_count} Städte</small></span></div>`
  ).join("") : '<p class="form-hint">Noch keine Einträge.</p>';
}

async function openAccountDialog() {
  renderAuthState();
  accountEls.dialog.showModal();
  if (cloudUser) { await loadFriends(); await loadLeaderboard(); }
}

accountEls.button.addEventListener("click", openAccountDialog);
accountEls.close.addEventListener("click", () => accountEls.dialog.close());
accountEls.mode.addEventListener("click", () => { registering = !registering; renderAuthState(); });
accountEls.form.addEventListener("submit", async event => {
  event.preventDefault();
  const email = accountEls.email.value.trim();
  const password = accountEls.password.value;
  accountEls.submit.disabled = true;
  if (registering) {
    const username = accountEls.username.value.trim().toLowerCase();
    const { data, error } = await supabaseClient.auth.signUp({ email, password, options: { emailRedirectTo: window.location.href, data: { username, display_name: username } } });
    accountEls.submit.disabled = false;
    if (error) return alert(cloudError(error));
    if (!data.session) alert("Konto erstellt. Bitte bestätige jetzt die E-Mail und melde dich danach an.");
  } else {
    const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
    accountEls.submit.disabled = false;
    if (error) return alert(cloudError(error));
  }
});
accountEls.friendForm.addEventListener("submit", async event => {
  event.preventDefault();
  const username = accountEls.friendUsername.value.trim().toLowerCase();
  accountEls.friendHint.textContent = "";
  const { data: person, error } = await supabaseClient.from("profiles").select("id, username").eq("username", username).maybeSingle();
  if (error || !person) { accountEls.friendHint.textContent = "Nutzername nicht gefunden."; return; }
  if (person.id === cloudUser.id) { accountEls.friendHint.textContent = "Das bist du selbst."; return; }
  const { error: requestError } = await supabaseClient.from("friendships").insert({ requester_id: cloudUser.id, addressee_id: person.id });
  accountEls.friendHint.textContent = requestError ? cloudError(requestError) : "Freundschaftsanfrage gesendet.";
  if (!requestError) { accountEls.friendUsername.value = ""; loadFriends(); }
});
accountEls.friendList.addEventListener("click", async event => {
  const button = event.target.closest(".friend-accept");
  if (!button) return;
  const { error } = await supabaseClient.from("friendships").update({ status: "accepted" }).eq("id", button.dataset.friendId);
  if (error) alert(cloudError(error)); else loadFriends();
});
accountEls.signOut.addEventListener("click", async () => { await supabaseClient.auth.signOut(); accountEls.dialog.close(); });

supabaseClient.auth.onAuthStateChange(async (_event, session) => {
  cloudUser = session?.user || null;
  if (cloudUser) { await ensureProfile(); await syncCloudProgress(); }
  renderAuthState();
});
supabaseClient.auth.getSession().then(({ data }) => {
  cloudUser = data.session?.user || null;
  renderAuthState();
  if (cloudUser) ensureProfile().then(syncCloudProgress);
});
