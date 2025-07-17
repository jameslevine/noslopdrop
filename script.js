// Load translations and handle language switching
let currentLanguage = "en";
let currentTheme = "light";

// Embedded translations for better compatibility
const translations = {
 en: {
  title: "no slop drop",
  subtitle: "please don't copy-paste AI answers without verification",
  intro:
   "Imagine asking someone a technical question, and they immediately respond with an AI-generated answer they haven't even read... 🤦‍♀️",
  chatChannel: "#help-channel",
  devNewbie: "DevNewbie",
  quickHelper: "QuickHelper",
  experiencedDev: "ExperiencedDev",
  badQuestion:
   "Hey everyone! I'm getting this weird React error when trying to update state. Anyone know how to fix it?",
  badAnswer:
   "ChatGPT says you should use componentWillMount() in your constructor to handle state updates properly.",
  badResponse: "Thanks! Will try that right now.",
  goodAnswer:
   "I've encountered this before. Here's an approach using useEffect that might help, but you should test it with your specific setup. Also, check the official React docs on state updates: https://react.dev/learn/state. Let me know if you need clarification on any part!",
  goodResponse:
   "Perfect! This worked and the docs helped me understand why. Thanks for the explanation and the official resource!",
  problemIndicator:
   "⚠️ <strong>Problem:</strong> componentWillMount() has been deprecated since React 16.3 (2018). This advice is outdated and could break modern React applications.",
  successIndicator:
   "✅ <strong>Success:</strong> Thoughtful response with context, verification advice, official documentation, and follow-up support.",
  dontDoTitle: "❌ Don't do this",
  dontDoIntro:
   "People who copy-paste AI responses without verification are often trying to be helpful, but they're actually causing harm:",
  dontDoList: [
   '<strong>"ChatGPT says..."</strong> followed by unverified information',
   "<strong>Copy-pasting code snippets</strong> without testing them first",
   "<strong>Sharing AI-generated advice</strong> for critical topics (medical, legal, financial)",
   "<strong>Using AI responses as gospel</strong> without considering context or accuracy",
   '<strong>"Quick Google/AI search"</strong> responses that haven\'t been validated',
  ],
  whyHarmful: "Why this is harmful:",
  whyHarmfulText:
   "When you copy-paste AI responses without verification, you're <strong>contributing to misinformation spread</strong>. AI can be confidently wrong, and outdated information can cause real problems. You're also missing opportunities to learn and understand the topic yourself.",
  doThisTitle: "✅ Instead try this",
  doThisIntro: "Use AI as a starting point, not the final answer:",
  doThisList: [
   "<strong>Read and understand</strong> AI responses before sharing them",
   "<strong>Test code snippets</strong> in your environment before recommending them",
   '<strong>Add context:</strong> "I found this approach, but you should verify it for your use case..."',
   "<strong>Cite official sources</strong> alongside AI-generated content",
   '<strong>Acknowledge uncertainty:</strong> "This might work, but double-check the documentation"',
   "<strong>Encourage learning:</strong> Share resources for deeper understanding",
  ],
  benefitsTitle: "Benefits of responsible AI usage:",
  benefitsText:
   "When you verify AI responses before sharing, you <strong>maintain trust in your community</strong>, reduce misinformation spread, and encourage genuine learning. You're using AI as a powerful tool while staying intellectually honest.",
  rememberTitle: "Remember: AI is a tool, not an oracle 🔮",
  rememberText1:
   "AI can provide great starting points and suggestions, but it can also be confidently incorrect. The key is to use it responsibly - verify, understand, and add your own context before sharing with others.",
  rememberText2:
   '<strong>Just ask yourself: "Have I actually read and understood this before sharing it?"</strong> 🤔',
  languageLabel: "Language:",
  footerText: "This site promotes responsible AI usage. 🤖✨",
  inspiredBy: "Inspired by",
  shareText: "Share this: <strong>noslopdrop.net</strong>",
 },
 cs: {
  title: "žádné slop drop",
  subtitle: "prosím nekopírujte odpovědi AI bez ověření",
  intro:
   "Představte si, že se někoho zeptáte na technickou otázku a oni okamžitě odpoví odpovědí generovanou AI, kterou ani nečetli... 🤦‍♀️",
  chatChannel: "#help-kanál",
  devNewbie: "NovýVývojář",
  quickHelper: "RychlýPomocník",
  experiencedDev: "ZkušenýVývojář",
  badQuestion:
   "Ahoj všichni! Mám divnou React chybu při aktualizaci stavu. Někdo ví, jak to opravit?",
  badAnswer:
   "ChatGPT říká, že byste měli použít componentWillMount() ve vašem konstruktoru pro správné zpracování aktualizací stavu.",
  badResponse: "Díky! Zkusím to hned.",
  goodAnswer:
   "S tímto jsem se už setkal. Tady je přístup pomocí useEffect, který by mohl pomoci, ale měli byste to otestovat s vaším konkrétním nastavením. Také se podívejte na oficiální React dokumentaci o aktualizacích stavu: https://react.dev/learn/state. Dejte mi vědět, pokud potřebujete vysvětlit nějakou část!",
  goodResponse:
   "Perfektní! Toto fungovalo a dokumentace mi pomohla pochopit proč. Díky za vysvětlení a oficiální zdroj!",
  problemIndicator:
   "⚠️ <strong>Problém:</strong> componentWillMount() je zastaralé od React 16.3 (2018). Tato rada je zastaralá a mohla by rozbít moderní React aplikace.",
  successIndicator:
   "✅ <strong>Úspěch:</strong> Promyšlená odpověď s kontextem, radou pro ověření, oficiální dokumentací a následnou podporou.",
  dontDoTitle: "❌ Nedělejte toto",
  dontDoIntro:
   "Lidé, kteří kopírují odpovědi AI bez ověření, se často snaží být nápomocní, ale ve skutečnosti způsobují škodu:",
  dontDoList: [
   '<strong>"ChatGPT říká..."</strong> následované neověřenými informacemi',
   "<strong>Kopírování kódových úryvků</strong> bez jejich předchozího testování",
   "<strong>Sdílení rad generovaných AI</strong> pro kritická témata (lékařská, právní, finanční)",
   "<strong>Používání odpovědí AI jako evangelia</strong> bez zvážení kontextu nebo přesnosti",
   '<strong>"Rychlé Google/AI vyhledávání"</strong> odpovědi, které nebyly ověřeny',
  ],
  whyHarmful: "Proč je to škodlivé:",
  whyHarmfulText:
   "Když kopírujete odpovědi AI bez ověření, <strong>přispíváte k šíření dezinformací</strong>. AI může být sebevědomě špatné a zastaralé informace mohou způsobit skutečné problémy. Také ztrácíte příležitosti se učit a rozumět tématu sami.",
  doThisTitle: "✅ Místo toho zkuste toto",
  doThisIntro: "Používejte AI jako výchozí bod, ne jako konečnou odpověď:",
  doThisList: [
   "<strong>Přečtěte si a pochopte</strong> odpovědi AI před jejich sdílením",
   "<strong>Testujte kódové úryvky</strong> ve vašem prostředí před jejich doporučením",
   '<strong>Přidejte kontext:</strong> "Našel jsem tento přístup, ale měli byste si to ověřit pro váš případ použití..."',
   "<strong>Citujte oficiální zdroje</strong> spolu s obsahem generovaným AI",
   '<strong>Přiznejte nejistotu:</strong> "Toto by mohlo fungovat, ale znovu zkontrolujte dokumentaci"',
   "<strong>Podporujte učení:</strong> Sdílejte zdroje pro hlubší porozumění",
  ],
  benefitsTitle: "Výhody odpovědného používání AI:",
  benefitsText:
   "Když ověříte odpovědi AI před sdílením, <strong>udržujete důvěru ve vaší komunitě</strong>, snižujete šíření dezinformací a podporujete skutečné učení. Používáte AI jako mocný nástroj, zatímco zůstáváte intelektuálně poctiví.",
  rememberTitle: "Pamatujte: AI je nástroj, ne věštec 🔮",
  rememberText1:
   "AI může poskytovat skvělé výchozí body a návrhy, ale může být také sebevědomě nesprávné. Klíčem je používat ho odpovědně - ověřte, pochopte a přidejte svůj vlastní kontext před sdílením s ostatními.",
  rememberText2:
   '<strong>Jen se sebe zeptejte: "Skutečně jsem si to přečetl a pochopil před sdílením?"</strong> 🤔',
  languageLabel: "Jazyk:",
  footerText: "Tato stránka podporuje odpovědné používání AI. 🤖✨",
  inspiredBy: "Inspirováno",
  shareText: "Sdílejte toto: <strong>noslopdrop.net</strong>",
 },
 de: {
  title: "kein slop drop",
  subtitle: "bitte kopieren Sie keine KI-Antworten ohne Überprüfung",
  intro:
   "Stellen Sie sich vor, Sie stellen jemandem eine technische Frage und er antwortet sofort mit einer KI-generierten Antwort, die er nicht einmal gelesen hat... 🤦‍♀️",
  chatChannel: "#hilfe-kanal",
  devNewbie: "EntwicklerNeuling",
  quickHelper: "SchnellerHelfer",
  experiencedDev: "ErfahrenerEntwickler",
  badQuestion:
   "Hallo alle! Ich bekomme diesen seltsamen React-Fehler beim Aktualisieren des Zustands. Weiß jemand, wie man das behebt?",
  badAnswer:
   "ChatGPT sagt, Sie sollten componentWillMount() in Ihrem Konstruktor verwenden, um Zustandsaktualisierungen ordnungsgemäß zu handhaben.",
  badResponse: "Danke! Werde das gleich ausprobieren.",
  goodAnswer:
   "Das ist mir schon mal begegnet. Hier ist ein Ansatz mit useEffect, der helfen könnte, aber Sie sollten es mit Ihrem spezifischen Setup testen. Schauen Sie auch in die offiziellen React-Docs zu Zustandsaktualisierungen: https://react.dev/learn/state. Lassen Sie mich wissen, wenn Sie Erklärungen zu irgendeinem Teil brauchen!",
  goodResponse:
   "Perfekt! Das hat funktioniert und die Docs haben mir geholfen zu verstehen warum. Danke für die Erklärung und die offizielle Quelle!",
  problemIndicator:
   "⚠️ <strong>Problem:</strong> componentWillMount() ist seit React 16.3 (2018) veraltet. Dieser Rat ist überholt und könnte moderne React-Anwendungen kaputt machen.",
  successIndicator:
   "✅ <strong>Erfolg:</strong> Durchdachte Antwort mit Kontext, Überprüfungsrat, offizieller Dokumentation und Folgeunterstützung.",
  dontDoTitle: "❌ Tun Sie das nicht",
  dontDoIntro:
   "Menschen, die KI-Antworten ohne Überprüfung kopieren, versuchen oft hilfreich zu sein, aber sie richten tatsächlich Schaden an:",
  dontDoList: [
   '<strong>"ChatGPT sagt..."</strong> gefolgt von unverifizierten Informationen',
   "<strong>Code-Schnipsel kopieren</strong> ohne sie zuerst zu testen",
   "<strong>KI-generierte Ratschläge teilen</strong> für kritische Themen (medizinisch, rechtlich, finanziell)",
   "<strong>KI-Antworten als Evangelium verwenden</strong> ohne Kontext oder Genauigkeit zu berücksichtigen",
   '<strong>"Schnelle Google/KI-Suche"</strong> Antworten, die nicht validiert wurden',
  ],
  whyHarmful: "Warum das schädlich ist:",
  whyHarmfulText:
   "Wenn Sie KI-Antworten ohne Überprüfung kopieren, <strong>tragen Sie zur Verbreitung von Fehlinformationen bei</strong>. KI kann selbstbewusst falsch sein, und veraltete Informationen können echte Probleme verursachen. Sie verpassen auch Gelegenheiten zu lernen und das Thema selbst zu verstehen.",
  doThisTitle: "✅ Versuchen Sie stattdessen das",
  doThisIntro:
   "Verwenden Sie KI als Ausgangspunkt, nicht als endgültige Antwort:",
  doThisList: [
   "<strong>Lesen und verstehen Sie</strong> KI-Antworten bevor Sie sie teilen",
   "<strong>Testen Sie Code-Schnipsel</strong> in Ihrer Umgebung bevor Sie sie empfehlen",
   '<strong>Fügen Sie Kontext hinzu:</strong> "Ich habe diesen Ansatz gefunden, aber Sie sollten ihn für Ihren Anwendungsfall überprüfen..."',
   "<strong>Zitieren Sie offizielle Quellen</strong> neben KI-generierten Inhalten",
   '<strong>Geben Sie Unsicherheit zu:</strong> "Das könnte funktionieren, aber überprüfen Sie die Dokumentation"',
   "<strong>Fördern Sie das Lernen:</strong> Teilen Sie Ressourcen für tieferes Verständnis",
  ],
  benefitsTitle: "Vorteile verantwortlicher KI-Nutzung:",
  benefitsText:
   "Wenn Sie KI-Antworten vor dem Teilen überprüfen, <strong>erhalten Sie das Vertrauen in Ihrer Gemeinschaft</strong>, reduzieren die Verbreitung von Fehlinformationen und fördern echtes Lernen. Sie verwenden KI als mächtiges Werkzeug, während Sie intellektuell ehrlich bleiben.",
  rememberTitle: "Denken Sie daran: KI ist ein Werkzeug, kein Orakel 🔮",
  rememberText1:
   "KI kann großartige Ausgangspunkte und Vorschläge liefern, aber sie kann auch selbstbewusst falsch sein. Der Schlüssel ist, sie verantwortlich zu verwenden - überprüfen, verstehen und Ihren eigenen Kontext hinzufügen, bevor Sie mit anderen teilen.",
  rememberText2:
   '<strong>Fragen Sie sich einfach: "Habe ich das tatsächlich gelesen und verstanden, bevor ich es geteilt habe?"</strong> 🤔',
  languageLabel: "Sprache:",
  footerText: "Diese Seite fördert verantwortliche KI-Nutzung. 🤖✨",
  inspiredBy: "Inspiriert von",
  shareText: "Teilen Sie das: <strong>noslopdrop.net</strong>",
 },
 es: {
  title: "no slop drop",
  subtitle: "por favor no copies respuestas de IA sin verificación",
  intro:
   "Imagina preguntarle a alguien una pregunta técnica, y ellos inmediatamente responden con una respuesta generada por IA que ni siquiera han leído... 🤦‍♀️",
  chatChannel: "#canal-ayuda",
  devNewbie: "DesarrolladorNovato",
  quickHelper: "AyudanteRápido",
  experiencedDev: "DesarrolladorExperimentado",
  badQuestion:
   "¡Hola a todos! Estoy teniendo este error raro de React al intentar actualizar el estado. ¿Alguien sabe cómo solucionarlo?",
  badAnswer:
   "ChatGPT dice que deberías usar componentWillMount() en tu constructor para manejar las actualizaciones de estado correctamente.",
  badResponse: "¡Gracias! Lo probaré ahora mismo.",
  goodAnswer:
   "Me he encontrado con esto antes. Aquí hay un enfoque usando useEffect que podría ayudar, pero deberías probarlo con tu configuración específica. También, revisa los docs oficiales de React sobre actualizaciones de estado: https://react.dev/learn/state. ¡Déjame saber si necesitas aclaración en alguna parte!",
  goodResponse:
   "¡Perfecto! Esto funcionó y los docs me ayudaron a entender por qué. ¡Gracias por la explicación y el recurso oficial!",
  problemIndicator:
   "⚠️ <strong>Problema:</strong> componentWillMount() ha sido deprecado desde React 16.3 (2018). Este consejo está desactualizado y podría romper aplicaciones React modernas.",
  successIndicator:
   "✅ <strong>Éxito:</strong> Respuesta reflexiva con contexto, consejo de verificación, documentación oficial y soporte de seguimiento.",
  dontDoTitle: "❌ No hagas esto",
  dontDoIntro:
   "Las personas que copian respuestas de IA sin verificación a menudo intentan ser útiles, pero en realidad están causando daño:",
  dontDoList: [
   '<strong>"ChatGPT dice..."</strong> seguido de información no verificada',
   "<strong>Copiar fragmentos de código</strong> sin probarlos primero",
   "<strong>Compartir consejos generados por IA</strong> para temas críticos (médicos, legales, financieros)",
   "<strong>Usar respuestas de IA como evangelio</strong> sin considerar contexto o precisión",
   '<strong>"Búsqueda rápida de Google/IA"</strong> respuestas que no han sido validadas',
  ],
  whyHarmful: "Por qué esto es dañino:",
  whyHarmfulText:
   "Cuando copias respuestas de IA sin verificación, estás <strong>contribuyendo a la propagación de desinformación</strong>. La IA puede estar confidentemente equivocada, y la información desactualizada puede causar problemas reales. También estás perdiendo oportunidades de aprender y entender el tema tú mismo.",
  doThisTitle: "✅ En su lugar intenta esto",
  doThisIntro: "Usa la IA como punto de partida, no como respuesta final:",
  doThisList: [
   "<strong>Lee y entiende</strong> las respuestas de IA antes de compartirlas",
   "<strong>Prueba fragmentos de código</strong> en tu entorno antes de recomendarlos",
   '<strong>Añade contexto:</strong> "Encontré este enfoque, pero deberías verificarlo para tu caso de uso..."',
   "<strong>Cita fuentes oficiales</strong> junto con contenido generado por IA",
   '<strong>Reconoce la incertidumbre:</strong> "Esto podría funcionar, pero verifica la documentación"',
   "<strong>Fomenta el aprendizaje:</strong> Comparte recursos para un entendimiento más profundo",
  ],
  benefitsTitle: "Beneficios del uso responsable de IA:",
  benefitsText:
   "Cuando verificas respuestas de IA antes de compartir, <strong>mantienes la confianza en tu comunidad</strong>, reduces la propagación de desinformación y fomentas el aprendizaje genuino. Estás usando la IA como una herramienta poderosa mientras te mantienes intelectualmente honesto.",
  rememberTitle: "Recuerda: La IA es una herramienta, no un oráculo 🔮",
  rememberText1:
   "La IA puede proporcionar excelentes puntos de partida y sugerencias, pero también puede estar confidentemente incorrecta. La clave es usarla responsablemente - verifica, entiende y añade tu propio contexto antes de compartir con otros.",
  rememberText2:
   '<strong>Solo pregúntate: "¿Realmente he leído y entendido esto antes de compartirlo?"</strong> 🤔',
  languageLabel: "Idioma:",
  footerText: "Este sitio promueve el uso responsable de IA. 🤖✨",
  inspiredBy: "Inspirado por",
  shareText: "Comparte esto: <strong>noslopdrop.net</strong>",
 },
 fa: {
  title: "بدون slop drop",
  subtitle: "لطفاً پاسخ‌های هوش مصنوعی را بدون تأیید کپی نکنید",
  intro:
   "تصور کنید از کسی سؤال فنی می‌پرسید و او فوراً با پاسخ تولید شده توسط هوش مصنوعی که حتی نخوانده پاسخ می‌دهد... 🤦‍♀️",
  chatChannel: "#کانال-کمک",
  devNewbie: "توسعه‌دهنده‌تازه‌کار",
  quickHelper: "کمک‌کننده‌سریع",
  experiencedDev: "توسعه‌دهنده‌باتجربه",
  badQuestion:
   "سلام همه! این خطای عجیب React رو هنگام به‌روزرسانی state دارم. کسی می‌دونه چطور حلش کنم؟",
  badAnswer:
   "ChatGPT می‌گه باید از componentWillMount() در constructor تون استفاده کنید تا به‌روزرسانی‌های state رو درست مدیریت کنید.",
  badResponse: "ممنون! الان امتحانش می‌کنم.",
  goodAnswer:
   "قبلاً با این مواجه شدم. اینجا یه روش با useEffect هست که ممکنه کمک کنه، ولی باید با تنظیمات خاص خودتون تستش کنید. همچنین مستندات رسمی React رو برای به‌روزرسانی state چک کنید: https://react.dev/learn/state. اگه نیاز به توضیح هر قسمتی داشتید بهم بگید!",
  goodResponse:
   "عالی! این کار کرد و مستندات کمکم کرد بفهمم چرا. ممنون از توضیح و منبع رسمی!",
  problemIndicator:
   "⚠️ <strong>مشکل:</strong> componentWillMount() از React 16.3 (2018) منسوخ شده. این توصیه قدیمی هست و ممکنه اپلیکیشن‌های مدرن React رو خراب کنه.",
  successIndicator:
   "✅ <strong>موفقیت:</strong> پاسخ متفکرانه با زمینه، توصیه تأیید، مستندات رسمی و پشتیبانی پیگیری.",
  dontDoTitle: "❌ این کار رو نکنید",
  dontDoIntro:
   "افرادی که پاسخ‌های هوش مصنوعی رو بدون تأیید کپی می‌کنند اغلب سعی می‌کنند کمک کنند، ولی در واقع آسیب می‌زنند:",
  dontDoList: [
   '<strong>"ChatGPT می‌گه..."</strong> همراه با اطلاعات تأیید نشده',
   "<strong>کپی کردن قطعه کدها</strong> بدون تست کردن اول",
   "<strong>اشتراک‌گذاری توصیه‌های تولید شده توسط هوش مصنوعی</strong> برای موضوعات حیاتی (پزشکی، حقوقی، مالی)",
   "<strong>استفاده از پاسخ‌های هوش مصنوعی به عنوان انجیل</strong> بدون در نظر گیری زمینه یا دقت",
   '<strong>"جستجوی سریع Google/AI"</strong> پاسخ‌هایی که تأیید نشده‌اند',
  ],
  whyHarmful: "چرا این مضر است:",
  whyHarmfulText:
   "وقتی پاسخ‌های هوش مصنوعی رو بدون تأیید کپی می‌کنید، <strong>به انتشار اطلاعات غلط کمک می‌کنید</strong>. هوش مصنوعی می‌تونه با اطمینان اشتباه باشه و اطلاعات قدیمی می‌تونه مشکلات واقعی ایجاد کنه. همچنین فرصت‌های یادگیری و درک موضوع رو از دست می‌دید.",
  doThisTitle: "✅ به جاش این کار رو بکنید",
  doThisIntro: "از هوش مصنوعی به عنوان نقطه شروع استفاده کنید، نه پاسخ نهایی:",
  doThisList: [
   "<strong>بخونید و بفهمید</strong> پاسخ‌های هوش مصنوعی رو قبل از اشتراک‌گذاری",
   "<strong>قطعه کدها رو تست کنید</strong> در محیط خودتون قبل از توصیه",
   '<strong>زمینه اضافه کنید:</strong> "این روش رو پیدا کردم، ولی باید برای مورد استفاده خودتون تأییدش کنید..."',
   "<strong>منابع رسمی رو ذکر کنید</strong> در کنار محتوای تولید شده توسط هوش مصنوعی",
   '<strong>عدم اطمینان رو بپذیرید:</strong> "این ممکنه کار کنه، ولی مستندات رو دوباره چک کنید"',
   "<strong>یادگیری رو تشویق کنید:</strong> منابع رو برای درک عمیق‌تر به اشتراک بذارید",
  ],
  benefitsTitle: "مزایای استفاده مسئولانه از هوش مصنوعی:",
  benefitsText:
   "وقتی پاسخ‌های هوش مصنوعی رو قبل از اشتراک‌گذاری تأیید می‌کنید، <strong>اعتماد در جامعه‌تون رو حفظ می‌کنید</strong>، انتشار اطلاعات غلط رو کاهش می‌دید و یادگیری واقعی رو تشویق می‌کنید. از هوش مصنوعی به عنوان ابزار قدرتمند استفاده می‌کنید در حالی که از نظر فکری صادق می‌مونید.",
  rememberTitle: "یادتون باشه: هوش مصنوعی یه ابزاره، نه پیشگو 🔮",
  rememberText1:
   "هوش مصنوعی می‌تونه نقاط شروع و پیشنهادات عالی ارائه بده، ولی می‌تونه با اطمینان اشتباه هم باشه. کلید استفاده مسئولانه ازش هست - تأیید کنید، بفهمید و زمینه خودتون رو قبل از اشتراک با دیگران اضافه کنید.",
  rememberText2:
   '<strong>فقط از خودتون بپرسید: "واقعاً این رو خوندم و فهمیدم قبل از اشتراک‌گذاری؟"</strong> 🤔',
  languageLabel: "زبان:",
  footerText: "این سایت استفاده مسئولانه از هوش مصنوعی رو ترویج می‌کنه. 🤖✨",
  inspiredBy: "الهام گرفته از",
  shareText: "این رو به اشتراک بذارید: <strong>noslopdrop.net</strong>",
 },
 fr: {
  title: "pas de slop drop",
  subtitle: "s'il vous plaît ne copiez pas les réponses IA sans vérification",
  intro:
   "Imaginez poser une question technique à quelqu'un, et qu'il réponde immédiatement avec une réponse générée par IA qu'il n'a même pas lue... 🤦‍♀️",
  chatChannel: "#canal-aide",
  devNewbie: "DéveloppeurDébutant",
  quickHelper: "AidantRapide",
  experiencedDev: "DéveloppeurExpérimenté",
  badQuestion:
   "Salut tout le monde ! J'ai cette erreur bizarre React en essayant de mettre à jour l'état. Quelqu'un sait comment la corriger ?",
  badAnswer:
   "ChatGPT dit que vous devriez utiliser componentWillMount() dans votre constructeur pour gérer correctement les mises à jour d'état.",
  badResponse: "Merci ! Je vais essayer ça tout de suite.",
  goodAnswer:
   "J'ai déjà rencontré ça. Voici une approche utilisant useEffect qui pourrait aider, mais vous devriez la tester avec votre configuration spécifique. Consultez aussi les docs officiels React sur les mises à jour d'état : https://react.dev/learn/state. Dites-moi si vous avez besoin d'éclaircissements sur une partie !",
  goodResponse:
   "Parfait ! Ça a marché et les docs m'ont aidé à comprendre pourquoi. Merci pour l'explication et la ressource officielle !",
  problemIndicator:
   "⚠️ <strong>Problème :</strong> componentWillMount() est déprécié depuis React 16.3 (2018). Ce conseil est obsolète et pourrait casser les applications React modernes.",
  successIndicator:
   "✅ <strong>Succès :</strong> Réponse réfléchie avec contexte, conseil de vérification, documentation officielle et support de suivi.",
  dontDoTitle: "❌ Ne faites pas ça",
  dontDoIntro:
   "Les gens qui copient-collent les réponses IA sans vérification essaient souvent d'être utiles, mais ils causent en fait du mal :",
  dontDoList: [
   '<strong>"ChatGPT dit..."</strong> suivi d\'informations non vérifiées',
   "<strong>Copier-coller des extraits de code</strong> sans les tester d'abord",
   "<strong>Partager des conseils générés par IA</strong> pour des sujets critiques (médical, légal, financier)",
   "<strong>Utiliser les réponses IA comme parole d'évangile</strong> sans considérer le contexte ou la précision",
   '<strong>"Recherche rapide Google/IA"</strong> réponses qui n\'ont pas été validées',
  ],
  whyHarmful: "Pourquoi c'est nuisible :",
  whyHarmfulText:
   "Quand vous copiez-collez des réponses IA sans vérification, vous <strong>contribuez à la propagation de désinformation</strong>. L'IA peut être confidemment fausse, et les informations obsolètes peuvent causer de vrais problèmes. Vous ratez aussi des opportunités d'apprendre et de comprendre le sujet vous-même.",
  doThisTitle: "✅ Essayez plutôt ça",
  doThisIntro:
   "Utilisez l'IA comme point de départ, pas comme réponse finale :",
  doThisList: [
   "<strong>Lisez et comprenez</strong> les réponses IA avant de les partager",
   "<strong>Testez les extraits de code</strong> dans votre environnement avant de les recommander",
   "<strong>Ajoutez du contexte :</strong> \"J'ai trouvé cette approche, mais vous devriez la vérifier pour votre cas d'usage...\"",
   "<strong>Citez les sources officielles</strong> à côté du contenu généré par IA",
   '<strong>Reconnaissez l\'incertitude :</strong> "Ça pourrait marcher, mais vérifiez la documentation"',
   "<strong>Encouragez l'apprentissage :</strong> Partagez des ressources pour une compréhension plus profonde",
  ],
  benefitsTitle: "Avantages de l'usage responsable de l'IA :",
  benefitsText:
   "Quand vous vérifiez les réponses IA avant de partager, vous <strong>maintenez la confiance dans votre communauté</strong>, réduisez la propagation de désinformation et encouragez l'apprentissage authentique. Vous utilisez l'IA comme un outil puissant tout en restant intellectuellement honnête.",
  rememberTitle: "Rappelez-vous : L'IA est un outil, pas un oracle 🔮",
  rememberText1:
   "L'IA peut fournir d'excellents points de départ et suggestions, mais elle peut aussi être confidemment incorrecte. La clé est de l'utiliser de manière responsable - vérifiez, comprenez et ajoutez votre propre contexte avant de partager avec d'autres.",
  rememberText2:
   '<strong>Demandez-vous simplement : "Ai-je vraiment lu et compris ceci avant de le partager ?"</strong> 🤔',
  languageLabel: "Langue :",
  footerText: "Ce site promeut l'usage responsable de l'IA. 🤖✨",
  inspiredBy: "Inspiré par",
  shareText: "Partagez ceci : <strong>noslopdrop.net</strong>",
 },
 he: {
  title: "לא slop drop",
  subtitle: "אנא אל תעתיקו תשובות בינה מלאכותית ללא אימות",
  intro:
   "דמיינו ששואלים מישהו שאלה טכנית, והוא מיד עונה עם תשובה שנוצרה על ידי בינה מלאכותית שהוא אפילו לא קרא... 🤦‍♀️",
  chatChannel: "#ערוץ-עזרה",
  devNewbie: "מפתח-חדש",
  quickHelper: "עוזר-מהיר",
  experiencedDev: "מפתח-מנוסה",
  badQuestion:
   "שלום לכולם! יש לי שגיאת React מוזרה כשאני מנסה לעדכן state. מישהו יודע איך לתקן את זה?",
  badAnswer:
   "ChatGPT אומר שאתה צריך להשתמש ב-componentWillMount() בקונסטרקטור שלך כדי לטפל בעדכוני state בצורה נכונה.",
  badResponse: "תודה! אנסה את זה עכשיו.",
  goodAnswer:
   "נתקלתי בזה בעבר. הנה גישה באמצעות useEffect שעשויה לעזור, אבל אתה צריך לבדוק את זה עם ההגדרות הספציפיות שלך. כמו כן, בדוק את התיעוד הרשמי של React על עדכוני state: https://react.dev/learn/state. תודיע לי אם אתה צריך הבהרה על איזה חלק!",
  goodResponse:
   "מושלם! זה עבד והתיעוד עזר לי להבין למה. תודה על ההסבר והמשאב הרשמי!",
  problemIndicator:
   "⚠️ <strong>בעיה:</strong> componentWillMount() הוצא משימוש מאז React 16.3 (2018). העצה הזו מיושנת ועלולה לשבור אפליקציות React מודרניות.",
  successIndicator:
   "✅ <strong>הצלחה:</strong> תגובה מחושבת עם הקשר, עצת אימות, תיעוד רשמי ותמיכת המשך.",
  dontDoTitle: "❌ אל תעשו את זה",
  dontDoIntro:
   "אנשים שמעתיקים תשובות בינה מלאכותית ללא אימות לעתים קרובות מנסים לעזור, אבל הם בעצם גורמים נזק:",
  dontDoList: [
   '<strong>"ChatGPT אומר..."</strong> ואחריו מידע לא מאומת',
   "<strong>העתקת קטעי קוד</strong> מבלי לבדוק אותם קודם",
   "<strong>שיתוף עצות שנוצרו על ידי בינה מלאכותית</strong> לנושאים קריטיים (רפואי, משפטי, פיננסי)",
   "<strong>שימוש בתשובות בינה מלאכותית כאוונגליון</strong> מבלי לשקול הקשר או דיוק",
   '<strong>"חיפוש מהיר ב-Google/AI"</strong> תשובות שלא אומתו',
  ],
  whyHarmful: "למה זה מזיק:",
  whyHarmfulText:
   "כשאתם מעתיקים תשובות בינה מלאכותית ללא אימות, אתם <strong>תורמים להפצת מידע שגוי</strong>. בינה מלאכותית יכולה להיות בטוחה בעצמה ושגויה, ומידע מיושן יכול לגרום לבעיות אמיתיות. אתם גם מפסידים הזדמנויות ללמוד ולהבין את הנושא בעצמכם.",
  doThisTitle: "✅ במקום זאת נסו את זה",
  doThisIntro: "השתמשו בבינה מלאכותית כנקודת התחלה, לא כתשובה סופית:",
  doThisList: [
   "<strong>קראו והבינו</strong> תשובות בינה מלאכותית לפני שיתוף",
   "<strong>בדקו קטעי קוד</strong> בסביבה שלכם לפני המלצה עליהם",
   '<strong>הוסיפו הקשר:</strong> "מצאתי את הגישה הזו, אבל אתם צריכים לאמת אותה למקרה השימוש שלכם..."',
   "<strong>צטטו מקורות רשמיים</strong> לצד תוכן שנוצר על ידי בינה מלאכותית",
   '<strong>הכירו באי-ודאות:</strong> "זה עשוי לעבוד, אבל בדקו שוב את התיעוד"',
   "<strong>עודדו למידה:</strong> שתפו משאבים להבנה עמוקה יותר",
  ],
  benefitsTitle: "יתרונות של שימוש אחראי בבינה מלאכותית:",
  benefitsText:
   "כשאתם מאמתים תשובות בינה מלאכותית לפני שיתוף, אתם <strong>שומרים על האמון בקהילה שלכם</strong>, מפחיתים הפצת מידע שגוי ומעודדים למידה אמיתית. אתם משתמשים בבינה מלאכותית ככלי חזק תוך שמירה על יושר אינטלקטואלי.",
  rememberTitle: "זכרו: בינה מלאכותית היא כלי, לא אורקל 🔮",
  rememberText1:
   "בינה מלאכותית יכולה לספק נקודות התחלה והצעות מעולות, אבל היא גם יכולה להיות בטוחה בעצמה ושגויה. המפתח הוא להשתמש בה באחריות - לאמת, להבין ולהוסיף הקשר משלכם לפני שיתוף עם אחרים.",
  rememberText2:
   '<strong>פשוט שאלו את עצמכם: "האם באמת קראתי והבנתי את זה לפני שיתוף?"</strong> 🤔',
  languageLabel: "שפה:",
  footerText: "האתר הזה מקדם שימוש אחראי בבינה מלאכותית. 🤖✨",
  inspiredBy: "בהשראת",
  shareText: "שתפו את זה: <strong>noslopdrop.net</strong>",
 },
 id: {
  title: "tidak ada slop drop",
  subtitle: "tolong jangan copy-paste jawaban AI tanpa verifikasi",
  intro:
   "Bayangkan bertanya kepada seseorang pertanyaan teknis, dan mereka langsung merespons dengan jawaban yang dihasilkan AI yang bahkan belum mereka baca... 🤦‍♀️",
  chatChannel: "#channel-bantuan",
  devNewbie: "DeveloperPemula",
  quickHelper: "Penolong Cepat",
  experiencedDev: "DeveloperBerpengalaman",
  badQuestion:
   "Halo semua! Saya mendapat error React aneh saat mencoba update state. Ada yang tahu cara memperbaikinya?",
  badAnswer:
   "ChatGPT bilang Anda harus menggunakan componentWillMount() di constructor untuk menangani update state dengan benar.",
  badResponse: "Terima kasih! Akan saya coba sekarang.",
  goodAnswer:
   "Saya pernah mengalami ini sebelumnya. Ini pendekatan menggunakan useEffect yang mungkin membantu, tapi Anda harus mengujinya dengan setup spesifik Anda. Juga, periksa dokumentasi resmi React tentang update state: https://react.dev/learn/state. Beri tahu saya jika butuh klarifikasi bagian mana pun!",
  goodResponse:
   "Sempurna! Ini berhasil dan dokumentasinya membantu saya memahami mengapa. Terima kasih atas penjelasan dan sumber resminya!",
  problemIndicator:
   "⚠️ <strong>Masalah:</strong> componentWillMount() sudah deprecated sejak React 16.3 (2018). Saran ini sudah usang dan bisa merusak aplikasi React modern.",
  successIndicator:
   "✅ <strong>Sukses:</strong> Respons yang thoughtful dengan konteks, saran verifikasi, dokumentasi resmi, dan dukungan lanjutan.",
  dontDoTitle: "❌ Jangan lakukan ini",
  dontDoIntro:
   "Orang yang copy-paste respons AI tanpa verifikasi sering mencoba membantu, tapi sebenarnya mereka menyebabkan kerugian:",
  dontDoList: [
   '<strong>"ChatGPT bilang..."</strong> diikuti informasi yang tidak terverifikasi',
   "<strong>Copy-paste potongan kode</strong> tanpa mengujinya terlebih dahulu",
   "<strong>Berbagi saran yang dihasilkan AI</strong> untuk topik kritis (medis, hukum, keuangan)",
   "<strong>Menggunakan respons AI sebagai injil</strong> tanpa mempertimbangkan konteks atau akurasi",
   '<strong>"Pencarian cepat Google/AI"</strong> respons yang belum divalidasi',
  ],
  whyHarmful: "Mengapa ini berbahaya:",
  whyHarmfulText:
   "Ketika Anda copy-paste respons AI tanpa verifikasi, Anda <strong>berkontribusi pada penyebaran misinformasi</strong>. AI bisa salah dengan percaya diri, dan informasi usang bisa menyebabkan masalah nyata. Anda juga kehilangan kesempatan untuk belajar dan memahami topik sendiri.",
  doThisTitle: "✅ Coba ini sebagai gantinya",
  doThisIntro: "Gunakan AI sebagai titik awal, bukan jawaban final:",
  doThisList: [
   "<strong>Baca dan pahami</strong> respons AI sebelum membagikannya",
   "<strong>Uji potongan kode</strong> di lingkungan Anda sebelum merekomendasikannya",
   '<strong>Tambahkan konteks:</strong> "Saya menemukan pendekatan ini, tapi Anda harus memverifikasinya untuk kasus penggunaan Anda..."',
   "<strong>Kutip sumber resmi</strong> bersama konten yang dihasilkan AI",
   '<strong>Akui ketidakpastian:</strong> "Ini mungkin berhasil, tapi periksa kembali dokumentasinya"',
   "<strong>Dorong pembelajaran:</strong> Bagikan sumber untuk pemahaman yang lebih dalam",
  ],
  benefitsTitle: "Manfaat penggunaan AI yang bertanggung jawab:",
  benefitsText:
   "Ketika Anda memverifikasi respons AI sebelum berbagi, Anda <strong>mempertahankan kepercayaan di komunitas Anda</strong>, mengurangi penyebaran misinformasi, dan mendorong pembelajaran yang genuine. Anda menggunakan AI sebagai alat yang powerful sambil tetap jujur secara intelektual.",
  rememberTitle: "Ingat: AI adalah alat, bukan oracle 🔮",
  rememberText1:
   "AI dapat memberikan titik awal dan saran yang bagus, tapi juga bisa salah dengan percaya diri. Kuncinya adalah menggunakannya secara bertanggung jawab - verifikasi, pahami, dan tambahkan konteks Anda sendiri sebelum berbagi dengan orang lain.",
  rememberText2:
   '<strong>Tanyakan pada diri sendiri: "Apakah saya benar-benar sudah membaca dan memahami ini sebelum membagikannya?"</strong> 🤔',
  languageLabel: "Bahasa:",
  footerText:
   "Situs ini mempromosikan penggunaan AI yang bertanggung jawab. 🤖✨",
  inspiredBy: "Terinspirasi oleh",
  shareText: "Bagikan ini: <strong>noslopdrop.net</strong>",
 },
 it: {
  title: "niente slop drop",
  subtitle: "per favore non copiare risposte AI senza verifica",
  intro:
   "Immaginate di fare una domanda tecnica a qualcuno, e loro rispondono immediatamente con una risposta generata dall'AI che non hanno nemmeno letto... 🤦‍♀️",
  chatChannel: "#canale-aiuto",
  devNewbie: "SviluppatoreNovizio",
  quickHelper: "AiutanteVeloce",
  experiencedDev: "SviluppatoreEsperto",
  badQuestion:
   "Ciao a tutti! Ho questo strano errore React quando provo ad aggiornare lo state. Qualcuno sa come risolverlo?",
  badAnswer:
   "ChatGPT dice che dovresti usare componentWillMount() nel tuo constructor per gestire correttamente gli aggiornamenti dello state.",
  badResponse: "Grazie! Lo proverò subito.",
  goodAnswer:
   "Ho già incontrato questo problema. Ecco un approccio usando useEffect che potrebbe aiutare, ma dovresti testarlo con la tua configurazione specifica. Inoltre, controlla la documentazione ufficiale di React sugli aggiornamenti dello state: https://react.dev/learn/state. Fammi sapere se hai bisogno di chiarimenti su qualche parte!",
  goodResponse:
   "Perfetto! Ha funzionato e la documentazione mi ha aiutato a capire il perché. Grazie per la spiegazione e la risorsa ufficiale!",
  problemIndicator:
   "⚠️ <strong>Problema:</strong> componentWillMount() è deprecato da React 16.3 (2018). Questo consiglio è obsoleto e potrebbe rompere le applicazioni React moderne.",
  successIndicator:
   "✅ <strong>Successo:</strong> Risposta ponderata con contesto, consiglio di verifica, documentazione ufficiale e supporto di follow-up.",
  dontDoTitle: "❌ Non fare questo",
  dontDoIntro:
   "Le persone che copiano-incollano risposte AI senza verifica spesso cercano di essere utili, ma in realtà stanno causando danni:",
  dontDoList: [
   '<strong>"ChatGPT dice..."</strong> seguito da informazioni non verificate',
   "<strong>Copiare-incollare frammenti di codice</strong> senza testarli prima",
   "<strong>Condividere consigli generati dall'AI</strong> per argomenti critici (medici, legali, finanziari)",
   "<strong>Usare risposte AI come vangelo</strong> senza considerare contesto o accuratezza",
   '<strong>"Ricerca veloce Google/AI"</strong> risposte che non sono state validate',
  ],
  whyHarmful: "Perché questo è dannoso:",
  whyHarmfulText:
   "Quando copi-incolli risposte AI senza verifica, stai <strong>contribuendo alla diffusione di disinformazione</strong>. L'AI può essere confidentemente sbagliata, e informazioni obsolete possono causare problemi reali. Stai anche perdendo opportunità di imparare e comprendere l'argomento da solo.",
  doThisTitle: "✅ Prova invece questo",
  doThisIntro: "Usa l'AI come punto di partenza, non come risposta finale:",
  doThisList: [
   "<strong>Leggi e comprendi</strong> le risposte AI prima di condividerle",
   "<strong>Testa i frammenti di codice</strong> nel tuo ambiente prima di raccomandarli",
   '<strong>Aggiungi contesto:</strong> "Ho trovato questo approccio, ma dovresti verificarlo per il tuo caso d\'uso..."',
   "<strong>Cita fonti ufficiali</strong> insieme al contenuto generato dall'AI",
   '<strong>Riconosci l\'incertezza:</strong> "Questo potrebbe funzionare, ma ricontrolla la documentazione"',
   "<strong>Incoraggia l'apprendimento:</strong> Condividi risorse per una comprensione più profonda",
  ],
  benefitsTitle: "Benefici dell'uso responsabile dell'AI:",
  benefitsText:
   "Quando verifichi le risposte AI prima di condividere, <strong>mantieni la fiducia nella tua comunità</strong>, riduci la diffusione di disinformazione e incoraggi un apprendimento genuino. Stai usando l'AI come uno strumento potente rimanendo intellettualmente onesto.",
  rememberTitle: "Ricorda: L'AI è uno strumento, non un oracolo 🔮",
  rememberText1:
   "L'AI può fornire ottimi punti di partenza e suggerimenti, ma può anche essere confidentemente incorretta. La chiave è usarla responsabilmente - verifica, comprendi e aggiungi il tuo contesto prima di condividere con altri.",
  rememberText2:
   '<strong>Chiediti semplicemente: "Ho davvero letto e compreso questo prima di condividerlo?"</strong> 🤔',
  languageLabel: "Lingua:",
  footerText: "Questo sito promuove l'uso responsabile dell'AI. 🤖✨",
  inspiredBy: "Ispirato da",
  shareText: "Condividi questo: <strong>noslopdrop.net</strong>",
 },
 pl: {
  title: "żadnego slop drop",
  subtitle: "proszę nie kopiować odpowiedzi AI bez weryfikacji",
  intro:
   "Wyobraźcie sobie, że zadajecie komuś pytanie techniczne, a oni natychmiast odpowiadają odpowiedzią wygenerowaną przez AI, której nawet nie przeczytali... 🤦‍♀️",
  chatChannel: "#kanał-pomocy",
  devNewbie: "ProgramistaPoczątkujący",
  quickHelper: "SzybkiPomagacz",
  experiencedDev: "DoświadczonyProgramista",
  badQuestion:
   "Cześć wszystkim! Mam dziwny błąd React przy próbie aktualizacji stanu. Ktoś wie jak to naprawić?",
  badAnswer:
   "ChatGPT mówi, że powinieneś użyć componentWillMount() w swoim konstruktorze, aby prawidłowo obsługiwać aktualizacje stanu.",
  badResponse: "Dzięki! Spróbuję tego teraz.",
  goodAnswer:
   "Spotkałem się z tym wcześniej. Oto podejście używające useEffect, które może pomóc, ale powinieneś przetestować to ze swoją konkretną konfiguracją. Sprawdź też oficjalną dokumentację React o aktualizacjach stanu: https://react.dev/learn/state. Daj mi znać, jeśli potrzebujesz wyjaśnienia jakiejś części!",
  goodResponse:
   "Idealnie! To zadziałało i dokumentacja pomogła mi zrozumieć dlaczego. Dzięki za wyjaśnienie i oficjalne źródło!",
  problemIndicator:
   "⚠️ <strong>Problem:</strong> componentWillMount() jest przestarzałe od React 16.3 (2018). Ta rada jest nieaktualna i może zepsuć nowoczesne aplikacje React.",
  successIndicator:
   "✅ <strong>Sukces:</strong> Przemyślana odpowiedź z kontekstem, radą weryfikacji, oficjalną dokumentacją i wsparciem kontynuacji.",
  dontDoTitle: "❌ Nie rób tego",
  dontDoIntro:
   "Ludzie, którzy kopiują odpowiedzi AI bez weryfikacji, często próbują być pomocni, ale w rzeczywistości wyrządzają szkodę:",
  dontDoList: [
   '<strong>"ChatGPT mówi..."</strong> po którym następują niezweryfikowane informacje',
   "<strong>Kopiowanie fragmentów kodu</strong> bez wcześniejszego testowania",
   "<strong>Udostępnianie rad generowanych przez AI</strong> dla krytycznych tematów (medycznych, prawnych, finansowych)",
   "<strong>Używanie odpowiedzi AI jako ewangelii</strong> bez uwzględnienia kontekstu lub dokładności",
   '<strong>"Szybkie wyszukiwanie Google/AI"</strong> odpowiedzi, które nie zostały zwalidowane',
  ],
  whyHarmful: "Dlaczego to szkodliwe:",
  whyHarmfulText:
   "Kiedy kopiujesz odpowiedzi AI bez weryfikacji, <strong>przyczyniasz się do rozprzestrzeniania dezinformacji</strong>. AI może być pewnie błędne, a przestarzałe informacje mogą powodować prawdziwe problemy. Tracisz też okazje do nauki i zrozumienia tematu samodzielnie.",
  doThisTitle: "✅ Zamiast tego spróbuj tego",
  doThisIntro:
   "Używaj AI jako punktu wyjścia, nie jako ostatecznej odpowiedzi:",
  doThisList: [
   "<strong>Przeczytaj i zrozum</strong> odpowiedzi AI przed ich udostępnieniem",
   "<strong>Przetestuj fragmenty kodu</strong> w swoim środowisku przed ich poleceniem",
   '<strong>Dodaj kontekst:</strong> "Znalazłem to podejście, ale powinieneś je zweryfikować dla swojego przypadku użycia..."',
   "<strong>Cytuj oficjalne źródła</strong> obok treści generowanych przez AI",
   '<strong>Przyznaj się do niepewności:</strong> "To może zadziałać, ale sprawdź ponownie dokumentację"',
   "<strong>Zachęcaj do nauki:</strong> Udostępniaj zasoby dla głębszego zrozumienia",
  ],
  benefitsTitle: "Korzyści z odpowiedzialnego używania AI:",
  benefitsText:
   "Kiedy weryfikujesz odpowiedzi AI przed udostępnieniem, <strong>utrzymujesz zaufanie w swojej społeczności</strong>, redukujesz rozprzestrzenianie dezinformacji i zachęcasz do prawdziwej nauki. Używasz AI jako potężnego narzędzia, pozostając intelektualnie uczciwy.",
  rememberTitle: "Pamiętaj: AI to narzędzie, nie wyrocznia 🔮",
  rememberText1:
   "AI może dostarczać świetne punkty wyjścia i sugestie, ale może też być pewnie niepoprawne. Kluczem jest używanie go odpowiedzialnie - weryfikuj, rozumiej i dodawaj swój własny kontekst przed udostępnieniem innym.",
  rememberText2:
   '<strong>Po prostu zapytaj siebie: "Czy naprawdę przeczytałem i zrozumiałem to przed udostępnieniem?"</strong> 🤔',
  languageLabel: "Język:",
  footerText: "Ta strona promuje odpowiedzialne używanie AI. 🤖✨",
  inspiredBy: "Zainspirowane przez",
  shareText: "Udostępnij to: <strong>noslopdrop.net</strong>",
 },
 "pt-br": {
  title: "sem slop drop",
  subtitle: "por favor não copie respostas de IA sem verificação",
  intro:
   "Imagine perguntar algo técnico para alguém, e eles imediatamente respondem com uma resposta gerada por IA que nem sequer leram... 🤦‍♀️",
  chatChannel: "#canal-ajuda",
  devNewbie: "DesenvolvedorIniciante",
  quickHelper: "AjudanteRápido",
  experiencedDev: "DesenvolvedorExperiente",
  badQuestion:
   "Oi pessoal! Estou tendo esse erro estranho do React ao tentar atualizar o state. Alguém sabe como resolver?",
  badAnswer:
   "O ChatGPT diz que você deveria usar componentWillMount() no seu constructor para lidar com atualizações de state adequadamente.",
  badResponse: "Obrigado! Vou tentar isso agora.",
  goodAnswer:
   "Já encontrei isso antes. Aqui está uma abordagem usando useEffect que pode ajudar, mas você deveria testar com sua configuração específica. Também, confira a documentação oficial do React sobre atualizações de state: https://react.dev/learn/state. Me avise se precisar de esclarecimento em alguma parte!",
  goodResponse:
   "Perfeito! Funcionou e a documentação me ajudou a entender o porquê. Obrigado pela explicação e pelo recurso oficial!",
  problemIndicator:
   "⚠️ <strong>Problema:</strong> componentWillMount() foi depreciado desde React 16.3 (2018). Este conselho está desatualizado e pode quebrar aplicações React modernas.",
  successIndicator:
   "✅ <strong>Sucesso:</strong> Resposta cuidadosa com contexto, conselho de verificação, documentação oficial e suporte de acompanhamento.",
  dontDoTitle: "❌ Não faça isso",
  dontDoIntro:
   "Pessoas que copiam respostas de IA sem verificação frequentemente tentam ser úteis, mas na verdade estão causando danos:",
  dontDoList: [
   '<strong>"ChatGPT diz..."</strong> seguido de informações não verificadas',
   "<strong>Copiar trechos de código</strong> sem testá-los primeiro",
   "<strong>Compartilhar conselhos gerados por IA</strong> para tópicos críticos (médicos, legais, financeiros)",
   "<strong>Usar respostas de IA como evangelho</strong> sem considerar contexto ou precisão",
   '<strong>"Busca rápida no Google/IA"</strong> respostas que não foram validadas',
  ],
  whyHarmful: "Por que isso é prejudicial:",
  whyHarmfulText:
   "Quando você copia respostas de IA sem verificação, está <strong>contribuindo para a disseminação de desinformação</strong>. IA pode estar confidentemente errada, e informações desatualizadas podem causar problemas reais. Você também está perdendo oportunidades de aprender e entender o tópico por si mesmo.",
  doThisTitle: "✅ Em vez disso, tente isso",
  doThisIntro: "Use IA como ponto de partida, não como resposta final:",
  doThisList: [
   "<strong>Leia e entenda</strong> respostas de IA antes de compartilhá-las",
   "<strong>Teste trechos de código</strong> no seu ambiente antes de recomendá-los",
   '<strong>Adicione contexto:</strong> "Encontrei essa abordagem, mas você deveria verificá-la para seu caso de uso..."',
   "<strong>Cite fontes oficiais</strong> junto com conteúdo gerado por IA",
   '<strong>Reconheça incerteza:</strong> "Isso pode funcionar, mas verifique novamente a documentação"',
   "<strong>Encoraje aprendizado:</strong> Compartilhe recursos para entendimento mais profundo",
  ],
  benefitsTitle: "Benefícios do uso responsável de IA:",
  benefitsText:
   "Quando você verifica respostas de IA antes de compartilhar, <strong>mantém a confiança na sua comunidade</strong>, reduz a disseminação de desinformação e encoraja aprendizado genuíno. Você está usando IA como uma ferramenta poderosa enquanto permanece intelectualmente honesto.",
  rememberTitle: "Lembre-se: IA é uma ferramenta, não um oráculo 🔮",
  rememberText1:
   "IA pode fornecer ótimos pontos de partida e sugestões, mas também pode estar confidentemente incorreta. A chave é usá-la responsavelmente - verifique, entenda e adicione seu próprio contexto antes de compartilhar com outros.",
  rememberText2:
   '<strong>Apenas se pergunte: "Eu realmente li e entendi isso antes de compartilhar?"</strong> 🤔',
  languageLabel: "Idioma:",
  footerText: "Este site promove o uso responsável de IA. 🤖✨",
  inspiredBy: "Inspirado por",
  shareText: "Compartilhe isso: <strong>noslopdrop.net</strong>",
 },
 ru: {
  title: "никакого slop drop",
  subtitle: "пожалуйста, не копируйте ответы ИИ без проверки",
  intro:
   "Представьте, что вы задаете кому-то технический вопрос, а они сразу отвечают ответом, сгенерированным ИИ, который даже не прочитали... 🤦‍♀️",
  chatChannel: "#канал-помощи",
  devNewbie: "НачинающийРазработчик",
  quickHelper: "БыстрыйПомощник",
  experiencedDev: "ОпытныйРазработчик",
  badQuestion:
   "Привет всем! У меня странная ошибка React при попытке обновить состояние. Кто-нибудь знает, как это исправить?",
  badAnswer:
   "ChatGPT говорит, что вы должны использовать componentWillMount() в вашем конструкторе для правильной обработки обновлений состояния.",
  badResponse: "Спасибо! Попробую это сейчас.",
  goodAnswer:
   "Я сталкивался с этим раньше. Вот подход с использованием useEffect, который может помочь, но вы должны протестировать его с вашей конкретной настройкой. Также проверьте официальную документацию React об обновлениях состояния: https://react.dev/learn/state. Дайте знать, если нужны разъяснения по любой части!",
  goodResponse:
   "Отлично! Это сработало, и документация помогла мне понять почему. Спасибо за объяснение и официальный ресурс!",
  problemIndicator:
   "⚠️ <strong>Проблема:</strong> componentWillMount() устарел с React 16.3 (2018). Этот совет устарел и может сломать современные React приложения.",
  successIndicator:
   "✅ <strong>Успех:</strong> Продуманный ответ с контекстом, советом по проверке, официальной документацией и последующей поддержкой.",
  dontDoTitle: "❌ Не делайте этого",
  dontDoIntro:
   "Люди, которые копируют ответы ИИ без проверки, часто пытаются быть полезными, но на самом деле причиняют вред:",
  dontDoList: [
   '<strong>"ChatGPT говорит..."</strong> с последующей непроверенной информацией',
   "<strong>Копирование фрагментов кода</strong> без предварительного тестирования",
   "<strong>Обмен советами, сгенерированными ИИ</strong> по критическим темам (медицинским, юридическим, финансовым)",
   "<strong>Использование ответов ИИ как евангелия</strong> без учета контекста или точности",
   '<strong>"Быстрый поиск в Google/ИИ"</strong> ответы, которые не были проверены',
  ],
  whyHarmful: "Почему это вредно:",
  whyHarmfulText:
   "Когда вы копируете ответы ИИ без проверки, вы <strong>способствуете распространению дезинформации</strong>. ИИ может быть уверенно неправ, а устаревшая информация может вызвать реальные проблемы. Вы также упускаете возможности изучить и понять тему самостоятельно.",
  doThisTitle: "✅ Вместо этого попробуйте это",
  doThisIntro:
   "Используйте ИИ как отправную точку, а не как окончательный ответ:",
  doThisList: [
   "<strong>Читайте и понимайте</strong> ответы ИИ перед их публикацией",
   "<strong>Тестируйте фрагменты кода</strong> в вашей среде перед их рекомендацией",
   '<strong>Добавляйте контекст:</strong> "Я нашел этот подход, но вы должны проверить его для вашего случая использования..."',
   "<strong>Цитируйте официальные источники</strong> наряду с контентом, сгенерированным ИИ",
   '<strong>Признавайте неопределенность:</strong> "Это может сработать, но перепроверьте документацию"',
   "<strong>Поощряйте обучение:</strong> Делитесь ресурсами для более глубокого понимания",
  ],
  benefitsTitle: "Преимущества ответственного использования ИИ:",
  benefitsText:
   "Когда вы проверяете ответы ИИ перед публикацией, вы <strong>поддерживаете доверие в вашем сообществе</strong>, уменьшаете распространение дезинформации и поощряете подлинное обучение. Вы используете ИИ как мощный инструмент, оставаясь интеллектуально честными.",
  rememberTitle: "Помните: ИИ - это инструмент, а не оракул 🔮",
  rememberText1:
   "ИИ может предоставить отличные отправные точки и предложения, но он также может быть уверенно неправильным. Ключ в том, чтобы использовать его ответственно - проверяйте, понимайте и добавляйте свой собственный контекст перед публикацией для других.",
  rememberText2:
   '<strong>Просто спросите себя: "Действительно ли я прочитал и понял это перед публикацией?"</strong> 🤔',
  languageLabel: "Язык:",
  footerText: "Этот сайт продвигает ответственное использование ИИ. 🤖✨",
  inspiredBy: "Вдохновлено",
  shareText: "Поделитесь этим: <strong>noslopdrop.net</strong>",
 },
 sv: {
  title: "ingen slop drop",
  subtitle: "snälla kopiera inte AI-svar utan verifiering",
  intro:
   "Föreställ dig att du frågar någon en teknisk fråga, och de svarar omedelbart med ett AI-genererat svar som de inte ens har läst... 🤦‍♀️",
  chatChannel: "#hjälp-kanal",
  devNewbie: "UtvecklarNybörjare",
  quickHelper: "SnabbHjälpare",
  experiencedDev: "ErfarenUtvecklare",
  badQuestion:
   "Hej alla! Jag får det här konstiga React-felet när jag försöker uppdatera state. Någon som vet hur man fixar det?",
  badAnswer:
   "ChatGPT säger att du borde använda componentWillMount() i din konstruktor för att hantera state-uppdateringar ordentligt.",
  badResponse: "Tack! Ska prova det nu.",
  goodAnswer:
   "Jag har stött på det här förut. Här är ett tillvägagångssätt med useEffect som kan hjälpa, men du borde testa det med din specifika setup. Kolla också den officiella React-dokumentationen om state-uppdateringar: https://react.dev/learn/state. Säg till om du behöver förtydligande av någon del!",
  goodResponse:
   "Perfekt! Det fungerade och dokumentationen hjälpte mig förstå varför. Tack för förklaringen och den officiella resursen!",
  problemIndicator:
   "⚠️ <strong>Problem:</strong> componentWillMount() har varit föråldrat sedan React 16.3 (2018). Det här rådet är föråldrat och kan förstöra moderna React-applikationer.",
  successIndicator:
   "✅ <strong>Framgång:</strong> Genomtänkt svar med kontext, verifieringsråd, officiell dokumentation och uppföljningsstöd.",
  dontDoTitle: "❌ Gör inte det här",
  dontDoIntro:
   "Personer som kopierar AI-svar utan verifiering försöker ofta vara hjälpsamma, men de orsakar faktiskt skada:",
  dontDoList: [
   '<strong>"ChatGPT säger..."</strong> följt av overifierad information',
   "<strong>Kopiera kodavsnitt</strong> utan att testa dem först",
   "<strong>Dela AI-genererade råd</strong> för kritiska ämnen (medicinska, juridiska, finansiella)",
   "<strong>Använda AI-svar som evangelium</strong> utan att överväga kontext eller noggrannhet",
   '<strong>"Snabb Google/AI-sökning"</strong> svar som inte har validerats',
  ],
  whyHarmful: "Varför det här är skadligt:",
  whyHarmfulText:
   "När du kopierar AI-svar utan verifiering <strong>bidrar du till spridning av desinformation</strong>. AI kan vara självsäkert fel, och föråldrad information kan orsaka riktiga problem. Du missar också möjligheter att lära dig och förstå ämnet själv.",
  doThisTitle: "✅ Prova det här istället",
  doThisIntro: "Använd AI som en startpunkt, inte som det slutgiltiga svaret:",
  doThisList: [
   "<strong>Läs och förstå</strong> AI-svar innan du delar dem",
   "<strong>Testa kodavsnitt</strong> i din miljö innan du rekommenderar dem",
   '<strong>Lägg till kontext:</strong> "Jag hittade det här tillvägagångssättet, men du borde verifiera det för ditt användningsfall..."',
   "<strong>Citera officiella källor</strong> tillsammans med AI-genererat innehåll",
   '<strong>Erkänn osäkerhet:</strong> "Det här kanske fungerar, men dubbelkolla dokumentationen"',
   "<strong>Uppmuntra lärande:</strong> Dela resurser för djupare förståelse",
  ],
  benefitsTitle: "Fördelar med ansvarsfull AI-användning:",
  benefitsText:
   "När du verifierar AI-svar innan du delar <strong>behåller du förtroendet i din gemenskap</strong>, minskar spridning av desinformation och uppmuntrar äkta lärande. Du använder AI som ett kraftfullt verktyg medan du förblir intellektuellt ärlig.",
  rememberTitle: "Kom ihåg: AI är ett verktyg, inte ett orakel 🔮",
  rememberText1:
   "AI kan ge fantastiska startpunkter och förslag, men det kan också vara självsäkert felaktigt. Nyckeln är att använda det ansvarsfullt - verifiera, förstå och lägg till ditt eget sammanhang innan du delar med andra.",
  rememberText2:
   '<strong>Fråga dig själv: "Har jag faktiskt läst och förstått det här innan jag delade det?"</strong> 🤔',
  languageLabel: "Språk:",
  footerText: "Den här webbplatsen främjar ansvarsfull AI-användning. 🤖✨",
  inspiredBy: "Inspirerad av",
  shareText: "Dela det här: <strong>noslopdrop.net</strong>",
 },
 tr: {
  title: "slop drop yok",
  subtitle: "lütfen AI yanıtlarını doğrulamadan kopyalamayın",
  intro:
   "Birine teknik bir soru sorduğunuzu ve onların okumadıkları AI tarafından üretilmiş bir yanıtla hemen cevap verdiklerini hayal edin... 🤦‍♀️",
  chatChannel: "#yardım-kanalı",
  devNewbie: "YeniGeliştirici",
  quickHelper: "HızlıYardımcı",
  experiencedDev: "DeneyimliGeliştirici",
  badQuestion:
   "Herkese merhaba! State güncellerken garip bir React hatası alıyorum. Nasıl düzelteceğini bilen var mı?",
  badAnswer:
   "ChatGPT state güncellemelerini düzgün şekilde işlemek için constructor'ınızda componentWillMount() kullanmanız gerektiğini söylüyor.",
  badResponse: "Teşekkürler! Şimdi deneyeceğim.",
  goodAnswer:
   "Bununla daha önce karşılaştım. İşte yardımcı olabilecek useEffect kullanan bir yaklaşım, ama kendi özel kurulumunuzla test etmelisiniz. Ayrıca state güncellemeleri hakkında resmi React dokümanlarını kontrol edin: https://react.dev/learn/state. Herhangi bir kısım için açıklamaya ihtiyacınız olursa bana bildirin!",
  goodResponse:
   "Mükemmel! Bu işe yaradı ve dokümanlar nedenini anlamama yardımcı oldu. Açıklama ve resmi kaynak için teşekkürler!",
  problemIndicator:
   "⚠️ <strong>Sorun:</strong> componentWillMount() React 16.3'ten (2018) beri kullanımdan kaldırıldı. Bu tavsiye güncel değil ve modern React uygulamalarını bozabilir.",
  successIndicator:
   "✅ <strong>Başarı:</strong> Bağlam, doğrulama tavsiyesi, resmi dokümantasyon ve takip desteği ile düşünceli yanıt.",
  dontDoTitle: "❌ Bunu yapmayın",
  dontDoIntro:
   "AI yanıtlarını doğrulamadan kopyalayan insanlar genellikle yardımcı olmaya çalışıyor, ama aslında zarar veriyorlar:",
  dontDoList: [
   '<strong>"ChatGPT diyor ki..."</strong> ardından doğrulanmamış bilgi',
   "<strong>Kod parçacıklarını kopyalamak</strong> önce test etmeden",
   "<strong>AI tarafından üretilen tavsiyeleri paylaşmak</strong> kritik konularda (tıbbi, hukuki, finansal)",
   "<strong>AI yanıtlarını kutsal kitap gibi kullanmak</strong> bağlam veya doğruluğu düşünmeden",
   '<strong>"Hızlı Google/AI araması"</strong> doğrulanmamış yanıtlar',
  ],
  whyHarmful: "Bu neden zararlı:",
  whyHarmfulText:
   "AI yanıtlarını doğrulamadan kopyaladığınızda <strong>yanlış bilgi yayılmasına katkıda bulunuyorsunuz</strong>. AI kendinden emin bir şekilde yanlış olabilir ve güncel olmayan bilgiler gerçek sorunlara neden olabilir. Ayrıca konuyu kendiniz öğrenme ve anlama fırsatlarını kaçırıyorsunuz.",
  doThisTitle: "✅ Bunun yerine bunu deneyin",
  doThisIntro:
   "AI'ı başlangıç noktası olarak kullanın, son cevap olarak değil:",
  doThisList: [
   "<strong>AI yanıtlarını okuyun ve anlayın</strong> paylaşmadan önce",
   "<strong>Kod parçacıklarını test edin</strong> kendi ortamınızda önermeden önce",
   '<strong>Bağlam ekleyin:</strong> "Bu yaklaşımı buldum, ama kendi kullanım durumunuz için doğrulamalısınız..."',
   "<strong>Resmi kaynakları alıntılayın</strong> AI tarafından üretilen içerikle birlikte",
   '<strong>Belirsizliği kabul edin:</strong> "Bu işe yarayabilir, ama dokümantasyonu tekrar kontrol edin"',
   "<strong>Öğrenmeyi teşvik edin:</strong> Daha derin anlayış için kaynaklar paylaşın",
  ],
  benefitsTitle: "Sorumlu AI kullanımının faydaları:",
  benefitsText:
   "AI yanıtlarını paylaşmadan önce doğruladığınızda <strong>topluluğunuzdaki güveni korursunuz</strong>, yanlış bilgi yayılmasını azaltır ve gerçek öğrenmeyi teşvik edersiniz. AI'ı güçlü bir araç olarak kullanırken entelektüel olarak dürüst kalıyorsunuz.",
  rememberTitle: "Unutmayın: AI bir araçtır, kahin değil 🔮",
  rememberText1:
   "AI harika başlangıç noktaları ve öneriler sağlayabilir, ama aynı zamanda kendinden emin bir şekilde yanlış da olabilir. Anahtar onu sorumlu bir şekilde kullanmaktır - doğrulayın, anlayın ve başkalarıyla paylaşmadan önce kendi bağlamınızı ekleyin.",
  rememberText2:
   '<strong>Kendinize sorun: "Bunu paylaşmadan önce gerçekten okudum ve anladım mı?"</strong> 🤔',
  languageLabel: "Dil:",
  footerText: "Bu site sorumlu AI kullanımını teşvik eder. 🤖✨",
  inspiredBy: "İlham kaynağı",
  shareText: "Bunu paylaşın: <strong>noslopdrop.net</strong>",
 },
 uk: {
  title: "ніякого slop drop",
  subtitle: "будь ласка, не копіюйте відповіді ШІ без перевірки",
  intro:
   "Уявіть, що ви задаєте комусь технічне питання, а вони відразу відповідають відповіддю, згенерованою ШІ, яку навіть не прочитали... 🤦‍♀️",
  chatChannel: "#канал-допомоги",
  devNewbie: "ПочатківецьРозробник",
  quickHelper: "ШвидкийПомічник",
  experiencedDev: "ДосвідченийРозробник",
  badQuestion:
   "Привіт усім! У мене дивна помилка React при спробі оновити стан. Хтось знає, як це виправити?",
  badAnswer:
   "ChatGPT каже, що ви повинні використовувати componentWillMount() у вашому конструкторі для правильної обробки оновлень стану.",
  badResponse: "Дякую! Спробую це зараз.",
  goodAnswer:
   "Я стикався з цим раніше. Ось підхід з використанням useEffect, який може допомогти, але ви повинні протестувати його з вашим конкретним налаштуванням. Також перевірте офіційну документацію React про оновлення стану: https://react.dev/learn/state. Дайте знати, якщо потрібні роз'яснення з будь-якої частини!",
  goodResponse:
   "Відмінно! Це спрацювало, і документація допомогла мені зрозуміти чому. Дякую за пояснення та офіційний ресурс!",
  problemIndicator:
   "⚠️ <strong>Проблема:</strong> componentWillMount() застарів з React 16.3 (2018). Ця порада застаріла і може зламати сучасні React додатки.",
  successIndicator:
   "✅ <strong>Успіх:</strong> Продумана відповідь з контекстом, порадою з перевірки, офіційною документацією та подальшою підтримкою.",
  dontDoTitle: "❌ Не робіть цього",
  dontDoIntro:
   "Люди, які копіюють відповіді ШІ без перевірки, часто намагаються бути корисними, але насправді завдають шкоди:",
  dontDoList: [
   '<strong>"ChatGPT каже..."</strong> з подальшою неперевіреною інформацією',
   "<strong>Копіювання фрагментів коду</strong> без попереднього тестування",
   "<strong>Обмін порадами, згенерованими ШІ</strong> з критичних тем (медичних, юридичних, фінансових)",
   "<strong>Використання відповідей ШІ як євангелія</strong> без урахування контексту чи точності",
   '<strong>"Швидкий пошук Google/ШІ"</strong> відповіді, які не були перевірені',
  ],
  whyHarmful: "Чому це шкідливо:",
  whyHarmfulText:
   "Коли ви копіюєте відповіді ШІ без перевірки, ви <strong>сприяєте поширенню дезінформації</strong>. ШІ може бути впевнено неправильним, а застаріла інформація може викликати справжні проблеми. Ви також втрачаєте можливості вивчити та зрозуміти тему самостійно.",
  doThisTitle: "✅ Замість цього спробуйте це",
  doThisIntro:
   "Використовуйте ШІ як відправну точку, а не як остаточну відповідь:",
  doThisList: [
   "<strong>Читайте та розумійте</strong> відповіді ШІ перед їх публікацією",
   "<strong>Тестуйте фрагменти коду</strong> у вашому середовищі перед їх рекомендацією",
   '<strong>Додавайте контекст:</strong> "Я знайшов цей підхід, але ви повинні перевірити його для вашого випадку використання..."',
   "<strong>Цитуйте офіційні джерела</strong> поряд з контентом, згенерованим ШІ",
   '<strong>Визнавайте невизначеність:</strong> "Це може спрацювати, але перевірте документацію"',
   "<strong>Заохочуйте навчання:</strong> Діліться ресурсами для глибшого розуміння",
  ],
  benefitsTitle: "Переваги відповідального використання ШІ:",
  benefitsText:
   "Коли ви перевіряєте відповіді ШІ перед публікацією, ви <strong>підтримуєте довіру у вашій спільноті</strong>, зменшуєте поширення дезінформації та заохочуєте справжнє навчання. Ви використовуєте ШІ як потужний інструмент, залишаючись інтелектуально чесними.",
  rememberTitle: "Пам'ятайте: ШІ - це інструмент, а не оракул 🔮",
  rememberText1:
   "ШІ може надати відмінні відправні точки та пропозиції, але він також може бути впевнено неправильним. Ключ у тому, щоб використовувати його відповідально - перевіряйте, розумійте та додавайте свій власний контекст перед публікацією для інших.",
  rememberText2:
   '<strong>Просто запитайте себе: "Чи справді я прочитав і зрозумів це перед публікацією?"</strong> 🤔',
  languageLabel: "Мова:",
  footerText: "Цей сайт сприяє відповідальному використанню ШІ. 🤖✨",
  inspiredBy: "Натхненний",
  shareText: "Поділіться цим: <strong>noslopdrop.net</strong>",
 },
 vi: {
  title: "không slop drop",
  subtitle: "xin đừng copy-paste câu trả lời AI mà không xác minh",
  intro:
   "Hãy tưởng tượng bạn hỏi ai đó một câu hỏi kỹ thuật, và họ ngay lập tức trả lời bằng một câu trả lời do AI tạo ra mà họ thậm chí chưa đọc... 🤦‍♀️",
  chatChannel: "#kênh-trợ-giúp",
  devNewbie: "LậpTrìnhViênMới",
  quickHelper: "TrợGiúpNhanh",
  experiencedDev: "LậpTrìnhViênKinhNghiệm",
  badQuestion:
   "Chào mọi người! Tôi gặp lỗi React kỳ lạ này khi cố gắng cập nhật state. Có ai biết cách khắc phục không?",
  badAnswer:
   "ChatGPT nói rằng bạn nên sử dụng componentWillMount() trong constructor của mình để xử lý cập nhật state đúng cách.",
  badResponse: "Cảm ơn! Tôi sẽ thử ngay bây giờ.",
  goodAnswer:
   "Tôi đã gặp điều này trước đây. Đây là một cách tiếp cận sử dụng useEffect có thể giúp ích, nhưng bạn nên kiểm tra nó với thiết lập cụ thể của mình. Ngoài ra, hãy kiểm tra tài liệu React chính thức về cập nhật state: https://react.dev/learn/state. Hãy cho tôi biết nếu bạn cần làm rõ bất kỳ phần nào!",
  goodResponse:
   "Hoàn hảo! Điều này đã hoạt động và tài liệu đã giúp tôi hiểu tại sao. Cảm ơn vì lời giải thích và tài nguyên chính thức!",
  problemIndicator:
   "⚠️ <strong>Vấn đề:</strong> componentWillMount() đã bị deprecated từ React 16.3 (2018). Lời khuyên này đã lỗi thời và có thể phá vỡ các ứng dụng React hiện đại.",
  successIndicator:
   "✅ <strong>Thành công:</strong> Phản hồi chu đáo với ngữ cảnh, lời khuyên xác minh, tài liệu chính thức và hỗ trợ theo dõi.",
  dontDoTitle: "❌ Đừng làm điều này",
  dontDoIntro:
   "Những người copy-paste phản hồi AI mà không xác minh thường cố gắng hữu ích, nhưng thực tế họ đang gây hại:",
  dontDoList: [
   '<strong>"ChatGPT nói..."</strong> theo sau bởi thông tin chưa được xác minh',
   "<strong>Copy-paste đoạn code</strong> mà không kiểm tra chúng trước",
   "<strong>Chia sẻ lời khuyên do AI tạo ra</strong> cho các chủ đề quan trọng (y tế, pháp lý, tài chính)",
   "<strong>Sử dụng phản hồi AI như phúc âm</strong> mà không xem xét ngữ cảnh hoặc độ chính xác",
   '<strong>"Tìm kiếm nhanh Google/AI"</strong> các phản hồi chưa được xác thực',
  ],
  whyHarmful: "Tại sao điều này có hại:",
  whyHarmfulText:
   "Khi bạn copy-paste phản hồi AI mà không xác minh, bạn đang <strong>góp phần lan truyền thông tin sai lệch</strong>. AI có thể tự tin nhưng sai, và thông tin lỗi thời có thể gây ra các vấn đề thực sự. Bạn cũng bỏ lỡ cơ hội học hỏi và hiểu chủ đề một cách tự thân.",
  doThisTitle: "✅ Thay vào đó hãy thử điều này",
  doThisIntro:
   "Sử dụng AI như một điểm khởi đầu, không phải câu trả lời cuối cùng:",
  doThisList: [
   "<strong>Đọc và hiểu</strong> phản hồi AI trước khi chia sẻ chúng",
   "<strong>Kiểm tra đoạn code</strong> trong môi trường của bạn trước khi khuyến nghị chúng",
   '<strong>Thêm ngữ cảnh:</strong> "Tôi tìm thấy cách tiếp cận này, nhưng bạn nên xác minh nó cho trường hợp sử dụng của mình..."',
   "<strong>Trích dẫn nguồn chính thức</strong> cùng với nội dung do AI tạo ra",
   '<strong>Thừa nhận sự không chắc chắn:</strong> "Điều này có thể hoạt động, nhưng hãy kiểm tra lại tài liệu"',
   "<strong>Khuyến khích học tập:</strong> Chia sẻ tài nguyên để hiểu sâu hơn",
  ],
  benefitsTitle: "Lợi ích của việc sử dụng AI có trách nhiệm:",
  benefitsText:
   "Khi bạn xác minh phản hồi AI trước khi chia sẻ, bạn <strong>duy trì niềm tin trong cộng đồng của mình</strong>, giảm lan truyền thông tin sai lệch và khuyến khích học tập thực sự. Bạn đang sử dụng AI như một công cụ mạnh mẽ trong khi vẫn giữ sự trung thực về mặt trí tuệ.",
  rememberTitle: "Hãy nhớ: AI là một công cụ, không phải nhà tiên tri 🔮",
  rememberText1:
   "AI có thể cung cấp các điểm khởi đầu và gợi ý tuyệt vời, nhưng nó cũng có thể tự tin nhưng không chính xác. Chìa khóa là sử dụng nó một cách có trách nhiệm - xác minh, hiểu và thêm ngữ cảnh của riêng bạn trước khi chia sẻ với người khác.",
  rememberText2:
   '<strong>Chỉ cần tự hỏi bản thân: "Tôi có thực sự đã đọc và hiểu điều này trước khi chia sẻ không?"</strong> 🤔',
  languageLabel: "Ngôn ngữ:",
  footerText: "Trang web này thúc đẩy việc sử dụng AI có trách nhiệm. 🤖✨",
  inspiredBy: "Lấy cảm hứng từ",
  shareText: "Chia sẻ điều này: <strong>noslopdrop.net</strong>",
 },
 "zh-cn": {
  title: "不要 slop drop",
  subtitle: "请不要在未验证的情况下复制粘贴AI回答",
  intro:
   "想象一下你向某人询问技术问题，他们立即用一个他们甚至没有阅读过的AI生成的答案回复你... 🤦‍♀️",
  chatChannel: "#帮助频道",
  devNewbie: "新手开发者",
  quickHelper: "快速帮手",
  experiencedDev: "经验丰富的开发者",
  badQuestion:
   "大家好！我在尝试更新状态时遇到了这个奇怪的React错误。有人知道如何修复吗？",
  badAnswer:
   "ChatGPT说你应该在构造函数中使用componentWillMount()来正确处理状态更新。",
  badResponse: "谢谢！我现在就试试。",
  goodAnswer:
   "我之前遇到过这个问题。这里有一个使用useEffect的方法可能会有帮助，但你应该用你的具体设置来测试它。另外，查看React官方文档关于状态更新的部分：https://react.dev/learn/state。如果你需要澄清任何部分，请告诉我！",
  goodResponse:
   "完美！这个方法有效，文档帮助我理解了原因。谢谢你的解释和官方资源！",
  problemIndicator:
   "⚠️ <strong>问题：</strong> componentWillMount()自React 16.3（2018年）以来已被弃用。这个建议已经过时，可能会破坏现代React应用程序。",
  successIndicator:
   "✅ <strong>成功：</strong> 周到的回复，包含上下文、验证建议、官方文档和后续支持。",
  dontDoTitle: "❌ 不要这样做",
  dontDoIntro:
   "那些在未验证的情况下复制粘贴AI回复的人通常试图提供帮助，但实际上他们在造成伤害：",
  dontDoList: [
   '<strong>"ChatGPT说..."</strong> 后跟未经验证的信息',
   "<strong>复制粘贴代码片段</strong> 而不先测试它们",
   "<strong>分享AI生成的建议</strong> 涉及关键主题（医疗、法律、金融）",
   "<strong>将AI回复当作福音</strong> 而不考虑上下文或准确性",
   '<strong>"快速Google/AI搜索"</strong> 未经验证的回复',
  ],
  whyHarmful: "为什么这是有害的：",
  whyHarmfulText:
   "当你在未验证的情况下复制粘贴AI回复时，你在<strong>助长错误信息的传播</strong>。AI可能会自信地犯错，过时的信息可能会造成真正的问题。你也错过了学习和自己理解主题的机会。",
  doThisTitle: "✅ 相反，试试这个",
  doThisIntro: "将AI用作起点，而不是最终答案：",
  doThisList: [
   "<strong>阅读和理解</strong> AI回复后再分享它们",
   "<strong>测试代码片段</strong> 在你的环境中，然后再推荐它们",
   '<strong>添加上下文：</strong> "我找到了这种方法，但你应该为你的用例验证它..."',
   "<strong>引用官方来源</strong> 与AI生成的内容一起",
   '<strong>承认不确定性：</strong> "这可能有效，但请再次检查文档"',
   "<strong>鼓励学习：</strong> 分享资源以获得更深入的理解",
  ],
  benefitsTitle: "负责任使用AI的好处：",
  benefitsText:
   "当你在分享前验证AI回复时，你<strong>维护了社区中的信任</strong>，减少错误信息传播，并鼓励真正的学习。你在保持智力诚实的同时将AI用作强大的工具。",
  rememberTitle: "记住：AI是工具，不是神谕 🔮",
  rememberText1:
   "AI可以提供很好的起点和建议，但它也可能自信地不正确。关键是负责任地使用它 - 验证、理解，并在与他人分享之前添加你自己的上下文。",
  rememberText2:
   '<strong>只需问问自己："我在分享之前真的阅读和理解了这个吗？"</strong> 🤔',
  languageLabel: "语言：",
  footerText: "本网站提倡负责任地使用AI。🤖✨",
  inspiredBy: "灵感来自",
  shareText: "分享这个：<strong>noslopdrop.net</strong>",
 },
};

