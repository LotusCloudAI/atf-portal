export const SANSKRIT_PLANETS: {[key:string]: string} = {
    "Lagna": "Lagna", "Sun": "Surya", "Moon": "Chandra", "Mars": "Mangal",
    "Mercury": "Budh", "Jupiter": "Guru", "Venus": "Shukra", "Saturn": "Sani"
};

export const CHART_NOTE_TEXT = {
    en: "In classical Vedic astrology, divisional charts (Vargas) are derived by mathematically dividing each zodiac sign into equal parts. While calculations for all divisions up to D-60 (Shastiamsa) are well-defined and astronomically accurate, not all 60 Vargas have universally accepted or consistently named chart titles across classical texts.\n\nPlease write to: Dr. Veera B. Dasari | DrDasari9@gmail.com",
    te: "ప్రాచీన వేద జ్యోతిషశాస్త్రంలో, రాశి చక్రాన్ని గణిత పరంగా సమాన భాగాలుగా విభజించి వర్గ చక్రాలను (Divisional Charts) గణిస్తారు. D-60 (షష్ఠ్యంశ) వరకు గణనలు ఖచ్చితంగా ఉన్నప్పటికీ, కొన్ని వర్గ చక్రాలకు ప్రామాణిక పేర్లు వివిధ గ్రంథాలలో వేరుగా ఉండవచ్చు. \n\nసలహాల కోసం సంప్రదించండి: Dr. Veera B. Dasari | DrDasari9@gmail.com"
};

