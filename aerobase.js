
// ---- DATA URL: replace with your GitHub raw URL after upload ----
const AB_DATA_URL = 'https://raw.githubusercontent.com/ResponseAviationSearch/ras-data/main/jets_v2.json';

const AB_PASS_HASH = '39fc5b0cc1f9395962d8d4d6624c62435551e61103560d60b3b73fd11122b6f3';
const IADA = [{"c":"5x5 Trading","l":"Boca Raton, Florida","w":"https://www.5x5trading.com/","p":[]},{"c":"Absolute Aviation","l":"Johannesburg, Gauteng","w":"https://absoluteaviation.co.za/","p":[]},{"c":"ACASS","l":"Montreal, Quebec","w":"https://acass.com/en/","p":[]},{"c":"Aero Ventures","l":"Miami Beach, FL","w":"https://www.aeroventures.com/","p":[]},{"c":"Aerolineas Ejecutivas S.A. de C.V.","l":"Toluca, Mexico","w":"https://www.aerolineasejecutivas.com/","p":[]},{"c":"Aircraft Executives","l":"Atlanta, GA","w":"https://aircraftexecutives.com","p":[]},{"c":"ASIAN SKY GROUP","l":"Wan Chai, Hong Kong","w":"http://www.asianskygroup.com/","p":[]},{"c":"Atlas Air Service AG","l":"Bremen, Germany","w":"https://www.aas.ag/","p":[]},{"c":"Aviation Sales Associates","l":"Costa Mesa, CA","w":"https://www.asajets.com","p":[]},{"c":"Avpro Inc.","l":"Annapolis, MD","w":"https://www.avprojets.com/","p":[]},{"c":"Axiom Aviation Inc.","l":"Richmond Heights, OH","w":"http://axiomav.com","p":[]},{"c":"Axis Jet","l":"Sacramento, California","w":"http://axisjet.com","p":[]},{"c":"Banyan Air Service","l":"Ft. Lauderdale, FL","w":"https://www.banyanair.com/","p":[]},{"c":"CFS Jets","l":"Cornelius, NC","w":"https://cfsjets.com/","p":[]},{"c":"Dallas Jet International","l":"Westlake, TX","w":"https://www.dallasjet.com/","p":[]},{"c":"Duncan Aviation Inc.","l":"Lincoln, NE","w":"https://www.duncanaviation.aero/","p":[]},{"c":"EAC Aircraft Sales AB","l":"H\u00e4ggeby, Sweden","w":"https://eacgroup.se/","p":[]},{"c":"Eagle Aviation","l":"Columbia, SC","w":"https://www.eagle-aviation.com/","p":[]},{"c":"Elliott Jets","l":"Milan, IL","w":"https://www.elliottjets.com/","p":[]},{"c":"EMCJET","l":"Houston, Texas","w":"https://www.emcjet.com","p":[]},{"c":"Exclusive Aircraft Sales","l":"Eden Prairie, MN","w":"https://www.fargojet.com/aircraft-sales/","p":[]},{"c":"Flightline Group Inc.","l":"Tallahassee, Florida","w":"https://www.flightlinegroup.com","p":[]},{"c":"FX Solutions","l":"Cleveland, OH","w":"https://www.fxsolutions.aero/homepage","p":[]},{"c":"Gantt Aviation Inc.","l":"Georgetown, TX","w":"http://ganttaviation.com","p":[]},{"c":"General Aviation Services LLC","l":"Palatine, IL","w":"https://www.genav.com/","p":[]},{"c":"Global Aircraft Corporation","l":"Miami, FL","w":"https://globalaircrafts.com/","p":[]},{"c":"Global Elite Aviation","l":"San Francisco, California","w":"https://www.globaleliteaviation.com/","p":[]},{"c":"Global Wings LLC","l":"Boca Raton, FL","w":"https://www.gwjets.com/","p":[]},{"c":"Guardian Jet LLC","l":"Guilford, CT","w":"https://www.guardianjet.com/","p":[]},{"c":"Hatt & Associates LLC","l":"Broomfield, Colorado","w":"https://www.hattaviation.com/","p":[]},{"c":"Holstein Aviation Inc","l":"Carmel, IN","w":"http://holsteinaviation.com","p":[]},{"c":"JBA Jets","l":"Houston, TX","w":"http://www.jba.aero/","p":[]},{"c":"Jet Access Group","l":"Indianapolis, Indiana","w":"https://www.flyjetaccess.com","p":[]},{"c":"Jet Sense Aviation LLC","l":"Lake Zurich, IL","w":"https://www.jetsenseaviation.com/","p":[]},{"c":"jetAVIVA","l":"Overland Park, KS","w":"https://www.jetaviva.com/","p":[]},{"c":"Jetcraft","l":"London, UK","w":"https://www.jetcraft.com/","p":[]},{"c":"Jeteffect Inc.","l":"Long Beach, CA","w":"https://www.jeteffect.com/","p":[]},{"c":"JetTransactions","l":"Newport Beach, CA","w":"https://www.jettransactions.com/","p":[]},{"c":"Jones Aviation Group","l":"Dallas, Texas","w":"https://www.jonesaviationgroup.com","p":[]},{"c":"Leading Edge Aviation Solutions LLC","l":"Parsippany, NJ","w":"https://leas.com/","p":[]},{"c":"Levaero Aviation Inc","l":"Mississauga, Ontario","w":"http://www.levaero.com","p":[]},{"c":"Leviate Air Group","l":"Dallas, TX","w":"https://www.leviateair.com/","p":[]},{"c":"Lone Mountain Aircraft","l":"Springfield, OH","w":"https://www.lonemountainaircraft.com/","p":[]},{"c":"Meisinger Aviation","l":"Chesterfield, Missouri","w":"http://meisingeraviation.com/","p":[]},{"c":"Meisner Aircraft Inc.","l":"Janesville, WI","w":"https://www.meisneraircraft.com/","p":[]},{"c":"Mente Group LLC","l":"Frisco, TX","w":"http://mentegroup.com/","p":[]},{"c":"Mesinger Jet Sales","l":"Boulder, CO","w":"https://jetsales.com/","p":[]},{"c":"Northern Jet Inc.","l":"Grand Rapids, MI","w":"https://northernjet.net/","p":[]},{"c":"OGARAJETS","l":"Atlanta, GA","w":"https://www.ogarajets.com/","p":[]},{"c":"Omni Aircraft Sales","l":"","w":"https://omniaircraftsales.com/","p":[]},{"c":"Oshman Aviation","l":"Fort Worth, TX","w":"https://www.oshmanaviation.com","p":[]},{"c":"Skyservice Business Aviation Inc.","l":"Mississauga, ON","w":"https://skyservice.com/","p":[]},{"c":"SOLJETS","l":"Park City, UT","w":"https://www.soljets.com/","p":[]},{"c":"Southern Cross Aircraft LLC","l":"Ft Lauderdale, FL","w":"https://www.scross.com/","p":[]},{"c":"Stanton & Partners Aviation","l":"Dubai, DIFC","w":"https://www.stantonaviation.com/","p":[]},{"c":"Swartz Aviation Group LLC.","l":"Fort Worth, TX","w":"https://www.swartzaviationgroup.com/","p":[]},{"c":"The Jet Business","l":"London, UK","w":"https://www.thejetbusiness.com/","p":[]},{"c":"VanAllen","l":"Peachtree City, GA","w":"https://vanallen.com/","p":[]},{"c":"West Elk Aviation","l":"Broomfield, Colorado","w":"https://westelkaviation.com","p":[]},{"c":"Western Aircraft","l":"Boise, ID","w":"https://www.westair.com","p":[]},{"c":"Wetzel Aviation Inc.","l":"Englewood, CO","w":"https://www.wetzelaviation.com/","p":[]},{"c":"Wulf Aviation","l":"Mexico City, Mexico","w":"https://www.wulfaviation.com/","p":[]}];
const MODELS = {"Aerial Productions Intl Inc":["ACROJET SPECIAL"],"Aermacchi":["IMPALA MB-326M"],"Aero":["L-39 ALBATROS"],"Aero Commander":["1121","1121A"],"Aero Vodochody":["L-139","L-159","L-29 DELFIN","L-29C","L-29C DELFIN","L-39","L-39C","L-39MS","L-39ZA","L-39ZO","L29","L39C","L39CT","PRIDE/AERO-39 ZO","VODOCHODY L-159A"],"Airbus":["A300 B4-605R","A300 B4-622","A300 B4-622R","A300 F4-605R","A300 F4-622R","A310-203","A310-222","A319-111","A319-112","A319-114","A319-115","A319-131","A319-132","A319-133","A320-111","A320-200","A320-211","A320-212","A320-214","A320-231","A320-232","A320-233","A320-251N","A320-271N","A321-200","A321-211","A321-212","A321-213","A321-231","A321-232","A321-253N","A321-253NX","A321-253NY","A321-271N","A321-271NX","A321-271NY","A330-202","A330-223","A330-243","A330-243F","A330-300","A330-302","A330-323","A330-343","A330-941","A340-300","A340-313","A340-541","A340-600","A340-642","A350-941","A380-841","BD-500-1A10","BD-500-1A11","CL-600-2B19","CL-600-2C10"],"Allbritton John":["LONG EZ-J"],"Ames Industrial Corp.":["MJ 90"],"Andrew San Marco":["SUBSONEX"],"Anduril (Drone)":["BARRACUDA 500","BDXL","CPJ-100","HAVOC","ROADRUNNER"],"Anton H Nerad Ii":["SONEX SUBSONEX JSX-2"],"Astrium Inc":["FXD90"],"BVM":["KINGCAT"],"Bede":["BD-5J"],"Benson James Chapman":["RV-8"],"Bishop":["AEROJET SPECIAL"],"Bishop William Kevin":["BISHOPRANS S-7SJ"],"Boeing":["707-138B","707-321B","707-323B","707-338C","707-351B","707-368C","707-3K1C","707-3L6B","717-200","727-200","727-200F","727-21","727-212","727-22","727-223","727-225","727-227","727-232","727-243","727-247","727-264","727-277","727-281","727-2H3","727-2S2F","727-2U5","727-31","727-35","737-10","737-200","737-201","737-205","737-209","737-210C","737-242C","737-275C","737-290C","737-2H4","737-2Q8","737-2T4","737-2T4C","737-2W8","737-300","737-301","737-306","737-319","737-31S","737-330","737-33V","737-35B","737-36E","737-38J","737-3B7","737-3H4","737-3K2","737-3L9","737-3Q8","737-3TO","737-3Y0","737-400","737-401","737-405","737-436","737-46J","737-484","737-48E","737-490","737-4B3","737-4B7","737-4C9","737-4H6","737-4Q3","737-4Q8","737-4YO","737-500","737-505","737-524","737-528","737-59D","737-5L9","737-5YO","737-66N","737-7","737-700","737-705","737-71B","737-71Q","737-724","737-72T","737-72U","737-732","737-73T","737-73V","737-73W","737-752","737-75C","737-75G","737-75V","737-76N","737-76Q","737-77Z","737-790","737-79L","737-79P","737-79U","737-7AH","737-7AN","737-7AX","737-7BC","737-7BD","737-7BF","737-7BH","737-7BK","737-7BX","737-7CG","737-7CJ","737-7CT","737-7CU","737-7EG","737-7EI","737-7EJ","737-7EL","737-7ET","737-7H4","737-7HZ","737-7JV","737-7JY","737-7K5","737-7K9","737-7L9","737-7LT","737-7Q8","737-7V3","737-8","737-800","737-800A","737-808","737-809","737-81Q","737-8200","737-823","737-824","737-82R","737-832","737-83N","737-84P","737-852","737-85H","737-85R","737-86D","737-86J","737-86N","737-883","737-890","737-89M","737-8AS","737-8AW","737-8BK","737-8CX","737-8EH","737-8EQ","737-8F2","737-8FH","737-8H4","737-8HX","737-8JP","737-8K5","737-8KN","737-8KT","737-8Q8","737-8U3","737-8ZE","737-9","737-900ER","737-91MER","737-924","737-924ER","737-932ER","737-990ER","737-9GPER","747-121","747-123","747-128","747-131","747-251F","747-257B","747-273C","747-283B","747-400","747-400F","747-409","747-409F","747-412","747-412F","747-41R","747-422","747-428","747-428F","747-437","747-438","747-443","747-446","747-44AF","747-451","747-45E","747-45EF","747-46NF","747-47UF","747-481","747-481F","747-48E","747-48EF","747-4B5","747-4B5F","747-4F6","747-4H6","747-4H6F","747-4HAF","747-4HQF","747-4J6","747-4KZF","747-4R7F","747-8","747-83QF","747-85M","747-87UF","747-8B5","747-8F","747-8JA","747-8KB","747-SP44","747SP-21","747SP-27","757-200 SERIES","757-204","757-21B","757-222","757-223","757-224","757-225","757-22L","757-230","757-230ER","757-231","757-232","757-236","757-23A","757-23P","757-24APF","757-251","757-256","757-258","757-260PF","757-26D","757-27B","757-28A","757-29J","757-2B7","757-2G5","757-2G7","757-2Q8","757-2S7","757-2T7","757-2Y0","757-2YO","757-2ZO","757-324","757-33N","757-351","767-200","767-222","767-223","767-224","767-231","767-231SF","767-232","767-233","767-238","767-241","767-246","767-24Q","767-266","767-277","767-281","767-2AX","767-2C","767-300","767-300ER","767-300F","767-304","767-306","767-316","767-316F","767-319","767-31A","767-31B","767-31K","767-322","767-323","767-323ER","767-324","767-328","767-32LF","767-330","767-332","767-333","767-336","767-338","767-33A","767-341","767-346","767-34AF","767-35D","767-360","767-36N","767-375","767-37D","767-381","767-383","767-383ER","767-38E","767-3BG","767-3CB","767-3P6","767-3P6ER","767-3Q8","767-3S1","767-3S2F","767-3W0","767-3Y0","767-424ER","767-432ER","777-200","777-212","777-212ER","777-219","777-222","777-223","777-224","777-232","777-232LR","777-236","777-237LR","777-246","777-24Q","777-266","777-268","777-289","777-2DZLR","777-2H6","777-2U8","777-300ER","777-312","777-31H","777-323ER","777-346","777-367ER","777-36NER","777-381ER","777-9","777-FS2","777F","777F16","777F1H","777F28","777FFX","777FHT","777FZB","787-10","787-8","787-9","B777-200ER","BTX-1","C-135FR","KC-135R","MD-11F","MD-90-30","Q25"],"Bombardier":["23","24","24A","24B","24D","24E","24F","25","25B","25C","25D","28","31","31A","35","35A","35A (C-21A)","36","36A","45","55","55B","55C","60","60 XR","BD-100-1A10","BD-700-1A10","BD-700-1A11","BD-700-2A12","C-21A","CF-5A","CF-5D","CL-600 CHALLENGER","CL-600-1A11","CL-600-2A12","CL-600-2A12(CL-601)","CL-600-2B16","CL-600-2B16 (CL-604)","CL-600-2B16 (CL-605)","CL-600-2B16(CL-604)","CL-600-2B16(CL601-3R","CL-600-2B19","CL-600-2C10","CL-600-2C11","CL-600-2D24","CL-600-2E25","CL-601-3A","CL-604","CL215 1A10","CL600-1A11","CL600-2B16 (CL601-3A","CL600-2B16(CL601-3A)","CL601-3R","CT-114 TUTOR","CT-133","CT-33","F-86 MK.5","F-86E MK.6","T-33","T33-AN MK3","T33-MK3"],"Boom Technology":["XB-1"],"British Aerospace":["AVRO 146-RJ85A","BAC 1-11 419/EP","BAC 145 STRKMST MK87","BAC 167 STRIKEMASTER","BAC STKMSTR MK80","BAE 125 SERIES 1000A","BAE 125 SERIES 800A","BAE 125-1000","BAE 125-800A","BAE 146","BAE 146 SERIES 200","BAE 146 SERIES 200A","BAE 146-300","BH.125-400A","DH.125-3A/RA","GLOSTER METEOR T7","GNAT T 1","GNAT T.MK.1","HAWKER HUNTER MK 58","HS 125-700A","HS-125 SERIES F-400","HS.125 SERIES 700A","HS125 FAN 400A","HUNTER MK 58A","HUNTER MK.58","HUNTER T 75","JET PROVOST 3A","JET PROVOST MK5A","JET PROVOST T MK5","LIGHTNING TMK5","METEOR F4","MK 67 (T-59)","P84 JET PROVOST T3","P84 JET PROVST MK.5A","P84 MK 4","P84 MK.5","P84 T3A","SEA HARRIER FA2","TMK-4","VC10 K3","VC10 TYPE 1151"],"Brock L Aldrich":["SUBSONEX"],"Brown William C":["SUBSONEX"],"C A S A":["2.111"],"CARF Models":["REBEL MAX"],"Cain Brian S":["SUBSONEX"],"Caproni Vizzola":["CALIF A-21SJ"],"Central Air Service":["LOCKHEED SP-2H(P2V7)"],"Cessna / Textron":["414A","500","501","510","525","525A","525B","525C","530","550","551","560","560XL","560XLS","560XLS+","650","680","680A","700","750","A-37A","A37B","E530","S550","T-37C"],"Chance Vought":["F8P"],"Chance Vought/Vortex Cntrl Sys":["YA-7E"],"Chris D Esselstyn":["HP-18J"],"Cirrus":["SF50"],"Classic Fighter Industries":["ME 262 REPRODUCTION"],"Coleman Warbird Museum":["CWF86-F-30-NA"],"Collin Straus":["C-17 GLOBEMASTER"],"Commonwealth Aircraft":["CA-27 SABRE 31"],"Comp-Let Sroorganizacni Slozk":["TST-14"],"Corporate Jets":["BAE 125-1000A","BAE 125-800A"],"Curtiss Robertson":["ROBIN J-1"],"Cyle R Hatch":["EVE"],"DJI":["AIR 3"],"Dassault":["ALPHA JET MODEL A","FALCON 10","FALCON 20","FALCON 20 F","FALCON 20-D","FALCON 20-F5","FALCON 2000","FALCON 2000EX","FALCON 20G","FALCON 50","FALCON 50EX","FALCON 6X","FALCON 7X","FALCON 900","FALCON 900 EX","FALCON 900B","FALCON 900EX","FALCON 900EX EASY","FAN JET FALCON","FAN JET FALCON SER D","FAN JET FALCON SER E","FAN JET FALCON SER F","MIRAGE F-1","MIRAGE F1 B","MIRAGE F1 CR","MIRAGE F1 CT","MIRAGE F1 M","MYSTERE FALCON 20","MYSTERE FALCON 20-C5","MYSTERE FALCON 20-D5","MYSTERE FALCON 20-F5","MYSTERE FALCON 200","MYSTERE FALCON 50","MYSTERE FALCON 50EX","MYSTERE FALCON 900","MYSTERE FALCON 900B","MYSTERE-FALCON 20-C5","MYSTERE-FALCON 20-F5","MYSTERE-FALCON 50"],"David G Thomas/Thomas Aerospac":["VIPERJET MK II"],"David R Williams":["D90","DIHEDRAL 90"],"David W Peeler":["JSX-2"],"De Havilland":["DH-115 MK55","DH115 VAMPIRE","MK-35","VAMPIRE"],"Don Moseley":["KX-1"],"Dornier":["328-300","ALPHA-JET","DORNIER 328-300"],"Douglas/Goessling":["A4-B"],"Eclipse":["500","EA500"],"Embraer":["EMB-135","EMB-135BJ","EMB-135ER","EMB-135KL","EMB-135LR","EMB-145","EMB-145EP","EMB-145LR","EMB-145XR","EMB-500","EMB-505","EMB-545","EMB-550","ERJ 170-100 LR","ERJ 170-100 SE","ERJ 170-100 STD","ERJ 170-100SU","ERJ 170-200 LL","ERJ 170-200 LR","ERJ 170-200 STD","ERJ 190-100 ECJ","ERJ 190-100 IGW","ERJ 190-100 LR","ERJ 190-200 IGW","ERJ 190-200 LR","SJ30-2"],"Eves Bryan":["KITFOX 5 VIXEN"],"F+W Emmen":["DH-115 MK55"],"Fairchild":["C-119F","C-119G-3E"],"Federal Aircraft Factory":["DH115 VAMPIRE MK55"],"Feibao Jets":["T-33"],"Firestorm Labs":["TEMPEST BETA 2 TURBO"],"Fly 716":["STRATOS ACFT 716X"],"Flying J":["MINI EAGLE"],"Fornof":["AEROJET SPECIAL"],"Fouga":["6 CM 170","CM 170 MAGISTER","CM 170R MAGISTER","FOUGA CM 170"],"Gamache Bernard J":["FLS MICROJET"],"General Atomics (Drone)":["MQ-9 BLOCK 1","MQ9A","UPC97000-1","UPC97000-5"],"General Dynamics":["F-16A"],"Geoscout":["AIRD-1"],"Goetz Joe":["HELICYCLE"],"Gratriex Karl W":["JET-EXEC"],"Griffin Robert L":["SKYSTAR KITFOX MDL 5"],"Grumman":["F9F","F9F-2","G-1159","G1159B"],"Gulfstream":["C-20A","G-1159","G-1159A","G-III","G-IV","G-IV (G300)","G-IV (G350)","G-IV (G400)","G-V","G100","G1159B","G150","GIV-X","GIV-X (G350)","GIV-X (G450)","GULFSTREAM 100","GULFSTREAM 200","GV-SP","GV-SP (G500)","GV-SP (G550)","GVI","GVI (G650)","GVI (G650ER)","GVII-G400","GVII-G500","GVII-G600","GVIII-G700","GVIII-G800"],"Gump Tim K":["JET EXEC"],"HPH":["GLASFLUGEL 304S JET"],"Halladay Roy":["LOCKHD T-33/HALLADAY"],"Hamm Dennis Dba Pacific Sunset":["VIPERJET MKII"],"Hawker":["HUNTER T MK 7"],"Heinkel":["POTEZ-HEINKEL CM 191"],"Hermeus":["QUARTERHORSE MK 1","QUARTERHORSE MK 2.1","QUARTERHORSE MK 2.2","QUARTERHORSE MK 2.3"],"Hernandez Victor M":["7SL"],"Hispano Aviacion":["HA-200 SAETA","HA-220"],"Honda":["HA-420"],"Huhta Milton T":["HELICYCLE"],"IAI (Israel)":["1124","1124A","1125 WESTWIND ASTRA","ASTRA SPX","F21KFIR-C2","G200","GALAXY","GULFSTREAM 100","GULFSTREAM 200","GULFSTREAM G150","GULFSTREAM G280","KFIR-C2","WW1124A"],"Ilyushin":["IL 78"],"Jet Noise LLC":["JSX-02"],"Jetpack Aviation":["JB-12","JB10","JB11","SPEEDER 1.5","SPEEDER P2"],"John Murphy":["JSX-2"],"Johnson Alden B":["HELICYCLE"],"Jonker Sailplanes":["JS1C 18/21","JS3"],"Kelly Vogel":["KEDAN1"],"KestrelX":["JSX-2"],"Kratos (Drone)":["MQM 178 FIREJET","MQM-178"],"Latitude":["HQ-60"],"Ld Jeffries":["FLS MICROJET"],"Legend Flyers":["ME 262-B1-A"],"Lewis Justin":["FLS MICROJET"],"Lockheed Martin":["1329-23E","1329-25 JETSTAR II","CF-104G","CF104D","ER-2","ETS-1","ETS-2","ETS-3","F-104A","F-104S ASA-M","F-16A","F-16B","F-80-C-10","L-1011-385-1","L-1011-385-1-15","L-1011-385-3","L-382G","S3B","T-33","T-33A","T-33A-1-LO","T2V-1A","TF-104G","TF-104G-M","TV-2","X-59"],"Lockheed/Coleman Warbird Museu":["T33A"],"Lockheed/Keasler":["LT-33"],"M&D Flugzeugbau":["JS-MD 3","JS-MD 3 RES AIRCRAFT"],"Maldonado-Sent Stefan":["FLS MICROJET"],"Martin/General Dynamics":["WB-57F"],"Mayman Aerospace":["P100","P100TB"],"McDonnell Douglas":["220","A-4K","A4D-2N","A4N","DC-10-30","DC-10-30F","DC-10-30F (KDC-10)","DC-10-40","DC-10-40F","DC-8-62","DC-8-63","DC-8-63F","DC-8-72","DC-8-72CF","DC-8-73","DC-8-73F","DC-9","DC-9-15F","DC-9-21","DC-9-32","DC-9-32F","DC-9-33F","DC-9-82(MD-82)","DC-9-83","DC-9-83(MD-83)","DC-9-87","DC-9-87 (MD-87)","DC9-15","DOUGLAS AD-4N","F-15B","F-15D","F4D","F4H-1","FA-18A","FA-18B","FA-18D","MD 83","MD-10-10F","MD-10-30F","MD-11","MD-11F","MD-88","MD-90-30","TA-4F","TA-4J","TA-4J SKYHAWK","TA-4K"],"Mcdonnell Douglas/Daniels M":["TA-4J"],"Messerschmitt":["ME 262A"],"Mikoyan (MiG)":["LIM 6","MIG 15","MIG 15UTI","MIG 17 (LIM 5)","MIG 17 (LIM-5)","MIG 17 SHENGYANG F4","MIG 17F (LIM 5)","MIG 21","MIG 21 UM","MIG 21MF","MIG 23","MIG-15 UTI (LIM2)","MIG-15BIS","MIG-17","MIG-17F","MIG-21F","MIG-23UB","MIG-29UB","MIG17/LIM6","SB LIM-2"],"Mikoyan/Hansen Albert C":["MIG 15 BIS"],"Mitsubishi":["MU-300"],"Monnett John T Jr":["SUB SONEX"],"Morane-Saulnier":["MS760","MS760B"],"Navmar":["TWINJET"],"North American/Haggland J P":["T-28B"],"North American/Sharpe":["F86F"],"Northrop Grumman":["AT-38B","F 5F","F-5A","F-5B","F-5E","NF-5B","RQ-4A","T-38A","YRQ-4A GLOBAL HAWK"],"Northrop/Siltanen W":["T-38"],"Northrop/U S Avia Museum Inc":["NORTHROP T-38"],"Paul F Dye":["SUBSONEX"],"Pilatus":["PC-24"],"Potez":["FOUGA CM 170","FOUGA CM170 MAGISTER","FOUGA MAGISTER CM170","SUPER FOUGA CM-170"],"Rafael Collado":["SUBSONEX"],"Raytheon / Hawker":["390","400","4000","400A","400T","BAE 125-1000A","BAE 125-800A","BAE 125-800B","HAWKER 1000","HAWKER 4000","HAWKER 750","HAWKER 800","HAWKER 800XP","HAWKER 850XP","HAWKER 900XP","HAWKER HNTR FMK 58","HAWKER HUNTER F.6A","HAWKER HUNTER F748","HAWKER HUNTER FGA 9","HAWKER HUNTER MK 58A","HAWKER HUNTER MK.58","HS 125-700A","HUNTER MK.68","MK 51","MK 58","T-1A"],"Redge Greenberg":["SUBSONEX JET"],"Republic":["F84G"],"Rex Pemberton":["X11"],"Robert Black":["FLS MICROJET"],"Rockwell / North American":["65","F-100C","F-100F","F-86A","F-86F","FJ-3","FJ-4B","NA-265","NA-265-40","NA-265-60","NA-265-65","NA-265-80","NA-352","T-2C","T-39A"],"Rockwell / Prineas":["ROCKWELL T-2B"],"Ryan J Steffey":["SONEX JSX-2"],"Ryan John Steffey":["JSX-2"],"SIAI-Marchetti":["S 211","S-211"],"Saab":["2000"],"Sanders Wiley C Jr":["SANDERS/NA T2B"],"Scaled Composites":["151","281","318","348","351","400","401","M437","M444"],"Schempp-Hirth":["ARCUS"],"Seavall Mike":["MAVERICK 1500"],"Sheng Yang":["JJ-5 (MIG-17-UTI)"],"Shield AI":["X-BAT"],"Short Brothers":["SC-7 SKYVAN"],"Sino Swearingen":["SJ30-2"],"Sipa":["S200"],"Skinner Russell W":["VIPERJET MK II"],"Skyhawk Ventures":["A-4C SKYHAWK"],"Skymaster RC":["A-10"],"Soko":["GALEB G-2","GALEB G2-A"],"Sonex Aircraft":["JSX-2"],"Starfighter":["F-104S ASA-M"],"State Aircraft Factories":["MIG 15","MIG 17","MIG-17T"],"Stern David Allan":["SUBSONEX"],"Stratos":["714"],"Sud Aviation":["CM 170"],"Sukhoi":["SU-25 K"],"Swift Engineering":["MARK 400"],"T-1 Corp":["T1 FORTUNE"],"Taylor Geoff":["BD5J"],"Temco":["TT-1"],"Temco/Lazier":["TT-1"],"Thompson James G":["CALIBUR TWIN JET"],"Turner Robert P":["HELICYCLE"],"Valldejuli John A":["AEROCOMP 7"],"Viper Aircraft":["VIPERJET MK II"],"Wall Donald A":["BD-5J"],"Wetzel Lewis W":["TITAN MOTORGLIDER"],"Zochol Richard L":["TURBINE LEGEND"]};
const MAKES = ["Aermacchi","Aero","Aero Commander","Aero Vodochody","Airbus","Boeing","Bombardier","Boom Technology","British Aerospace","Caproni Vizzola","Central Air Service","Cessna / Textron","Chance Vought","Cirrus","Classic Fighter Industries","Coleman Warbird Museum","Commonwealth Aircraft","Corporate Jets","Dassault","De Havilland","Dornier","Eclipse","Embraer","F+W Emmen","Fairchild","Federal Aircraft Factory","Fouga","General Dynamics","Grumman","Gulfstream","HPH","Heinkel","Hermeus","Hispano Aviacion","Honda","IAI (Israel)","Ilyushin","Jonker Sailplanes","Legend Flyers","Lockheed Martin","M&D Flugzeugbau","McDonnell Douglas","Messerschmitt","Mikoyan (MiG)","Mitsubishi","Morane-Saulnier","Northrop Grumman","Pilatus","Potez","Raytheon / Hawker","Republic","Rockwell / North American","SIAI-Marchetti","Saab","Scaled Composites","Schempp-Hirth","Short Brothers","Sino Swearingen","Sipa","Soko","Sonex Aircraft","Starfighter","State Aircraft Factories","Stratos","Sud Aviation","Sukhoi","Swift Engineering","T-1 Corp","Temco","Viper Aircraft"];
const STATES = ["AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"];
const T10M = [["Cessna / Textron",5725],["Boeing",4710],["Bombardier",4358],["Airbus",2592],["Embraer",2451],["Gulfstream",2043],["Dassault",1511],["Raytheon / Hawker",1101],["IAI (Israel)",677],["Cirrus",672]];
const T10S = [["UT",3800],["TX",3599],["DE",2180],["FL",1793],["IL",1526],["GA",1494],["CA",1483],["",1125],["TN",899],["NY",858]];
const SN = {"AL":"Alabama","AK":"Alaska","AZ":"Arizona","AR":"Arkansas","CA":"California","CO":"Colorado","CT":"Connecticut","DE":"Delaware","FL":"Florida","GA":"Georgia","HI":"Hawaii","ID":"Idaho","IL":"Illinois","IN":"Indiana","IA":"Iowa","KS":"Kansas","KY":"Kentucky","LA":"Louisiana","ME":"Maine","MD":"Maryland","MA":"Massachusetts","MI":"Michigan","MN":"Minnesota","MS":"Mississippi","MO":"Missouri","MT":"Montana","NE":"Nebraska","NV":"Nevada","NH":"New Hampshire","NJ":"New Jersey","NM":"New Mexico","NY":"New York","NC":"North Carolina","ND":"North Dakota","OH":"Ohio","OK":"Oklahoma","OR":"Oregon","PA":"Pennsylvania","RI":"Rhode Island","SC":"South Carolina","SD":"South Dakota","TN":"Tennessee","TX":"Texas","UT":"Utah","VT":"Vermont","VA":"Virginia","WA":"Washington","WV":"West Virginia","WI":"Wisconsin","WY":"Wyoming","DC":"District of Columbia","PR":"Puerto Rico","VI":"Virgin Islands","GU":"Guam"};
const F = {N:0,MK:1,MD:2,YR:3,OW:4,CI:5,ST:6,SR:7,ZP:8,CL:9,PP:10,RT:11,OT:12,FR:13};
let JETS = [], FCC = {};
let abFilt=[],abSortC=3,abSortD=-1,abCurPg=1;
const AB_PS=50;
let abApResolvedNums=new Set(),abAliasNote='',abOwnerIdx=[],abOwnDropSel=-1;