// Load translations function (now just returns immediately since translations are embedded)
async function loadTranslations() {
 // Translations are now embedded, so this function just ensures compatibility
 return Promise.resolve();
}

// Get browser language preference
function getBrowserLanguage() {
 const browserLang = navigator.language || navigator.userLanguage;
 const langCode = browserLang.split("-")[0].toLowerCase();

 // Map some language codes to our supported languages
 const langMap = {
  zh: "zh-cn",
  pt: "pt-br",
 };

 const mappedLang = langMap[langCode] || langCode;

 // Check if we support this language
 return Object.keys(translations).includes(mappedLang) ? mappedLang : "en";
}

// Update page content with translations
function updateContent(lang) {
 const t = translations[lang] || translations["en"];

 // Update main content
 document.querySelector(".main-title").innerHTML = `${
  t.title.split(" ")[0]
 } <span class="strikethrough">${t.title.split(" ").slice(1).join(" ")}</span>`;
 document.querySelector(".subtitle").textContent = t.subtitle;
 document.querySelector(".intro-text p").textContent = t.intro;

 // Update chat content
 document
  .querySelectorAll(".chat-title")
  .forEach((el) => (el.textContent = t.chatChannel));

 // Update usernames and messages in bad example
 const badChatMessages = document
  .querySelectorAll(".chat-container")[0]
  .querySelectorAll(".message");
 badChatMessages[0].querySelector(".username").textContent = t.devNewbie;
 badChatMessages[0].querySelector(".message-text").textContent = t.badQuestion;
 badChatMessages[1].querySelector(".username").textContent = t.quickHelper;
 badChatMessages[1].querySelector(".message-text").textContent = t.badAnswer;
 badChatMessages[2].querySelector(".username").textContent = t.devNewbie;
 badChatMessages[2].querySelector(".message-text").textContent = t.badResponse;

 // Update problem indicator
 document.querySelector(".problem-indicator").innerHTML = t.problemIndicator;

 // Update good example
 const goodChatMessages = document
  .querySelectorAll(".chat-container")[1]
  .querySelectorAll(".message");
 goodChatMessages[0].querySelector(".username").textContent = t.devNewbie;
 goodChatMessages[0].querySelector(".message-text").textContent = t.badQuestion;
 goodChatMessages[1].querySelector(".username").textContent = t.experiencedDev;
 goodChatMessages[1].querySelector(".message-text").textContent = t.goodAnswer;
 goodChatMessages[2].querySelector(".username").textContent = t.devNewbie;
 goodChatMessages[2].querySelector(".message-text").textContent =
  t.goodResponse;

 // Update success indicator
 document.querySelector(".success-indicator").innerHTML = t.successIndicator;

 // Update section titles
 document.querySelector(".dont-do").textContent = t.dontDoTitle;
 document.querySelector(".do-this").textContent = t.doThisTitle;

 // Update section content
 document.querySelectorAll(".section")[0].querySelector("p").textContent =
  t.dontDoIntro;
 document.querySelectorAll(".section")[1].querySelector("p").textContent =
  t.doThisIntro;

 // Update lists
 const dontDoList = document
  .querySelectorAll(".examples-list")[0]
  .querySelectorAll("li");
 t.dontDoList.forEach((item, index) => {
  if (dontDoList[index]) {
   dontDoList[index].querySelector("div").innerHTML = item;
  }
 });

 const doThisList = document
  .querySelectorAll(".examples-list")[1]
  .querySelectorAll("li");
 t.doThisList.forEach((item, index) => {
  if (doThisList[index]) {
   doThisList[index].querySelector("div").innerHTML = item;
  }
 });

 // Update explanations
 const explanations = document.querySelectorAll(".explanation");
 explanations[0].querySelector("h3").textContent = t.whyHarmful;
 explanations[0].querySelector("p").innerHTML = t.whyHarmfulText;
 explanations[1].querySelector("h3").textContent = t.benefitsTitle;
 explanations[1].querySelector("p").innerHTML = t.benefitsText;
 explanations[2].querySelector("h3").textContent = t.rememberTitle;
 explanations[2].querySelectorAll("p")[0].innerHTML = t.rememberText1;
 explanations[2].querySelectorAll("p")[1].innerHTML = t.rememberText2;

 // Update footer
 document.querySelector(".language-selector label").textContent =
  t.languageLabel;
 document.querySelector(".credits").innerHTML = `
        <p>${t.footerText}</p>
        <p>${t.shareText}</p>
    `;

 // Update page title and meta description
 document.title = `${t.title} - ${t.subtitle}`;
 const metaDescription = document.querySelector('meta[name="description"]');
 if (metaDescription) {
  metaDescription.setAttribute("content", t.subtitle);
 }
}

