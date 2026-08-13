/* بيانات إحصاءات اصطياد الأفاعي في إسرائيل 2022–2026
   المصدر: مبادرة "شومريم عل زوحلي هأرتس / Reptiles of Israel" — بيانات سلطة الطبيعة والحدائق */
const statsData = {
  totals: {
    events: 6056,
    venomEvents: 2533,
    venomPct: 41.8,
    topFive: 5068,
    topFivePct: 83.7,
    coreYears: 4850,
    coreYearsPct: 80.1
  },
  topSpecies: [
    { name:{ ar:"الأفعى الفلسطينية", he:"הצפע המצוי", en:"Palestine Viper" }, venom:true, count:2404, pct:39.7 },
    { name:{ ar:"الحنش الأرقط", he:"זעמן מטבעות", en:"Coin-marked Snake" }, venom:false, count:1361, pct:22.5 },
    { name:{ ar:"الحنش الأسود", he:"זעמן שחור", en:"Black Whip Snake" }, venom:false, count:652, pct:10.8 },
    { name:{ ar:"الحنش الزيتوني", he:"זעמן זיתני", en:"Olive Whip Snake" }, venom:false, count:376, pct:6.2 },
    { name:{ ar:"السحلية الزجاجية (أبو قرع)", he:"קמטן החורש", en:"European Glass Lizard" }, venom:false, count:275, pct:4.5, note:{ ar:"سحلية بلا أرجل يُبلَّغ عنها كأفعى", he:"לטאה חסרת רגליים", en:"A legless lizard reported as a snake" } }
  ],
  venomSpecies: [
    { name:{ ar:"الأفعى الفلسطينية", he:"צפע מצוי", en:"Palestine Viper" }, count:2404, pct:39.7 },
    { name:{ ar:"الكوبرا الصحراوية السوداء", he:"פתן שחור", en:"Black Desert Cobra" }, count:59, pct:1.0 },
    { name:{ ar:"الأفعى المنقّطة", he:"אפעה מגוון", en:"Painted Saw-scaled Viper" }, count:40, pct:0.7 },
    { name:{ ar:"أفعى النقب المقرّنة", he:"שפיפון הנגב", en:"Negev Horned Viper" }, count:13, pct:0.2 },
    { name:{ ar:"أفعى الجحور (عين جدي)", he:"שרף עין־גדי", en:"Ein Gedi Burrowing Asp" }, count:8, pct:0.1 },
    { name:{ ar:"الأفعى القرناء الكاذبة", he:"עכן החרטומים", en:"False Horned Viper" }, count:5, pct:0.08 },
    { name:{ ar:"الأفعى القرناء الصغيرة", he:"עכן קטן", en:"Small False-horned Viper" }, count:3, pct:0.05 },
    { name:{ ar:"أفعى الحرمون (سجل شاذّ يحتاج تحقّقًا)", he:"צפע חרמון (רשומה חריגה)", en:"Hermon Viper (anomalous record)" }, count:1, pct:0.02 }
  ],
  months: [
    { key:"jan", name:{ ar:"يناير", he:"ינואר", en:"Jan" }, count:96, pct:1.6 },
    { key:"feb", name:{ ar:"فبراير", he:"פברואר", en:"Feb" }, count:137, pct:2.3 },
    { key:"may", name:{ ar:"مايو", he:"מאי", en:"May" }, count:1068, pct:17.6 },
    { key:"jun", name:{ ar:"يونيو", he:"יוני", en:"Jun" }, count:915, pct:15.1 },
    { key:"sep", name:{ ar:"سبتمبر", he:"ספטמבר", en:"Sep" }, count:655, pct:10.8 },
    { key:"oct", name:{ ar:"أكتوبر", he:"אוקטובר", en:"Oct" }, count:587, pct:9.7 },
    { key:"dec", name:{ ar:"ديسمبر", he:"דצמבר", en:"Dec" }, count:87, pct:1.4 }
  ]
};