async function abCheckPass(){
  const v=document.getElementById('ab-gate-input').value.trim().toUpperCase();
  const err=document.getElementById('ab-gate-err');
  if(!v){err.textContent='Please enter your access code.';return;}
  const buf=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(v));
  const hex=Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('');
  if(hex===AB_PASS_HASH){
    localStorage.setItem('ras_aerobase_auth','1');
    document.getElementById('ab-pass-gate').style.display='none';
    abBoot();
  }else{
    err.textContent='Invalid access code.';
    document.getElementById('ab-gate-input').value='';
  }
}

async function abBoot(){
  document.getElementById('ab-loading').style.display='flex';
  const bar=document.getElementById('ab-lbar'),msg=document.getElementById('ab-lmsg');
  bar.style.width='15%'; msg.textContent='Fetching FAA fleet data...';
  try{
    const resp=await fetch(AB_DATA_URL);
    bar.style.width='60%'; msg.textContent='Parsing database...';
    const data=await resp.json();
    JETS=data.jets||[];
    FCC=data.fcc||{};
    bar.style.width='85%'; msg.textContent='Building search index...';
    abPopMakes(); abPopStates();
    bar.style.width='100%'; msg.textContent='Ready.';
    setTimeout(()=>{
      document.getElementById('ab-loading').style.display='none';
      document.getElementById('ab-shell').style.display='flex';
      ['fleet','bro'].forEach(id=>{const el=document.getElementById('ab-t-'+id);if(el)el.style.display='none';});
      Chart.defaults.color='rgba(236,233,226,0.45)';
      Chart.defaults.borderColor='rgba(200,164,92,0.1)';
      abInitDash(); abInitBro(); abDoSearch(); abInitApollo(); abBuildOwnerIdx();
    },400);
  }catch(e){
    msg.textContent='Error loading data: '+e.message;
    bar.style.background='rgba(220,80,80,.6)';
  }
}