// RTL languages that need right-to-left text direction
const RTL_LANGUAGES = ["he", "fa"];

// Change language function
function changeLanguage(lang) {
 if (translations[lang]) {
  currentLanguage = lang;
  updateContent(lang);

  // Handle RTL direction
  const isRTL = RTL_LANGUAGES.includes(lang);
  const htmlElement = document.documentElement;

  if (isRTL) {
   htmlElement.setAttribute("dir", "rtl");
   htmlElement.setAttribute("lang", lang);
  } else {
   htmlElement.setAttribute("dir", "ltr");
   htmlElement.setAttribute("lang", lang);
  }

  // Update language selector
  document.getElementById("language").value = lang;

  // Save preference
  localStorage.setItem("noslopdrop-language", lang);

  // Update URL without reload
  const url = new URL(window.location);
  if (lang !== "en") {
   url.searchParams.set("lang", lang);
  } else {
   url.searchParams.delete("lang");
  }
  window.history.replaceState({}, "", url);
 }
}

// Initialize the page
async function init() {
 await loadTranslations();

 // Initialize theme first
 initTheme();

 // Get language from URL, localStorage, or browser preference
 const urlParams = new URLSearchParams(window.location.search);
 const urlLang = urlParams.get("lang");
 const savedLang = localStorage.getItem("noslopdrop-language");
 const browserLang = getBrowserLanguage();

 const initialLang = urlLang || savedLang || browserLang;

 // Set up language selector
 const languageSelect = document.getElementById("language");
 languageSelect.value = initialLang;
 languageSelect.addEventListener("change", (e) =>
  changeLanguage(e.target.value)
 );

 // Load initial language
 changeLanguage(initialLang);

 console.log("NoSlopDrop loaded successfully!");
}

