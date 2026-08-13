/* =========================================================
   بيانات المحتوى — هذا هو الملف الوحيد الذي تحتاج لتعديله
   لإضافة نوع أفعى، مغامرة، صورة، فيديو أو مقال جديد.
   فقط أضف عنصرًا جديدًا للمصفوفة المناسبة، بنفس الشكل تمامًا،
   وسيظهر تلقائيًا في الموقع بكل اللغات الثلاث.

   لا تحب تعديل الكود يدويًا؟ افتح editor.html (بجانب هذا الملف)
   في متصفحك — لوحة تحرير بنماذج بسيطة، بدون كتابة أي كود،
   ثم نزّل data.js الجديد من هناك وضعه هنا بدل هذا الملف.
   ========================================================= */

/* ---------- 1) دليل الأفاعي: 9 سامة + 12 غير سامة ---------- */
const speciesData = [

  { type:"venom", latin:"Daboia palaestinae", img:"images/daboia-palaestinae.jpg", imgArticle:"images/article-daboia-palaestinae.jpg",
    name:{ ar:"الأفعى الفلسطينية", he:"צפע ארץ ישראלי", en:"Palestine Viper" },
    desc:{
      ar:"أكثر الأفاعي السامة انتشارًا في إسرائيل، وهي المسؤولة عن معظم حالات اللدغات السامة في المنطقة. تُعرف محليًا أيضًا بـ«أفعى البقلاوة» لنقشها المعيّن الشبيه بقطع البقلاوة. لا تحاول الإمساك بها أو الاقتراب منها حتى لو بدت هادئة، لأنها قد تلدغ بسرعة كبيرة.",
      he:"הנחש הארסי הנפוץ ביותר בישראל, והאחראי לרוב ההכשות הארסיות באזור. מכונה מקומית גם 'נחש הבקלאווה' בשל תבנית המעוינים שעל גבו. אין להתקרב אליו או לנסות ללכוד אותו גם אם הוא נראה רגוע, שכן הוא עלול להכיש במהירות רבה.",
      en:"The most widespread venomous snake in Israel and the one responsible for most venomous bites in the region. Also locally nicknamed the 'baklawa snake' for its diamond-shaped back pattern. Never approach or try to handle it even when it appears calm — it can strike extremely fast." },
    length:{ ar:"حتى 140 سم", he:"עד 140 ס״מ", en:"Up to 140 cm" },
    diet:{ ar:"الفئران والطيور والسحالي، وأحيانًا ثعابين أخرى", he:"עכברים, ציפורים, לטאות ולעיתים נחשים אחרים", en:"Mice, birds, lizards, occasionally other snakes" },
    range:{ ar:"من بئر السبع حتى الحدود اللبنانية", he:"מבאר שבע ועד גבול לבנון", en:"Beer Sheva to the Lebanese border" } },

  { type:"venom", latin:"Montivipera bornmuelleri", img:"images/montivipera-bornmuelleri.jpg", imgArticle:"images/article-montivipera-bornmuelleri.jpg",
    name:{ ar:"أفعى جبل الشيخ", he:"צפע החרמון", en:"Mount Hermon Viper" },
    desc:{
      ar:"أفعى سامة نادرة جدًا، وفي إسرائيل تعيش في منطقة واحدة فقط: المرتفعات العليا من جبل الشيخ. تتحمل البرد القارس وتنشط في فترة قصيرة من السنة بعد ذوبان الثلوج.",
      he:"נחש ארסי נדיר מאוד, ובישראל הוא חי רק באזור אחד: החלק הגבוה של הר החרמון. עמיד לקור עז ופעיל בתקופה קצרה בשנה לאחר הפשרת השלגים.",
      en:"A very rare venomous viper that in Israel lives in just one place: the high elevations of Mount Hermon. It tolerates harsh cold and is active only briefly each year after the snow melts." },
    length:{ ar:"حتى 80 سم", he:"עד 80 ס״מ", en:"Up to 80 cm" },
    diet:{ ar:"الفئران والسحالي", he:"עכברים ולטאות", en:"Mice and lizards" },
    range:{ ar:"مرتفعات جبل الشيخ فقط", he:"האזור הגבוה של החרמון בלבד", en:"High Mount Hermon only" } },

  { type:"venom", latin:"Cerastes cerastes", img:"images/cerastes-cerastes.jpg", imgArticle:"images/article-cerastes-cerastes.jpg",
    name:{ ar:"أفعى الرمال المقرنة", he:"עכן חרטומים", en:"Horned Viper" },
    desc:{
      ar:"يميزها قرنان صغيران فوق عينيها، وتتحرك بحركة التعرج الجانبي المميزة فوق الرمال. تُطمر نفسها جزئيًا في الرمل وتترصد فريستها بصبر شديد.",
      he:"מזוהה בשני קרניים קטנות מעל העיניים, ונע בתנועת דישדוש צדדית אופיינית מעל החול. טומן עצמו חלקית בחול ואורב לטרפו בסבלנות רבה.",
      en:"Identified by two small horns above its eyes, moving with a distinctive sidewinding motion across the sand. It partially buries itself and ambushes its prey with great patience." },
    length:{ ar:"حتى 80 سم", he:"עד 80 ס״מ", en:"Up to 80 cm" },
    diet:{ ar:"الفئران والسحالي", he:"עכברים ולטאות", en:"Mice and lizards" },
    range:{ ar:"المناطق الرملية في شمال غرب النقب", he:"האזורים החוליים שבצפון-מערב הנגב", en:"Sandy areas of the northwestern Negev" } },

  { type:"venom", latin:"Cerastes gasperettii", img:"images/cerastes-gasperettii.jpg", imgArticle:"images/article-cerastes-gasperettii.jpg",
    name:{ ar:"أفعى الرمال الكبيرة", he:"עכן גדול", en:"Large Sand Viper" },
    desc:{
      ar:"أكبر من أفعى الرمال المقرّنة وغالبًا بلا قرون، تعيش في الكثبان الرملية والوديان الصحراوية الجنوبية. إذا صادفتها فلا تقترب ولا تحاول لمسها أو الإمساك بها، واترك لها مساحة لتبتعد بأمان.",
      he:"גדול מעכן החרטומים ולרוב ללא קרניים, חי בדיונות ובוואדיות מדבריים בדרום. אם נתקלתם בו, אל תתקרבו, אל תנסו לגעת בו או ללכוד אותו, ותנו לו להמשיך בדרכו בבטחה.",
      en:"A venomous snake of the sandy lowlands, larger than the horned viper and usually hornless. If you encounter one, do not approach it or try to touch or capture it — give it space to move away safely." },
    length:{ ar:"حتى 90 سم", he:"עד 90 ס״מ", en:"Up to 90 cm" },
    diet:{ ar:"الفئران والسحالي، وأحيانًا الطيور", he:"עכברים ולטאות, ולעיתים גם ציפורים", en:"Mice and lizards, sometimes birds" },
    range:{ ar:"المناطق الرملية ووادي عربة", he:"אזורים חוליים והערבה", en:"Sandy areas & the Arava" } },

  { type:"venom", latin:"Cerastes vipera", img:"images/cerastes-vipera.jpg", imgArticle:"images/article-cerastes-vipera.jpg",
    name:{ ar:"أفعى الرمال الصغيرة", he:"עכן קטן", en:"Avicenna's Sand Viper" },
    desc:{
      ar:"أصغر أفاعي إسرائيل السامة، تطمر جسمها بالكامل تحت الرمل الناعم تاركة عينيها فقط، وتصطاد بالكمين. رغم صغر حجمها تبقى أفعى سامة يجب الابتعاد عنها.",
      he:"הצפע הארסי הקטן ביותר בישראל, קובר את גופו כולו בחול הרך ומשאיר רק את עיניו, וצד במארב. למרות גודלו הקטן זהו נחש ארסי שיש להתרחק ממנו.",
      en:"Israel's smallest venomous snake, burying itself entirely in soft sand with only its eyes exposed and hunting by ambush. Despite its small size it is venomous and should be given a wide berth." },
    length:{ ar:"حتى 30 سم", he:"עד 30 ס״מ", en:"Up to 30 cm" },
    diet:{ ar:"السحالي بشكل رئيسي", he:"בעיקר לטאות", en:"Mainly lizards" },
    range:{ ar:"المناطق الرملية في شمال غرب النقب", he:"האזורים החוליים שבצפון-מערב הנגב", en:"Sandy areas of the northwestern Negev" } },

  { type:"venom", latin:"Pseudocerastes fieldi", img:"images/pseudocerastes-fieldi.jpg", imgArticle:"images/article-pseudocerastes-fieldi.jpg",
    name:{ ar:"الأفعى المقرنة الصحراوية", he:"שפיפון", en:"Field's Horned Viper" },
    desc:{
      ar:"أفعى سامة متكيّفة بشكل مميز للعيش في البيئات الصحراوية. تُعرف أيضًا بـ«الكوبرا الكاذبة» لأنها تنفخ رقبتها كحيلة دفاعية. الصغار تتغذى أساسًا على السحالي، بينما تعتمد البالغة أكثر على الفئران والطيور.",
      he:"נחש ארסי המותאם במיוחד לחיים במדבר. מכונה גם 'הקוברה המזויפת' כי הוא מנפח את צווארו כתחבולת הגנה. הצעירים ניזונים בעיקר מלטאות, ואילו הבוגרים ניזונים בעיקר מעכברים ומציפורים.",
      en:"A venomous viper specially adapted to desert life. Also known as the 'false cobra' for inflating its neck as a defensive bluff. Juveniles feed mainly on lizards, while adults rely more on mice and birds." },
    length:{ ar:"حتى 90 سم (غالبًا أقصر)", he:"עד 90 ס״מ (בדרך כלל קצר יותר)", en:"Up to 90 cm (usually shorter)" },
    diet:{ ar:"السحالي والفئران والطيور", he:"לטאות, עכברים וציפורים", en:"Lizards, mice and birds" },
    range:{ ar:"وسط وجنوب غرب النقب", he:"מרכז הנגב ודרום-מערב הנגב", en:"Central & southwestern Negev" } },

  { type:"venom", latin:"Echis coloratus", img:"images/echis-coloratus.jpg", imgArticle:"images/article-echis-coloratus.jpg",
    name:{ ar:"أفعى الحراشف المنشارية", he:"אפעה", en:"Saw-scaled Viper" },
    desc:{
      ar:"من أكثر الأفاعي السامة انتشارًا في المناطق الصحراوية. تحتك حراشيفها الجانبية معًا لتصدر صوت «منشار» تحذيريًا مسموعًا قبل أن تلدغ. من أخطر أفاعي المناطق الصخرية الجافة رغم صغر حجمها.",
      he:"אחד הנחשים הארסיים הנפוצים באזורים המדבריים. משפשף קשקשים צדדיים זה בזה ומפיק קול 'מסור' מזהיר לפני ההכשה. מהמסוכנים באזורים סלעיים יבשים למרות גודלו הקטן.",
      en:"A venomous snake found across several desert regions of Israel. It rubs its side scales together to produce an audible warning 'sawing' sound before striking, and ranks among the most dangerous species of dry rocky areas despite its small size." },
    length:{ ar:"حتى 90 سم", he:"עד 90 ס״מ", en:"Up to 90 cm" },
    diet:{ ar:"الطيور والسحالي والفئران والحشرات والضفادع", he:"ציפורים, לטאות, עכברים, חרקים וקרפדות", en:"Birds, lizards, mice, insects and toads" },
    range:{ ar:"جبال إيلات، النقب، البحر الميت، صحراء يهودا، غور الأردن", he:"הרי אילת, הנגב, ים המלח, מדבר יהודה ובקעת הירדן", en:"Eilat mountains, Negev, Dead Sea, Judean desert, Jordan Valley" } },

  { type:"venom", latin:"Atractaspis engaddensis", img:"images/atractaspis-engaddensis.jpg", imgArticle:"images/article-atractaspis-engaddensis.jpg",
    name:{ ar:"الأسود الخبيث", he:"שרף עין גדי – צפעון שחור", en:"Black Mole Viper" },
    desc:{
      ar:"يعيش في المناطق الصحراوية وينشط بعد حلول الظلام. يتميز بقدرته على اللدغ إلى الخلف — لذلك فإن الإمساك به من خلف الرأس (الطريقة المعتادة مع باقي الأفاعي) خطأ خطير جدًا وشائع. لا تحاول رفعه أو حمله بيدك إطلاقًا.",
      he:"חי באזורים מדבריים ויוצא לפעילות אחרי רדת החשכה. בעל יכולת להכיש גם לאחור — ולכן אחיזה מאחורי הראש (השיטה המקובלת בנחשים אחרים) היא טעות מסוכנת מאוד ונפוצה. אין לנסות להרים אותו או להחזיק אותו ביד.",
      en:"A venomous desert snake that lives in arid regions and becomes active after dark. It can strike backward, making attempts to handle it especially dangerous — never try to pick it up or hold it in your hand." },
    length:{ ar:"حتى 85 سم", he:"עד 85 ס״מ", en:"Up to 85 cm" },
    diet:{ ar:"السحالي بشكل رئيسي", he:"בעיקר לטאות", en:"Mainly lizards" },
    range:{ ar:"وسط النقب، عربة، البحر الميت، صحراء يهودا، غور الأردن", he:"מרכז הנגב, הערבה, ים המלח, מדבר יהודה ובקעת הירדן", en:"Central Negev, Arava, Dead Sea, Judean desert, Jordan Valley" } },

  { type:"venom", latin:"Walterinnesia aegyptia", img:"images/walterinnesia-aegyptia.jpg", imgArticle:"images/article-walterinnesia-aegyptia.jpg",
    name:{ ar:"الصل الأسود / كوبرا الصحراء", he:"פתן שחור", en:"Black Desert Cobra" },
    desc:{
      ar:"من أخطر الثعابين السامة في إسرائيل، ولونه الأسود اللامع يميزه بسهولة. ورغم مظهره المهيب فإنه لا يهاجم الإنسان دون سبب، وغالبًا ما يفضّل الابتعاد عن المواجهة. سمّه عصبي التأثير.",
      he:"מהנחשים הארסיים המסוכנים בישראל, וצבעו השחור המבריק מזהה אותו בקלות. למרות מראהו המרשים הוא אינו תוקף בני אדם ללא סיבה, וברוב המקרים יעדיף להימנע ממפגש. רעלו נוירוטוקסי.",
      en:"One of Israel's most dangerous venomous snakes, easily identified by its glossy black color. Despite its imposing appearance it doesn't attack humans without cause and usually prefers to avoid encounters. Its venom is neurotoxic." },
    length:{ ar:"حتى 125 سم", he:"עד 125 ס״מ", en:"Up to 125 cm" },
    diet:{ ar:"العلاجم والسحالي، وأحيانًا الجيف", he:"קרפדות ולטאות, ולעיתים גם פגרים", en:"Toads and lizards, sometimes carrion" },
    range:{ ar:"النقب، عربة، البحر الميت، شرق جبال القدس", he:"הנגב, הערבה, בקעת ים המלח ומזרח הרי ירושלים", en:"Negev, Arava, Dead Sea basin, eastern Jerusalem hills" } },

  { type:"safe", latin:"Dolichophis jugularis", img:"images/dolichophis-jugularis.jpg", imgArticle:"images/article-dolichophis-jugularis.jpg",
    name:{ ar:"الحنش الأسود (العربيد)", he:"זעמן שחור", en:"Large Whip Snake" },
    desc:{
      ar:"ثعبان كبير ولامع يتغير مظهره مع العمر: عند الفقس يكون بنيًا فاتحًا مع بقع، ثم يصبح أسود لامعًا بالكامل تقريبًا مع بقاء الفك السفلي فاتحًا. من أكثر الثعابين انتشارًا، ينشط نهارًا ونادرًا ما يُشاهد ليلًا. عيناه كبيرتان وبؤبؤهما دائري.",
      he:"נחש גדול ומבריק שמראהו משתנה במהלך חייו: כשהוא בוקע צבעו חום בהיר עם כתמים, ועם ההתבגרות גופו הופך לשחור מבריק ואחיד בעוד הלסת התחתונה נשארת בהירה. מהנחשים הנפוצים בישראל, פעיל בעיקר ביום ורק לעיתים נדירות נראה בלילה. עיניו גדולות והאישונים עגולים.",
      en:"A large, glossy snake whose appearance changes with age: hatchlings are pale brown with blotches, while adults turn almost entirely glossy black with a pale lower jaw. One of Israel's most common snakes, active by day and rarely seen at night. Large eyes with round pupils." },
    length:{ ar:"حتى 250 سم", he:"עד 250 ס״מ", en:"Up to 250 cm" },
    diet:{ ar:"القوارض والطيور والسحالي والثعابين", he:"מכרסמים, ציפורים, לטאות ונחשים", en:"Rodents, birds, lizards and snakes" },
    range:{ ar:"من بئر السبع حتى الحدود اللبنانية", he:"מקו באר שבע ועד גבול לבנון", en:"From Beer Sheva to the Lebanese border" } },

  { type:"safe", latin:"Malpolon insignitus", img:"images/malpolon-insignitus.jpg", imgArticle:"images/article-malpolon-insignitus.jpg",
    name:{ ar:"الحنش الشرقي، ثعبان مونبلييه الشرقي", he:"תלום קשקשים מצוי", en:"Eastern Montpellier Snake" },
    desc:{
      ar:"من أكبر الثعابين في المنطقة. يتميز ببروز الحراشف فوق العينين الذي يمنحه مظهر «الحاجبين»، وبأخدود طولي في منتصف كل حرشفة. سريع الحركة ومتسلق ماهر. تنبيه: هو ثعبان شبه سام، ولا يُعد خطرًا كبيرًا على الإنسان لكن عضته قد تسبب أعراضًا موضعية مؤلمة.",
      he:"אחד הנחשים הגדולים בישראל. סימן ההיכר שלו הוא קשקשים בולטים מעל העיניים היוצרים מראה של 'גבות', ותלם במרכז כל קשקש. מהיר ומטפס היטב. שימו לב: זהו נחש תת-ארסי, ואינו מסוכן במיוחד לאדם, אך הכשתו עלולה לגרום לתסמינים מקומיים כואבים.",
      en:"One of the largest snakes in the region. Recognized by protruding scales above the eyes giving it a 'browed' look, and a groove down the center of each scale. Fast-moving and an excellent climber. Note: it is rear-fanged and mildly venomous — not a serious danger to humans, but its bite can cause painful local symptoms." },
    length:{ ar:"حتى 210 سم", he:"עד 210 ס״מ", en:"Up to 210 cm" },
    diet:{ ar:"الطيور والسحالي والثعابين والقوارض", he:"ציפורים, לטאות, נחשים ומכרסמים", en:"Birds, lizards, snakes and rodents" },
    range:{ ar:"المناطق المتوسطية من بئر السبع شمالًا", he:"אזורים ים-תיכוניים מבאר שבע צפונה", en:"Mediterranean zones from Beer Sheva northward" } },

  { type:"safe", latin:"Spalerosophis diadema", img:"images/spalerosophis-diadema.jpg", imgArticle:"images/article-spalerosophis-diadema.jpg",
    name:{ ar:"حنش التاج الصحراوي أو ثعبان التاج الصحراوي", he:"מטבעון", en:"Diadem Snake" },
    desc:{
      ar:"من أطول الثعابين الصحراوية في إسرائيل. لون جسمه بين البني والأصفر والبرتقالي، وعلى ظهره بقع بنية تشبه العملات أو الصلبان. رأسه أعرض من رقبته وغالبًا يظهر بين عينيه شريط بني. ينشط صيفًا بعد الظهر وليلًا، ويجيد تسلق الأشجار لكنه يقضي معظم وقته على الأرض.",
      he:"אחד הנחשים המדבריים הארוכים בישראל. צבע גופו חום, צהבהב או כתום, ועל גבו כתמים חומים דמויי מטבעות או צלבים. הראש רחב מהצוואר, ובין העיניים מופיע לרוב פס חום. פעיל בקיץ בשעות אחר הצוהריים המאוחרות ובלילה, מטפס היטב אך עיקר פעילותו על הקרקע.",
      en:"One of Israel's longest desert snakes. Its body ranges from brown to yellowish or orange, with brown coin- or cross-shaped blotches along the back. The head is broader than the neck, usually with a brown band between the eyes. Active in late afternoon and at night in summer; climbs well but spends most of its time on the ground." },
    length:{ ar:"حتى 150 سم", he:"עד 150 ס״מ", en:"Up to 150 cm" },
    diet:{ ar:"السحالي والقوارض والطيور", he:"לטאות, מכרסמים וציפורים", en:"Lizards, rodents and birds" },
    range:{ ar:"النقب، العربة، البحر الميت، وكثبان السهل الساحلي", he:"הנגב, הערבה, כיכר ים המלח וחולות מישור החוף", en:"Negev, Arava, Dead Sea basin, coastal plain dunes" } },

  { type:"safe", latin:"Hemorrhois nummifer", img:"images/hemorrhois-nummifer.jpg", imgArticle:"images/article-hemorrhois-nummifer.jpg",
    name:{ ar:"الثعبان البقلاوي (الحنش البقلاوية)", he:"זעמן מטבעות", en:"Coin-marked Snake" },
    desc:{
      ar:"ثعبان متوسط الحجم رمادي لامع، يمتد على منتصف ظهره صف من البقع الداكنة الدائرية أو الشبيهة بالصليب. يمتلك قدرة مميزة على تسلق النباتات والجدران الحجرية وقد يدخل المنازل حتى في الطوابق المرتفعة. يبدأ نشاطه عند الغسق ويستمر ليلًا، وقد يُشاهد حتى في الشتاء.",
      he:"נחש בינוני בגודלו וצבעו אפור מבריק, ולאורך מרכז גבו שורת כתמים כהים עגולים או דמויי צלב. בעל יכולת מרשימה לטפס על צמחייה וקירות אבן, ולעיתים נכנס לבתים גם בקומות גבוהות. פעילותו מתחילה עם רדת החשיכה ונמשכת בלילה, וניתן לראותו פעיל גם בחורף.",
      en:"A medium-sized, glossy grey snake with a row of dark round or cross-shaped blotches down the center of its back. A remarkable climber of vegetation and stone walls, it sometimes enters homes even on upper floors. Active from dusk through the night, and can be seen even in winter." },
    length:{ ar:"حتى 125 سم", he:"עד 125 ס״מ", en:"Up to 125 cm" },
    diet:{ ar:"الطيور والقوارض والخفافيش والسحالي، وحتى الثعابين السامة", he:"ציפורים, מכרסמים, עטלפים, לטאות ואף נחשים ארסיים", en:"Birds, rodents, bats, lizards, even venomous snakes" },
    range:{ ar:"من شمال النقب حتى جبل الشيخ", he:"מצפון הנגב ועד החרמון", en:"From the northern Negev to Mount Hermon" } },

  { type:"safe", latin:"Platyceps rogersi", img:"images/platyceps-rogersi.jpg", imgArticle:"images/article-platyceps-rogersi.jpg",
    name:{ ar:"الحنش ذو السروج", he:"זעמן אוכפים", en:"Saddled Racer" },
    desc:{
      ar:"ثعبان متوسط نحيف ورشيق رمادي اللون. تمتد من الرقبة على طول الظهر بقع رمادية تحدها خطوط عرضية بيضاء، وتبدأ بالتلاشي من منتصف الجسم. توجد بقعتان بيضاوان أسفل كل عين. ينشط صباحًا وبعد الظهر، ويختبئ تحت الأجسام أو في جحور القوارض.",
      he:"זעמן בינוני, דק ועדין, בעל גוון גוף אפור. מהצוואר לאורך עמוד השדרה מופיעים כתמים אפורים התחומים בקווים רוחביים לבנים, הדוהים מאמצע הגוף. מתחת לכל עין יש שני כתמים לבנים. פעיל בעיקר בשעות הבוקר ואחר הצהריים, ומוצא מחסה מתחת לעצמים או במחילות מכרסמים.",
      en:"A slender, delicate medium-sized racer with a grey body. Grey blotches bordered by white cross-lines run from the neck along the spine, fading from mid-body onward. Two white spots sit beneath each eye. Active mainly in morning and afternoon, sheltering under surface objects or in rodent burrows." },
    length:{ ar:"حتى 100 سم", he:"עד 100 ס״מ", en:"Up to 100 cm" },
    diet:{ ar:"السحالي والمفصليات، وأحيانًا القوارض", he:"לטאות ופרוקי רגליים, ולעיתים מכרסמים", en:"Lizards and arthropods, occasionally rodents" },
    range:{ ar:"من أريحا جنوبًا: غور الأردن، البحر الميت، العربة والنقب", he:"מיריחו דרומה: בקעת הירדן, ים המלח, הערבה והנגב", en:"From Jericho southward: Jordan Valley, Dead Sea, Arava, Negev" } },

  { type:"safe", latin:"Platyceps collaris", img:"images/platyceps-collaris.jpg", imgArticle:"images/article-platyceps-collaris.jpg",
    name:{ ar:"الحنش الزيتوني", he:"זעמן זיתני", en:"Collared Dwarf Racer" },
    desc:{
      ar:"ثعبان نحيف ورشيق، لون جسمه بين الأخضر الزيتوني والبني والرمادي، ورأسه برتقالي مائل للصدأ. يميزه وجود بقعة سوداء على الأقل خلف الرأس تشبه الطوق يحدها لون أبيض. من أكثر الثعابين انتشارًا في البيئات المتوسطية، ينشط نهارًا ويجيد التسلق، وهو سريع يطارد فريسته حتى يصطادها.",
      he:"נחש דק ועדין, צבע גופו נע בין ירוק זיתי, חום ואפור, וראשו כתום-חלוד. מזוהה בכתם שחור אחד לפחות מאחורי הראש הדומה לקולר ותחום בלבן. מהנחשים הנפוצים בבתי גידול ים-תיכוניים, פעיל ביום ומטפס היטב, ומהיר ברדיפה אחר טרפו.",
      en:"A slender, delicate snake ranging from olive green to brown or grey, with a rust-orange head. Identified by at least one black collar-like blotch behind the head, bordered in white. One of the most common snakes of Mediterranean habitats, active by day, a capable climber that chases down its prey." },
    length:{ ar:"حتى 110 سم", he:"עד 110 ס״מ", en:"Up to 110 cm" },
    diet:{ ar:"السحالي بشكل رئيسي، والصغار تأكل المفصليات", he:"בעיקר לטאות, והצעירים גם פרוקי רגליים", en:"Mainly lizards; juveniles also take arthropods" },
    range:{ ar:"البيئات المتوسطية من شمال النقب حتى جبل الشيخ", he:"בתי גידול ים-תיכוניים מצפון הנגב ועד החרמון", en:"Mediterranean habitats from northern Negev to Mount Hermon" } },

  { type:"safe", latin:"Psammophis schokari", img:"images/psammophis-schokari.jpg", imgArticle:"images/article-psammophis-schokari.jpg",
    name:{ ar:"أبو السيور او ثعبان شقاري عداء الرمال الأفرو-آسيوية", he:"ארבע קו מובהק", en:"Schokari Sand Racer" },
    desc:{
      ar:"ثعبان نحيف قوي الجسم، يختلف شكله بين شمال البلاد وجنوبها: في الشمال أربعة خطوط طولية داكنة على ظهره، وفي الصحراء تصبح أقل وضوحًا وقد تختفي. سريع جدًا وينشط نهارًا، ويعتمد على بصره القوي في اقتناص فريسته. تنبيه: تحت سام لكنه غير خطير على الإنسان.",
      he:"נחש דק ובעל גוף חזק, ומראהו משתנה בין צפון הארץ לדרומה: בצפון ארבעה פסים כהים לאורך הגוף, ובאזורים מדבריים הפסים דוהים ולעיתים נעלמים כמעט לגמרי. מהיר מאוד ופעיל ביום, ומאתר את טרפו בעזרת חוש ראייה מפותח. שימו לב: תת-ארסי אך אינו מסוכן לאדם.",
      en:"A slender but powerfully built snake whose appearance varies from north to south: four dark longitudinal stripes in the north, fading or almost vanishing in desert regions. Extremely fast and day-active, locating prey with keen eyesight. Note: rear-fanged and mildly venomous, but harmless to humans." },
    length:{ ar:"حتى 120 سم", he:"עד 120 ס״מ", en:"Up to 120 cm" },
    diet:{ ar:"السحالي والثعابين والطيور والقوارض", he:"לטאות, נחשים, ציפורים ומכרסמים", en:"Lizards, snakes, birds and rodents" },
    range:{ ar:"جميع أنحاء إسرائيل، من إيلات حتى جبل الشيخ", he:"בכל רחבי ישראל, מאילת ועד החרמון", en:"Throughout Israel, from Eilat to Mount Hermon" } },

  { type:"safe", latin:"Natrix tessellata", img:"images/natrix-tessellata.jpg", imgArticle:"images/article-natrix-tessellata.jpg",
    name:{ ar:"ثعبان الماء", he:"נחש מים", en:"Dice Snake" },
    desc:{
      ar:"يتراوح لون جسمه بين الأخضر والبني والأسود، ويميزه بقع سوداء كثيرة على ظهره مرتبة بشكل يشبه رقعة الشطرنج، وبطن أصفر أو برتقالي مع بقع سوداء غير منتظمة. ينشط نهارًا وليلًا، ويعيش قرب البرك الطبيعية والاصطناعية، وقد يُشاهد بعيدًا عن الماء أحيانًا.",
      he:"צבע גופו נע בין ירוק, חום ושחור, ומאופיין בכתמים שחורים רבים על גבו המסודרים כמו לוח שחמט. בטנו צהובה או כתומה עם כתמים שחורים לא סדירים. פעיל ביום ובלילה, חי בקרבת בריכות טבעיות ומלאכותיות, ולעיתים נראה גם הרחק ממקורות מים.",
      en:"Its body ranges from green to brown or black, marked by numerous black blotches arranged in a checkerboard pattern along the back, with a yellow or orange belly bearing irregular black spots. Active both day and night, living near natural and artificial pools, though sometimes seen far from water." },
    length:{ ar:"حتى 100 سم", he:"עד 100 ס״מ", en:"Up to 100 cm" },
    diet:{ ar:"البرمائيات والأسماك، وأحيانًا الزواحف والقوارض والطيور", he:"דו-חיים ודגים, ולעיתים זוחלים, מכרסמים וציפורים", en:"Amphibians and fish; occasionally reptiles, rodents and birds" },
    range:{ ar:"البيئات المتوسطية قرب المسطحات المائية", he:"בתי גידול ים-תיכוניים בקרבת מקווי מים", en:"Mediterranean habitats near water bodies" } },

  { type:"safe", latin:"Telescopus fallax", img:"images/telescopus-fallax.jpg", imgArticle:"images/article-telescopus-fallax.jpg",
    name:{ ar:"حية عين القط المرقطة", he:"עין חתול חברבר", en:"European Cat Snake" },
    desc:{
      ar:"لون جسمها بني أو رمادي وعلى ظهرها بقع داكنة تشبه العملات المعدنية. رأسها أعرض من الرقبة، وعيناها تتميزان ببؤبؤ عمودي يشبه عين القط ومن هنا جاء اسمها. تنشط ليلًا وتجيد التسلق لكنها تقضي معظم وقتها على الأرض وتتحرك ببطء. تنبيه: شبه سامة لكنها غير خطيرة على الإنسان.",
      he:"גופו חום או אפור ועל גבו כתמים כהים דמויי מטבעות. ראשו רחב מהצוואר, והאישונים שלו מאונכים – ממש כמו של חתול, ומכאן שמו. פעיל לילה, מטפס היטב אך מבלה את רוב זמנו על הקרקע ונע באיטיות. שימו לב: תת-ארסי אך אינו מסוכן לאדם.",
      en:"Brown or grey with dark coin-like blotches along its back. Its head is broader than the neck and its pupils are vertical — just like a cat's, hence the name. Nocturnal and a good climber, though it spends most of its time on the ground, moving slowly. Note: rear-fanged and mildly venomous, but harmless to humans." },
    length:{ ar:"حتى 80 سم", he:"עד 80 ס״מ", en:"Up to 80 cm" },
    diet:{ ar:"السحالي وخاصة الوزغ، والثعابين الصغيرة", he:"לטאות ובמיוחד שממיות, ונחשים קטנים", en:"Lizards especially geckos, and small snakes" },
    range:{ ar:"من شمال النقب حتى الحدود اللبنانية", he:"מצפון הנגב ועד גבול לבנון", en:"From the northern Negev to the Lebanese border" } },

  { type:"safe", latin:"Eryx jaculus", img:"images/eryx-jaculus.jpg", imgArticle:"images/article-eryx-jaculus.jpg",
    name:{ ar:"الدساس المتوسطي او اصلة الرمال او ثعبان العاصرة", he:"חנק", en:"Javelin Sand Boa" },
    desc:{
      ar:"ثعبان قصير وسميك الجسم، له ذيل قصير ينتهي بطرف يشبه الجذع. الفك العلوي يغطي السفلي مما يساعده على الحفر، وحراشفه ملساء وعيناه صغيرتان ببؤبؤ عمودي. في المناطق الرملية يختبئ تحت الرمل ولا يظهر منه سوى الأنف والعينين ثم ينقض على فريسته. يقتل فريسته بالالتفاف حولها وخنقها.",
      he:"נחש עבה ובעל גוף מוצק, עם זנב קצר שקצהו דמוי גדם. הלסת העליונה בולטת מעל התחתונה ומסייעת לו להתחפר, קשקשיו חלקים ועיניו קטנות עם אישונים מאונכים. באזורים חוליים הוא מתחפר באדמה ורק עיניו וחרטומו בולטים החוצה, וכך ממתין לטרפו במארב. הורג את טרפו בכריכת גופו סביבו וחניקתו.",
      en:"A short, stocky snake with a blunt, stump-like tail tip. Its upper jaw overhangs the lower one, helping it burrow; its scales are smooth and its small eyes have vertical pupils. In sandy areas it buries itself with only nose and eyes showing, ambushing prey from below. It kills by coiling around its prey and constricting." },
    length:{ ar:"حتى 80 سم", he:"עד 80 ס״מ", en:"Up to 80 cm" },
    diet:{ ar:"القوارض والسحالي", he:"מכרסמים ולטאות", en:"Rodents and lizards" },
    range:{ ar:"من شمال النقب حتى جبل الشيخ", he:"מצפון הנגב ועד החרמון", en:"From the northern Negev to Mount Hermon" } },

  { type:"safe", latin:"Xerotyphlops vermicularis", img:"images/xerotyphlops-vermicularis.jpg", imgArticle:"images/article-xerotyphlops-vermicularis.jpg",
    name:{ ar:"الحية دقيقة الرأس", he:"נחשיל מצוי", en:"Blind Worm Snake" },
    desc:{
      ar:"ثعبان نحيف ورقيق جدًا، جسمه لامع وقد يكون لونه ورديًا أو بنيًا أو أسود، ومظهره العام يشبه دودة الأرض. عيناه صغيرتان جدًا. يقضي معظم حياته تحت الملاجئ ويمكن العثور عليه تحت جذوع الأشجار والحجارة. نشاطه أرضي وليلي بشكل أساسي، وقد يُشاهد وهو يعبر الطرق أو يدخل الحدائق.",
      he:"נחש דק ועדין מאוד, בעל גוף מבריק שצבעו יכול להיות ורוד, חום או שחור, ומראהו הכללי מזכיר תולעת אדמה. עיניו קטנות מאוד. מבלה חלק ניכר מחייו תחת מחסות וניתן למצוא אותו מתחת לגזעי עצים ואבנים. פעילותו קרקעית ובעיקר לילית, ולעיתים נצפה חוצה כבישים או חודר לגינות.",
      en:"A very slender, delicate snake with a glossy body that may be pink, brown or black, closely resembling an earthworm. Its eyes are minute. It spends most of its life under cover and can be found beneath tree trunks and stones. Ground-dwelling and mainly nocturnal, it is sometimes seen crossing roads or entering gardens." },
    length:{ ar:"حتى 40 سم", he:"עד 40 ס״מ", en:"Up to 40 cm" },
    diet:{ ar:"النمل الأبيض والنمل بمختلف مراحل نموه", he:"טרמיטים ונמלים בשלבי התפתחות שונים", en:"Termites and ants at various life stages" },
    range:{ ar:"جميع أنحاء إسرائيل", he:"בכל רחבי ישראל", en:"Throughout Israel" } },

  { type:"safe", latin:"Pseudopus apodus", img:"images/pseudopus-apodus.jpg", imgArticle:"images/article-pseudopus-apodus.jpg",
    name:{ ar:"السحلية الزجاجية (أبو قرع)", he:"קמטן", en:"European Glass Lizard (Sheltopusik)" },
    desc:{
      ar:"زاحف طويل بلا أرجل يُشتبه دائمًا بأنه أفعى، لكنه سحلية حقيقية (يمكن تمييزها بجفونها المتحركة وفتحة أذنها الظاهرة). غير سامة إطلاقًا وهادئة الطباع، تعيش بين الأعشاب والحقول.",
      he:"זוחל ארוך וחסר רגליים המבולבל תמיד עם נחש, אך הוא למעשה לטאה אמיתית (ניתן להבחין בעפעפיה הנעים ופתח אוזנה הנראה). לא ארסית כלל ושלווה באופייה, חיה בין העשבים והשדות.",
      en:"A long, legless reptile always mistaken for a snake, but actually a true lizard (told apart by its movable eyelids and visible ear opening). Completely non-venomous and calm-tempered, living among grasses and fields." },
    length:{ ar:"حتى 140 سم", he:"עד 140 ס״מ", en:"Up to 140 cm" },
    diet:{ ar:"الحشرات والقواقع والقوارض الصغيرة", he:"חרקים, חלזונות ומכרסמים קטנים", en:"Insects, snails and small rodents" },
    range:{ ar:"معظم أنحاء البلاد", he:"רוב חלקי הארץ", en:"Most of the country" } },



];