// Escape Squarespace stacking context — reparent overlays to <body>
// so their z-index competes at the root level instead of inside main#page (z-index:9)
['ab-pass-gate','ab-loading','ab-shell'].forEach(function(id){
  var el=document.getElementById(id);
  if(el) document.body.appendChild(el);
});

(function(){
  if(localStorage.getItem('ras_aerobase_auth')==='1'){
    document.getElementById('ab-pass-gate').style.display='none';
    abBoot();
  }
})();

const CORP_ALIAS={
  "fiserv":["first data corporation","first data","fiserv solutions"],
  "first data":["fiserv","fiserv solutions"],
  "meta":["facebook","facebook inc","meta platforms"],
  "facebook":["meta","meta platforms"],
  "google":["alphabet","google llc","google inc"],
  "alphabet":["google","google llc"],
  "jpmorgan":["j.p. morgan","jp morgan","chase","jpmorgan chase","bank one"],
  "jp morgan":["jpmorgan","j.p. morgan","chase","jpmorgan chase"],
  "amazon":["amazon.com","amazon logistics","amazon air"],
  "fedex":["federal express","fed ex"],
  "federal express":["fedex","fed ex"],
  "ups":["united parcel service"],
  "united parcel service":["ups"],
  "microsoft":["microsoft corporation"],
  "berkshire":["berkshire hathaway","netjets"],
  "netjets":["berkshire hathaway","netjets aviation"],
  "raytheon":["rtx","raytheon technologies","united technologies"],
  "rtx":["raytheon","raytheon technologies","united technologies"],
  "exxon":["exxonmobil","esso","mobil"],
  "exxonmobil":["exxon","mobil","esso"],
  "chevron":["chevrontexaco","texaco"],
  "salesforce":["salesforce.com","tableau"],
  "oracle":["oracle corporation"],
  "blackrock":["blackrock inc","blackrock advisors"],
  "kkr":["kohlberg kravis roberts"],
  "carlyle":["the carlyle group"],
  "blackstone":["blackstone group","blackstone inc"],
  "ge":["general electric","ge aviation","ge aerospace"],
  "boeing":["the boeing company"],
  "lockheed":["lockheed martin"],
  "honeywell":["honeywell international","alliedsignal"],
  "united airlines":["united air lines"],
  "delta":["delta air lines","northwest airlines"],
  "american airlines":["american air","amr corporation"],
};
const CORP_CANON={
  "first data corporation":"Fiserv","first data":"Fiserv",
  "facebook inc":"Meta","facebook":"Meta",
  "alphabet inc":"Google","google inc":"Google","google llc":"Google",
  "amazon.com inc":"Amazon","amazon.com":"Amazon",
  "federal express corporation":"FedEx","federal express":"FedEx",
  "united parcel service":"UPS",
  "microsoft corporation":"Microsoft",
  "berkshire hathaway inc":"Berkshire Hathaway",
  "netjets aviation":"NetJets",
  "raytheon technologies":"RTX","united technologies":"RTX",
  "exxonmobil corporation":"ExxonMobil",
  "general electric company":"GE Aerospace","ge aviation":"GE Aerospace",
  "honeywell international inc":"Honeywell",
  "lockheed corporation":"Lockheed Martin",
  "jpmorgan chase & co":"JPMorgan Chase",
  "salesforce.com inc":"Salesforce",
};
function abCanon(name){
  if(!name)return name;
  const lo=name.toLowerCase();
  for(const[k,v]of Object.entries(CORP_CANON)){
    if(lo.includes(k))return v+' ('+name+')';
  }
  return name;
}
function abAliasExpand(term){
  const t=term.toLowerCase().trim(),extra=[];
  Object.entries(CORP_ALIAS).forEach(([k,vals])=>{
    if(t.includes(k)||vals.some(v=>t.includes(v))){extra.push(k);vals.forEach(v=>extra.push(v));}
  });
  return[t,...new Set(extra)];
}

