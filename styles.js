// ============================================================
// styles.js — База тегов для AI Music Producer
// ============================================================

export const STYLE_DATABASE = {
    // ===== ЖАНРЫ =====
    genres: {
        'cinematic ambient': 'Кинематографичный эмбиент, атмосферный, глубокий, фильм, саундтрек, пространственный',
        'ambient soundtrack': 'Атмосферный саундтрек, музыка для фильмов, фон, настроение',
        'orchestral ambient': 'Оркестровый эмбиент, величественный, пространственный, симфонический',
        'spiritual soundscape': 'Духовный звуковой пейзаж, медитативный, сакральный, церковный',
        'space ambient': 'Космический эмбиент, невесомость, бесконечность, вселенная, звезды',
        'fantasy ambient': 'Фэнтези эмбиент, сказочный, волшебный, эльфы, магия',
        'worship ambient': 'Медитативный эмбиент, поклонение, духовность, молитва',
        'epic ambient': 'Эпический эмбиент, героический, масштабный, великий',
        'dark ambient': 'Темный эмбиент, мрачный, зловещий, хоррор, таинственный',
        'drone ambient': 'Дроновый эмбиент, монотонный, глубокий, вибрирующий',
        
        'soulful folk': 'Душевный фолк, акустический, теплый, народный, кельтский',
        'celtic folk': 'Кельтский фолк, ирландский, волынка, флейта, народный',
        'acoustic folk': 'Акустический фолк, гитара, теплый, камерный',
        'ethnic folk': 'Этнический фолк, народный, африканский, индийский, шаманский',
        'mediterranean folk': 'Средиземноморский фолк, испанский, итальянский, гитара',
        
        'neoclassical': 'Неоклассика, фортепиано, струнные, кинематографичный, эмоциональный',
        'cinematic classical': 'Кинематографичная классика, оркестр, драматичный, фильм',
        'minimalist classical': 'Минималистичная классика, простой, повторяющийся, медитативный',
        'romantic classical': 'Романтичная классика, чувственная, страстная, Шопен',
        
        'smooth jazz': 'Гладкий джаз, блюз, саксофон, ночной клуб, расслабленный',
        'lofi jazz': 'Lo-fi джаз, бит, расслабленный, ночной, уютный',
        'acid jazz': 'Кислотный джаз, фанк, электронный, танцевальный',
        'bossa nova': 'Босса нова, бразильский, гитара, легкий, пляж',
        'jazz blues': 'Джаз-блюз, грустный, душевный, гитара, саксофон',
        'cool jazz': 'Кул-джаз, прохладный, сдержанный, инструментальный',
        'vocal jazz': 'Вокальный джаз, пение, голос, стандарты',
        
        'acoustic rock': 'Акустический рок, гитара, камерный, баллада',
        'folk rock': 'Фолк-рок, народный, гитара, мелодичный',
        'alternative rock': 'Альтернативный рок, экспериментальный, гитара',
        'hard rock': 'Хард-рок, тяжелый, гитара, мощный',
        'heavy metal': 'Тяжелый металл, гитара, барабаны, агрессивный',
        'progressive metal': 'Прогрессивный металл, сложный, гитара, техничный',
        'post-rock': 'Пост-рок, инструментальный, атмосферный, гитара',
        'shoegaze': 'Шугейз, мечтательный, искаженный, гитара',
        
        'electronic ambient': 'Электронный эмбиент, синтезатор, атмосферный',
        'deep house': 'Дип-хаус, электронный, танцевальный, бас',
        'chillwave': 'Чиллвейв, расслабленный, синтезатор, ностальгический',
        'synthwave': 'Синтвейв, ретро, 80-е, синтезатор',
        'downtempo': 'Даунтемпо, медленный, электронный, расслабленный',
        'trip-hop': 'Трип-хоп, электронный, мрачный, бит',
        'techno': 'Техно, электронный, танцевальный, минималистичный',
        'house': 'Хаус, электронный, танцевальный, ритмичный',
        
        'world music': 'Мировая музыка, этническая, культурная, традиционная',
        'middle eastern': 'Ближневосточная, арабская, уд, дудук, таинственная',
        'indian classical': 'Индийская классика, ситар, табла, рага',
        'japanese ambient': 'Японский эмбиент, дзен, медитация, традиционный',
        'latin music': 'Латиноамериканская, танцевальная, гитара, перкуссия',
        
        'pop instrumental': 'Поп-инструментал, легкий, мелодичный, радио',
        'indie pop': 'Индю поп, камерный, гитара, мелодичный',
        'dream pop': 'Дрим-поп, мечтательный, эфемерный, гитара',
        
        'christian instrumental': 'Христианский инструментал, духовный, церковный, вдохновляющий',
        'meditation music': 'Медитативная музыка, релакс, спокойствие, практика',
        'yoga music': 'Музыка для йоги, расслабление, гармония',
        'sleep music': 'Музыка для сна, тихая, колыбельная, успокаивающая',
        'study music': 'Музыка для учебы, концентрация, фон',
        'travel music': 'Музыка для путешествий, вдохновение, дорога'
    },
    
    // ===== ИНСТРУМЕНТЫ =====
    instruments: {
        'felt piano': 'Мягкое, приглушенное пианино, уютное',
        'emotional piano': 'Эмоциональное пианино, выразительное, чувственное',
        'intimate piano': 'Интимное, близкое пианино, камерное',
        'grand piano': 'Рояль, большой, богатый, концертный',
        'electric piano': 'Электрическое пианино, теплое, винтажное',
        'synth pads': 'Синтезаторные пэды, атмосферные, фоновые',
        'organ': 'Орган, церковный, мощный, глубокий',
        'celesta': 'Челеста, волшебные колокольчики, нежные',
        
        'warm strings': 'Теплые струнные, бархатистые, плотные',
        'soaring strings': 'Взлетающие струнные, парящие, вдохновляющие',
        'delicate strings': 'Нежные струнные, тонкие, хрупкие',
        'full orchestra': 'Полный оркестр, мощный, симфонический',
        'chamber orchestra': 'Камерный оркестр, малый, интимный',
        'solo violin': 'Скрипка соло, грустная, выразительная',
        'solo cello': 'Виолончель соло, глубокая, теплая',
        'double bass': 'Контрабас, глубокий, ритмичный',
        'harp': 'Арфа, волшебная, нежная, переливающаяся',
        
        'acoustic guitar': 'Акустическая гитара, теплая, живая',
        'soft nylon guitar': 'Мягкая нейлоновая гитара, испанская, классическая',
        'steel guitar': 'Стальная гитара, кантри, слайд',
        'electric guitar': 'Электрогитара, рок, блюз, перегруз',
        'distorted guitar': 'Гитара с перегрузом, тяжелая, металл',
        'slide guitar': 'Слайд-гитара, блюзовый, скользящий',
        
        'smooth saxophone': 'Мягкий саксофон, джаз, теплый',
        'jazz saxophone': 'Джазовый саксофон, экспрессивный, яркий',
        'solo trumpet': 'Труба соло, яркая, героическая',
        'flute': 'Флейта, нежная, воздушная, пасторальная',
        'celtic flute': 'Кельтская флейта, народная, легкая',
        'turkish ney': 'Турецкий ней, духовой, мистический',
        'bansuri': 'Бансури, индийская флейта, медитативная',
        'didgeridoo': 'Дигериду, австралийский, глубокий, вибрирующий',
        
        'cinematic percussion': 'Кинематографическая перкуссия, мощная, акценты',
        'jazz drums': 'Джазовые барабаны, кисти, легкие, свинговые',
        'acoustic drums': 'Акустические барабаны, живые, мощные',
        'electronic beats': 'Электронные биты, ритмичные, танцевальные',
        'light percussion': 'Легкая перкуссия, шейкеры, погремушки',
        'taiko drums': 'Тайко, японские, мощные, ритуальные',
        'tabla': 'Табла, индийские, ритмичные, традиционные',
        'djembe': 'Джембе, африканские, живые, ритмичные',
        
        'ethereal choirs': 'Эфирные хоры, небесные, ангельские',
        'distant choirs': 'Далекие хоры, таинственные, призрачные',
        'celestial choir': 'Небесный хор, ангельский, божественный',
        'male choir': 'Мужской хор, мощный, глубокий',
        'female choir': 'Женский хор, нежный, высокий',
        'children choir': 'Детский хор, чистый, невинный',
        'vocal textures': 'Вокальные текстуры, фоновые, без слов',
        
        'atmospheric pads': 'Атмосферные пэды, фоновые, объемные',
        'shimmering textures': 'Мерцающие текстуры, сияющие, светящиеся',
        'evolving drones': 'Развивающиеся дроны, долгие тоны, эволюция',
        'analog synth': 'Аналоговый синтезатор, теплый, винтажный',
        'digital synth': 'Цифровой синтезатор, чистый, современный',
        'bass synth': 'Бас-синтезатор, глубокий, мощный',
        'lead synth': 'Соло-синтезатор, яркий, ведущий',
        
        'ethnic textures': 'Этнические текстуры, народные, фольклорные',
        'sitar': 'Ситар, индийский, этнический, медитативный',
        'oud': 'Уд, арабский, этнический, теплый',
        'koto': 'Кото, японский, традиционный, струнный',
        'pan flute': 'Флейта пана, южноамериканская, легкая',
        'bagpipes': 'Волынка, кельтская, торжественная, народная',
        'accordion': 'Аккордеон, европейский, народный, ностальгический'
    },
    
    // ===== ЭМОЦИИ И НАСТРОЕНИЕ =====
    emotions: {
        'peaceful': 'Спокойствие, умиротворение, тишина, мир',
        'serene': 'Безмятежность, ясность, чистота, покой',
        'calm': 'Спокойный, расслабленный, без напряжения',
        'gentle': 'Нежный, мягкий, теплый, заботливый',
        'tender': 'Нежный, трогательный, искренний',
        'meditative': 'Медитативный, глубокий, созерцательный',
        'relaxed': 'Расслабленный, свободный, беззаботный',
        'dreamy': 'Мечтательный, сновидческий, легкий',
        'ethereal': 'Эфирный, неземной, воздушный, парящий',
        
        'melancholic': 'Меланхолия, легкая грусть, ностальгия',
        'emotional': 'Эмоциональность, чувственность, глубина',
        'heartfelt': 'Искренность, душевность, теплота',
        'bittersweet': 'Горько-сладкий, смешанные чувства',
        'nostalgic': 'Ностальгический, тоска по прошлому',
        'longing': 'Тоска, стремление, желание',
        'sad': 'Грустный, печальный, безысходный',
        'dark': 'Темный, мрачный, зловещий',
        'brooding': 'Мрачный, задумчивый, тяжелый',
        
        'happy': 'Счастливый, радостный, светлый',
        'uplifting': 'Вдохновляющий, поднимающий настроение',
        'hopeful': 'Надежда, оптимизм, светлое будущее',
        'bright': 'Яркий, светлый, солнечный',
        'joyful': 'Радостный, веселый, праздничный',
        'optimistic': 'Оптимистичный, позитивный, уверенный',
        'warm': 'Теплый, уютный, дружелюбный',
        'inspiring': 'Вдохновляющий, мотивирующий',
        
        'epic': 'Эпичность, величие, героизм',
        'dramatic': 'Драматизм, напряженность, пафос',
        'soaring': 'Парящий, взлетающий, вдохновляющий',
        'majestic': 'Величественный, царственный, грандиозный',
        'powerful': 'Мощный, сильный, впечатляющий',
        'heroic': 'Героический, отважный, победоносный',
        'triumphant': 'Торжествующий, победный, успешный',
        'climactic': 'Кульминационный, пик, высшая точка',
        
        'mysterious': 'Таинственный, загадочный, мистический',
        'enigmatic': 'Загадочный, неуловимый, интригующий',
        'haunting': 'Навязчивый, тревожный, незабываемый',
        'atmospheric': 'Атмосферный, погружающий, средовой',
        'contemplative': 'Созерцательный, задумчивый, глубокий',
        'introspective': 'Интроспективный, обращенный внутрь',
        
        'energetic': 'Энергичный, живой, активный',
        'rhythmic': 'Ритмичный, танцевальный, пульсирующий',
        'driving': 'Драйвовый, заводной, динамичный',
        'intense': 'Интенсивный, насыщенный, глубокий',
        'passionate': 'Страстный, пылкий, эмоциональный'
    },
    
    // ===== ПРОСТРАНСТВЕННЫЕ ХАРАКТЕРИСТИКИ =====
    spatial: {
        'ultra-wide stereo': 'Сверхширокая стереобаза, объем, панорама',
        'deep spatial imaging': 'Глубокий 3D объем, пространство, глубина',
        'holographic soundstage': 'Голографическая сцена, реализм, объем',
        'infinite reverb': 'Бесконечные хвосты реверберации, пространство',
        'high-ceiling acoustics': 'Высокие потолки, акустика зала, собор',
        'immersive atmosphere': 'Полное погружение, атмосфера, окружающий',
        'wide soundstage': 'Широкая панорама, пространство, открытый',
        'cinematic depth': 'Кинематографическая глубина, фильм',
        'close and intimate': 'Близкое и интимное, камерное',
        'distant and vast': 'Далекое и бескрайнее, огромное',
        'surround sound': 'Объемный звук, окружение, 360°'
    },
    
    // ===== ПРОДАКШН =====
    production: {
        'pristine fidelity': 'Кристальная чистота, высокое качество, студийный',
        'transparent mix': 'Прозрачный микс, чистота инструментов, ясный',
        'pin-sharp transients': 'Острая атака, четкость, точность',
        'high-fidelity digital': 'Цифровая четкость, детализация, Hi-Fi',
        'airy top-end': 'Воздушные высокие частоты, кристальный верх',
        'soundtrack-quality': 'Качество саундтрека, студийное, кино',
        'orchestral layering': 'Оркестровое многослойное наслоение',
        'warm analog': 'Теплый аналоговый звук, ламповый',
        'clean digital': 'Чистый цифровой звук, прозрачный',
        'live recording': 'Живая запись, натуральная, камерная',
        'studio production': 'Студийный продакшн, профессиональный',
        'minimalist production': 'Минималистичный продакшн, простой',
        'lush production': 'Богатый продакшн, насыщенный, плотный'
    },
    
    // ===== НИЗКИЕ ЧАСТОТЫ =====
    low_end: {
        'subterranean lows': 'Глубокий суб-бас, инфразвук, вибрация',
        'focused sub bass': 'Сфокусированный собранный саб, плотный',
        'warm low-end foundation': 'Теплая низкочастотная основа, фундамент',
        'controlled low frequencies': 'Контролируемый бас, управляемый',
        'sidechained sub-bass': 'Сайдчейн суб-бас, эффект дыхания',
        'deep bass': 'Глубокий бас, мощный, наполняющий',
        'punchy bass': 'Атакующий бас, упругий, ритмичный'
    },
    
    // ===== ОГРАНИЧЕНИЯ (чего быть не должно) =====
    restrictions: {
        'no vocals': 'Без вокала, чисто инструментально',
        'no drums': 'Без барабанов, без ударных',
        'no aggressive percussion': 'Без агрессивной перкуссии',
        'no trailer music': 'Не трейлерная музыка',
        'no dark drama': 'Без мрачной драмы',
        'no heroic action': 'Без героического экшена',
        'no experimental tonal shifts': 'Без экспериментальных смен тональности',
        'no lyrics': 'Без слов, без текста',
        'no heavy distortion': 'Без тяжелого искажения',
        'no abrupt changes': 'Без резких изменений',
        'no loud noises': 'Без громких шумов'
    }
};