/* ---------- 2) مغامراتي وصيدي: أضف مغامرة جديدة هنا ---------- */
const adventuresData = [
  { date:{ ar:"[أضف التاريخ]", he:"[הוסף תאריך]", en:"[Add date]" },
    title:{ ar:"[عنوان المغامرة — مثال: مواجهة أفعى فلسطين عند الفجر]", he:"[כותרת ההרפתקה — לדוגמה: מפגש עם צפע ארץ ישראלי עם שחר]", en:"[Adventure title — e.g. Encountering a Palestine Viper at Dawn]" },
    text:{ ar:"[اكتب هنا قصة الرحلة: كيف بدأت، أين بحثت، وما الذي وجدته.]", he:"[כתבו כאן את סיפור המסע: איך התחיל, איפה חיפשתם, ומה מצאתם.]", en:"[Write the trip's story here: how it started, where you searched, and what you found.]" },
    loc:{ ar:"[الموقع الجغرافي]", he:"[מיקום גיאוגרפי]", en:"[Location]" } },

  { date:{ ar:"[أضف التاريخ]", he:"[הוסף תאריך]", en:"[Add date]" },
    title:{ ar:"[عنوان المغامرة الثانية]", he:"[כותרת ההרפתקה השנייה]", en:"[Second adventure title]" },
    text:{ ar:"[استبدل هذا النص بتفاصيل رحلتك، والنوع الذي رصدته.]", he:"[החליפו טקסט זה בפרטי המסע שלכם, והמין שאיתרתם.]", en:"[Replace this text with your trip's details and the species you spotted.]" },
    loc:{ ar:"[الموقع الجغرافي]", he:"[מיקום גיאוגרפי]", en:"[Location]" } },

  { date:{ ar:"[أضف التاريخ]", he:"[הוסף תאריך]", en:"[Add date]" },
    title:{ ar:"[عنوان المغامرة الثالثة]", he:"[כותרת ההרפתקה השלישית]", en:"[Third adventure title]" },
    text:{ ar:"[استمر بإضافة مغامراتك هنا بنفس النمط.]", he:"[המשיכו להוסיף את ההרפתקאות שלכם באותו סגנון.]", en:"[Keep adding your adventures here in the same format.]" },
    loc:{ ar:"[الموقع الجغرافي]", he:"[מיקום גיאוגרפי]", en:"[Location]" } }
];