// Start when DOM is ready
if (document.readyState === "loading") {
 document.addEventListener("DOMContentLoaded", init);
} else {
 init();
}

// Smooth scrolling for internal links
document.addEventListener("click", (e) => {
 if (
  e.target.tagName === "A" &&
  e.target.getAttribute("href")?.startsWith("#")
 ) {
  e.preventDefault();
  const target = document.querySelector(e.target.getAttribute("href"));
  if (target) {
   target.scrollIntoView({ behavior: "smooth" });
  }
 }
});

// Add keyboard navigation support
document.addEventListener("keydown", (e) => {
 // Alt + L to focus language selector
 if (e.altKey && e.key === "l") {
  e.preventDefault();
  document.getElementById("language").focus();
 }
});

// Theme toggle functionality
function toggleTheme() {
 const body = document.body;
 const themeToggle = document.querySelector(".theme-toggle");

 if (currentTheme === "light") {
  body.setAttribute("data-theme", "dark");
  themeToggle.textContent = "☀️";
  currentTheme = "dark";
 } else {
  body.removeAttribute("data-theme");
  themeToggle.textContent = "🌙";
  currentTheme = "light";
 }

 // Save theme preference
 localStorage.setItem("noslopdrop-theme", currentTheme);
}

// Initialize theme
function initTheme() {
 const savedTheme = localStorage.getItem("noslopdrop-theme");
 const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

 currentTheme = savedTheme || (prefersDark ? "dark" : "light");

 const body = document.body;
 const themeToggle = document.querySelector(".theme-toggle");

 if (currentTheme === "dark") {
  body.setAttribute("data-theme", "dark");
  themeToggle.textContent = "☀️";
 } else {
  themeToggle.textContent = "🌙";
 }
}

