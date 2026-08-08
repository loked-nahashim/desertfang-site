/* ============================================================
   نظام الأخبار — ناب الصحراء (محلية + عالمية)
   ------------------------------------------------------------
   • مواضيع الأخبار مستقلّة تمامًا ولا ترتبط بأي صفحة من الموقع.
   • لإضافة خبر جديد: ضع عنصرًا جديدًا في *أعلى* المصفوفة (الأحدث أولًا).
     يظهر أحدث 3 على الصفحة الرئيسية، والأقدم ينزل تلقائيًا للأرشيف.
   • كل الأخبار محفوظة في صفحة الأرشيف (news.html).

   الحقول: date (YYYY-MM-DD) · scope ("local" محلي / "global" عالمي)
           icon ("news"/"alert"/"new"/"event"/"snake") · title{ar,he,en} · body{ar,he,en}
   ============================================================ */

const newsData = [
  {
    date: "2026-08-01", scope: "local", icon: "alert",
    title: { ar: "ارتفاع مشاهدات الثعابين قرب المناطق السكنية صيفًا",
             he: "עלייה בפעילות הנחשים ליד אזורי מגורים בקיץ",
             en: "More snake sightings near homes in summer" },
    body:  { ar: "مع ذروة نشاط الثعابين صيفًا تزداد مشاهدتها مساءً وليلًا قرب المنازل والحدائق، بحثًا عن الغذاء والمأوى لا عن الإنسان. وجميع الثعابين في إسرائيل محمية بموجب القانون. يُنصح بإبعاد الناس والحيوانات الأليفة عن المكان والتواصل مع صياد ثعابين مرخص بدل محاولة الإمساك بها أو قتلها، مع اتباع إجراءات وقائية بسيطة حول المنزل.",
             he: "בשיא פעילותם הקיצית גדל הסיכוי לראות נחשים בערב ובלילה ליד בתים וגינות, בחיפוש מזון ומסתור ולא מגע עם אדם. כל הנחשים בישראל מוגנים בחוק. מומלץ להרחיק אנשים ובעלי חיים מהמקום ולפנות ללוכד נחשים מורשה במקום לנסות ללכוד או לפגוע בהם, לצד צעדי מנע פשוטים סביב הבית.",
             en: "At their summer peak, snakes are seen more in the evening and at night near homes and gardens, seeking food and shelter — not people. All snakes in Israel are protected by law. Keep people and pets away and contact a licensed snake hunter instead of trying to handle or kill them, alongside simple preventive measures around the home." }
  },
  {
    date: "2026-07-26", scope: "global", icon: "news",
    title: { ar: "أبحاث حديثة تكشف التركيب الكيميائي المعقّد لسموم الأفاعي",
             he: "מחקרים עדכניים חושפים את ההרכב הכימי של ארס הנחשים",
             en: "New research reveals the complex makeup of snake venom" },
    body:  { ar: "كشفت تقنيات التحليل الجزيئي المتقدّمة (بروتيوميكس وجينوميكس) أن سمّ الأفعى ليس مادة بسيطة، بل خليط معقّد من مئات البروتينات والإنزيمات يختلف بين الأنواع، بل بين أفراد النوع الواحد حسب الموطن والغذاء. وقد ساعد علم السموم (Venomics) ومطيافية الكتلة على رسم مكوّناته واكتشاف سموم جديدة، بما يفتح آفاقًا لأدوية لأمراض القلب والتخثّر والالتهاب وحتى السرطان. كما رُصد عام 2026 تسلسل جينوم أفعى مقاومة طبيعيًا للسمّ، ما قد يقود إلى أمصال أفضل مستقبلًا.",
             he: "טכנולוגיות ניתוח מולקולרי מתקדמות (פרוטאומיקה וגנומיקה) חשפו שארס הנחש אינו חומר פשוט אלא תערובת מורכבת של מאות חלבונים ואנזימים, המשתנה בין מינים ואף בין פרטים לפי אזור ותזונה. חקר הארסים (Venomics) וספקטרומטריית מסות סייעו למפות את מרכיביו ולזהות רעלנים חדשים, ולפתוח פתח לתרופות למחלות לב, קרישה, דלקת ואף סרטן. ב־2026 רוצף גנום של נחש עמיד לארס באופן טבעי, ממצא שעשוי להוביל לנסיובים טובים יותר.",
             en: "Advanced molecular analysis (proteomics and genomics) has revealed that snake venom is not a simple substance but a complex mix of hundreds of proteins and enzymes that varies between species and even individuals by region and diet. 'Venomics' and mass spectrometry have mapped its components and uncovered new toxins, opening avenues for drugs targeting heart disease, clotting, inflammation, and even cancer. In 2026, the genome of a venom-resistant snake was sequenced — a finding that may lead to better antivenoms." }
  },
  {
    date: "2026-07-27", scope: "local", icon: "event",
    title: { ar: "توثيق الأنواع المحلية في مختلف مناطق البلاد",
             he: "תיעוד מינים מקומיים באזורים שונים בארץ",
             en: "Documenting local species across the country's regions" },
    body:  { ar: "تتميّز البلاد بتنوّع بيئي واسع — من الحرمون والجليل شمالًا إلى صحراء يهودا والنقب جنوبًا — ولكل منطقة أنواعها من الثعابين والزواحف. ويساعد التوثيق المنهجي (صور، موقع، تاريخ، نوع الموطن، والسلوك) على فهم الانتشار وتتبّع تغيّرات المجموعات ورصد أثر الإنسان وتغيّر المناخ. كما يخدم الباحثين والجهات في حماية الموائل والأنواع، ويعزّز وعي الجمهور بالتعرّف الصحيح ودور الزواحف في التوازن البيئي.",
             he: "הארץ מתאפיינת במגוון בתי גידול — מהחרמון והגליל בצפון ועד מדבר יהודה והנגב בדרום — ולכל אזור מיני נחשים וזוחלים משלו. תיעוד מסודר (תצלומים, מיקום, תאריך, בית גידול והתנהגות) מסייע להבין תפוצה, לעקוב אחר שינויים באוכלוסיות ולזהות השפעות אדם ואקלים. המידע תורם למחקר ולשימור בתי גידול ומינים מוגנים, ומחזק את מודעות הציבור לזיהוי נכון ולתפקיד הזוחלים באיזון האקולוגי.",
             en: "Israel spans diverse habitats — from the Hermon and Galilee in the north to the Judean Desert and Negev in the south — each with its own snake and reptile species. Systematic documentation (photos, location, date, habitat, and behavior) helps map distribution, track population changes, and detect human and climate impacts. It supports research and the protection of habitats and protected species, and helps the public with correct identification and reptiles' role in ecological balance." }
  },
  {
    date: "2026-07-30", scope: "global", icon: "news",
    title: { ar: "جهود دولية لتطوير أمصال أكثر أمانًا وفعالية ضد سمّ الأفاعي",
             he: "פיתוח נסיובים בטוחים ויעילים יותר נגד ארס נחשים",
             en: "Global push for safer, more effective snake antivenoms" },
    body:  { ar: "تُعدّ لدغات الأفاعي تحديًا صحيًا يصيب مئات الآلاف سنويًا، ويبقى المصل المضاد العلاج الأساسي لها. تعمل مراكز بحثية حول العالم على جيلٍ جديد من الأمصال أكثر أمانًا وفعالية عبر البيولوجيا الجزيئية والهندسة الوراثية وأجسام مضادة شبه بشرية، إضافة إلى «علم السموم» (Venomics) لتطوير أمصال موجّهة، وأمصال واسعة الطيف تغطّي عدة أنواع في المنطقة الواحدة. ومع ذلك تبقى الوقاية والتشخيص السريع والوصول المبكر للعلاج عوامل حاسمة لإنقاذ الحياة.",
             he: "הכשות נחשים ארסיים פוגעות במאות אלפי בני אדם מדי שנה, והנסיוב נותר הטיפול העיקרי. מרכזי מחקר בעולם מפתחים דור חדש של נסיובים בטוחים ויעילים יותר בעזרת ביולוגיה מולקולרית, הנדסה גנטית ונוגדנים דמויי-אנוש, לצד חקר הארסים (Venomics) לפיתוח נסיובים ממוקדים ונסיובים רחבי-טווח לכמה מינים באותו אזור. עם זאת, מניעה, זיהוי מהיר והגעה מוקדמת לטיפול נותרים מכריעים להצלת חיים.",
             en: "Venomous snakebites affect hundreds of thousands of people each year, and antivenom remains the main treatment. Research centers worldwide are developing a new generation of safer, more effective antivenoms using molecular biology, genetic engineering, and human-like antibodies, alongside 'venomics' for targeted products and broad-spectrum antivenoms covering several regional species. Even so, prevention, rapid recognition, and early access to care remain decisive for saving lives." }
  },
  {
    date: "2026-07-24", scope: "local", icon: "new",
    title: { ar: "مبادرات توعية محلية للتعامل الآمن مع الزواحف",
             he: "יוזמות הסברה מקומיות להתנהלות בטוחה מול זוחלים",
             en: "Local awareness initiatives for safe conduct with reptiles" },
    body:  { ar: "المواجهات بين الناس والزواحف جزء من الحياة قرب المناطق المفتوحة والزراعية والقريبة من الطبيعة، ولذلك تؤدّي مبادرات التوعية المحلية دورًا محوريًا في نشر المعرفة والسلوك الآمن: التعرّف على الأنواع المحلية، الحفاظ على مسافة، تجنّب الإمساك، والاتصال بصيّاد مرخّص عند الحاجة. وتصل الأنشطة التعليمية (مدارس، محاضرات، منشورات رقمية، ووسائل تواصل) إلى جمهور واسع، وتقلّل القتل غير المبرَّر، وتعزّز التعايش الآمن وحماية التنوّع الحيوي.",
             he: "מפגשים בין אדם לזוחלים הם חלק מהחיים בקרבת שטחים פתוחים, חקלאות ויישובים סמוכים לטבע, ולכן יוזמות הסברה מקומיות ממלאות תפקיד מרכזי בהנחלת ידע והתנהלות בטוחה: היכרות עם המינים המקומיים, שמירת מרחק, הימנעות מלכידה, ופנייה ללוכד מוסמך בעת הצורך. פעילויות חינוכיות (בתי ספר, הרצאות, פרסומים דיגיטליים ורשתות) מגיעות לקהל רחב, מפחיתות הרג מיותר ומחזקות דו-קיום בטוח ושמירה על המגוון הביולוגי.",
             en: "Encounters between people and reptiles are part of life near open areas, farmland, and communities close to nature, so local awareness initiatives play a central role in spreading knowledge and safe conduct: recognizing local species, keeping distance, avoiding capture, and calling a licensed snake hunter when needed. Educational activities (schools, lectures, digital publications, and social media) reach wide audiences, reduce needless killing, and strengthen safe coexistence and biodiversity protection." }
  },
  {
    date: "2026-07-20", scope: "global", icon: "alert",
    title: { ar: "لدغات الأفاعي: خطرٌ صحي عالمي مُهمَل رغم فداحته",
             he: "הכשות נחשים: בעיה בריאותית עולמית מוזנחת חרף חומרתה",
             en: "Snakebite: a serious yet neglected global health threat" },
    body:  { ar: "رغم تقدّم الطب الحديث، ما زالت لدغات الأفاعي تشكّل عبئًا صحيًا ثقيلًا، خاصة في المناطق الريفية والاستوائية، بملايين اللدغات وعشرات آلاف الوفيات وإعاقات دائمة سنويًا؛ لذلك صُنّفت ضمن «الأمراض الاستوائية المهمَلة» (NTDs). ويعود «الإهمال» إلى أن معظم المصابين في مناطق فقيرة نائية محدودة الوصول للعلاج، مع نقص تمويل الأبحاث والأمصال. وتتزايد الجهود الدولية لتحسين إنتاج الأمصال والتشخيص السريع والتوعية بالوقاية — فالتصنيف لا يعني ندرة المشكلة بل إلحاح الاستثمار فيها.",
             he: "חרף התקדמות הרפואה, הכשות נחשים נותרות נטל בריאותי כבד, בעיקר באזורים כפריים וטרופיים, עם מיליוני הכשות, עשרות אלפי מקרי מוות ונכויות קבועות מדי שנה; לכן הן מסווגות כמחלות טרופיות מוזנחות (NTDs). ה\"הזנחה\" נובעת מכך שרוב הנפגעים חיים באזורים עניים ומרוחקים עם גישה מוגבלת לטיפול, לצד מחסור במימון ובנסיובים. המאמצים הבינלאומיים גוברים לשיפור ייצור הנסיובים, אבחון מהיר והסברה למניעה — הסיווג אינו מעיד על נדירות אלא על דחיפות ההשקעה.",
             en: "Despite advances in medicine, snakebite remains a heavy health burden, especially in rural and tropical areas, with millions of bites, tens of thousands of deaths, and permanent disabilities each year — which is why it is classified as a Neglected Tropical Disease (NTD). It is 'neglected' because most victims live in poor, remote areas with limited access to care, alongside underfunding of research and antivenoms. International efforts are growing to improve antivenom production, rapid diagnosis, and prevention awareness — the classification signals urgency, not rarity." }
  }
];