// ============================================================
// ПРЕСЕТЫ (готовые шаблоны)
// ============================================================
export const PRESETS = {
    folk: {
        desc: 'Soulful atmospheric folk, acoustic guitar fingerpicking, soft ambient piano, warm strings',
        bpm: 80,
        structure: `[Intro: Acoustic guitar fingerpicking alone]
[Verse: Piano joins, soft atmosphere]
[Chorus: Full strings and guitar together]
[Bridge: Emotional build-up]
[Outro: Gradual fade to silence]
[End - 3:00]`
    },
    neoclassical: {
        desc: 'Cinematic neoclassical, grand piano arpeggios, melancholic violin melody, orchestral cello backings',
        bpm: 75,
        structure: `[Intro: Solo piano, soft arpeggios]
[Verse: Violin melody enters]
[Chorus: Full orchestra, emotional climax]
[Bridge: Cello solo, tension builds]
[Outro: Fade to piano and silence]
[End - 3:00]`
    },
    ambient: {
        desc: 'Deep space ambient, ethereal pads, slow evolving drones, cosmic atmosphere, meditative',
        bpm: 60,
        structure: `[Intro: Drone texture]
[Section: Pads enter slowly]
[Climax: Full ambient soundscape]
[Section: Gradual reduction]
[Outro: Fade to silence]
[End - 3:00]`
    },
    cinematic: {
        desc: 'Cinematic orchestral, emotional and dramatic, sweeping strings, triumphant brass, powerful percussion',
        bpm: 90,
        structure: `[Intro: Quiet strings, building tension]
[Verse: Main theme introduced]
[Chorus: Full orchestra, powerful climax]
[Bridge: Emotional solo, softer]
[Chorus 2: Grand finale]
[Outro: Epic conclusion]
[End - 3:30]`
    },
    jazz: {
        desc: 'Smooth jazz instrumental, smoky night cafe vibe, soft saxophone lead, warm guitar, double bass',
        bpm: 65,
        structure: `[Intro: Saxophone melody]
[Verse: Guitar chords, bass walking]
[Chorus: Full band interplay]
[Bridge: Improvisational solo]
[Outro: Fade out softly]
[End - 3:00]`
    },
    metal: {
        desc: 'Heavy metal instrumental, distorted guitar riffs, screaming guitar solo, fast double-bass drums',
        bpm: 140,
        structure: `[Intro: Heavy riff]
[Verse: Fast chugging]
[Chorus: Full band explosion]
[Bridge: Guitar solo]
[Chorus 2: Maximum intensity]
[Outro: Final heavy riff]
[End - 3:00]`
    }
};