const AB_TABS=['dash','fleet','bro'];
function abShowTab(n){
  AB_TABS.forEach(id=>{const el=document.getElementById('ab-t-'+id);if(el)el.style.display='none';});
  document.querySelectorAll('.ab-nb').forEach(b=>b.classList.remove('active'));
  const tab=document.getElementById('ab-t-'+n);if(tab)tab.style.display='flex';
  const btn=document.getElementById('ab-n-'+n);if(btn)btn.classList.add('active');
}
function abInitDash(){
  document.getElementById('ab-s-tot').textContent=JETS.length.toLocaleString();
  document.getElementById('ab-s-mak').textContent=MAKES.length;
  document.getElementById('ab-s-st').textContent=STATES.length;
  new Chart(document.getElementById('ab-cMakes'),{type:'bar',data:{labels:T10M.map(m=>m[0]),datasets:[{data:T10M.map(m=>m[1]),backgroundColor:'#c8a45c',borderRadius:2}]},options:{indexAxis:'y',plugins:{legend:{display:false}},scales:{x:{grid:{color:'rgba(200,164,92,0.1)'},ticks:{color:'rgba(236,233,226,0.45)'}},y:{grid:{display:false},ticks:{color:'rgba(236,233,226,0.55)'}}},responsive:true,maintainAspectRatio:false}});
  new Chart(document.getElementById('ab-cStates'),{type:'bar',data:{labels:T10S.map(s=>s[0]),datasets:[{data:T10S.map(s=>s[1]),backgroundColor:'rgba(200,164,92,0.45)',borderRadius:2}]},options:{indexAxis:'y',plugins:{legend:{display:false}},scales:{x:{grid:{color:'rgba(200,164,92,0.1)'},ticks:{color:'rgba(236,233,226,0.45)'}},y:{grid:{display:false},ticks:{color:'rgba(236,233,226,0.55)'}}},responsive:true,maintainAspectRatio:false}});
  abFqvPopMake(); abRenderFavs(); abRenderRecent();
}
// ── FAVORITES ────────────────────────────────────────────────
function abGetFavs(){try{return JSON.parse(localStorage.getItem('aero_favs')||'[]');}catch(e){return[];}}
function abSetFavs(f){localStorage.setItem('aero_favs',JSON.stringify(f));}
function abToggleFav(btn){
  const nn=btn.dataset.nn;
  let favs=abGetFavs();
  const idx=favs.indexOf(nn);
  if(idx>=0){favs.splice(idx,1);btn.classList.remove('starred');btn.title='Add to favorites';btn.textContent='☆';}
  else{favs.unshift(nn);btn.classList.add('starred');btn.title='Remove from favorites';btn.textContent='★';}
  abSetFavs(favs);
  abRenderFavs();
}
function abRenderFavs(){
  const favs=abGetFavs();
  const cntEl=document.getElementById('ab-fav-cnt');
  const body=document.getElementById('ab-fav-body');
  if(!body)return;
  if(cntEl)cntEl.textContent=favs.length?favs.length:'';
  if(!favs.length){body.innerHTML='<div class="ab-dp-empty">Star aircraft in Fleet Database<br>to save them here</div>';return;}
  body.innerHTML='';
  favs.forEach(nn=>{
    const j=JETS.find(x=>x[F.N]===nn);
    const row=document.createElement('div');row.className='ab-fav-row';
    if(j){
      row.innerHTML='<span class="ab-fav-nn" onclick="abFavClick(\''+abEsc(nn)+'\')" style="cursor:pointer;color:#c8a45c;font-weight:600">N'+abEsc(nn)+'</span>'
        +'<span class="ab-fav-info">'+abEsc(j[F.MK])+' '+abEsc(j[F.MD])+(j[F.YR]?' · '+j[F.YR]:'')+' · '+abEsc(j[F.ST])+'</span>'
        +'<button class="ab-rem-btn" onclick="abRemFav(this)" data-nn="'+abEsc(nn)+'" title="Remove">✕</button>';
    } else {
      row.innerHTML='<span class="ab-fav-nn" style="color:#c8a45c;font-weight:600">N'+abEsc(nn)+'</span><span class="ab-fav-info" style="color:rgba(236,233,226,.35)">Not in current dataset</span>'
        +'<button class="ab-rem-btn" onclick="abRemFav(this)" data-nn="'+abEsc(nn)+'" title="Remove">✕</button>';
    }
    body.appendChild(row);
  });
}
function abFavClick(nn){
  abShowTab('fleet');
  document.getElementById('ab-kw').value='N'+nn;
  abDoSearch();
}
function abRemFav(btn){
  const nn=btn.dataset.nn;
  let favs=abGetFavs();
  favs=favs.filter(f=>f!==nn);
  abSetFavs(favs);
  abRenderFavs();
  // sync any star buttons in the fleet table
  document.querySelectorAll('.ab-star-btn[data-nn="'+nn+'"]').forEach(b=>{b.classList.remove('starred');b.textContent='☆';b.title='Add to favorites';});
}
// ── RECENT SEARCHES ──────────────────────────────────────────
function abGetRecent(){try{return JSON.parse(localStorage.getItem('aero_recent')||'[]');}catch(e){return[];}}
function abSaveSearch(label,params){
  if(!label)return;
  let list=abGetRecent();
  // avoid exact duplicate consecutive
  if(list.length&&list[0].label===label)return;
  list.unshift({label,params,ts:Date.now()});
  if(list.length>8)list=list.slice(0,8);
  localStorage.setItem('aero_recent',JSON.stringify(list));
  abRenderRecent();
}
function abRenderRecent(){
  const body=document.getElementById('ab-rs-body');
  if(!body)return;
  const list=abGetRecent();
  if(!list.length){body.innerHTML='<div class="ab-dp-empty">Your recent searches<br>will appear here</div>';return;}
  body.innerHTML='';
  list.forEach((item,i)=>{
    const row=document.createElement('div');row.className='ab-rs-row';
    row.innerHTML='<span class="ab-rs-lbl" onclick="abRunRecent('+i+')" style="cursor:pointer;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+abEsc(item.label)+'</span>'
      +'<span class="ab-rs-ago" style="color:rgba(236,233,226,.3);font-size:10px;white-space:nowrap;margin:0 6px">'+abTimeAgo(item.ts)+'</span>'
      +'<button class="ab-rem-btn" onclick="abDelRecent('+i+')" title="Remove">✕</button>';
    body.appendChild(row);
  });
}
function abTimeAgo(ts){
  const s=Math.floor((Date.now()-ts)/1000);
  if(s<60)return 'just now';
  if(s<3600)return Math.floor(s/60)+'m ago';
  if(s<86400)return Math.floor(s/3600)+'h ago';
  return Math.floor(s/86400)+'d ago';
}
function abRunRecent(i){
  const list=abGetRecent();
  if(!list[i])return;
  const p=list[i].params;
  if(p.kw!==undefined)document.getElementById('ab-kw').value=p.kw||'';
  if(p.own!==undefined)document.getElementById('ab-kw-own').value=p.own||'';
  if(p.mk!==undefined){document.getElementById('ab-s-make').value=p.mk||'';abUpdModels();}
  if(p.md!==undefined)document.getElementById('ab-s-model').value=p.md||'';
  if(p.st!==undefined)document.getElementById('ab-s-state').value=p.st||'';
  if(p.pt!==undefined)document.getElementById('ab-s-part').value=p.pt||'';
  if(p.rt!==undefined)document.getElementById('ab-s-reg').value=p.rt||'';
  if(p.fccF!==undefined)document.getElementById('ab-s-fcc').value=p.fccF||'';
  abShowTab('fleet');abDoSearch();
}
function abDelRecent(i){
  let list=abGetRecent();
  list.splice(i,1);
  localStorage.setItem('aero_recent',JSON.stringify(list));
  abRenderRecent();
}
// ── FLEET QUICK VIEW ─────────────────────────────────────────
function abFqvPopMake(){
  const sel=document.getElementById('ab-fqv-make');
  if(!sel)return;
  sel.innerHTML='<option value="">— Select Make —</option>';
  MAKES.forEach(m=>{const o=document.createElement('option');o.value=m;o.textContent=m;sel.appendChild(o);});
}
function abFqvUpdModel(){
  const mk=document.getElementById('ab-fqv-make').value;
  const sel=document.getElementById('ab-fqv-model');
  if(!sel)return;
  sel.innerHTML='<option value="">All Models</option>';
  if(mk&&MODELS[mk])MODELS[mk].forEach(m=>{const o=document.createElement('option');o.value=m;o.textContent=m;sel.appendChild(o);});
}
function abRenderFqv(){
  const mk=document.getElementById('ab-fqv-make').value;
  const md=document.getElementById('ab-fqv-model').value;
  const stats=document.getElementById('ab-fqv-stats');
  if(!stats)return;
  if(!mk){stats.innerHTML='<div class="ab-dp-empty">Select a manufacturer<br>to see fleet stats</div>';return;}
  const jets=JETS.filter(j=>j[F.MK]===mk&&(!md||j[F.MD]===md));
  if(!jets.length){stats.innerHTML='<div class="ab-dp-empty">No aircraft found</div>';return;}
  const years=jets.map(j=>j[F.YR]).filter(Boolean).map(Number).filter(n=>n>1940&&n<2100);
  const yrMin=years.length?Math.min(...years):'—';
  const yrMax=years.length?Math.max(...years):'—';
  const p91=jets.filter(j=>j[F.PP]==='91').length;
  const p135=jets.filter(j=>j[F.PP]==='135').length;
  const stateCounts={};jets.forEach(j=>{if(j[F.ST])stateCounts[j[F.ST]]=(stateCounts[j[F.ST]]||0)+1;});
  const top3=Object.entries(stateCounts).sort((a,b)=>b[1]-a[1]).slice(0,3);
  stats.innerHTML='<div class="ab-fqv-row"><span class="ab-fqv-lbl">Total Aircraft</span><span class="ab-fqv-sv gold">'+jets.length.toLocaleString()+'</span></div>'
    +'<div class="ab-fqv-row"><span class="ab-fqv-lbl">Year Range</span><span class="ab-fqv-sv">'+yrMin+(yrMin!==yrMax&&yrMin!=='—'?' – '+yrMax:'')+'</span></div>'
    +'<div class="ab-fqv-row"><span class="ab-fqv-lbl">Part 91 / 135</span><span class="ab-fqv-sv">'+p91+' / '+p135+'</span></div>'
    +'<div class="ab-fqv-row"><span class="ab-fqv-lbl">Top States</span><span class="ab-fqv-sv">'+top3.map(([s,c])=>s+' ('+c+')').join(', ')+'</span></div>'
    +'<button class="ab-fqv-go" onclick="abFqvGoFleet()" style="margin-top:10px;width:100%;background:#c8a45c;color:#0a0a0c;border:none;padding:7px;border-radius:2px;cursor:pointer;font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase">View Fleet →</button>';
}
function abFqvGoFleet(){
  const mk=document.getElementById('ab-fqv-make').value;
  const md=document.getElementById('ab-fqv-model').value;
  if(!mk)return;
  document.getElementById('ab-s-make').value=mk;
  abUpdModels();
  if(md)document.getElementById('ab-s-model').value=md;
  abShowTab('fleet');abDoSearch();
}
// ── FLIGHT INFO ───────────────────────────────────────────────
function abFlightInfo(nn,container){
  container.innerHTML='<div style="color:rgba(236,233,226,.45);font-size:11px;padding:8px 0">Loading flight data…</div>';
  fetch('https://api.adsb.lol/v2/registration/'+encodeURIComponent('N'+nn))
    .then(r=>r.json())
    .then(data=>{
      const ac=data&&data.ac&&data.ac[0];
      if(!ac){container.innerHTML='<div style="color:rgba(236,233,226,.3);font-size:11px;padding:8px 0">No recent flight data</div>';return;}
      const alt=ac.alt_baro!=null?ac.alt_baro.toLocaleString()+' ft':'—';
      const spd=ac.gs!=null?Math.round(ac.gs)+' kts':'—';
      const org=ac.orig_iata||ac.orig_icao||'—';
      const dst=ac.dest_iata||ac.dest_icao||'—';
      const flt=ac.flight?ac.flight.trim():'—';
      const seen=ac.seen!=null?abTimeAgo(Date.now()-ac.seen*1000):'recently';
      const onGnd=ac.on_ground||ac.alt_baro==='ground';
      const statusStr=onGnd?'<span style="color:#6abf6a">● On Ground</span>':'<span style="color:#c8a45c">▲ Airborne</span>';
      container.innerHTML='<div class="ab-flt-row">'+statusStr+(flt!=='—'?' · Flt <b>'+abEsc(flt)+'</b>':'')+' · Seen: '+seen+'</div>'
        +'<div class="ab-flt-row">Altitude: <b>'+alt+'</b> · Speed: <b>'+spd+'</b></div>'
        +(org!=='—'||dst!=='—'?'<div class="ab-flt-row">Route: <b>'+abEsc(org)+'</b> → <b>'+abEsc(dst)+'</b></div>':'');
    })
    .catch(()=>{container.innerHTML='<div style="color:rgba(236,233,226,.3);font-size:11px;padding:8px 0">Flight data unavailable</div>';});
}
function abPopMakes(){
  const s=document.getElementById('ab-s-make');
  MAKES.forEach(m=>{const o=document.createElement('option');o.value=m;o.textContent=m;s.appendChild(o);});
}
function abPopStates(){
  const s=document.getElementById('ab-s-state');
  STATES.forEach(st=>{const o=document.createElement('option');o.value=st;o.textContent=(SN[st]||st)+' ('+st+')';s.appendChild(o);});
}
function abUpdModels(){
  const mk=document.getElementById('ab-s-make').value,s=document.getElementById('ab-s-model');
  s.innerHTML='<option value="">All Models</option>';
  if(mk&&MODELS[mk])MODELS[mk].forEach(m=>{const o=document.createElement('option');o.value=m;o.textContent=m;s.appendChild(o);});
}
function abDoSearch(){
  const kw=document.getElementById('ab-kw').value.trim().toLowerCase();
  const own=document.getElementById('ab-kw-own').value.trim().toLowerCase();
  const mk=document.getElementById('ab-s-make').value;
  const md=document.getElementById('ab-s-model').value;
  const st=document.getElementById('ab-s-state').value;
  const pt=document.getElementById('ab-s-part').value;
  const rt=document.getElementById('ab-s-reg').value;
  const fccF=document.getElementById('ab-s-fcc').value;
  abAliasNote='';
  const ownTerms=own?abAliasExpand(own):[];
  if(own&&ownTerms.length>1){
    const extras=ownTerms.slice(1).filter(t=>!t.includes(own)&&!own.includes(t));
    if(extras.length)abAliasNote='Also searched: '+extras.slice(0,3).map(t=>t.replace(/\b\w/g,c=>c.toUpperCase())).join(', ');
  }
  // Save recent search
  const parts=[];
  if(kw)parts.push(kw.toUpperCase());
  if(own)parts.push('Owner: '+own);
  if(mk)parts.push(mk+(md?' / '+md:''));
  if(st)parts.push(st);
  if(parts.length)abSaveSearch(parts.join(' · '),{kw,own,mk,md,st,pt,rt,fccF});
  abFilt=JETS.filter(j=>{
    if(mk&&j[F.MK]!==mk)return false;
    if(md&&j[F.MD]!==md)return false;
    if(st&&j[F.ST]!==st)return false;
    if(pt&&j[F.PP]!==pt)return false;
    if(rt&&j[F.RT]!==rt)return false;
    if(fccF==='1'&&!FCC[j[F.N]])return false;
    if(own){const fccN=(FCC[j[F.N]]||'').toLowerCase();const owL=j[F.OW].toLowerCase();const otL=(j[F.OT]||'').toLowerCase();if(!ownTerms.some(t=>owL.includes(t)||otL.includes(t)||fccN.includes(t)))return false;}
    if(kw){const h=('n'+j[F.N]+j[F.MK]+j[F.MD]+j[F.CI]).toLowerCase();if(!h.includes(kw))return false;}
    return true;
  });
  abFilt.sort((a,b)=>{const av=(a[abSortC]||'').toString(),bv=(b[abSortC]||'').toString();return av<bv?abSortD:av>bv?-abSortD:0;});
  abApResolvedNums.clear();
  document.getElementById('ab-ap-res-banner').style.display='none';
  abCurPg=1;abCloseDetail();abRenderRes();
  if(abFilt.length===0&&own&&localStorage.getItem('aero_ap_key')){
    const hint=document.getElementById('ab-own-hint');
    if(hint)hint.textContent='No direct match — trying Apollo person lookup...';
    abOwnerResolve(own);
  }else{
    const hint=document.getElementById('ab-own-hint');if(hint)hint.textContent='';
  }
}
function abClearSearch(){
  ['ab-kw','ab-kw-own'].forEach(id=>document.getElementById(id).value='');
  ['ab-s-make','ab-s-model','ab-s-state','ab-s-part','ab-s-reg','ab-s-fcc'].forEach(id=>document.getElementById(id).value='');
  const h=document.getElementById('ab-own-hint');if(h)h.textContent='';
  document.getElementById('ab-ap-res-banner').style.display='none';
  abDoSearch();
}
function abSortBy(c){
  if(abSortC===c)abSortD*=-1;else{abSortC=c;abSortD=1;}
  document.querySelectorAll('#aerobase-root thead th').forEach((th,i)=>{
    th.classList.toggle('sorted',i===c);
    const a=th.querySelector('.ab-sa');
    if(a)a.textContent=i===c?(abSortD===1?'\u2191':'\u2193'):'\u2195';
  });
  abFilt.sort((a,b)=>{const av=(a[c]||'').toString(),bv=(b[c]||'').toString();return av<bv?abSortD:av>bv?-abSortD:0;});
  abRenderRes();
}
function abPartBadge(pp,fr){
  if(fr==='Y')return'<span class="ab-pfrac">91K FRAC</span>';
  if(pp==='135-eligible')return'<span class="ab-p135">135 ELIG</span>';
  if(pp==='experimental')return'<span class="ab-pexp">EXP</span>';
  if(pp==='91')return'<span class="ab-p91">PART 91</span>';
  return'<span class="ab-pexp">—</span>';
}
function abRenderRes(){
  const tbody=document.getElementById('ab-rtbody');
  const tot=abFilt.length,pages=Math.ceil(tot/AB_PS)||1;
  if(abCurPg>pages)abCurPg=pages;
  const s=(abCurPg-1)*AB_PS,slice=abFilt.slice(s,s+AB_PS);
  const aliasHint=abAliasNote?'&nbsp;&nbsp;<span style="color:#6abf6a;font-size:10px">&#128279; '+abEsc(abAliasNote)+'</span>':'';
  document.getElementById('ab-rc').innerHTML='<strong>'+tot.toLocaleString()+'</strong> aircraft | Showing '+(s+1)+'&ndash;'+Math.min(s+AB_PS,tot)+aliasHint;
  tbody.innerHTML='';
  if(!slice.length){tbody.innerHTML='<tr><td colspan="8" style="text-align:center;padding:40px;color:rgba(236,233,226,.25)">No aircraft match your search.</td></tr>';abRenderPg(0,1);return;}
  const favsSet=new Set(abGetFavs());
  slice.forEach(j=>{
    const tr=document.createElement('tr');
    const apBadge=abApResolvedNums.has(j[F.N])?'<span class="ab-ap-badge">via Apollo</span>':'';
    const fccBadge=FCC[j[F.N]]?'<span class="ab-fcc-badge">&#127758; FCC</span>':'';
    const isFav=favsSet.has(j[F.N]);
    const starBtn='<button class="ab-star-btn'+(isFav?' starred':'')+'" data-nn="'+j[F.N]+'" onclick="event.stopPropagation();abToggleFav(this)" title="'+(isFav?'Remove from favorites':'Add to favorites')+'">'+(isFav?'&#9733;':'&#9734;')+'</button>';
    tr.innerHTML='<td class="ab-nn">N'+abEsc(j[F.N])+starBtn+'</td><td>'+abEsc(j[F.MK])+'</td><td>'+abEsc(j[F.MD])+'</td><td class="ab-yr">'+(j[F.YR]||'&mdash;')+'</td><td class="ab-ow" title="'+abEsc(j[F.OW])+'">'+abEsc(j[F.OW])+apBadge+fccBadge+'</td><td>'+abEsc(j[F.CI])+'</td><td><span class="ab-sb">'+j[F.ST]+'</span></td><td>'+abPartBadge(j[F.PP],j[F.FR])+'</td>';
    tr.addEventListener('click',()=>abShowDetail(j,tr));
    tbody.appendChild(tr);
  });
  abRenderPg(tot,pages);
}
function abRenderPg(tot,pages){
  const nums=document.getElementById('ab-p-nums');nums.innerHTML='';
  document.getElementById('ab-b-prev').disabled=abCurPg<=1;
  document.getElementById('ab-b-next').disabled=abCurPg>=pages;
  document.getElementById('ab-p-info').textContent='Page '+abCurPg+' of '+pages;
  let s=Math.max(1,abCurPg-3),e=Math.min(pages,s+6);if(e-s<6)s=Math.max(1,e-6);
  for(let p=s;p<=e;p++){const b=document.createElement('button');b.className='ab-pb'+(p===abCurPg?' active':'');b.textContent=p;b.onclick=(()=>{const pg=p;return()=>{abCurPg=pg;abRenderRes();};})(  );nums.appendChild(b);}
}
function abChangePg(d){const p=Math.ceil(abFilt.length/AB_PS)||1;abCurPg=Math.max(1,Math.min(p,abCurPg+d));abRenderRes();}