// Listen for system theme changes
window
 .matchMedia("(prefers-color-scheme: dark)")
 .addEventListener("change", (e) => {
  if (!localStorage.getItem("noslopdrop-theme")) {
   currentTheme = e.matches ? "dark" : "light";
   const body = document.body;
   const themeToggle = document.querySelector(".theme-toggle");

   if (currentTheme === "dark") {
    body.setAttribute("data-theme", "dark");
    themeToggle.textContent = "☀️";
   } else {
    body.removeAttribute("data-theme");
    themeToggle.textContent = "🌙";
   }
  }
 });

// Social sharing functions
function shareToWhatsApp() {
 const url = encodeURIComponent(window.location.href);
 const text = encodeURIComponent(
  "Check out No Slop Drop - a guide to responsible AI usage 🤖✨"
 );
 window.open(`https://wa.me/?text=${text}%20${url}`, "_blank");
}

function shareToFacebook() {
 const url = encodeURIComponent(window.location.href);
 window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank");
}

function shareToTwitter() {
 const url = encodeURIComponent(window.location.href);
 const text = encodeURIComponent(
  "Check out No Slop Drop - a guide to responsible AI usage 🤖✨"
 );
 window.open(
  `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
  "_blank"
 );
}

function shareToLinkedIn() {
 const url = encodeURIComponent(window.location.href);
 window.open(
  `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
  "_blank"
 );
}