/* ---------- 3) مكتبة الصور: أضف صورة جديدة هنا ----------
   لعرض صورة حقيقية بدل المربع المؤقت، أضف الحقل "src": "images/اسمالملف.jpg" */
const photosData = [
  { type:"venom", src:"images/daboia-palaestinae.jpg", latin:"Daboia palaestinae",
    caption:{ ar:"الأفعى الفلسطينية", he:"צפע ארץ ישראלי", en:"Palestine Viper" } },
  { type:"venom", src:"images/montivipera-bornmuelleri.jpg", latin:"Montivipera bornmuelleri",
    caption:{ ar:"أفعى جبل الشيخ", he:"צפע החרמון", en:"Mount Hermon Viper" } },
  { type:"venom", src:"images/cerastes-cerastes.jpg", latin:"Cerastes cerastes",
    caption:{ ar:"أفعى الرمال المقرنة", he:"עכן חרטומים", en:"Horned Viper" } },
  { type:"venom", src:"images/cerastes-gasperettii.jpg", latin:"Cerastes gasperettii",
    caption:{ ar:"أفعى الرمال الكبيرة", he:"עכן גדול", en:"Large Sand Viper" } },
  { type:"venom", src:"images/cerastes-vipera.jpg", latin:"Cerastes vipera",
    caption:{ ar:"أفعى الرمال الصغيرة", he:"עכן קטן", en:"Avicenna's Sand Viper" } },
  { type:"venom", src:"images/pseudocerastes-fieldi.jpg", latin:"Pseudocerastes fieldi",
    caption:{ ar:"الأفعى المقرنة الصحراوية", he:"שפיפון", en:"Field's Horned Viper" } },
  { type:"venom", src:"images/echis-coloratus.jpg", latin:"Echis coloratus",
    caption:{ ar:"أفعى الحراشف المنشارية", he:"אפעה", en:"Saw-scaled Viper" } },
  { type:"venom", src:"images/atractaspis-engaddensis.jpg", latin:"Atractaspis engaddensis",
    caption:{ ar:"الأسود الخبيث", he:"שרף עין גדי – צפעון שחור", en:"Black Mole Viper" } },
  { type:"venom", src:"images/walterinnesia-aegyptia.jpg", latin:"Walterinnesia aegyptia",
    caption:{ ar:"الصل الأسود / كوبرا الصحراء", he:"פתן שחור", en:"Black Desert Cobra" } },
  { type:"safe", src:"images/hemorrhois-nummifer.jpg", latin:"Hemorrhois nummifer",
    caption:{ ar:"الثعبان البقلاوي (الحنش البقلاوية)", he:"זעמן מטבעות", en:"Coin-marked Snake" } },
  { type:"safe", src:"images/natrix-tessellata.jpg", latin:"Natrix tessellata",
    caption:{ ar:"ثعبان الماء", he:"נחש מים", en:"Dice Snake" } },
  { type:"safe", src:"images/malpolon-insignitus.jpg", latin:"Malpolon insignitus",
    caption:{ ar:"الحنش الشرقي، ثعبان مونبلييه الشرقي", he:"תלום קשקשים מצוי", en:"Eastern Montpellier Snake" } },
  { type:"safe", src:"images/dolichophis-jugularis.jpg", latin:"Dolichophis jugularis",
    caption:{ ar:"الحنش الأسود (العربيد)", he:"זעמן שחור", en:"Large Whip Snake" } },
  { type:"safe", src:"images/platyceps-collaris.jpg", latin:"Platyceps collaris",
    caption:{ ar:"الحنش الزيتوني", he:"זעמן זיתני", en:"Collared Dwarf Racer" } },
  { type:"safe", src:"images/psammophis-schokari.jpg", latin:"Psammophis schokari",
    caption:{ ar:"أبو السيور او ثعبان شقاري عداء الرمال الأفرو-آسيوية", he:"ארבע קו מובהק", en:"Schokari Sand Racer" } },
  { type:"safe", src:"images/platyceps-rogersi.jpg", latin:"Platyceps rogersi",
    caption:{ ar:"الحنش ذو السروج", he:"זעמן אוכפים", en:"Saddled Racer" } },
  { type:"safe", src:"images/eryx-jaculus.jpg", latin:"Eryx jaculus",
    caption:{ ar:"الدساس المتوسطي او اصلة الرمال او ثعبان العاصرة", he:"חנק", en:"Javelin Sand Boa" } },
  { type:"safe", src:"images/telescopus-fallax.jpg", latin:"Telescopus fallax",
    caption:{ ar:"حية عين القط المرقطة", he:"עין חתול חברבר", en:"European Cat Snake" } },
  { type:"safe", src:"images/spalerosophis-diadema.jpg", latin:"Spalerosophis diadema",
    caption:{ ar:"حنش التاج الصحراوي أو ثعبان التاج الصحراوي", he:"מטבעון", en:"Diadem Snake" } },
  { type:"safe", src:"images/xerotyphlops-vermicularis.jpg", latin:"Xerotyphlops vermicularis",
    caption:{ ar:"الحية دقيقة الرأس", he:"נחשיל מצוי", en:"Blind Worm Snake" } },
  { type:"safe", src:"images/pseudopus-apodus.jpg", latin:"Pseudopus apodus",
    caption:{ ar:"السحلية الزجاجية (أبو قرع)", he:"קמטן", en:"European Glass Lizard" } },

];