// ============================================================
// ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ (опционально)
// ============================================================

// Функция для поиска тегов в базе
export function findTagsInDatabase(userText) {
    const found = [];
    const text = userText.toLowerCase();
    
    // Проходим по всем категориям
    for (const category of Object.values(STYLE_DATABASE)) {
        for (const [tag, description] of Object.entries(category)) {
            // Проверяем тег и описание
            const descWords = description.toLowerCase().split(/[\s,]+/);
            const tagWords = tag.toLowerCase().split(/[\s,]+/);
            
            // Проверяем каждое слово из описания пользователя
            for (const word of text.split(/[\s,]+/)) {
                if (word.length > 2) {
                    // Проверяем совпадение с тегом
                    if (tag.toLowerCase().includes(word) || word.includes(tag.toLowerCase())) {
                        found.push(tag);
                        break;
                    }
                    // Проверяем совпадение с описанием
                    for (const descWord of descWords) {
                        if (descWord.length > 2 && (descWord.includes(word) || word.includes(descWord))) {
                            found.push(tag);
                            break;
                        }
                    }
                    if (found.length > 0 && found[found.length - 1] === tag) break;
                }
            }
        }
    }
    
    // Убираем дубликаты
    return [...new Set(found)];
}

// Функция для получения категории тега
export function getTagCategory(tag) {
    for (const [category, items] of Object.entries(STYLE_DATABASE)) {
        if (items[tag]) return category;
    }
    return null;
}

// Функция для подсчета тегов
export function getTagCount() {
    let total = 0;
    for (const category of Object.values(STYLE_DATABASE)) {
        total += Object.keys(category).length;
    }
    return total;
}

console.log(`📚 База тегов загружена. Всего: ${getTagCount()} тегов.`);