// AUTOCOMPLETE
function abBuildOwnerIdx(){
  const faaCounts={};
  JETS.forEach(j=>{const n=j[F.OW];if(n&&!abIsTrust(n))faaCounts[n]=(faaCounts[n]||0)+1;});
  const fccCounts={};
  Object.values(FCC).forEach(name=>{if(name&&!abIsTrust(name))fccCounts[name]=(fccCounts[name]||0)+1;});
  const faa=Object.entries(faaCounts).map(([name,count])=>{return{name,count,type:'faa'}});
  const fcc=Object.entries(fccCounts).filter(([n])=>!faaCounts[n]).map(([name,count])=>{return{name,count,type:'fcc'}});
  abOwnerIdx=[...faa,...fcc].sort((a,b)=>b.count-a.count);
}
let abOwnDebounce=null;
function abOwnInput(val){clearTimeout(abOwnDebounce);abOwnDebounce=setTimeout(()=>abOwnSuggest(val),120);}
function abOwnSuggest(val){
  const drop=document.getElementById('ab-own-drop');abOwnDropSel=-1;
  if(!val||val.length<2){drop.style.display='none';return;}
  const lo=val.toLowerCase();
  const faaHits=abOwnerIdx.filter(x=>x.type==='faa'&&x.name.toLowerCase().includes(lo)).slice(0,7);
  const fccHits=abOwnerIdx.filter(x=>x.type==='fcc'&&x.name.toLowerCase().includes(lo)).slice(0,4);
  const hasKey=!!localStorage.getItem('aero_ap_key');
  const noLocal=!faaHits.length&&!fccHits.length;
  if(noLocal&&!hasKey){drop.style.display='none';return;}
  function sugRow(m,label){
    const d=document.createElement('div');d.className='ab-own-sug';
    d.innerHTML='<span class="ab-own-sug-name">'+abEsc(m.name)+'</span><span class="ab-own-sug-meta">'+m.count+' jet'+(m.count!==1?'s':'')+(label?' &middot; '+label:'')+'</span>';
    return d.outerHTML;
  }
  let html='';
  if(faaHits.length)html+='<div class="ab-own-sug-sec">Companies &amp; Operators</div>'+faaHits.map(m=>sugRow(m,'')).join('');
  if(fccHits.length)html+='<div class="ab-own-sug-sec">&#127758; FCC Operators</div>'+fccHits.map(m=>sugRow(m,'FCC')).join('');
  if(hasKey){
    html+=(noLocal?'<div class="ab-own-sug-sec" style="color:#c8a45c">Apollo Intelligence</div>':'<div class="ab-own-sug-sec" style="border-top:1px solid rgba(200,164,92,.18);color:#c8a45c">Apollo Intelligence</div>')+
      '<div class="ab-own-sug ab-own-ap-row" data-apval="'+abEsc(val)+'"><span class="ab-own-sug-name" style="color:#c8a45c;font-weight:600">&#128269; Search Apollo for &ldquo;'+abEsc(val)+'&rdquo;</span><span class="ab-own-sug-meta" style="color:rgba(200,164,92,.6)">find contacts</span></div>';
  }
  drop.innerHTML=html;
  drop.querySelectorAll('.ab-own-sug').forEach(el=>{
    if(el.classList.contains('ab-own-ap-row')){
      el.addEventListener('click',()=>{
        document.getElementById('ab-kw-own').value=el.dataset.apval;
        drop.style.display='none';abDoSearch();
      });
    }else{
      const nm=el.querySelector('.ab-own-sug-name').textContent;
      el.addEventListener('click',()=>abSelectOwner(nm));
    }
  });
  drop.style.display='block';
}
function abSelectOwner(name){document.getElementById('ab-kw-own').value=name;document.getElementById('ab-own-drop').style.display='none';abDoSearch();}
function abOwnKeyNav(e){
  const drop=document.getElementById('ab-own-drop');
  const items=drop.querySelectorAll('.ab-own-sug');
  if(e.key==='ArrowDown'){e.preventDefault();abOwnDropSel=Math.min(abOwnDropSel+1,items.length-1);items.forEach((el,i)=>el.classList.toggle('active',i===abOwnDropSel));}
  else if(e.key==='ArrowUp'){e.preventDefault();abOwnDropSel=Math.max(abOwnDropSel-1,0);items.forEach((el,i)=>el.classList.toggle('active',i===abOwnDropSel));}
  else if(e.key==='Enter'){if(abOwnDropSel>=0&&items[abOwnDropSel]){items[abOwnDropSel].click();}else{drop.style.display='none';abDoSearch();}}
  else if(e.key==='Escape'){drop.style.display='none';}
}
document.addEventListener('click',e=>{if(!e.target.closest('.ab-own-wrap'))document.getElementById('ab-own-drop').style.display='none';});