/* ---------- 4) مكتبة الفيديوهات: أضف فيديو جديد هنا ----------
   الصق رابط يوتيوب العادي في الحقل "embed" (watch أو youtu.be أو Shorts)،
   وستظهر الصورة المصغّرة تلقائيًا ويُشغّل الفيديو داخل الموقع عند النقر. */
const videosData = [
  { embed:"https://www.youtube.com/watch?v=ln3kM8Ni7Rs",
    title:{ ar:"أفعى الرمال الصغيرة", he:"עכן קטן", en:"Avicenna's Sand Viper" },
    note:{ ar:"Cerastes vipera", he:"Cerastes vipera", en:"Cerastes vipera" } },

  { embed:"https://www.youtube.com/watch?v=0ewtcs9HVqY",
    title:{ ar:"الصل الأسود", he:"פתן שחור", en:"Black Desert Cobra" },
    note:{ ar:"Walterinnesia aegyptia", he:"Walterinnesia aegyptia", en:"Walterinnesia aegyptia" } },

  { embed:"https://www.youtube.com/watch?v=Y-deWGtUjS4",
    title:{ ar:"أفعى القرناء الكاذبة", he:"שפיפון", en:"Field's Horned Viper" },
    note:{ ar:"Pseudocerastes fieldi", he:"Pseudocerastes fieldi", en:"Pseudocerastes fieldi" } },

  { embed:"https://www.youtube.com/watch?v=VV4ubDjXYiI",
    title:{ ar:"أفعى القرناء الصحراوية", he:"עכן חרטומים", en:"Horned Viper" },
    note:{ ar:"Cerastes cerastes", he:"Cerastes cerastes", en:"Cerastes cerastes" } },

  { embed:"https://www.youtube.com/watch?v=Bjpg21gyfcE",
    title:{ ar:"الأسود الخبيث", he:"שרף עין גדי / צפעון שחור", en:"Black Mole Viper" },
    note:{ ar:"Atractaspis engaddensis", he:"Atractaspis engaddensis", en:"Atractaspis engaddensis" } },

  { embed:"https://www.youtube.com/watch?v=VeRK4gzbRjw",
    title:{ ar:"أفعى الرمال الكبيرة (أم الجنيب)", he:"עכן גדול", en:"Large Sand Viper" },
    note:{ ar:"Cerastes gasperettii", he:"Cerastes gasperettii", en:"Cerastes gasperettii" } },

  { embed:"https://www.youtube.com/watch?v=upkOM7qQzO0",
    title:{ ar:"أفعى جبل الشيخ", he:"צפע החרמון", en:"Mount Hermon Viper" },
    note:{ ar:"Montivipera bornmuelleri", he:"Montivipera bornmuelleri", en:"Montivipera bornmuelleri" } },

  { embed:"https://www.youtube.com/watch?v=ZRz5TPEHsdg",
    title:{ ar:"أفعى الحراشف المنشارية", he:"אפעה", en:"Saw-scaled Viper" },
    note:{ ar:"Echis coloratus", he:"Echis coloratus", en:"Echis coloratus" } },

  { embed:"https://www.youtube.com/watch?v=Z22LVPTXJV0",
    title:{ ar:"أفعى فلسطين", he:"צפע מצוי", en:"Palestine Viper" },
    note:{ ar:"Daboia palaestinae", he:"Daboia palaestinae", en:"Daboia palaestinae" } }
];

