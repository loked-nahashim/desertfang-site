/* أسئلة شائعة — محتوى أصلي بثلاث لغات */
const faqData = [
  {
    "q": {
      "ar": "ماذا أفعل إذا لدغتني أفعى؟",
      "he": "מה לעשות אם נחש הכיש אותי?",
      "en": "What should I do if a snake bites me?"
    },
    "a": {
      "ar": "تعامل مع الأمر كحالة طارئة واطلب الإسعاف فورًا. ابقَ هادئًا وقلّل الحركة لإبطاء انتشار السمّ، وانزع الخواتم والأساور والساعة قبل أن يشتدّ التورّم. لا تشقّ الجرح، ولا تحاول شفط السمّ، ولا تربط الطرف بإحكام — فهذه إجراءات قديمة تضرّ أكثر مما تنفع. توجّه إلى أقرب مستشفى دون تأخير.",
      "he": "התייחסו לכך כאל מקרה חירום והזעיקו עזרה מיד. הישארו רגועים והפחיתו תנועה כדי להאט את התפשטות הארס, והסירו טבעות, צמידים ושעון לפני שהנפיחות מתגברת. אל תחתכו את הפצע, אל תנסו למצוץ את הארס ואל תחסמו את הגף בחוזקה — אלה שיטות ישנות המזיקות יותר משהן מועילות. פנו לבית החולים הקרוב ללא דיחוי.",
      "en": "Treat it as an emergency and call for help immediately. Stay calm and reduce movement to slow the venom's spread, and remove rings, bracelets, and watches before swelling worsens. Do not cut the wound, try to suck out venom, or bind the limb tightly — these are outdated measures that harm more than help. Go to the nearest hospital without delay."
    }
  },
  {
    "q": {
      "ar": "كيف أميّز الأفعى السامة من غير السامة؟",
      "he": "איך אבחין בין נחש ארסי ללא ארסי?",
      "en": "How do I tell a venomous snake from a non-venomous one?"
    },
    "a": {
      "ar": "لا توجد علامة واحدة مؤكّدة، والاعتماد على صفة واحدة (كشكل الرأس) خادع؛ فبعض الأنواع غير السامة تفلطح رأسها لتبدو مثلّثة عند التهديد. الطريقة الآمنة الوحيدة هي عدم الاقتراب من أي أفعى، والتعرّف عليها من صورة عن بُعد أو عبر مختصّ. راجع دليل الأنواع في موقعنا للتفريق بينها بالتفصيل.",
      "he": "אין סימן ודאי אחד, וההסתמכות על תכונה בודדת (כמו צורת הראש) מטעה; חלק מהמינים הלא ארסיים משטחים את ראשם כדי להיראות משולשים באיום. הדרך הבטוחה היחידה היא לא להתקרב לשום נחש, ולזהות אותו מתמונה ממרחק או דרך מומחה. עיינו במדריך המינים באתר להבחנה מפורטת ביניהם.",
      "en": "There is no single sure sign, and relying on one trait (like head shape) is misleading; some non-venomous species flatten their heads to look triangular when threatened. The only safe method is not to approach any snake, and to identify it from a photo at a distance or through an expert. See our species guide for a detailed distinction."
    }
  },
  {
    "q": {
      "ar": "وجدت أفعى داخل بيتي أو حديقتي، ماذا أفعل؟",
      "he": "מצאתי נחש בבית או בגינה, מה לעשות?",
      "en": "I found a snake in my house or garden, what do I do?"
    },
    "a": {
      "ar": "لا تحاول الإمساك بها أو قتلها؛ فمعظم اللدغات تقع أثناء هذه المحاولة. امنحها مسافة، وأبعد الأطفال والحيوانات الأليفة، وراقبها من بعيد لتعرف مكانها، ثم اتّصل بصائد أفاعٍ مرخّص لينقلها بأمان. إن اختفت، أغلق الغرفة وسُدّ الفتحات أسفل الأبواب حتى وصول المختصّ.",
      "he": "אל תנסו ללכוד אותו או להרוג אותו; רוב ההכשות מתרחשות במהלך ניסיון זה. תנו לו מרחק, הרחיקו ילדים וחיות מחמד, והשגיחו עליו מרחוק כדי לדעת היכן הוא, ואז התקשרו ללוכד מוסמך שיעביר אותו בבטחה. אם נעלם, סגרו את החדר ואטמו את הפתחים מתחת לדלתות עד הגעת המומחה.",
      "en": "Don't try to catch or kill it; most bites happen during this attempt. Give it space, keep children and pets away, and watch it from a distance to know where it is, then call a licensed snake catcher to move it safely. If it disappears, close the room and seal gaps under doors until the expert arrives."
    }
  },
  {
    "q": {
      "ar": "هل كل أفاعي إسرائيل سامة؟",
      "he": "האם כל נחשי ישראל ארסיים?",
      "en": "Are all snakes in Israel venomous?"
    },
    "a": {
      "ar": "لا، بل الأغلبية غير سامة. من بين نحو أربعين نوعًا في البلاد، تسعة أنواع فقط تُعدّ سامة وخطرة على الإنسان، وبعض الأنواع «تحت-سامة» غير خطرة عمليًا. كثير من الثعابين غير السامة نافعة جدًا لأنّها تفترس القوارض، وبعضها يفترس الأفاعي السامة نفسها.",
      "he": "לא, הרוב אינם ארסיים. מבין כארבעים מינים בארץ, רק תשעה מינים נחשבים ארסיים ומסוכנים לאדם, וכמה מינים 'תת-ארסיים' אינם מסוכנים למעשה. נחשים לא ארסיים רבים מועילים מאוד משום שהם טורפים מכרסמים, וחלקם טורפים את הנחשים הארסיים עצמם.",
      "en": "No, the majority are non-venomous. Of about forty species in the country, only nine are considered venomous and dangerous to humans, and some 'mildly venomous' species are practically harmless. Many non-venomous snakes are very useful because they prey on rodents, and some prey on the venomous snakes themselves."
    }
  },
  {
    "q": {
      "ar": "متى تنشط الأفاعي أكثر؟",
      "he": "מתי הנחשים פעילים יותר?",
      "en": "When are snakes most active?"
    },
    "a": {
      "ar": "تنشط الأفاعي أساسًا في الطقس الدافئ، من الربيع حتى الخريف. في ذروة حرّ الصيف يتحوّل نشاط كثير منها إلى ساعات الغسق والليل هربًا من الحرارة، بينما تنشط في فصول الانتقال نهارًا أيضًا. في الشتاء تقلّ فرص لقائها لأنّها تدخل في خمولٍ موسميّ.",
      "he": "הנחשים פעילים בעיקר במזג אוויר חמים, מהאביב ועד הסתיו. בשיא חום הקיץ פעילותם של רבים עוברת לשעות בין הערביים והלילה כדי לחמוק מהחום, ובעונות המעבר הם פעילים גם ביום. בחורף הסיכוי לפגוש אותם קטן משום שהם נכנסים לתרדמה עונתית.",
      "en": "Snakes are active mainly in warm weather, from spring to autumn. At the peak of summer heat, many shift their activity to dusk and night to escape the heat, while in the transition seasons they are active by day too. In winter the chance of meeting them is lower because they enter a seasonal dormancy."
    }
  },
  {
    "q": {
      "ar": "كيف أُبعد الأفاعي عن بيتي وحديقتي؟",
      "he": "איך מרחיקים נחשים מהבית והגינה?",
      "en": "How do I keep snakes away from my home and garden?"
    },
    "a": {
      "ar": "الأفاعي تأتي بحثًا عن الطعام والاختباء، فأزل ما يجذبها: اضبط أعداد القوارض، ونظّف أكوام الحطب والحجارة والأعشاب العالية، وسُدّ الشقوق والفتحات حول البيت. لا تترك طعامًا أو ماءً مكشوفًا يجذب القوارض. حديقةٌ مرتّبة ونظيفة أقلّ جاذبيةً للأفاعي بكثير.",
      "he": "נחשים מגיעים בחיפוש אחר מזון ומחסה, לכן הסירו את מה שמושך אותם: ווסתו את אוכלוסיית המכרסמים, נקו ערימות עצים, אבנים ועשבייה גבוהה, ואטמו סדקים ופתחים סביב הבית. אל תשאירו מזון או מים חשופים המושכים מכרסמים. גינה מסודרת ונקייה פחות מושכת נחשים בהרבה.",
      "en": "Snakes come looking for food and shelter, so remove what attracts them: control rodent numbers, clear woodpiles, stone piles, and tall weeds, and seal cracks and openings around the house. Don't leave food or water exposed that attracts rodents. A tidy, clean garden is far less attractive to snakes."
    }
  },
  {
    "q": {
      "ar": "هل تطارد الأفعى الإنسان؟",
      "he": "האם נחש רודף אחרי אדם?",
      "en": "Do snakes chase people?"
    },
    "a": {
      "ar": "لا، هذه خرافة شائعة. الأفاعي تخاف الإنسان وتفضّل الهرب أو الاختباء، ولا تهاجم إلا دفاعًا عن نفسها حين تشعر بأنّها محاصَرة أو يُداس عليها. ما يبدو أحيانًا «مطاردة» هو محاولة الأفعى الفرار نحو جحرها الذي قد يصادف وجوده باتجاه الشخص.",
      "he": "לא, זו אמונה שגויה נפוצה. הנחשים מפחדים מהאדם ומעדיפים לברוח או להסתתר, ותוקפים רק כהגנה עצמית כשהם חשים לכודים או כשדורכים עליהם. מה שנראה לעיתים כ'רדיפה' הוא ניסיון הנחש לברוח אל מחילתו, שבמקרה נמצאת בכיוון האדם.",
      "en": "No, this is a common myth. Snakes fear humans and prefer to flee or hide, and only attack in self-defense when they feel cornered or are stepped on. What sometimes looks like 'chasing' is the snake trying to escape toward its burrow, which happens to lie in the person's direction."
    }
  },
  {
    "q": {
      "ar": "ماذا أفعل إذا لدغت الأفعى كلبي أو حيواني الأليف؟",
      "he": "מה לעשות אם נחש הכיש את הכלב או חיית המחמד שלי?",
      "en": "What if a snake bites my dog or pet?"
    },
    "a": {
      "ar": "توجّه فورًا إلى طبيب بيطري؛ فلدغات الأفاعي قد تكون قاتلة للحيوانات وتحتاج تدخّلًا سريعًا. حاول إبقاء الحيوان هادئًا وقليل الحركة أثناء نقله، ولا تحاول علاجه بنفسك. إن أمكن، لاحظ شكل الأفعى من بعيد لمساعدة الطبيب، دون أن تعرّض نفسك للخطر.",
      "he": "פנו מיד לרופא וטרינר; הכשות נחש עלולות להיות קטלניות לבעלי חיים ומצריכות טיפול מהיר. נסו לשמור על החיה רגועה וממעטת בתנועה במהלך ההעברה, ואל תנסו לטפל בה בעצמכם. אם ניתן, שימו לב לצורת הנחש מרחוק כדי לסייע לרופא, מבלי לסכן את עצמכם.",
      "en": "Go to a veterinarian immediately; snake bites can be fatal to animals and need prompt care. Try to keep the animal calm and still during transport, and don't try to treat it yourself. If possible, note the snake's appearance from a distance to help the vet, without putting yourself at risk."
    }
  },
  {
    "q": {
      "ar": "هل يجب أن أقتل الأفعى؟",
      "he": "האם עליי להרוג את הנחש?",
      "en": "Should I kill the snake?"
    },
    "a": {
      "ar": "لا. محاولة القتل هي أكثر ما يعرّضك للّدغة، كما أنّ معظم الأفاعي غير سامة ونافعة للبيئة. الأفاعي محميّة في كثير من الحالات، والحلّ الصحيح هو الاتصال بصائد مرخّص لنقلها بأمان بعيدًا عن البيت. القتل خطرٌ عليك وغير ضروريّ.",
      "he": "לא. ניסיון ההריגה הוא מה שמסכן אתכם בהכשה יותר מכול, וגם רוב הנחשים אינם ארסיים ומועילים לסביבה. נחשים מוגנים במקרים רבים, והפתרון הנכון הוא להתקשר ללוכד מוסמך שיעביר אותם בבטחה הרחק מהבית. ההריגה מסוכנת לכם ואינה נחוצה.",
      "en": "No. Trying to kill it is what most exposes you to a bite, and most snakes are non-venomous and beneficial to the environment. Snakes are protected in many cases, and the right solution is to call a licensed catcher to move them safely away from the home. Killing is dangerous to you and unnecessary."
    }
  },
  {
    "q": {
      "ar": "كم نوعًا من الأفاعي يوجد في إسرائيل؟",
      "he": "כמה מיני נחשים יש בישראל?",
      "en": "How many snake species are there in Israel?"
    },
    "a": {
      "ar": "يعيش في إسرائيل نحو أربعين نوعًا من الثعابين، بفضل موقعها الفريد عند مفترق ثلاث قارّات وتنوّعها البيئي الكبير. من بينها تسعة أنواع سامة وخطرة، وبقيّتها غير سامة أو تحت-سامة غير خطرة. يوثّق موقعنا أبرز هذه الأنواع بالتفصيل في دليل الأفاعي.",
      "he": "בישראל חיים כארבעים מיני נחשים, בזכות מיקומה הייחודי במפגש שלוש יבשות ומגוונה הביולוגי הרב. מתוכם תשעה מינים ארסיים ומסוכנים, והשאר אינם ארסיים או תת-ארסיים ואינם מסוכנים. האתר שלנו מתעד את הבולטים שבהם בפירוט במדריך הנחשים.",
      "en": "About forty species of snakes live in Israel, thanks to its unique location at the crossroads of three continents and its great ecological diversity. Among them are nine venomous and dangerous species, and the rest are non-venomous or mildly venomous and not dangerous. Our site documents the most notable of these in detail in the snake guide."
    }
  },
  {
    "q": {
      "ar": "هل يتوفّر مصل مضادّ للسمّ في إسرائيل؟",
      "he": "האם קיים נסיוב נגד ארס בישראל?",
      "en": "Is antivenom available in Israel?"
    },
    "a": {
      "ar": "نعم، يتوفّر مصلٌ مضادّ فعّال لأخطر الأنواع في المستشفيات، والوفيات نادرة جدًا حين يصل المصاب في الوقت المناسب. لهذا فإنّ أهمّ خطوة عند اللدغة هي الوصول السريع إلى المستشفى. لا تعتمد على وصفات شعبية، فالعلاج الطبّي هو الوحيد الفعّال.",
      "he": "כן, קיים נסיוב יעיל למינים המסוכנים בבתי החולים, ומקרי מוות נדירים מאוד כשהנפגע מגיע בזמן. לכן הצעד החשוב ביותר בהכשה הוא הגעה מהירה לבית החולים. אל תסתמכו על מרשמים עממיים, שכן הטיפול הרפואי הוא היחיד היעיל.",
      "en": "Yes, an effective antivenom for the most dangerous species is available in hospitals, and fatalities are very rare when the victim arrives in time. So the most important step after a bite is getting to a hospital quickly. Do not rely on folk remedies; medical treatment is the only effective one."
    }
  },
  {
    "q": {
      "ar": "كيف أستدعي صائد أفاعٍ مرخّصًا؟",
      "he": "איך מזמינים לוכד נחשים מוסמך?",
      "en": "How do I call a licensed snake catcher?"
    },
    "a": {
      "ar": "يمكنك التواصل معنا مباشرةً عبر الواتساب أو البريد الإلكتروني من صفحة «اتصل بنا»، وسنساعدك أو نرشدك إلى أقرب جهة مرخّصة في منطقتك. عند الطلب، اذكر موقعك ووصف الأفعى ومكان وجودها، وأرفق صورة من مسافة آمنة إن أمكن لتسريع المساعدة.",
      "he": "ניתן ליצור איתנו קשר ישירות בוואטסאפ או במייל מעמוד 'צור קשר', ונסייע לכם או נפנה אתכם לגורם המורשה הקרוב באזורכם. בעת הפנייה, ציינו את מיקומכם, תיאור הנחש והיכן הוא נמצא, וצרפו תמונה ממרחק בטוח אם ניתן כדי לזרז את העזרה.",
      "en": "You can contact us directly via WhatsApp or email from the 'Contact' page, and we'll help you or refer you to the nearest licensed handler in your area. When requesting help, mention your location, a description of the snake, and where it is, and attach a photo from a safe distance if possible to speed up assistance."
    }
  }
];