async function abOwnerResolve(name){
  const key=localStorage.getItem('aero_ap_key');if(!key)return;
  const hint=document.getElementById('ab-own-hint');
  try{
    const resp=await fetch('https://api.apollo.io/api/v1/mixed_people/api_search',{
      method:'POST',headers:{'Content-Type':'application/json','X-Api-Key':key,'Cache-Control':'no-cache'},
      body:JSON.stringify({q_keywords:name,per_page:15,page:1})
    });
    if(!resp.ok){if(hint)hint.textContent='Apollo lookup failed ('+resp.status+')';return;}
    const d=await resp.json();
    if(!d.people||!d.people.length){if(hint)hint.textContent='No matching person found in Apollo.';return;}
    const orgSet=new Set();
    d.people.forEach(p=>{
      if(p.organization_name)orgSet.add(p.organization_name.trim().toUpperCase());
      if(p.employment_history)p.employment_history.slice(0,3).forEach(e=>{if(e.organization_name&&e.current)orgSet.add(e.organization_name.trim().toUpperCase());});
    });
    const orgs=Array.from(orgSet);
    if(!orgs.length){if(hint)hint.textContent='Apollo found the person but no linked company.';return;}
    const matched=JETS.filter(j=>{
      const own=j[F.OW].toUpperCase();
      return orgs.some(org=>{const orgWords=org.split(/\s+/).filter(w=>w.length>3);return orgWords.some(w=>own.includes(w));});
    });
    abApResolvedNums.clear();
    if(!matched.length){
      if(hint)hint.textContent='Jet may be LLC-registered — searching Apollo for contacts at '+orgs.slice(0,2).join(', ')+'...';
      try{
        const orgResp=await fetch('https://api.apollo.io/api/v1/mixed_people/api_search',{
          method:'POST',headers:{'Content-Type':'application/json','X-Api-Key':key,'Cache-Control':'no-cache'},
          body:JSON.stringify({q_organization_name:orgs[0],per_page:10,page:1,person_titles:['owner','president','ceo','chief executive','partner','director','vice president','vp','managing director','principal','founder','chairman']})
        });
        const od=await orgResp.json();
        let people=(od.people||[]).filter(p=>{const nm=(p.name||'').trim().toLowerCase();return nm&&nm!=='unknown'&&nm!=='n/a'&&nm!=='-';});
        if(!people.length){if(hint)hint.textContent='No contacts found at '+orgs[0]+'.';return;}
        if(hint)hint.textContent='';
        const banner=document.getElementById('ab-ap-res-banner');
        banner.style.display='flex';
        banner.innerHTML='&#128273; <strong>Apollo:</strong> &nbsp;No jet in FAA registry — showing contacts at <strong>'+abEsc(orgs[0])+'</strong>';
        let cards=people.map(p=>{
          const li=p.linkedin_url?'<a href="'+abEsc(p.linkedin_url)+'" target="_blank" style="margin-left:8px;color:#c8a45c;font-size:11px">LinkedIn</a>':'';
          return'<div style="display:flex;align-items:center;padding:10px 14px;border-bottom:1px solid rgba(200,164,92,.07)"><div style="flex:1"><span style="font-weight:600;color:#ece9e2">'+abEsc(p.name||'')+'</span><span style="margin-left:8px;color:rgba(236,233,226,.4);font-size:12px">'+abEsc(p.title||'')+'</span>'+li+'</div></div>';
        }).join('');
        document.getElementById('ab-rc').innerHTML='<strong>'+people.length+'</strong> contacts found at '+abEsc(orgs[0])+' via Apollo';
        document.getElementById('ab-rtbody').innerHTML='<tr><td colspan="8" style="padding:0"><div style="background:#141419">'+cards+'</div></td></tr>';
      }catch(e){if(hint)hint.textContent='Apollo org lookup failed: '+e.message;}
      return;
    }
    const matchedOrgs=[...new Set(matched.map(j=>j[F.OW]))];
    matched.forEach(j=>abApResolvedNums.add(j[F.N]));
    abFilt=matched;abFilt.sort((a,b)=>{const av=(a[abSortC]||'').toString(),bv=(b[abSortC]||'').toString();return av<bv?abSortD:av>bv?-abSortD:0;});
    abCurPg=1;if(hint)hint.textContent='';
    const banner=document.getElementById('ab-ap-res-banner');
    banner.style.display='flex';
    banner.innerHTML='&#128273; <strong>Apollo match:</strong> &nbsp;'+abEsc(name)+' &rarr; '+abEsc(matchedOrgs.join(', '))+' &rarr; <strong>'+matched.length+' aircraft</strong>';
    document.getElementById('ab-rc').innerHTML='<strong>'+matched.length+'</strong> aircraft found via Apollo person lookup';
    abRenderRes();
  }catch(err){if(hint)hint.textContent='Apollo lookup error: '+err.message;}
}

