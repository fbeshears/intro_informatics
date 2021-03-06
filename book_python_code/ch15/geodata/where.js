myData = [
[42.3398067,-71.0891717, 'Northeastern University, 360 Huntington Avenue, Boston, MA 02115, USA'],
[40.6963857,-89.6160811, 'Bradley University, 1501 West Bradley Avenue, Peoria, IL 61625, USA'],
[18.4635938,73.8681207, 'Vishwakarma Institute of Technology, 666, Upper Indira Nagar, Bibwewadi, Pune, Maharashtra 411037, India'],
[46.8220275,-92.0836388, 'UMD Stores, University of Minnesota Duluth, Duluth, MN 55812, USA'],
[-37.9152113,145.134682, 'Monash University Clayton Campus, Wellington Road, Clayton VIC 3800, Australia'],
[53.2833333,69.3833333, 'Kokshetau, Kazakhstan'],
[41.4148853,2.1334233, 'UOC - Universitat Oberta de Catalunya, Avinguda del Tibidabo, 39, 08035 Barcelona, Spain'],
[52.27669,104.277965, 'Irkutsk State University, bulvar Gagarina, 20, Irkutsk, Irkutsk Oblast, Russia, 664003'],
[8.480749,4.5257036, 'University of Ilorin, Ilorin, Nigeria'],
[-38.3112111,146.4294089, 'Federation University Australia, Churchill VIC 3842'],
[40.7687118,14.7920179, 'University of Salerno, Via Giovanni Paolo II, 132, 84084 Fisciano Salerno, Italy'],
[47.80949,13.05501, 'Salzburg, Austria'],
[61.4501761,23.8612717, 'Tampere University of Technology, Korkeakoulunkatu 10, 33720 Tampere, Finland'],
[59.971487,30.321558, 'Saint Petersburg State Electrotechnical University, ulitsa Professora Popova, 5, Saint Petersburg, Russia, 197022'],
[54.7833333,32.05, 'Smolensk, Smolensk Oblast, Russia'],
[24.9413316,67.113855, 'Institute of Business Administration, University of Karachi, KU Circular Road, Karachi 75270, Pakistan'],
[40.4478375,-3.7285373, 'Complutense University of Madrid, Universidad Complutense Facultad de Derecho, Av Séneca, 2, 28040 Madrid, Spain'],
[24.433408,54.6178923, 'Masdar Institute of Science and Technology - Abu Dhabi - United Arab Emirates'],
[51.5229378,-0.1308206, 'University of London, Senate House, Malet Street, London WC1E 7HU, UK'],
[51.7566341,-1.2547037, 'University of Oxford, University Offices, Wellington Square, Oxford OX1 2JD, UK'],
[59.3958836,24.6714313, 'Tallinn University of Technology, 5, Tallinn, Estonia'],
[58.3810707,26.7195353, 'University of Tartu, Ülikooli 18, 50090 Tartu, Estonia'],
[45.4170203,11.8711379, 'University of Padua, Via Prosdocimo Beldomandi, 1, 35137 Padua, Italy'],
[18.5113644,73.8304837, 'India, Prabodhan Road, Apex Colony, Erandwane, Pune, Maharashtra 411002, India'],
[37.8739132,-122.2505629, 'University of California, Berkeley, Berkeley, CA, USA'],
[43.076592,-89.4124875, 'University of Wisconsin-Madison, Madison, WI 53706, USA'],
[48.464717,35.046183, 'Dnepropetrovsk, Dnipropetrovsk Oblast, Ukraine'],
[39.962205,116.365597, 'Beijing Normal University, 19 Xinjiekou Outer Street, Beitaipingzhuang, Haidian, China, 100875'],
[37.9837155,23.7293097, 'Athens, Greece'],
[-34.5958139,-58.4837222, 'UBA - Buenos Aires, Buenos Aires Province, Argentina'],
[10.9634581,79.3860232, 'Sastra University, Anna Nagar, Thanjavur, Tamil Nadu 613402, India'],
[21.1457071,79.0752439, 'Nagpur University, Civil Lines, Nagpur, Maharashtra 440001, India'],
[36.0014258,-78.9382286, 'Duke University, Durham, NC 27708, USA'],
[37.721897,-122.4782094, 'San Francisco State University, 1600 Holloway Avenue, San Francisco, CA 94132, USA'],
[30.2806543,-97.7327641, 'School of Social Work, The University of Texas at Austin, 1925 San Jacinto Boulevard, Austin, TX 78712, USA'],
[61.6858074,27.2734876, '50100 Mikkeli, Finland'],
[31.7988244,-85.9574086, 'Troy University, 600 University Avenue, Troy, AL 36082, USA'],
[41.557583,-8.397568, 'Universidade do Minho, 4710-416 Braga, Portugal'],
[24.889131,67.0869966, 'PNEC-NUST (National University of Sciences and Technology), National University of Sciences and Technology, Karsaz Road, Karachi, Pakistan'],
[-33.441075,-70.6408453, 'Pontifical Catholic University of Chile - Avenida Libertador Bernardo O Higgins 340, Santiago, Santiago Metropolitan Region, Chile'],
[41.5007031,-88.1815744, 'Joliet Junior College, Illinois and Michigan Canal, 1215 Houbolt Rd, Joliet, IL 60431, USA'],
[30.0444196,31.2357116, 'Cairo, Cairo Governorate, Egypt'],
[55.1170375,36.5970818, 'Obninsk, Kaluga Oblast, Russia'],
[31.907867,34.811363, 'Weizmann Institute, Rehovot, Israel'],
[47.6553351,-122.3035199, 'University of Washington, Seattle, WA 98105, USA'],
[49.9935,36.230383, 'Kharkiv, Kharkiv Oblast, Ukraine'],
[43.8562586,18.4130763, 'Sarajevo, Bosnia and Herzegovina'],
[4.6021489,-74.0661796, 'University of the Andes, Carrera Primera # 18A-12, Bogotá, Bogota, Colombia'],
[40.0075811,-105.2659419, 'University of Colorado Boulder, Boulder, CO 80309, USA'],
[53.4166667,58.9666667, 'Magnitogorsk, Chelyabinsk Oblast, Russia'],
[35.749153,51.3340735, 'University of Science & Culture, Park Bahar, Tehran 1461968151, Iran'],
[49.2780937,-122.9198833, 'Simon Fraser University, 8888 University Drive, Burnaby, BC V5A 1S6, Canada'],
[40.8075355,-73.9625727, 'Columbia University, New York, NY 10027'],
[34.0223519,-118.285117, 'University of Southern California, Los Angeles, CA, USA'],
[52.2211977,21.0080784, 'Warsaw University of Technology, Plac Politechniki 1, 00-661 Warsaw, Poland'],
[-40.900557,174.885971, 'New Zealand'],
[-40.3850866,175.6140639, 'Massey University, Palmerston North, New Zealand'],
[35.2058936,-97.4457137, 'The University of Oklahoma, 660 Parrington Oval, Norman, OK 73019, USA'],
[45.19665,9.1437793, 'Università degli Studi di Pavia - Dipartimento di Chimica, Viale Taramelli, 12, 27100 Pavia, Italy'],
[38.9403808,-92.3277375, 'University of Missouri, Columbia, MO 65211, USA'],
[50.1016824,14.3906605, 'Czech Technical University in Prague, Zikova 1903/4, 166 36 Prague 6, Czech Republic'],
[41.8344196,-87.628465, 'Illinois Institute of Technology, 3300 South Federal Street, Chicago, IL 60616, USA'],
[40.7982133,-77.8599084, 'The Pennsylvania State University, State College, PA 16801, USA'],
[40.7649368,-111.8421021, 'The University of Utah, 201 Presidents Cir, Salt Lake City, UT 84112, USA'],
[45.7964406,15.9715275, 'Faculty of Humanities and Social Sciences, University of Zagreb, 10000, Zagreb, Croatia'],
[39.4813156,-0.3505, 'Universitat Politècnica, 46022 Valencia, Spain'],
[48.2131855,16.3600504, 'University of Vienna, Universitätsring 1, 1010 Vienna, Austria'],
[18.2094586,-67.1405411, 'University of Puerto Rico Mayagüez, 259 Blvd. Alfonso Valdez Cabian, Mayagüez, 00680, Puerto Rico'],
[41.2916037,-72.9615584, 'University of New Haven, 300 Boston Post Road, West Haven, CT 06516, USA'],
[47.7611675,-122.1905767, 'University of Washington Bothell, 18115 Campus Way Northeast, Bothell, WA 98011, USA'],
[39.9566127,-75.1899441, 'Drexel University, 3141 Chestnut Street, Philadelphia, PA 19104, USA'],
[60.1726348,24.9510419, 'University of Helsinki, Yliopistonkatu 4, 00100 Helsinki, Finland'],
[42.2780584,-83.7382259, 'University of Michigan, 500 South State Street, Ann Arbor, MI 48109, USA'],
[40.4424925,-79.9425528, 'Carnegie Mellon University, 5000 Forbes Avenue, Pittsburgh, PA 15213, USA'],
[12.0260278,79.8492393, 'Pondicherry University, Kalapet, Puducherry 605014, India'],
[1.3446114,103.6810703, 'Nanyang Technological University, 639798'],
[40.7299012,-73.9977157, 'New York University: External Affairs, New York University, 60 Washington Square South, New York, NY 10012, USA'],
[47.5539329,21.6215588, 'Debrecen 10 posta, Debreceni Egyetem Egyetemi és Nemzeti Könyvtár Fordító Irodája, 4032 Debrecen, Hungary'],
[34.180688,-117.324134, 'California State University, San Bernardino, 5500 University Parkway, San Bernardino, CA 92407, USA'],
[50.465665,30.5217671, 'National University Of Kyiv-Mohyla Academy, Hryhoriya Skovorody street, 2, Kiev, Kyiv city, Ukraine, 04655'],
[46.4663742,-80.9730148, 'Laurentian University Sudbury Campus, 935 Ramsey Lake Road, Greater Sudbury, ON P3E 2C6, Canada'],
[55.755826,37.6173, 'Moscow, Russia'],
[52.2042666,0.1149085, 'University of Cambridge, The Old Schools, Trinity Lane, Cambridge, Cambridgeshire CB2 1TN, UK'],
[35.9525664,51.490619, 'Payame Noor, Meygoon, Iran'],
[46.5190557,6.5667576, 'Swiss Federal Institute of Technology Lausanne, Route Cantonale, 1015 Lausanne, Switzerland'],
[57.6980218,11.9717376, 'Göteborgs universitet, Vasagatan 33, 411 37 Göteborg, Sweden'],
[52.4325322,31.0029697, 'Belarusian State University of Transportation, 32, Homyel, Belarus'],
[22.5617895,88.4128188, 'Jadavpur University, Plot No.8, Salt Lake Bypass, LB Block, Sector III, Salt Lake City, Kolkata, West Bengal 700098, India'],
[26.1529683,91.6639235, 'Gauhati University, National Highway 37, Gopinath Bordoloi Nagar, Guwahati University, Jalukbari, Guwahati, Assam 781014, India'],
[-34.5996976,-58.3730489, 'University of Buenos Aires - Viamonte 430, C1053ABJ Buenos Aires, Buenos Aires Province, Argentina'],
[44.4151993,8.926863, 'University of Genoa, Via Balbi, 5, 16126 Genoa, Italy'],
[13.6523831,100.4938719, 'King Mongkuts University of Technology Thonburi, 126 Pracha Uthit Rd, Bangkok, Thung Khru 10140'],
[4.861252,-74.0336844, 'University of La Sabana, Chia, Cundinamarca, Colombia'],
[43.4509016,-76.5440118, 'State University of New York at Oswego, 7060 New York 104, Oswego, NY 13126, USA'],
[17.4930263,78.3906218, 'Jawaharlal Nehru Technological University, Kukatpally, Hyderabad, Andhra Pradesh, India'],
[50.6684169,4.6128456, 'Catholic University of Louvain, 1348 Louvain-La-Neuve'],
[42.3507543,-71.1073183, 'Boston University, Boston, MA 02215, USA'],
[53.4665323,-2.2335496, 'The University of Manchester, Oxford Road, Manchester M13 9PL, UK'],
[51.1895314,6.7958164, 'Fachhochschule Düsseldorf, University of Düsseldorf, Universitätsstraße 1, 40225 Dusseldorf, Germany'],
[10.408363,-66.8755735, 'Simón Bolívar University, Caracas 1080'],
[39.1863846,-86.5345782, 'Indiana 45 46 Bypass & North College Avenue, Bloomington, IN 47404, USA'],
[42.730172,-73.6788026, 'Rensselaer Polytechnic Institute, 110 8th Street, Troy, NY 12180, USA'],
[45.4231316,-75.6828798, 'University of Ottawa, 550 Cumberland Street, Ottawa, ON K1N 6N5'],
[28.3594884,75.5881627, 'Birla Institute of Technology and Science, BITS, Pilani, Rajasthan 333031, India'],
[38.0527604,-84.4936221, 'Transylvania University, 300 North Broadway Road, Lexington, KY 40508, USA'],
[25.2623357,82.9892903, 'Administrative Office, IIT BHU, Banaras Hindu University, Varanasi, Uttar Pradesh 221005, India'],
[45.7850625,4.7649514, 'BIBLIOTHEQUE EMLYON BUSINESS SCHOOL, EMLYON Business School, 23 Avenue Guy de Collongue, 69134 Écully, France'],
[10.4894375,-66.89307, 'Universidad Central de Venezuela, Caracas, Venezuela'],
[50.4473762,30.4542089, 'NTUU "KPI", 37, Kiev, Kyiv city, Ukraine, 03056'],
[-6.7532906,-35.6491854, 'Universidade Federal da Paraíba, Paraíba, Brazil'],
[55.755826,37.6173, 'Moscow, Russia'],
[59.9342802,30.3350986, 'Saint Petersburg, Russia'],
[41.778211,-88.1425019, 'North Central College, 30 North Brainard Street, Naperville, IL 60540, USA'],
[55.7857972,12.5215333, 'Technical University of Denmark, Kemitorvet 0, 2800 Lyngby, Denmark'],
[37.424106,-122.1660756, 'Stanford, CA, USA'],
[-12.024022,-77.0481441, 'National University of Engineering, Rimac Lima 25, Peru'],
[-35.4158638,149.0897893, 'Monash ACT 2904, Australia'],
[-30.0340649,-51.2187767, 'Universidade Federal do Rio Grande do Sul - Avenida Paulo Gama, 110, Farropilhas, Porto Alegre - Rio Grande do Sul, 90040-060, Brazil'],
[19.4502085,-99.1576137, 'Museo Del Instituto De Geologia De La Unam, Jaime Torres Bodet 176, Santa Maria la Rivera, Cuauhtémoc, 06400 Mexico City, Federal District, Mexico'],
[42.3655147,-71.1221412, 'Harvard Business School, Harvard University, Boston, MA 02163'],
[35.7294578,51.387662, 'University of Tehran, North Kargar, Tehran, Iran'],
[36.8860153,-76.3043925, 'Old Dominion University, 5115 Hampton Boulevard, Norfolk, VA 23529, USA'],
[50.4501,30.5234, 'Kiev, Kyiv city, Ukraine'],
[6.8923439,3.7241936, 'Babcock University, Ilishan-Remo ILISHAN REMO, Nigeria'],
[51.8777259,0.9472069, 'University of Essex Colchester Campus, Wivenhoe Park, Colchester, Essex CO4 3SQ, UK'],
[-34.5996976,-58.3730489, 'University of Buenos Aires - Viamonte 430, C1053ABJ Buenos Aires, Buenos Aires Province, Argentina'],
[9.6844768,80.0226759, 'University of Jaffna, Jaffna, Sri Lanka'],
[12.9234241,77.4994469, 'R V College Of Engineering, Mysore Road, RV Vidyaniketan, Mailasandra, Bangalore, Karnataka 560059, India'],
[42.5030334,-89.030906, 'Beloit College, 700 College Street, Beloit, WI 53511, USA'],
[34.068921,-118.4451812, 'University of California, Los Angeles, Los Angeles, CA 90095, USA'],
[41.879185,-87.6311769, 'University of Chicago, 105 West Adams Street, Chicago, IL 60603, USA'],
[30.5885775,31.4822727, 'Zagazig University, Al Modir Street, Shaibet an Nakareyah, Markaz El-Zakazik, Ash Sharqiyah 44516, Egypt'],
[53.5234543,-113.5259951, 'University of Alberta, 116 St. and 85 Ave, Edmonton, AB T6G 2R3, Canada'],
[53.876727,27.604977, 'Obschezhitie N 5 Belorusskogo Gosudarstvennogo Yekonomicheskogo Universiteta (Bgyeu), 26, Minsk, Belarus'],
[29.645264,-82.346394, 'University of Florida, Gainesville, FL 32611, USA'],
[8.5029453,76.9466618, 'University of Kerala, 23, Palayam Airport Road, Palayam, Thiruvananthapuram, Kerala 695037, India'],
[45.4781458,9.2272846, 'Politecnico di Milano, Piazza Leonardo Da Vinci, 32, 20133 Milan, Italy'],
[13.1191963,80.0825639, 'Madras College of Pharmacy, National Highway 205, Avadi, Tamil Nadu 600054, India'],
[38.7367495,-9.1393804, 'Instituto Superior Técnico, Avenida Rovisco Pais 1, 1049-001 Lisbon, Portugal'],
[40.717464,-74.006897, 'WORTH/W BROADWAY (does not stop), New York, NY 10013, USA'],
[-33.9330361,18.8662888, 'Stellenbosch University, Stellenbosch 7600, South Africa'],
[28.6742882,77.4487616, 'Institute Of Management Technology, Block 15, Sector 2, Raj Nagar, Ghaziabad, Uttar Pradesh 201002, India'],
[39.9522188,-75.1932137, 'University of Pennsylvania, 3451 Walnut Street, Philadelphia, PA 19104, USA'],
[31.3975514,75.5349485, 'NIT Jalandhar, National Highway 1, Jalandhar, Punjab 144 011, India'],
[3.3422583,-76.5293139, 'Universidad Icesi, Cali, Valle del Cauca, Colombia'],
[37.2283843,-80.4234167, 'Virginia Polytechnic Institute and State University, Blacksburg, VA 24061, USA'],
[33.4535269,-112.0730317, 'Downtown Phoenix Campus - Arizona State University, 411 North Central Avenue, Phoenix, AZ 85004, USA'],
[14.6047163,-90.4894671, 'Universidad del Valle de Guatemala, Guatamala City, Guatemala'],
[1.2246216,19.7878159, 'Basankusu Airport (BSU), N22, Basankusu, Democratic Republic of the Congo'],
[51.165691,10.451526, 'Germany'],
[4.6382236,-74.0843523, 'National University of Colombia, Avenida Carrera 30 # 45, Bogotá, Cundinamarca 111321, Colombia'],
[60.0092309,30.3726697, 'St.Petersburg State Polytechnic University, Fakultet innovatiki SPbGPU, Politekhnicheskaya ulitsa, 29, Saint Petersburg, Russia, 195251'],
[53.5674298,-113.5025664, 'NAIT, 11762 106 Street, Edmonton, AB T5G 2R1, Canada'],
[9.9986861,-84.1111858, 'National University, Heredia, Costa Rica'],
[33.952602,-84.5499327, 'Marietta, GA, USA'],
[42.9097484,-85.7630885, 'Grandville, MI, USA'],
[42.2562118,-121.7859488, 'Oregon Institute of Technology, 3201 Campus Drive, Klamath Falls, OR 97601, USA'],
[34.2969444,48.8236111, 'Malayer, Iran']
];