/* ============================================================
   نصوص المقالات الكاملة لكل خبر (تُعرض عند فتح خبر منفرد).
   المفتاح = تاريخ الخبر نفسه. الفقرة التمهيدية تُؤخذ من body أعلاه،
   وهنا نضيف أقسامًا (h عنوان + p فقرة) وملاحظة اختيارية.
   ============================================================ */
const newsArticles = {

  "2026-08-01": {
    sections: [
      { h: { ar: "لماذا تكثر المشاهدات في الصيف؟",
             he: "מדוע רבות התצפיות בקיץ?",
             en: "Why are sightings more common in summer?" },
        p: { ar: "الثعابين حيوانات متغيّرة الحرارة تعتمد على البيئة لتنظيم حرارة جسمها. في ذروة الصيف تتجنّب حرّ النهار وتنشط أكثر عند الغروب وفي الليل، بحثًا عن الغذاء والماء والمأوى البارد. القرب من المناطق السكنية ليس عدوانًا تجاه الإنسان، بل نتيجة توفّر القوارض والحشرات وأماكن الاختباء حول المنازل والحدائق والمخازن.",
             he: "נחשים הם בעלי חיים משתני-חום התלויים בסביבה לוויסות חום גופם. בשיא הקיץ הם נמנעים מחום היום ופעילים יותר עם רדת הערב ובלילה, בחיפוש מזון, מים ומחסה קריר. הקרבה לאזורי מגורים אינה תוקפנות כלפי האדם אלא תוצאה של זמינות מכרסמים, חרקים ומקומות מסתור סביב בתים, גינות ומחסנים.",
             en: "Snakes are cold-blooded animals that rely on their surroundings to regulate body temperature. At the height of summer they avoid the daytime heat and become more active at dusk and at night, seeking food, water, and cool shelter. Their proximity to residential areas is not aggression toward people but a result of the rodents, insects, and hiding places available around homes, gardens, and storerooms." } },

      { h: { ar: "كيف تجعل محيط منزلك أقل جذبًا؟",
             he: "כיצד להפוך את סביבת הבית לפחות מזמינה?",
             en: "How to make your home's surroundings less inviting" },
        p: { ar: "أبسط وقاية هي إزالة ما يجذب الفريسة والمأوى: رتّب أكوام الحطب والحجارة والخردة بعيدًا عن الجدران، وقصّ الأعشاب العالية، وأغلق الفتحات والشقوق أسفل الأبواب وحول الأنابيب. احفظ علف الحيوانات ومخلّفات الطعام في حاويات محكمة لتقليل القوارض، وتجنّب ترك المياه الراكدة. الإضاءة الليلية الجيّدة حول الممرات تساعدك على رؤية أي زائر قبل الاقتراب منه.",
             he: "המניעה הפשוטה ביותר היא הרחקת מה שמושך טרף ומסתור: סדרו ערימות עצים, אבנים וגרוטאות הרחק מהקירות, גזמו עשבייה גבוהה, ואטמו פתחים וסדקים מתחת לדלתות וסביב צנרת. אחסנו מזון לבעלי חיים ושאריות מזון במכלים אטומים כדי לצמצם מכרסמים, והימנעו ממים עומדים. תאורת לילה טובה סביב השבילים תסייע לכם לראות מבקר לא־קרוא לפני שתתקרבו אליו.",
             en: "The simplest prevention is removing what attracts prey and shelter: keep woodpiles, stones, and clutter away from walls, trim tall vegetation, and seal gaps and cracks under doors and around pipes. Store animal feed and food scraps in sealed containers to reduce rodents, and avoid leaving standing water. Good night lighting around paths helps you spot any visitor before you get close to it." } },

      { h: { ar: "إذا صادفت ثعبانًا قرب المنزل",
             he: "אם נתקלתם בנחש ליד הבית",
             en: "If you encounter a snake near the house" },
        p: { ar: "لا تحاول الإمساك به أو قتله؛ فمعظم اللدغات تحدث أثناء محاولات كهذه، وجميع الثعابين في إسرائيل محمية بموجب القانون. أبقِ مسافة آمنة، وأبعد الأطفال والحيوانات الأليفة، وراقب مكانه من بعيد دون محاصرته حتى يتاح له مسار للانسحاب. إن بقي في مكان مغلق أو شكّل خطرًا، اتصل بصيّاد ثعابين مرخّص أو بالسلطات المختصّة بدل التعامل معه بنفسك.",
             he: "אל תנסו ללכוד או להרוג אותו; רוב ההכשות מתרחשות בדיוק בניסיונות כאלה, וכל הנחשים בישראל מוגנים בחוק. שמרו מרחק בטוח, הרחיקו ילדים ובעלי חיים, ועקבו אחר מיקומו מרחוק בלי לכלוא אותו, כדי שיישאר לו נתיב נסיגה. אם הוא נותר בחלל סגור או מהווה סכנה, פנו ללוכד נחשים מורשה או לרשויות במקום לטפל בו בעצמכם.",
             en: "Do not try to catch or kill it; most bites happen during exactly such attempts, and all snakes in Israel are protected by law. Keep a safe distance, move children and pets away, and watch its location from afar without cornering it so it has a route to retreat. If it stays in an enclosed space or poses a danger, call a licensed snake handler or the authorities instead of dealing with it yourself." } }
    ],
    note: { ar: "لا تقترب من أي ثعبان ولا تحاول الإمساك به مهما بدا هادئًا. عند وقوع لدغة اتصل بالطوارئ فورًا واتبع تعليماتهم — هذا المحتوى للتثقيف الميداني ولا يغني عن الرعاية الطبية.",
            he: "אל תתקרבו לאף נחש ואל תנסו ללכוד אותו, גם אם הוא נראה רגוע. במקרה של הכשה התקשרו מיד למוקד החירום ופעלו לפי הנחיותיהם — תוכן זה נועד להסברה ואינו תחליף לטיפול רפואי.",
            en: "Do not approach or try to handle any snake, however calm it seems. If a bite occurs, call emergency services immediately and follow their instructions — this content is for field education and is not a substitute for medical care." }
  },

  "2026-07-26": {
    sections: [
      { h: { ar: "السمّ خليط، وليس مادّة واحدة",
             he: "הארס הוא תערובת, לא חומר יחיד",
             en: "Venom is a mixture, not a single substance" },
        p: { ar: "يتكوّن سمّ الأفعى من مئات المركّبات — بروتينات وإنزيمات وببتيدات — تعمل معًا. بعضها يؤثّر على الجهاز العصبي (سموم عصبية)، وبعضها على الدم والأوعية والتخثّر (سموم دموية ونزفية)، وأخرى تهضم الأنسجة. تختلف هذه التركيبة بين الأنواع، بل بين أفراد النوع الواحد تبعًا للموطن والغذاء والعمر، ولهذا يصعب اختزال السمّ في وصفٍ واحد.",
             he: "ארס הנחש מורכב ממאות תרכובות — חלבונים, אנזימים ופפטידים — הפועלים יחד. חלקם משפיעים על מערכת העצבים (רעלנים עצביים), חלקם על הדם, כלי הדם והקרישה (רעלנים המטולוגיים ומדממים), ואחרים מפרקים רקמות. הרכב זה משתנה בין מינים ואף בין פרטים לפי בית גידול, תזונה וגיל, ולכן קשה לתמצת את הארס לתיאור אחד.",
             en: "Snake venom is made of hundreds of compounds — proteins, enzymes, and peptides — working together. Some act on the nervous system (neurotoxins), some on blood, vessels, and clotting (hemotoxins), and others digest tissue. This makeup varies between species and even between individuals depending on habitat, diet, and age, which is why venom cannot be reduced to a single description." } },

      { h: { ar: "أدوات علم السموم الحديثة",
             he: "כלי חקר-הארס המודרני",
             en: "The tools of modern venomics" },
        p: { ar: "بفضل البروتيوميكس (تحليل البروتينات) والجينوميكس (تحليل الجينات) ومطيافية الكتلة، صار بالإمكان رسم خريطة دقيقة لمكوّنات السمّ ومعرفة الجينات المسؤولة عن إنتاجها. هذا الحقل، المعروف بـ«علم السموم» (Venomics)، لا يكشف تركيب السمّ فحسب، بل يفسّر كيف تطوّر ولماذا يختلف بين المجموعات، ويساعد على اكتشاف مركّبات جديدة لم تكن معروفة من قبل.",
             he: "בזכות פרוטאומיקה (ניתוח חלבונים), גנומיקה (ניתוח גנים) וספקטרומטריית מסות, ניתן כיום למפות במדויק את מרכיבי הארס ולזהות את הגנים האחראים לייצורם. תחום זה, המוכר כ\"חקר הארסים\" (Venomics), אינו חושף רק את הרכב הארס אלא גם מסביר כיצד התפתח ומדוע הוא שונה בין אוכלוסיות, ומסייע בגילוי תרכובות חדשות שלא היו ידועות קודם.",
             en: "Thanks to proteomics (protein analysis), genomics (gene analysis), and mass spectrometry, it is now possible to map venom components precisely and identify the genes responsible for producing them. This field, known as 'venomics,' reveals not only venom composition but also how it evolved and why it differs between populations, and it helps uncover new compounds that were previously unknown." } },

      { h: { ar: "من الخطر إلى الدواء",
             he: "מן הסכנה אל התרופה",
             en: "From danger to medicine" },
        p: { ar: "المفارقة أن المادّة التي قد تقتل قد تُشفي أيضًا. فبعض أدوية ضغط الدم المعروفة اليوم استُلهمت أصلًا من دراسة سمّ أفعى، وتُبحث حاليًا مركّبات أخرى لعلاج اضطرابات التخثّر والالتهاب وحتى بعض أنواع السرطان. هذه الأبحاث في مراحل متفاوتة، لكنها تُظهر لماذا يُعدّ فهم السمّ على المستوى الجزيئي استثمارًا علميًا وطبيًا مهمًا.",
             he: "הפרדוקס הוא שהחומר העלול להרוג עשוי גם לרפא. תרופות מסוימות ללחץ דם המוכרות כיום נגזרו במקורן מחקר ארס נחש, וכיום נחקרות תרכובות נוספות לטיפול בהפרעות קרישה, בדלקת ואף בסוגי סרטן מסוימים. מחקרים אלה נמצאים בשלבים שונים, אך הם ממחישים מדוע הבנת הארס ברמה המולקולרית היא השקעה מדעית ורפואית חשובה.",
             en: "The paradox is that the substance that can kill may also heal. Some well-known blood-pressure drugs were originally inspired by studying snake venom, and other compounds are now being researched for clotting disorders, inflammation, and even certain cancers. This research is at varying stages, but it shows why understanding venom at the molecular level is an important scientific and medical investment." } }
    ],
    note: { ar: "هذه المعلومات للتثقيف العلمي العام، وليست نصيحة طبية ولا تصف علاجات جاهزة. الأبحاث المذكورة في مراحل مختلفة من التطوير.",
            he: "מידע זה נועד להסברה מדעית כללית, אינו ייעוץ רפואי ואינו מתאר טיפולים מוכנים. המחקרים המוזכרים נמצאים בשלבי פיתוח שונים.",
            en: "This information is for general scientific education, not medical advice, and does not describe ready-made treatments. The research mentioned is at various stages of development." }
  },

  "2026-07-27": {
    sections: [
      { h: { ar: "لماذا التوثيق المنهجي مهم؟",
             he: "מדוע התיעוד השיטתי חשוב?",
             en: "Why systematic documentation matters" },
        p: { ar: "كل مشاهدة موثّقة جيّدًا هي نقطة بيانات تساعد على رسم خريطة انتشار الأنواع وفهم تفضيلاتها البيئية. بتجميع هذه النقاط عبر السنوات يمكن تتبّع تغيّرات المجموعات، ورصد أثر التوسّع العمراني وتغيّر المناخ، واكتشاف تراجع أو توسّع نطاق نوع ما مبكرًا. هذه المعرفة أساس لأي جهد جادّ في حماية الموائل والأنواع.",
             he: "כל תצפית מתועדת היטב היא נקודת נתונים המסייעת למפות את תפוצת המינים ולהבין את העדפותיהם הסביבתיות. צבירת נקודות אלה לאורך שנים מאפשרת לעקוב אחר שינויים באוכלוסיות, לזהות את השפעת ההתרחבות העירונית ושינוי האקלים, ולגלות מוקדם צמצום או התפשטות של תחום מין. ידע זה הוא הבסיס לכל מאמץ רציני לשמירת בתי גידול ומינים.",
             en: "Every well-documented sighting is a data point that helps map species distribution and understand their environmental preferences. Gathering these points over years makes it possible to track population changes, detect the impact of urban expansion and climate change, and spot the decline or spread of a species' range early. This knowledge is the foundation of any serious effort to protect habitats and species." } },

      { h: { ar: "ماذا نسجّل في كلّ مشاهدة؟",
             he: "מה מתעדים בכל תצפית?",
             en: "What to record in each sighting" },
        p: { ar: "المشاهدة المفيدة للبحث تتضمّن: صورة واضحة (من مسافة آمنة)، التاريخ والوقت، الموقع الدقيق قدر الإمكان، نوع الموطن (رملي، صخري، قرب ماء…)، والسلوك المرصود. تفاصيل مثل حالة الطقس ودرجة الحرارة تضيف قيمة أيضًا. الدقّة والاتساق في التسجيل أهمّ من الكمّية؛ فبيانات قليلة موثوقة أنفع من كثيرٍ غامض.",
             he: "תצפית מועילה למחקר כוללת: תצלום ברור (ממרחק בטוח), תאריך ושעה, מיקום מדויק ככל האפשר, סוג בית הגידול (חולי, סלעי, ליד מים…), וההתנהגות שנצפתה. פרטים כמו מזג האוויר והטמפרטורה מוסיפים ערך אף הם. הדיוק והעקביות בתיעוד חשובים מהכמות; מעט נתונים אמינים מועילים יותר מהרבה מעורפלים.",
             en: "A research-useful sighting includes: a clear photo (from a safe distance), the date and time, the most precise location possible, the habitat type (sandy, rocky, near water…), and the observed behavior. Details such as weather and temperature add value too. Accuracy and consistency in recording matter more than quantity; a little reliable data is more useful than a lot of vague data." } },

      { h: { ar: "مساهمة الجمهور في العلم",
             he: "תרומת הציבור למדע",
             en: "The public's contribution to science" },
        p: { ar: "لم يعد التوثيق حكرًا على الباحثين؛ فبفضل الهواتف الذكية ومنصّات علم المواطن يستطيع أيّ شخص المساهمة بمشاهداته. الشرط الوحيد هو المسؤولية: التوثيق من بعيد دون إزعاج الحيوان أو نقله أو الكشف عن مواقع حسّاسة قد تعرّض الأنواع النادرة للخطر. بهذا يتحوّل شغف الميدان إلى معرفة جماعية مفيدة للجميع.",
             he: "התיעוד כבר אינו נחלת החוקרים בלבד; בזכות סמארטפונים ופלטפורמות מדע אזרחי כל אחד יכול לתרום את תצפיותיו. התנאי היחיד הוא אחריות: תיעוד מרחוק בלי להטריד את החיה, להעביר אותה או לחשוף מיקומים רגישים העלולים לסכן מינים נדירים. כך הופך תשוקת השטח לידע משותף המועיל לכולם.",
             en: "Documentation is no longer the preserve of researchers alone; thanks to smartphones and citizen-science platforms, anyone can contribute their sightings. The only condition is responsibility: documenting from a distance without disturbing the animal, moving it, or revealing sensitive locations that could put rare species at risk. In this way, a passion for the field becomes shared knowledge that benefits everyone." } }
    ],
    note: { ar: "راقب ووثّق من مسافة آمنة دائمًا، ولا تلمس أيّ حيوان بري أو تحاول نقله. جميع الثعابين في إسرائيل محمية بموجب القانون.",
            he: "צפו ותעדו תמיד ממרחק בטוח, ואל תיגעו בחיית בר או תנסו להעביר אותה. כל הנחשים בישראל מוגנים בחוק.",
            en: "Always observe and document from a safe distance, and never touch or try to move a wild animal. All snakes in Israel are protected by law." }
  },

  "2026-07-30": {
    sections: [
      { h: { ar: "كيف يُصنع المصل التقليدي؟",
             he: "כיצד מיוצר הנסיוב המסורתי?",
             en: "How is traditional antivenom made?" },
        p: { ar: "يُنتَج المصل المضاد بطريقة عمرها أكثر من قرن: تُحقن كمّيات صغيرة ومضبوطة من السمّ في حيوان كبير (كالحصان)، فيُنتج جهازه المناعي أجسامًا مضادة، ثم تُجمع هذه الأجسام من دمه وتُنقّى لتصبح دواءً. رغم فعاليته، فإنّ هذا الأسلوب مكلف، ويحتاج سلسلة تبريد، وقد يسبّب أحيانًا تفاعلات تحسّسية لدى المريض.",
             he: "הנסיוב מיוצר בשיטה בת יותר ממאה שנה: מזריקים כמויות קטנות ומבוקרות של ארס לבעל חיים גדול (כמו סוס), מערכת החיסון שלו מייצרת נוגדנים, ואז אוספים אותם מדמו ומטהרים אותם לכדי תרופה. חרף יעילותו, שיטה זו יקרה, מצריכה שרשרת קירור, ולעיתים עלולה לגרום לתגובות אלרגיות אצל המטופל.",
             en: "Antivenom is produced by a method more than a century old: small, controlled amounts of venom are injected into a large animal (such as a horse), its immune system produces antibodies, and these are then collected from its blood and purified into a medicine. Despite its effectiveness, this approach is costly, requires a cold chain, and can sometimes cause allergic reactions in the patient." } },

      { h: { ar: "الجيل الجديد من الأمصال",
             he: "הדור החדש של הנסיובים",
             en: "The new generation of antivenoms" },
        p: { ar: "تعمل مراكز بحثية على أمصال أكثر أمانًا وفعالية باستخدام الهندسة الوراثية وأجسام مضادة شبه بشرية أو مُصنّعة مخبريًا، ما يقلّل الاعتماد على الحيوانات ومخاطر التحسّس. كما يُطوَّر نوعان واعدان: أمصال «موجّهة» مصمّمة بدقّة لنوع معيّن، وأمصال «واسعة الطيف» تغطّي عدّة أنواع في المنطقة نفسها — وهو أمر بالغ الفائدة حين يصعب تحديد الأفعى التي لدغت.",
             he: "מרכזי מחקר מפתחים נסיובים בטוחים ויעילים יותר בעזרת הנדסה גנטית ונוגדנים דמויי-אנוש או מיוצרי-מעבדה, המפחיתים את התלות בבעלי חיים ואת סיכוני האלרגיה. כמו כן מפותחים שני סוגים מבטיחים: נסיובים \"ממוקדים\" המתוכננים במדויק למין מסוים, ונסיובים \"רחבי-טווח\" המכסים כמה מינים באותו אזור — יתרון חשוב כשקשה לזהות את הנחש שהכיש.",
             en: "Research centers are developing safer, more effective antivenoms using genetic engineering and human-like or lab-made antibodies, reducing reliance on animals and the risk of allergy. Two promising types are also being developed: 'targeted' antivenoms designed precisely for a specific species, and 'broad-spectrum' antivenoms covering several species in the same region — a major benefit when the biting snake is hard to identify." } },

      { h: { ar: "لماذا تبقى الوقاية أهمّ عامل؟",
             he: "מדוע המניעה נותרת הגורם החשוב ביותר?",
             en: "Why prevention remains the most important factor" },
        p: { ar: "مهما تطوّر المصل، يبقى وصوله في الوقت المناسب هو التحدّي الأكبر، خاصة في المناطق النائية. لذلك تبقى الوقاية والتشخيص السريع والنقل المبكر إلى المستشفى عوامل حاسمة لإنقاذ الحياة. المصل ليس دواءً سحريًا يُعطى في كلّ حالة، بل يُوصف بحذر من قبل مختصّين عند وجود خطر جدّي من التسمّم.",
             he: "ככל שהנסיוב משתכלל, הגעתו בזמן נותרת האתגר הגדול, במיוחד באזורים מרוחקים. לכן מניעה, אבחון מהיר והעברה מוקדמת לבית החולים נותרים גורמים מכריעים להצלת חיים. הנסיוב אינו תרופת פלא הניתנת בכל מקרה, אלא נרשם בזהירות בידי אנשי מקצוע כאשר קיים סיכון ממשי מהרעלה.",
             en: "However advanced antivenom becomes, getting it in time remains the biggest challenge, especially in remote areas. That is why prevention, rapid diagnosis, and early transport to hospital remain decisive for saving lives. Antivenom is not a miracle drug given in every case; it is prescribed carefully by professionals when there is a genuine risk of envenoming." } }
    ],
    note: { ar: "المصل يُعطى فقط في بيئة طبية مختصّة. إذا تعرّضت للدغة، اطلب المساعدة الطبية فورًا ولا تعتمد على أيّ علاج منزلي — هذا المحتوى للتثقيف ولا يغني عن الرعاية الطبية.",
            he: "הנסיוב ניתן רק בסביבה רפואית מוסמכת. אם הוכשתם, פנו מיד לעזרה רפואית ואל תסתמכו על טיפול ביתי כלשהו — תוכן זה נועד להסברה ואינו תחליף לטיפול רפואי.",
            en: "Antivenom is given only in a qualified medical setting. If you are bitten, seek medical help immediately and do not rely on any home remedy — this content is for education and is not a substitute for medical care." }
  },

  "2026-07-24": {
    sections: [
      { h: { ar: "المعرفة تقلّل الخوف والقتل",
             he: "ידע מפחית פחד והרג",
             en: "Knowledge reduces fear and killing" },
        p: { ar: "كثير من الثعابين تُقتل بدافع الخوف وحده، رغم أنّ معظم الأنواع غير سامة ومفيدة للتوازن البيئي. حين يتعلّم الناس التمييز بين الأنواع وفهم سلوكها، يتراجع الذعر وتقلّ حوادث القتل غير المبرَّر. التوعية لا تحمي الثعابين فقط، بل تحمي الإنسان أيضًا بتقليل المواجهات الخطرة الناتجة عن ردود فعل متهوّرة.",
             he: "נחשים רבים נהרגים מפחד בלבד, למרות שרוב המינים אינם ארסיים ומועילים לאיזון האקולוגי. כשאנשים לומדים להבחין בין המינים ולהבין את התנהגותם, הבהלה פוחתת ומקרי ההרג המיותר מתמעטים. ההסברה מגִנה לא רק על הנחשים אלא גם על האדם, בכך שהיא מצמצמת מפגשים מסוכנים הנובעים מתגובות פזיזות.",
             en: "Many snakes are killed out of fear alone, even though most species are non-venomous and beneficial to ecological balance. When people learn to tell species apart and understand their behavior, panic subsides and needless killings decrease. Awareness protects not only snakes but also people, by reducing dangerous encounters caused by reckless reactions." } },

      { h: { ar: "قواعد بسيطة يعرفها الجميع",
             he: "כללים פשוטים שכולם מכירים",
             en: "Simple rules everyone can know" },
        p: { ar: "الرسالة الأساسية للتوعية بسيطة وقابلة للتطبيق: تعرّف على الأنواع الشائعة في منطقتك، وحافظ دائمًا على مسافة، ولا تحاول لمس ثعبان أو الإمساك به، واتصل بصيّاد مرخّص عند الحاجة. هذه القواعد القليلة، إن انتشرت على نطاق واسع، تكفي لمنع الغالبية العظمى من الحوادث.",
             he: "המסר המרכזי של ההסברה פשוט ובר-ביצוע: הכירו את המינים הנפוצים באזורכם, שמרו תמיד על מרחק, אל תנסו לגעת בנחש או ללכוד אותו, ופנו ללוכד מורשה בעת הצורך. כללים מעטים אלה, אם יופצו בהיקף רחב, מספיקים למנוע את הרוב המכריע של התאונות.",
             en: "The core message of awareness is simple and practical: get to know the common species in your area, always keep your distance, never try to touch or handle a snake, and call a licensed handler when needed. These few rules, if spread widely, are enough to prevent the vast majority of incidents." } },

      { h: { ar: "دور المدارس والمجتمع",
             he: "תפקיד בתי הספר והקהילה",
             en: "The role of schools and the community" },
        p: { ar: "تصل أنشطة التوعية إلى جمهور واسع عبر المدارس والمحاضرات والمنشورات الرقمية ووسائل التواصل. حين يفهم الأطفال والكبار أنّ الزواحف جزء من نسيج الطبيعة لا عدوًّا يجب استئصاله، يتعزّز التعايش الآمن وتُحفظ التنوّع الحيوي. مجتمع واعٍ هو خطّ الدفاع الأول لكلٍّ من الإنسان والحياة البرّية.",
             he: "פעילויות ההסברה מגיעות לקהל רחב דרך בתי ספר, הרצאות, פרסומים דיגיטליים ורשתות חברתיות. כשילדים ומבוגרים מבינים שהזוחלים הם חלק ממארג הטבע ולא אויב שיש לחסל, מתחזק דו-קיום בטוח ונשמר המגוון הביולוגי. קהילה מודעת היא קו ההגנה הראשון גם לאדם וגם לחיות הבר.",
             en: "Awareness activities reach a wide audience through schools, lectures, digital publications, and social media. When children and adults understand that reptiles are part of the fabric of nature rather than an enemy to be eliminated, safe coexistence is strengthened and biodiversity is preserved. An informed community is the first line of defense for both people and wildlife." } }
    ],
    note: { ar: "الثعابين جزء مفيد من النظام البيئي وجميعها محمية بموجب القانون في إسرائيل. لا تحاول التعامل مع أيّ ثعبان بنفسك، واستعن بمختصّ مرخّص.",
            he: "הנחשים הם חלק מועיל מהמערכת האקולוגית וכולם מוגנים בחוק בישראל. אל תנסו לטפל בנחש בעצמכם, והיעזרו באיש מקצוע מורשה.",
            en: "Snakes are a beneficial part of the ecosystem and are all protected by law in Israel. Do not try to handle any snake yourself; rely on a licensed professional." }
  },

  "2026-07-20": {
    sections: [
      { h: { ar: "حجم المشكلة عالميًا",
             he: "היקף הבעיה בעולם",
             en: "The scale of the problem worldwide" },
        p: { ar: "تُصيب لدغات الأفاعي السامة مئات الآلاف من البشر سنويًا حول العالم، وتودي بحياة عشرات الآلاف، وتترك كثيرين بإعاقات دائمة كبتر الأطراف أو تلف الأنسجة. الأثر لا يقتصر على الصحّة، بل يمتدّ إلى الاقتصاد والأسر، إذ يقع معظم الضحايا في سنّ العمل ضمن مجتمعات ريفية فقيرة.",
             he: "הכשות נחשים ארסיים פוגעות במאות אלפי בני אדם מדי שנה ברחבי העולם, גובות עשרות אלפי חיים, ומותירות רבים בנכויות קבועות כמו קטיעות גפיים או נזק לרקמות. ההשפעה אינה מוגבלת לבריאות אלא נמשכת אל הכלכלה והמשפחות, שכן רוב הנפגעים בגיל העבודה ובקהילות כפריות עניות.",
             en: "Venomous snakebites affect hundreds of thousands of people each year worldwide, claim tens of thousands of lives, and leave many with permanent disabilities such as amputations or tissue damage. The impact is not limited to health; it extends to economies and families, since most victims are of working age in poor rural communities." } },

      { h: { ar: "لماذا يُوصف بـ«المهمَل»؟",
             he: "מדוע הוא מכונה \"מוזנח\"?",
             en: "Why is it called 'neglected'?" },
        p: { ar: "صنّفت منظّمة الصحّة العالمية لدغات الأفاعي ضمن «الأمراض الاستوائية المهمَلة». سبب «الإهمال» أنّ معظم المصابين يعيشون في مناطق فقيرة ونائية محدودة الوصول للعلاج، مع نقص مزمن في تمويل الأبحاث وإنتاج الأمصال. لا يعني هذا التصنيف أنّ المشكلة نادرة، بل على العكس: هو نداء لإلحاح الاستثمار فيها بعد سنوات من التجاهل النسبي.",
             he: "ארגון הבריאות העולמי סיווג הכשות נחשים כ\"מחלה טרופית מוזנחת\". סיבת ה\"הזנחה\" היא שרוב הנפגעים חיים באזורים עניים ומרוחקים עם גישה מוגבלת לטיפול, לצד מחסור כרוני במימון מחקר ובייצור נסיובים. סיווג זה אינו מעיד שהבעיה נדירה, אלא להפך: הוא קריאה לדחיפות ההשקעה בה לאחר שנים של התעלמות יחסית.",
             en: "The World Health Organization has classified snakebite as a 'neglected tropical disease.' The reason for the 'neglect' is that most victims live in poor, remote areas with limited access to care, alongside a chronic shortage of funding for research and antivenom production. This classification does not mean the problem is rare — on the contrary, it is a call for urgent investment after years of relative neglect." } },

      { h: { ar: "ما الذي يُحدث فرقًا؟",
             he: "מה עושה את ההבדל?",
             en: "What makes a difference?" },
        p: { ar: "الحلول معروفة وقابلة للتنفيذ: تحسين إنتاج الأمصال وتوزيعها، وتدريب الطواقم الطبية على التشخيص المبكر، ونقل المصابين بسرعة إلى مراكز مجهّزة. الوقاية اليومية بسيطة أيضًا: أحذية مغلقة، إضاءة عند التنقّل ليلًا، وإبعاد القوارض عن المساكن. الجمع بين الوقاية والعلاج المتاح في الوقت المناسب هو ما يُنقذ الأرواح فعلًا.",
             he: "הפתרונות ידועים ובני-ביצוע: שיפור ייצור הנסיובים והפצתם, הכשרת צוותים רפואיים לאבחון מוקדם, והעברה מהירה של נפגעים למרכזים מצוידים. גם המניעה היומיומית פשוטה: נעליים סגורות, תאורה בהליכה בלילה, והרחקת מכרסמים מהבתים. השילוב בין מניעה לטיפול זמין בזמן הוא שמציל חיים באמת.",
             en: "The solutions are known and achievable: improving antivenom production and distribution, training medical staff in early diagnosis, and moving victims quickly to equipped centers. Everyday prevention is simple too: closed footwear, lighting when moving at night, and keeping rodents away from homes. Combining prevention with timely, available treatment is what truly saves lives." } }
    ],
    note: { ar: "عند التعرّض لأيّ لدغة، اطلب المساعدة الطبية فورًا مهما بدت بسيطة. هذا المحتوى للتثقيف العام ولا يغني عن الرعاية الطبية المتخصّصة.",
            he: "בכל מקרה של הכשה, פנו מיד לעזרה רפואית, גם אם היא נראית קלה. תוכן זה נועד להסברה כללית ואינו תחליף לטיפול רפואי מקצועי.",
            en: "In case of any bite, seek medical help immediately, however minor it seems. This content is for general education and is not a substitute for professional medical care." }
  }

};