export const TEXT_DB = {
  common: {
    en: {
      title: "ATF Vedic Portal", exit: "Exit Portal", welcome: "Welcome",
      today_context: "Today's Context (Gochara)", date: "Date", year: "Year", moon_sign: "Moon Sign",
      report_for: "Horoscope Report for", birth_star: "Birth Star", moon_rasi: "Moon Rasi", lagna: "Lagna", dasha_bal: "Dasha Bal.",
      change_details: "Click to Change Birth Date/Time/Place",
      generate_btn: "GENERATE HOROSCOPE", loading: "Calculating...",
      enter_birth_details: "Enter Birth Details", subtitle: "Accurate data ensures precise predictions.",
      name: "Name", gender: "Gender", dob: "Date of Birth", tob: "Time of Birth", place: "City / Place", country: "Country", lat: "Latitude", lon: "Longitude",
      footer_disclaimer: "This horoscope is generated using classical Vedic astrology principles for educational and cultural understanding. Interpretations are indicative and depend on birth-time accuracy. ATF does not promote superstition or deterministic belief systems."
    },
    te: {
      title: "ATF వేద పోర్టల్", exit: "నిష్క్రమించు", welcome: "స్వాగతం",
      today_context: "నేటి గ్రహ స్థితి (గోచారం)", date: "తేదీ", year: "సంవత్సరం", moon_sign: "చంద్ర రాశి",
      report_for: "జాతక నివేదిక: ", birth_star: "జన్మ నక్షత్రం", moon_rasi: "చంద్ర రాశి", lagna: "లగ్నం", dasha_bal: "దశ శేషం",
      change_details: "వివరాలను మార్చడానికి ఇక్కడ క్లిక్ చేయండి",
      generate_btn: "జాతకం సృష్టించండి", loading: "లెక్కిస్తోంది...",
      enter_birth_details: "జనన వివరాలను నమోదు చేయండి", subtitle: "ఖచ్చితమైన వివరాలు సరైన ఫలితాలను ఇస్తాయి.",
      name: "పేరు", gender: "లింగం", dob: "పుట్టిన తేదీ", tob: "పుట్టిన సమయం", place: "పుట్టిన ఊరు", country: "దేశం", lat: "అక్షాంశం", lon: "రేఖాంశం",
      footer_disclaimer: "ఈ జాతక విశ్లేషణ ప్రాచీన వేద జ్యోతిషశాస్త్ర సూత్రాలపై ఆధారపడి విద్యా మరియు సాంస్కృతిక అవగాహన కోసం రూపొందించబడింది. ఫలితాలు జనన సమయ ఖచ్చితత్వంపై ఆధారపడి ఉంటాయి. ATF మూఢనమ్మకాలను ప్రోత్సహించదు."
    }
  },
  menu: {
    en: {
      menu_1: "1. Important Horoscope Info", menu_2: "2. Predictions", menu_3: "3. Divisional Charts (D1-D60)", menu_4: "4. Ashtakavarga",
      m_birth: "Birth & Calculation Details", m_char: "General Characteristics", m_charts: "Lagna, Rasi & Navamsa Charts",
      m_planets: "Planetary Longitudes", m_daily: "Daily / Weekly / Annual", m_overall: "Overall Prediction", 
      m_marriage: "Marriage Compatibility", m_business: "Business & Partnerships", m_dosha: "Doshas, Yogas & Remedies", 
      m_dasha: "Vimshottari Dasha Results", m_career: "Career & Profession", m_all_charts: "Comprehensive Charts (D1-D60)", m_ashtaka: "Ashtakavarga Strength"
    },
    te: {
      menu_1: "1. ముఖ్యమైన సమాచారం", menu_2: "2. ఫలితాలు (Predictions)", menu_3: "3. షోడశ వర్గ చక్రాలు", menu_4: "4. అష్టకవర్గ",
      m_birth: "జనన వివరాలు", m_char: "సాధారణ లక్షణాలు", m_charts: "లగ్న, రాశి & నవాంశ చక్రాలు",
      m_planets: "గ్రహ స్పష్టత", m_daily: "దిన / వార / వార్షిక ఫలితాలు", m_overall: "జీవిత ఫలితాలు", 
      m_marriage: "వివాహ పొంతన", m_business: "వ్యాపార భాగస్వామ్యం", m_dosha: "దోషాలు & పరిహారాలు", 
      m_dasha: "వింశోత్తరి దశ ఫలితాలు", m_career: "ఉద్యోగం & వృత్తి", m_all_charts: "సమగ్ర వర్గ చక్రాలు (D1-D60)", m_ashtaka: "అష్టకవర్గ బలం"
    }
  },
  planets: {
    en: { "Sun": "Sun", "Moon": "Moon", "Mars": "Mars", "Mercury": "Mercury", "Jupiter": "Jupiter", "Venus": "Venus", "Saturn": "Saturn", "Rahu": "Rahu", "Ketu": "Ketu", "Lagna": "Lagna" },
    te: { "Sun": "సూర్యుడు", "Moon": "చంద్రుడు", "Mars": "కుజుడు", "Mercury": "బుధుడు", "Jupiter": "గురువు", "Venus": "శుక్రుడు", "Saturn": "శని", "Rahu": "రాహువు", "Ketu": "కేతువు", "Lagna": "లగ్నం" }
  },
  rashis: {
    en: { "Aries": "Aries", "Taurus": "Taurus", "Gemini": "Gemini", "Cancer": "Cancer", "Leo": "Leo", "Virgo": "Virgo", "Libra": "Libra", "Scorpio": "Scorpio", "Sagittarius": "Sagittarius", "Capricorn": "Capricorn", "Aquarius": "Aquarius", "Pisces": "Pisces" },
    te: { "Aries": "మేషం", "Taurus": "వృషభం", "Gemini": "మిథునం", "Cancer": "కర్కాటకం", "Leo": "సింహం", "Virgo": "కన్య", "Libra": "తులా", "Scorpio": "వృశ్చికం", "Sagittarius": "ధనుస్సు", "Capricorn": "మకరం", "Aquarius": "కుంభం", "Pisces": "మీనం" }
  },
  predictions: {
    en: {
      daily_title: "Daily Horoscope", weekly_title: "Weekly Horoscope", monthly_title: "Monthly Horoscope", yearly_title: "Yearly Horoscope",
      key_themes: "Key Themes", guidance: "Guidance", overview: "Overview",
      daily_text_1: "Your mind is likely clear and optimistic today. Emotional stability supports decision-making.",
      daily_text_2: "Today favors planning and execution. Avoid impulsive decisions.",
      weekly_text_1: "This week reflects a blend of changing lunar influences and your ongoing planetary period.",
      weekly_text_2: "Prioritize planning early in the week. Avoid unnecessary confrontations on the weekend.",
      monthly_text_1: "This month highlights professional advancement and recognition. Authority is likely to be respected.",
      monthly_text_2: "Consistent effort and disciplined routine will help navigate this month effectively.",
      yearly_text_1: "The year ahead is shaped by major planetary movements (Saturn/Jupiter) and your ongoing Dasha.",
      yearly_text_2: "The year favors steady progress, patience, and long-term planning over quick results."
    },
    te: {
      daily_title: "దిన ఫలాలు", weekly_title: "వార ఫలాలు", monthly_title: "మాస ఫలాలు", yearly_title: "సంవత్సర ఫలాలు",
      key_themes: "ముఖ్య అంశాలు", guidance: "సూచన", overview: "సారాంశం",
      daily_text_1: "ఈ రోజు మీ మనస్సు ప్రశాంతంగా మరియు ఉత్సాహంగా ఉంటుంది. నిర్ణయాలు తీసుకోవడానికి అనుకూలమైన సమయం.",
      daily_text_2: "ఈ రోజు ప్రణాళికలకు మరియు అమలుకు మంచిది. తొందరపాటు నిర్ణయాలు వద్దు.",
      weekly_text_1: "ఈ వారం చంద్రుని సంచారం మరియు మీ ప్రస్తుత దశ ఆధారంగా మిశ్రమ ఫలితాలు ఉంటాయి.",
      weekly_text_2: "వారం ప్రారంభంలో ప్రణాళికలకు ప్రాధాన్యత ఇవ్వండి. వారాంతంలో అనవసరమైన వాదనలకు దూరంగా ఉండండి.",
      monthly_text_1: "ఈ నెలలో వృత్తిపరమైన అభివృద్ధి మరియు గుర్తింపు లభిస్తుంది. అధికారుల మద్దతు ఉంటుంది.",
      monthly_text_2: "క్రమశిక్షణ మరియు స్థిరమైన ప్రయత్నం ఈ నెలలో మీకు విజయాన్ని ఇస్తాయి.",
      yearly_text_1: "శని, గురు గ్రహాల సంచారం మరియు మీ ప్రస్తుత దశ ఆధారంగా ఈ సంవత్సరం ఫలితాలు ఉంటాయి.",
      yearly_text_2: "ఈ సంవత్సరం స్థిరమైన అభివృద్ధికి, ఓర్పుకు మరియు దీర్ఘకాలిక ప్రణాళికలకు అనుకూలం."
    }
  },
  marriage: {
    en: {
      title: "Marriage Compatibility & Analysis", sub: "Vedic Kundali Matching between",
      p_name: "Partner's Name", calc: "Calculate Compatibility",
      guna: "Total Guna Score", rating: "Compatibility", check_new: "Check Another Match",
      ashta_title: "1. Ashta-Koota (Guna Milan) Analysis",
      ashta_text: "The Ashta-Koota system evaluates compatibility based on Moon sign and Nakshatra relationships between the two individuals.",
      dosha_title: "2. Dosha Analysis",
      kuja: "Kuja (Manglik) Dosha", bhakoot: "Bhakoot Dosha", nadi: "Nadi Dosha",
      navamsa_title: "3. Navamsa (D-9) Marriage Strength",
      navamsa_text: "Navamsa is the principal chart for assessing marital stability. The chart indicates Moderate marital potential.",
      summary_title: "Final Compatibility Summary",
      summary_text: "Based on Guna Milan, Dosha analysis, and Navamsa strength, the overall compatibility is assessed as:"
    },
    te: {
      title: "వివాహ పొంతన & విశ్లేషణ", sub: "వధూవరుల జాతక పరిశీలన: ",
      p_name: "భాగస్వామి పేరు", calc: "పొంతన చూడండి",
      guna: "మొత్తం గుణములు", rating: "అనుకూలత", check_new: "మరొకరితో సరిచూడండి",
      ashta_title: "1. అష్టకూట (గుణ మిలన్) విశ్లేషణ",
      ashta_text: "అష్టకూట పద్ధతిలో చంద్ర రాశి మరియు నక్షత్రం ఆధారంగా వధూవరుల మధ్య పొంతనను గణిస్తారు.",
      dosha_title: "2. దోష విశ్లేషణ",
      kuja: "కుజ దోషం (మాంగళిక)", bhakoot: "భకూట దోషం", nadi: "నాడీ దోషం",
      navamsa_title: "3. నవాంశ (D-9) బలం",
      navamsa_text: "వివాహ బంధం యొక్క స్థిరత్వాన్ని నవాంశ చక్రం ద్వారా పరిశీలిస్తారు. ఈ జాతకంలో వైవాహిక బలం మధ్యస్థంగా ఉంది.",
      summary_title: "తుది ఫలితం",
      summary_text: "గుణ మిలన్, దోష విశ్లేషణ మరియు నవాంశ బలం ఆధారంగా, ఈ జంట మధ్య అనుకూలత:"
    }
  },
  charts: {
    en: {
      note_title: "Note on the 60 Divisional Charts (Vargas)",
      th_no: "No.", th_name: "Chart Name", th_sanskrit: "Sanskrit Name", th_purpose: "Purpose", th_action: "Action", view: "VIEW"
    },
    te: {
      note_title: "షోడశ వర్గ చక్రాలపై గమనిక",
      th_no: "సం.", th_name: "చక్రం పేరు", th_sanskrit: "సంస్కృత పేరు", th_purpose: "ప్రయోజనం", th_action: "చర్య", view: "చూడండి"
    }
  }
};