/* ---------- 5) مكتبة المقالات: أضف مقالًا جديدًا هنا ---------- */
const articlesData = [
  { tag:{ ar:"دليل ميداني", he:"מדריך שטח", en:"Field Guide" },
    href:"article-venomous.html",
    title:{ ar:"الأفاعي السامة في إسرائيل — دليل الأنواع التسعة", he:"הנחשים הארסיים בישראל — מדריך תשעת המינים", en:"The Venomous Snakes of Israel — Guide to All Nine Species" },
    excerpt:{ ar:"كل نوع سام في إسرائيل: طوله، غذاؤه، أماكن انتشاره الدقيقة، ومستوى خطورته — مع قواعد السلامة عند مصادفته.", he:"כל מין ארסי בישראל: אורכו, תזונתו, אזורי תפוצתו המדויקים ורמת הסיכון — לצד כללי בטיחות במפגש.", en:"Every venomous species in Israel: its length, diet, precise range, and danger level — plus safety rules for an encounter." } },

  { tag:{ ar:"دليل ميداني", he:"מדריך שטח", en:"Field Guide" },
    href:"article-nonvenomous.html",
    title:{ ar:"الأفاعي غير السامة في إسرائيل — دليل الأنواع الاثني عشر", he:"הנחשים הלא ארסיים בישראל — מדריך שנים עשר המינים", en:"The Non-Venomous Snakes of Israel — Guide to All Twelve Species" },
    excerpt:{ ar:"كل نوع غير سام: شكله، طوله، غذاؤه، وأين ينتشر — ولماذا هي حليف صامت للإنسان وليست عدوًا.", he:"כל מין לא ארסי: מראהו, אורכו, תזונתו והיכן הוא מצוי — ולמה הם בעלי ברית שקטים של האדם ולא אויבים.", en:"Every non-venomous species: appearance, length, diet, and range — and why they're a quiet ally rather than a threat." } },

  { tag:{ ar:"سلامة ميدانية", he:"בטיחות שטח", en:"Field Safety" },
    href:"article-firstaid.html",
    title:{ ar:"ماذا تفعل فورًا في حال التعرض للدغة أفعى؟", he:"מה לעשות מיד במקרה של הכשת נחש?", en:"What to do immediately if bitten by a snake" },
    excerpt:{ ar:"خطوات الإسعاف الأولي الصحيحة، وما يجب تجنبه، وكيفية الوصول للمساعدة الطبية بأسرع وقت.", he:"שלבי העזרה הראשונה הנכונים, מה יש להימנע ממנו, וכיצד להגיע לעזרה רפואית במהירות.", en:"The correct first-aid steps, what to avoid entirely, and how to get medical help as fast as possible." } },

  { tag:{ ar:"طبّ وعلاج", he:"רפואה וטיפול", en:"Medicine & Treatment" },
    href:"article-antivenom.html",
    title:{ ar:"ما هو المصل المضاد للسموم؟", he:"מה זה בעצם נסיוב?", en:"What Exactly Is Antivenom?" },
    excerpt:{ ar:"كيف يُصنع المصل المضاد من دم الحيوانات، ولماذا لا يتوفّر إلا لنوعين من أصل تسعة أفاعٍ سامة في إسرائيل.", he:"כיצד מיוצר הנסיוב מדם בעלי חיים, ומדוע הוא קיים רק כנגד שניים מתוך תשעת מיני הנחשים הארסיים בישראל.", en:"How antivenom is made from animal blood, and why it exists for only two of Israel's nine venomous snake species." } },

  { tag:{ ar:"تعريف وسلامة", he:"זיהוי ובטיחות", en:"Identification & Safety" },
    href:"article-identify.html",
    title:{ ar:"كيف نميّز بين الثعابين السامة وشبه السامة وغير السامة؟", he:"כיצד מבחינים בין נחשים ארסיים, תת-ארסיים ולא־ארסיים?", en:"How Do We Tell Venomous, Mildly Venomous, and Non-Venomous Snakes Apart?" },
    excerpt:{ ar:"لا توجد علامة خارجية واحدة قاطعة؛ العلامات المساعدة (الرأس، البؤبؤ، اللون…) ولماذا يبقى التعرّف على النوع هو الأساس الأكثر أمانًا.", he:"אין סימן חיצוני יחיד ומוחלט; הסימנים המסייעים (ראש, אישון, צבע…) ומדוע זיהוי המין נשאר הבסיס הבטוח ביותר.", en:"There is no single conclusive external sign; the helpful markers (head, pupil, color…) and why species identification remains the safest foundation." } },

  { tag:{ ar:"معدات الصيد", he:"ציוד ציד", en:"Field Gear" },
    href:"article-gear.html",
    title:{ ar:"المعدات الأساسية لأي صائد أفاعي مبتدئ", he:"הציוד הבסיסי לכל לוכד נחשים מתחיל", en:"Essential gear for any beginner snake hunter" },
    excerpt:{ ar:"من عصا الإمساك إلى الحقيبة الطبية، دليل مختصر لما يجب أن تحمله قبل أي خرجة.", he:"ממקל תפיסה ועד תיק עזרה ראשונה, מדריך קצר למה שכדאי לקחת לפני כל יציאה.", en:"From a snake hook to a first-aid kit, a short guide to what to carry before any outing." } },

  { tag:{ ar:"سلوك وبيئة", he:"התנהגות וסביבה", en:"Behavior & Habitat" },
    href:"article-night.html",
    title:{ ar:"لماذا تنشط الأفاعي والثعابين ليلًا؟", he:"מדוע נחשים וצפעיים פעילים בלילה?", en:"Why Are Snakes and Vipers Active at Night?" },
    excerpt:{ ar:"تجنّب حرارة النهار، نشاط الفرائس، والحماية من المفترسات — ولماذا تُعدّ أفعى جبل الشيخ استثناءً نهاريًا.", he:"הימנעות מחום היום, פעילות הטרף וההגנה מטורפים — ומדוע צפע החרמון הוא יוצא דופן יומי.", en:"Avoiding daytime heat, prey activity, and protection from predators — and why the Hermon viper is a daytime exception." } }
];