function abShowDetail(j,tr){
  document.querySelectorAll('#ab-rtbody tr').forEach(r=>r.classList.remove('sel'));
  tr.classList.add('sel');
  document.getElementById('ab-dp').classList.add('open');
  const yr=j[F.YR]?parseInt(j[F.YR]):null;
  const yrsInSvc=yr?new Date().getFullYear()-yr:null;
  const isFrac=j[F.FR]==='Y';
  const certLabel=isFrac?'Part 91K (Frac)':j[F.PP]==='135-eligible'?'Part 135 Eligible':j[F.PP]==='experimental'?'Experimental':j[F.PP]==='135'?'Part 135':'Part 91';
  const faaUrl='https://registry.faa.gov/aircraftinquiry/Search/NNumberResult?nNumberTxt='+j[F.N];
  const avUrl='https://av-info.faa.gov/amsform.asp?Reg='+j[F.N];
  const addrParts=[j[F.SR],j[F.CI]&&j[F.ST]?j[F.CI]+', '+j[F.ST]+' '+(j[F.ZP]||''):j[F.ST]].filter(Boolean);
  const fccName=FCC[j[F.N]]||'';
  const apPrimary=fccName||j[F.OW];
  const others=j[F.OT]?j[F.OT].split('|').filter(Boolean):[];
  document.getElementById('ab-dp-t').textContent=(yr?yr+' ':'')+j[F.MK]+' '+j[F.MD];
  document.getElementById('ab-dp-s').textContent='N'+j[F.N];
  const jetSvg='<svg viewBox="0 0 280 100" xmlns="http://www.w3.org/2000/svg" fill="none">'
    +'<path d="M28,50 Q70,37 140,39 Q200,41 250,47 Q254,48 248,51 Q200,55 140,53 Q70,55 28,52 Z" fill="rgba(200,164,92,0.55)"/>'
    +'<path d="M28,51 L14,51 L28,50 Z" fill="rgba(200,164,92,0.8)"/>'
    +'<path d="M118,44 L55,82 L63,84 L123,51 Z" fill="rgba(200,164,92,0.4)"/>'
    +'<path d="M122,46 L178,74 L185,72 L127,47 Z" fill="rgba(200,164,92,0.28)"/>'
    +'<path d="M238,47 L241,21 L245,23 L242,48 Z" fill="rgba(200,164,92,0.65)"/>'
    +'<path d="M232,49 L208,63 L212,65 L234,51 Z" fill="rgba(200,164,92,0.38)"/>'
    +'<path d="M234,49 L256,61 L258,59 L236,49 Z" fill="rgba(200,164,92,0.28)"/>'
    +'<path d="M213,43 Q228,41 238,43 Q228,45 213,45 Z" fill="rgba(200,164,92,0.5)"/>'
    +'<rect x="78" y="44" width="4" height="4" rx="1" fill="rgba(200,164,92,0.2)"/><rect x="90" y="44" width="4" height="4" rx="1" fill="rgba(200,164,92,0.2)"/><rect x="102" y="44" width="4" height="4" rx="1" fill="rgba(200,164,92,0.2)"/><rect x="114" y="44" width="4" height="4" rx="1" fill="rgba(200,164,92,0.2)"/><rect x="126" y="44" width="4" height="4" rx="1" fill="rgba(200,164,92,0.2)"/><rect x="138" y="44" width="4" height="4" rx="1" fill="rgba(200,164,92,0.2)"/><rect x="150" y="44" width="4" height="4" rx="1" fill="rgba(200,164,92,0.2)"/><rect x="162" y="44" width="4" height="4" rx="1" fill="rgba(200,164,92,0.2)"/><rect x="174" y="44" width="4" height="4" rx="1" fill="rgba(200,164,92,0.2)"/><rect x="186" y="44" width="4" height="4" rx="1" fill="rgba(200,164,92,0.2)"/><rect x="198" y="44" width="4" height="4" rx="1" fill="rgba(200,164,92,0.2)"/>'
    +'</svg>';
  document.getElementById('ab-dp-b').innerHTML=
    // ── Hero: silhouette + stats grid ──────────────────────────
    '<div class="ab-det-hero">'+
      '<div class="ab-det-img">'+jetSvg+'<div class="ab-det-img-label">'+abEsc(j[F.MK])+'<br>'+abEsc(j[F.MD])+'</div></div>'+
      '<div class="ab-det-stats">'+
        '<div class="ab-det-cell"><div class="ab-det-cell-lbl">Status</div><div class="ab-det-cell-val gold">Active</div></div>'+
        '<div class="ab-det-cell"><div class="ab-det-cell-lbl">Certification</div><div class="ab-det-cell-val">'+abEsc(certLabel)+'</div></div>'+
        '<div class="ab-det-cell"><div class="ab-det-cell-lbl">Location</div><div class="ab-det-cell-val">'+(j[F.CI]?abEsc(j[F.CI])+', '+abEsc(j[F.ST]):abEsc(j[F.ST])||'&mdash;')+'</div></div>'+
        '<div class="ab-det-cell"><div class="ab-det-cell-lbl">Registrant Type</div><div class="ab-det-cell-val">'+(abEsc(j[F.RT])||'&mdash;')+'</div></div>'+
        '<div class="ab-det-cell"><div class="ab-det-cell-lbl">Years in Service</div><div class="ab-det-cell-val">'+(yrsInSvc!=null?yrsInSvc:'&mdash;')+'</div></div>'+
        '<div class="ab-det-cell"><div class="ab-det-cell-lbl">Fractional</div><div class="ab-det-cell-val">'+(isFrac?'Yes':'No')+'</div></div>'+
      '</div>'+
    '</div>'+
    // ── Contact Details ────────────────────────────────────────
    '<div style="padding:12px 14px 0">'+
      '<div class="ab-con-hdr2">Contact Details</div>'+
      '<div class="ab-con-owner-row">'+
        '<div class="ab-con-addr-block">'+
          '<div class="ab-con-name">'+abEsc(j[F.OW])+'</div>'+
          (addrParts.length?addrParts.map(abEsc).join('<br>'):'<span style="color:rgba(236,233,226,.25)">No address on file</span>')+
          (fccName&&fccName!==j[F.OW]?'<div class="ab-fcc-real" style="margin-top:8px"><span class="ab-fcc-label">&#127758; True Operator (FCC)</span>'+abEsc(fccName)+'</div>':'')+
        '</div>'+
        '<div class="ab-con-ap" id="ab-ap-area" data-owner="'+abEsc(apPrimary)+'" data-faa="'+abEsc(j[F.OW])+'" data-fcc="'+abEsc(fccName)+'" data-others="'+abEsc(j[F.OT]||'')+'"></div>'+
      '</div>'+
      (others.length||(fccName&&fccName!==j[F.OW])?
        '<div style="margin-bottom:10px">'+
          '<div style="font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:rgba(236,233,226,.3);margin-bottom:5px">Related Operators</div>'+
          '<div style="display:flex;flex-wrap:wrap;gap:4px">'+
            (fccName&&fccName!==j[F.OW]?'<span class="ab-other-tag" style="border-color:rgba(26,122,58,.4);color:#7ecf8e">&#127758; '+abEsc(abCanon(fccName))+' <span style="font-size:9px;opacity:.6">(FCC)</span></span>':'')+
            others.map(o=>'<span class="ab-other-tag">'+abEsc(o)+'</span>').join('')+
          '</div>'+
        '</div>'
      :'')+
      // ── Tabbed: Flight / FAA / Registration ───────────────────
      '<div class="ab-od-tabs">'+
        '<button class="ab-od-tab active" onclick="abDetTab(this,\'flt\')">&#9992; Flight Data</button>'+
        '<button class="ab-od-tab" onclick="abDetTab(this,\'faa\')">FAA Registry</button>'+
        '<button class="ab-od-tab" onclick="abDetTab(this,\'reg\')">Registration</button>'+
      '</div>'+
      '<div id="ab-od-flt"><div id="ab-flt-area"></div></div>'+
      '<div id="ab-od-faa" style="display:none">'+
        '<a href="'+faaUrl+'" target="_blank"><div class="ab-fbadge">&#128279; View FAA Registration Record</div></a>'+
        '<a href="'+avUrl+'" target="_blank"><div class="ab-fbadge" style="margin-top:6px">&#128279; FAA av-info (OpSpec / Part 135)</div></a>'+
        '<div class="ab-disclaimer" style="margin-top:8px">Part 91 vs 135 status requires FAA Operating Certificate cross-reference. Registry data alone is not definitive.</div>'+
      '</div>'+
      '<div id="ab-od-reg" style="display:none">'+
        '<div class="ab-dr"><span class="ab-dl">N-Number</span><span class="ab-dv">N'+abEsc(j[F.N])+'</span></div>'+
        '<div class="ab-dr"><span class="ab-dl">Manufacturer</span><span class="ab-dv">'+abEsc(j[F.MK])+'</span></div>'+
        '<div class="ab-dr"><span class="ab-dl">Model</span><span class="ab-dv">'+abEsc(j[F.MD])+'</span></div>'+
        '<div class="ab-dr"><span class="ab-dl">Year</span><span class="ab-dv">'+(j[F.YR]||'&mdash;')+'</span></div>'+
        '<div class="ab-dr"><span class="ab-dl">Airworthiness Class</span><span class="ab-dv">'+abEsc(j[F.CL])+'</span></div>'+
        (j[F.PP]==='135-eligible'?'<div class="ab-disclaimer" style="margin-top:6px">Commuter category — eligible for Part 135. Verify active OpSpec via FAA av-info.</div>':'')+
      '</div>'+
    '</div>';
  abApRender(document.getElementById('ab-ap-area'));
  abFlightInfo(j[F.N],document.getElementById('ab-flt-area'));
}
function abDetTab(btn,tab){
  document.querySelectorAll('.ab-od-tab').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  ['flt','faa','reg'].forEach(t=>{const el=document.getElementById('ab-od-'+t);if(el)el.style.display=(t===tab?'block':'none');});
}
function abCloseDetail(){document.getElementById('ab-dp').classList.remove('open');document.querySelectorAll('#ab-rtbody tr').forEach(r=>r.classList.remove('sel'));}