function shareToReddit() {
 const url = encodeURIComponent(window.location.href);
 const title = encodeURIComponent(
  "No Slop Drop - Please don't copy-paste AI answers without verification"
 );
 window.open(
  `https://www.reddit.com/submit?url=${url}&title=${title}`,
  "_blank"
 );
}

function shareViaEmail() {
 const url = encodeURIComponent(window.location.href);
 const subject = encodeURIComponent(
  "Check out No Slop Drop - Responsible AI Usage"
 );
 const body = encodeURIComponent(
  `I thought you might find this interesting: No Slop Drop - a guide to responsible AI usage.\n\n${window.location.href}\n\nThis site promotes verifying AI-generated content before sharing it to prevent misinformation spread.`
 );
 window.location.href = `mailto:?subject=${subject}&body=${body}`;
}

function copyLink() {
 const copyButton = document.querySelector(".share-button.copy");

 if (navigator.clipboard && window.isSecureContext) {
  navigator.clipboard
   .writeText(window.location.href)
   .then(() => {
    showCopySuccess(copyButton);
   })
   .catch(() => {
    fallbackCopyTextToClipboard(window.location.href, copyButton);
   });
 } else {
  fallbackCopyTextToClipboard(window.location.href, copyButton);
 }
}

function fallbackCopyTextToClipboard(text, button) {
 const textArea = document.createElement("textarea");
 textArea.value = text;
 textArea.style.top = "0";
 textArea.style.left = "0";
 textArea.style.position = "fixed";
 textArea.style.opacity = "0";

 document.body.appendChild(textArea);
 textArea.focus();
 textArea.select();

 try {
  document.execCommand("copy");
  showCopySuccess(button);
 } catch (err) {
  console.error("Fallback: Oops, unable to copy", err);
  showCopyError(button);
 }

 document.body.removeChild(textArea);
}

function showCopySuccess(button) {
 const originalText = button.innerHTML;
 button.innerHTML = "✅ Copied!";
 button.classList.add("copied");

 setTimeout(() => {
  button.innerHTML = originalText;
  button.classList.remove("copied");
 }, 2000);
}

function showCopyError(button) {
 const originalText = button.innerHTML;
 button.innerHTML = "❌ Failed";

 setTimeout(() => {
  button.innerHTML = originalText;
 }, 2000);
}

// Export for global access
window.changeLanguage = changeLanguage;
window.toggleTheme = toggleTheme;
window.shareToWhatsApp = shareToWhatsApp;
window.shareToFacebook = shareToFacebook;
window.shareToTwitter = shareToTwitter;
window.shareToLinkedIn = shareToLinkedIn;
window.shareToReddit = shareToReddit;
window.shareViaEmail = shareViaEmail;
window.copyLink = copyLink;