/* ---------- محرّك العرض ---------- */
(function () {
  const HERO_COUNT = 6;

  const ICONS = {
    new:  '<path d="M12 3l2.4 5 5.6.8-4 3.9 1 5.5L12 15.9 6.9 18.2l1-5.5-4-3.9L9.6 8 12 3z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',
    alert:'<path d="M12 2l9 4.5v6c0 5.2-3.8 8.6-9 9.5-5.2-.9-9-4.3-9-9.5v-6L12 2z" stroke="currentColor" stroke-width="1.5"/><path d="M12 8v5M12 16.2v.1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
    news: '<path d="M4 5h11a1 1 0 0 1 1 1v12a2 2 0 0 0 2 2H6a2 2 0 0 1-2-2V5z" stroke="currentColor" stroke-width="1.5"/><path d="M16 9h3a1 1 0 0 1 1 1v8a2 2 0 0 1-2 2" stroke="currentColor" stroke-width="1.5"/><path d="M7 9h6M7 12h6M7 15h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
    event:'<rect x="3.5" y="5" width="17" height="16" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M3.5 9h17M8 3v4M16 3v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
    snake:'<path d="M5 18c4 0 4-4 8-4s4 4 6 4M5 18c0-4 4-4 4-8s-2-4-4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="18.5" cy="6" r="1" fill="currentColor"/>'
  };

  function loc() { return document.documentElement.getAttribute('lang') || 'ar'; }
  function dict() { return (typeof I18N !== 'undefined' && I18N[loc()]) || null; }
  function t(obj) { const l = loc(); return (obj && (obj[l] || obj.ar || obj.en)) || ''; }
  function sorted() { return newsData.slice().sort((a, b) => (b.date || '').localeCompare(a.date || '')); }
  /* الخبر المطلوب عرضه منفردًا: نقرأه من ?news= (الأكثر موثوقية) ثم من #hash القديم كاحتياط */
  function selectedNewsKey() {
    try {
      const q = new URLSearchParams(location.search).get('news');
      if (q) return q;
    } catch (e) {}
    const h = (location.hash || '').replace(/^#/, '');
    return h ? decodeURIComponent(h) : '';
  }
  function svg(icon) { return '<svg viewBox="0 0 24 24" fill="none">' + (ICONS[icon] || ICONS.news) + '</svg>'; }
  function fmtDate(d, opts) {
    const dt = new Date(d);
    if (isNaN(dt)) return d || '';
    return dt.toLocaleDateString(loc() === 'en' ? 'en-GB' : (loc() === 'he' ? 'he-IL' : 'ar'), opts);
  }
  function scopeLabel(scope) {
    const d = dict();
    if (d && d.news && d.news[scope]) return d.news[scope];
    return scope === 'global' ? 'عالمي' : 'محلي';
  }

  function renderHero() {
    const wrap = document.querySelector('.hero-news');
    if (!wrap) return;
    const all = sorted().slice(0, HERO_COUNT);
    if (!all.length) return;
    const locals = all.filter((n) => n.scope === 'local');
    const globals = all.filter((n) => n.scope === 'global');
    const d = dict();

    const card = (n) =>
      '<a class="news-card news-' + n.scope + '" href="news.html?news=' + encodeURIComponent(n.date) + '">' +
        '<span class="news-card-icon">' + svg(n.icon) + '</span>' +
        '<span class="news-card-text">' +
          '<span class="news-card-title">' + t(n.title) + '</span>' +
        '</span></a>';

    const col = (title, arr, cls) =>
      '<div class="news-col ' + cls + '">' +
        '<div class="news-col-head">' + title + '</div>' +
        arr.map(card).join('') +
      '</div>';

    const localTitle = (d && d.news && d.news.localTitle) || 'أخبار محلية';
    const globalTitle = (d && d.news && d.news.globalTitle) || 'أخبار عالمية';
    const archiveTxt = (d && d.news && d.news.archiveLink) || 'أرشيف الأخبار ←';

    // العمود الأول يظهر يمينًا في RTL (محلية) والثاني يسارًا (عالمية)
    wrap.innerHTML =
      '<div class="news-columns">' +
        col(localTitle, locals, 'news-col-local') +
        col(globalTitle, globals, 'news-col-global') +
      '</div>' +
      '<a class="news-archive-link" href="news.html">' + archiveTxt + '</a>';
  }

  /* رأس الصفحة العام (وضع الأرشيف) */
  function setGenericHero(d) {
    const w = document.getElementById('news-hero-wrap');
    if (!w || !d) return;
    w.innerHTML =
      '<div class="breadcrumb"><a href="index.html">' + d.nav.home + '</a> / <span>' + d.news.breadcrumb + '</span></div>' +
      '<div class="eyebrow">' + d.news.eyebrow + '</div>' +
      '<h1>' + d.news.title + '</h1>' +
      '<p>' + d.news.lead + '</p>';
  }

  /* رأس الصفحة الخاص بخبر مفرد (يحاكي رأس صفحات المقالات) */
  function setArticleHero(n, d) {
    const w = document.getElementById('news-hero-wrap');
    if (!w || !d) return;
    w.innerHTML =
      '<div class="breadcrumb"><a href="index.html">' + d.nav.home + '</a> / ' +
        '<a href="news.html">' + d.news.breadcrumb + '</a> / <span>' + t(n.title) + '</span></div>' +
      '<div class="eyebrow">' + scopeLabel(n.scope) + '</div>' +
      '<h1>' + t(n.title) + '</h1>';
  }

  /* عرض الخبر كمقال كامل: رأس صفحة + جسم مقال (تمهيد + أقسام + تنويه) */
  function renderSingleArticle(n, d, list) {
    setArticleHero(n, d);

    const warnIcon =
      '<svg width="30" height="30" viewBox="0 0 24 24" fill="none"><path d="M12 2l9 4.5v6c0 5.2-3.8 8.6-9 9.5-5.2-.9-9-4.3-9-9.5v-6L12 2z" stroke="currentColor" stroke-width="1.7"/><path d="M12 8v5M12 16.2v.1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';

    const A = (typeof newsArticles !== 'undefined' && newsArticles[n.date]) || null;

    let html = '<article class="news-article-inner">';
    html += '<p class="article-intro">' + t(n.body) + '</p>';

    if (A && A.sections) {
      html += A.sections.map(function (s) {
        return '<h2>' + t(s.h) + '</h2><p>' + t(s.p) + '</p>';
      }).join('');
    }

    if (A && A.note) {
      html += '<div class="gear-warning">' + warnIcon +
        '<div><h3>' + ((d.news && d.news.noteLabel) || 'تنويه') + '</h3>' +
        '<p>' + t(A.note) + '</p></div></div>';
    }

    const backTxt = (d.news && d.news.allNews) || 'كل الأخبار ←';
    html += '<a class="news-back" href="news.html">' + backTxt + '</a>';
    html += '</article>';

    list.className = 'news-article';
    list.innerHTML = html;
    if (typeof window !== 'undefined' && window.scrollTo) { try { window.scrollTo(0, 0); } catch (e) {} }
  }

  function renderArchive() {
    const list = document.getElementById('news-archive');
    if (!list) return;
    const all = sorted();
    const d = dict();
    if (!all.length) {
      list.innerHTML = '<p class="news-empty">' +
        ((d && d.news && d.news.empty) || 'لا توجد أخبار بعد.') + '</p>';
      return;
    }
    const readMore = (d && d.news && d.news.readMore) || 'اقرأ المزيد ←';
    const item = (n) =>
      '<a class="news-item news-' + n.scope + '" href="news.html?news=' + encodeURIComponent(n.date) + '">' +
        '<div class="news-item-icon">' + svg(n.icon) + '</div>' +
        '<div class="news-item-body">' +
          '<div class="news-item-meta">' +
            '<span class="news-scope">' + scopeLabel(n.scope) + '</span>' +
          '</div>' +
          '<h3>' + t(n.title) + '</h3>' +
          '<p>' + t(n.body) + '</p>' +
          '<span class="news-item-link">' + readMore + '</span>' +
        '</div></a>';

    // إذا حُدّد خبر معيّن (?news=التاريخ أو #التاريخ القديم) → اعرضه كمقال صفحة كاملة
    const key = selectedNewsKey();
    const single = key ? all.find((n) => n.date === key) : null;
    if (single) {
      renderSingleArticle(single, d, list);
      return;
    }

    // غير ذلك (الأرشيف الكامل) → أعد رأس الصفحة العام واعرض كل الأخبار
    setGenericHero(d);
    list.className = 'news-archive';
    const section = (title, arr, cls) =>
      arr.length ? '<h2 class="news-arch-head ' + cls + '">' + title + '</h2>' + arr.map(item).join('') : '';
    const locals = all.filter((n) => n.scope === 'local');
    const globals = all.filter((n) => n.scope === 'global');
    const localTitle = (d && d.news && d.news.localTitle) || 'أخبار محلية';
    const globalTitle = (d && d.news && d.news.globalTitle) || 'أخبار عالمية';
    list.innerHTML =
      section(localTitle, locals, 'arch-local') +
      section(globalTitle, globals, 'arch-global');
  }

  function boot() { renderHero(); renderArchive(); }
  document.addEventListener('DOMContentLoaded', boot);
  document.addEventListener('i18n:applied', boot);
  window.addEventListener('hashchange', renderArchive);
  window.addEventListener('popstate', renderArchive);
})();