function abInitBro(){abRenderBro(IADA);}
function abFilterBro(){
  const q=document.getElementById('ab-b-search').value.toLowerCase();
  const reg=document.getElementById('ab-b-reg').value;
  const r=IADA.filter(b=>{
    if(reg){const loc=b.l.toLowerCase();const isUS=['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming','Atlanta','Houston','Dallas','Miami','Charlotte','Cleveland','Indianapolis','Boca Raton','Parsippany','Eden Prairie','Springfield','Chesterfield'].some(s=>loc.includes(s.toLowerCase()));const isCan=loc.includes('canada')||loc.includes('ontario')||loc.includes('quebec')||loc.includes('mississauga');if(reg==='US'&&!isUS)return false;if(reg==='Canada'&&!isCan)return false;if(reg==='International'&&(isUS||isCan))return false;}
    if(!q)return true;
    return(b.c+b.l+b.p.map(x=>x.name+x.title).join(' ')).toLowerCase().includes(q);
  });
  abRenderBro(r);
}
function abRenderBro(list){
  document.getElementById('ab-b-cnt').textContent=list.length+' companies';
  const body=document.getElementById('ab-bb');body.innerHTML='';
  list.forEach(b=>{
    const card=document.createElement('div');card.className='ab-bcard';
    const ch=b.p.length?b.p.map(c=>'<div class="ab-ccard"><div class="ab-cname">'+abEsc(c.name)+'</div><div class="ab-ctitle">'+abEsc(c.title)+'</div></div>').join(''):'<div class="ab-nocon">No contacts on file</div>';
    card.innerHTML='<div class="ab-bhdr" onclick="abTogBro(this)"><div><div class="ab-bn">'+abEsc(b.c)+'</div><div class="ab-bl">&#128205; '+abEsc(b.l)+' &nbsp;&middot;&nbsp; '+b.p.length+' contact'+(b.p.length!==1?'s':'')+'</div></div><div style="display:flex;align-items:center;gap:10px">'+(b.w?'<a class="ab-bw" href="'+abEsc(b.w)+'" target="_blank" onclick="event.stopPropagation()">&#127760; Website</a>':'')+'<span class="ab-ei">&#9660;</span></div></div><div class="ab-bcon"><div class="ab-bcg">'+ch+'</div></div>';
    body.appendChild(card);
  });
}
function abTogBro(h){const c=h.nextElementSibling,i=h.querySelector('.ab-ei');c.classList.toggle('open');i.style.transform=c.classList.contains('open')?'rotate(180deg)':'';}

function abInitApollo(){document.getElementById('ab-apollo-dot').className='ab-dot'+(localStorage.getItem('aero_ap_key')?' ok':'');}
function abShowSettings(){document.getElementById('ab-ap-key-input').value=localStorage.getItem('aero_ap_key')||'';document.getElementById('ab-modal-ov').classList.add('open');}
function abCloseSettings(){document.getElementById('ab-modal-ov').classList.remove('open');}
function abSaveApKey(){
  const k=document.getElementById('ab-ap-key-input').value.trim();
  if(!k){alert('Please paste your Apollo API key.');return;}
  localStorage.setItem('aero_ap_key',k);
  document.getElementById('ab-apollo-dot').className='ab-dot ok';
  abCloseSettings();
  const aa=document.getElementById('ab-ap-area');if(aa)abApRender(aa);
}
function abClearApKey(){localStorage.removeItem('aero_ap_key');document.getElementById('ab-apollo-dot').className='ab-dot';abCloseSettings();}

const AB_TRUST_KW=['TRUSTEE','TRUST CO','BANK OF','TVPX','GUARANTY CORP','AIRCRAFT SOLUTIONS INC','AIRCRAFT SOLUTIONS LLC','AIR PARTNERS','INTL AIR RESPONSE','PNC BANK','WELLS FARGO','CITIBANK','UMB BANK','CSC DELAWARE'];
function abIsTrust(n){return AB_TRUST_KW.some(k=>n.toUpperCase().includes(k));}
function abApRender(el){
  if(!el)return;
  const owner=el.dataset.owner||'',fcc=el.dataset.fcc||'',faa=el.dataset.faa||'';
  const isTrust=abIsTrust(faa)&&fcc&&fcc!==faa;
  const label=isTrust?'Searching FCC licensee: <strong style="color:#ece9e2">'+abEsc(fcc)+'</strong>':'Searching: <strong style="color:#ece9e2">'+abEsc(owner)+'</strong>';
  if(!localStorage.getItem('aero_ap_key')){
    el.innerHTML='<div class="ab-ap-nokey" onclick="abShowSettings()">&#128273; Set Apollo API key to find contacts &rarr;</div>';
  }else{
    el.innerHTML='<div style="font-size:10px;color:rgba(236,233,226,.35);margin-bottom:6px;line-height:1.5">'+label+'</div>'+
      '<button class="ab-ap-btn" onclick="abApSearch(this)">&#128269; Find Contacts via Apollo</button>'+
      '<div id="ab-ap-results"></div>'+
      '<div class="ab-ap-note">Finding contacts is free &middot; Revealing email/phone uses 1 credit each</div>';
  }
}
async function abApSearch(btn){
  const key=localStorage.getItem('aero_ap_key');if(!key){abShowSettings();return;}
  const el=btn.parentElement;
  const owner=el?el.dataset.owner||'':'',faa=el?el.dataset.faa||'':'',others=el?el.dataset.others||'':'';
  btn.disabled=true;btn.textContent='Searching Apollo...';
  const resDiv=document.getElementById('ab-ap-results');
  resDiv.innerHTML='<div class="ab-ap-spin">Searching Apollo database...</div>';
  const queries=[];
  if(owner&&!abIsTrust(owner))queries.push(owner);
  if(faa&&faa!==owner&&!abIsTrust(faa))queries.push(faa);
  if(others)others.split('|').forEach(o=>{if(o.trim()&&!abIsTrust(o))queries.push(o.trim());});
  if(!queries.length){resDiv.innerHTML='<div class="ab-ap-empty">No searchable operator name found.</div>';btn.disabled=false;btn.innerHTML='&#128269; Find Contacts via Apollo';return;}
  let people=[];
  try{
    for(const q of queries.slice(0,3)){
      const resp=await fetch('https://api.apollo.io/api/v1/mixed_people/api_search',{
        method:'POST',headers:{'Content-Type':'application/json','X-Api-Key':key,'Cache-Control':'no-cache'},
        body:JSON.stringify({q_keywords:q,per_page:8,page:1,person_seniorities:['owner','founder','c_suite','partner','vp','head','director']})
      });
      if(!resp.ok){
        if(resp.status===401||resp.status===403){resDiv.innerHTML='<div class="ab-ap-empty">Invalid API key. <span style="color:#c8a45c;cursor:pointer" onclick="abShowSettings()">Update key &rarr;</span></div>';btn.disabled=false;btn.textContent='&#128269; Find Contacts via Apollo';return;}
        throw new Error('Apollo error '+resp.status);
      }
      const d=await resp.json();
      if(d.people&&d.people.length){people=people.concat(d.people);if(people.length>=6)break;}
    }
    btn.disabled=false;btn.innerHTML='&#128260; Search Again';
    const filterNamed=arr=>{const seen=new Set();return arr.filter(p=>{if(seen.has(p.id))return false;seen.add(p.id);const nm=(p.name||'').trim().toLowerCase();return nm&&nm!=='unknown'&&nm!=='n/a'&&nm!=='-';});};
    people=filterNamed(people).slice(0,10);
    if(!people.length){
      resDiv.innerHTML='<div class="ab-ap-spin">Broadening search...</div>';
      let broad=[];
      for(const q of queries.slice(0,2)){
        const r2=await fetch('https://api.apollo.io/api/v1/mixed_people/api_search',{method:'POST',headers:{'Content-Type':'application/json','X-Api-Key':key,'Cache-Control':'no-cache'},body:JSON.stringify({q_keywords:q,per_page:10,page:1})});
        if(r2.ok){const d2=await r2.json();if(d2.people)broad=broad.concat(d2.people);}
      }
      people=filterNamed(broad).slice(0,10);
    }
    if(!people.length){resDiv.innerHTML='<div class="ab-ap-empty">No named contacts found for this company in Apollo.</div>';return;}
    let html='<div style="font-size:10px;color:rgba(236,233,226,.35);margin-bottom:8px">'+people.length+' contact'+(people.length!==1?'s':'')+' found</div>';
    people.forEach(p=>{
      const li=p.linkedin_url?'<a href="'+abEsc(p.linkedin_url)+'" target="_blank" style="font-size:10px;color:#c8a45c;text-decoration:none">&#128279; LinkedIn</a>':'';
      html+='<div class="ab-ap-person"><div class="ab-ap-ptop"><div><div class="ab-ap-name">'+abEsc(p.name||'Unknown')+'</div><div class="ab-ap-title">'+abEsc(p.title||'')+'</div><div class="ab-ap-co">'+abEsc(p.organization_name||'')+'</div></div>'+li+'</div><div class="ab-ap-actions"><button class="ab-rev-btn" data-pid="'+abEsc(p.id)+'" data-type="email" onclick="abRevByData(this)">&#9993; Reveal Email</button><button class="ab-rev-btn" data-pid="'+abEsc(p.id)+'" data-type="phone" onclick="abRevByData(this)">&#128222; Reveal Phone</button></div></div>';
    });
    html+='<div class="ab-ap-logo">Powered by Apollo.io</div>';
    resDiv.innerHTML=html;
  }catch(err){
    btn.disabled=false;btn.innerHTML='&#128269; Find Contacts via Apollo';
    resDiv.innerHTML='<div class="ab-ap-empty">Error: '+abEsc(err.message)+'</div>';
  }
}
function abRevByData(btn){abRevContact(btn,btn.dataset.pid,btn.dataset.type);}
async function abRevContact(btn,personId,type){
  const key=localStorage.getItem('aero_ap_key');if(!key){abShowSettings();return;}
  if(!confirm('Use 1 Apollo credit to reveal this contact\'s '+(type==='email'?'email address':'phone number')+'?'))return;
  btn.disabled=true;btn.textContent='Loading...';
  try{
    const resp=await fetch('https://api.apollo.io/api/v1/people/match',{
      method:'POST',headers:{'Content-Type':'application/json','X-Api-Key':key},
      body:JSON.stringify({id:personId,reveal_personal_emails:false,reveal_phone_number:type==='phone'})
    });
    if(!resp.ok)throw new Error('Apollo error '+resp.status);
    const data=await resp.json();const person=data.person;
    if(!person){btn.textContent='Not found';btn.disabled=false;return;}
    if(type==='email'){
      const email=person.email||(person.contact&&person.contact.email);
      if(email){const s=document.createElement('span');s.className='ab-rev-email';s.textContent='\u2709 '+email;btn.replaceWith(s);}
      else{btn.textContent='No email on file';btn.disabled=false;}
    }else{
      const phones=person.phone_numbers||(person.contact&&person.contact.phone_numbers)||[];
      const phone=phones.length?(phones[0].sanitized_number||phones[0].raw_number):null;
      if(phone){const s=document.createElement('span');s.className='ab-rev-phone';s.textContent='\u260e '+phone;btn.replaceWith(s);}
      else{btn.textContent='No phone on file';btn.disabled=false;}
    }
  }catch(err){btn.textContent='Error';btn.disabled=false;alert('Error: '+err.message);}
}

function abEsc(s){if(!s)return'';return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
