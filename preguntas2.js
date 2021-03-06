const questions = [
    {
        uqid: "faltaId",
        question: 'Carlos come un solo tipo de alimento, entonces es un ',
        keys: ["monófago", "osívoro", "esteatófago", "oófago", "hipófago"],
        week: 2,
        UrlOfImage: null,
        university: "unsch",
        course: "verbalReasoning",
        level: 1,
    },  
    {
        uqid: "faltaId",
        question: "Señale lo incorrecto:",
        keys: ["oófago: que se alimenta de raíces. ", "ictiófago: que se alimenta de peces.", "hipófago: que se alimenta carne de caballo", "omnívoro: que se alimenta de todo.", "lactófago: que se alimenta de leche."],
        week: 2,
        UrlOfImage: null,
        university: "unsch",
        course: "verbalReasoning",
        level: 1,
    },  
    {
        uqid: "faltaId",
        question: "Tuve que recurrir tantas veces a un .........., que algunos pensaron que estaba realmente ........... UNMSM 1993",
        keys: ["médico-enfermo", "sacerdote-desahuciado", "contador-quebrado", "policía-perdido", "profesor-desorientado"],
        week: 2,
        UrlOfImage: null,
        university: "unsch",
        course: "verbalReasoning",
        level: 1,
    },  
    {
        uqid: "faltaId",
        question: "(I) La ganadería comenzó con la domesticación por parte del hombre de ciertas especies que se hallaban próximas a él y de las cuales obtenía su alimento. \n (II) El comienzo de la crianza y explotación de los animales, que sirvió para el desarrollo de la civilización, se remonta a épocas muy antiguas; pero adquiere un carácter sistemático en las regiones del Oriente. \n (III) En una economía agrícola, los animales se utilizan por la necesidad de mantener fertilizado el suelo, ya que este se agota por el cultivo. \n (IV) En un principio, los animales se criaban para aprovechar, básicamente, su carne y su piel; luego se descubrió que la leche de algunos de ellos era un excelente alimento. \n (V) Actualmente, la crianza sistemática de los animales hace posible la mejora de las razas para conseguir ejemplares más adecuados a la función que deben realizar. \n UNMSM 1996",
        keys: ["V", "II", "I", "IV", "III"],
        week: 2,
        UrlOfImage: null,
        university: "unsch",
        course: "verbalReasoning",
        level: 1,
    },  
    {
        uqid: "faltaId",
        question: "¿Cuál es el número, cuyos $\\frac{3}{4}$ exceden en 420 a su sexta parte? ",
        keys: ["720", "740", "750", "760", "440"],
        week: 2,
        UrlOfImage: null,
        university: "unsch",
        course: "mathematicalReasoning",
        level: 1,
    },  
    {
        uqid: "faltaId",
        question: "En un aula los alumnos están agrupados en un número de bancas de 6 alumnos cada una, si se les coloca en bancas de 4 alumnos se necesitarán 3 bancas más. ¿Cuántos alumnos hay presentes?",
        keys: ["36", "39", "33", "32", "45"],
        week: 2,
        UrlOfImage: null,
        university: "unsch",
        course: "mathematicalReasoning",
        level: 1,
    },  
    {
        uqid: "faltaId",
        question: "Con los alumnos de un salón se formaron dos cuadrados compactos, colocando en cada lado de los cuadrados alumnos en la relación de 1 a 2. sí en el salón hubiera 20 alumnos más se formaría un solo cuadrado compacto. Hallar la cantidad de alumnos del salón, si es la menor posible.",
        keys: ["80", "23", "24", "60", "21"],
        week: 2,
        UrlOfImage: null,
        university: "unsch",
        course: "mathematicalReasoning",
        level: 1,
    },  
    {
        uqid: "faltaId",
        question: "La suma de las edades de una pareja de esposos, cuando nació su primer hijo era la mitad de la suma de sus edades actuales. Si ahora el hijo tiene 20 años, ¿Qué edad tenía cuando las edades de los 3 sumaban 70 años?",
        keys: ["10", "20", "30", "12", "15"],
        week: 2,
        UrlOfImage: null,
        university: "unsch",
        course: "mathematicalReasoning",
        level: 1,
    },  
    {
        uqid: "faltaId",
        question: "Resolver la ecuación escribiendo la exponencial como un producto:  \n $2^{x+1} + 5$ $\\cdot 2^{x} = 28$",
        keys: ["2", "20", "8", "4", "40"],
        week: 2,
        UrlOfImage: null,
        university: "unsch",
        course: "algebra",
        level: 1,
    }, 
    ,  
    {
        uqid: "faltaId",
        question: "Encuentra la suma de los polinomios: \n $(4x^2 + 5) + (3x^2 + 4)$ ",
        keys: ["$(8x^2 + 9)$", "$(9^2 + 2)$", "$8^2$", "5", "17"],
        week: 2,
        UrlOfImage: null,
        university: "unsch",
        course: "algebra",
        level: 1,
    }, 
    {
        uqid: "faltaId",
        question: "Se tiene 3 recipientes cuyas capacidades son entre sí como $1:2:3$, el primero está lleno de vino y el vino que contienen son entre sí como $3:5:7$ respectivamente. Si se vació la mitad del contenido del primer recipiente en los otros dos, en igual cantidad, ¿en qué relación quedaron los volúmenes vacíos del segundo y tercer recipiente? \n PUCP 2015",
        keys: ["$1:5 $", "$1:3$", "$1:4$", "$2:5$", "$3:5$"],
        week: 2,
        UrlOfImage: null,
        university: "unsch",
        course: "arithmetic",
        level: 1,
    },  
    {
        uqid: "faltaId",
        question: "En una bolsa hay 165 monedas. si por cada 5 monedas de $S/.2$ hay 8 monedas de $S/.5$ y por cada 2 monedas de $S/.5$ hay 5 monedas de $S/.1$, halle el número de monedas de $S/.5$. \n UNSA 2010",
        keys: ["40", "64", "32", "48", "21"],
        week: 2,
        UrlOfImage: null,
        university: "unsch",
        course: "arithmetic",
        level: 1,
    },  
    {
        uqid: "faltaId",
        question: 'Del grafico adjunto halle "$\\alpha$ - $\\Theta$" ',
        keys: ["450 ", "250", "360", "180", "90"],
        week: 2,
        UrlOfImage: "https://firebasestorage.googleapis.com/v0/b/gauler-665ba.appspot.com/o/imagesOfBQ%2Ftrigonometry%2Fc9152110-e122-4e7f-9c42-19e0540e59f0.png?alt=media&token=2eeb1ff8-103d-4ff2-845c-a2f0bae9bd3b",
        university: "unsch",
        course: "trigonometry",
        level: 1,
    },  
    {
        uqid: "faltaId",
        question: "Carla debe colocar clavos sobre los puntos A, B, C Y D, sobre una mesa y tender una cuerda que una estos puntos de forma tal que ABC sea un triangulo y se cumpla la relación de los ángulos, como se muestra en la figura. Si la longitud de AB es 8cm. ¿Cuál es la longitud mínima entera de BD?",
        keys: ["50°", "60°", "30°", "35°", "42°"],
        week: 2,
        UrlOfImage: "https://firebasestorage.googleapis.com/v0/b/gauler-665ba.appspot.com/o/imagesOfBQ%2Fgeometry%2Fb6d449c1-4074-4f11-9c5a-850057e945fc.png?alt=media&token=a609feb4-ea93-4da4-af26-6417383157ff",
        university: "unsch",
        course: "geometry",
        level: 1,
    },  
    {
        uqid: "faltaId",
        question: "En la figura, el ángulo $COB$ mide 120° y el ángulo $COD$ mide la mitad del ángulo $BOA$. Entonces, la medida del $BOA$ es: ",
        keys: ["40", "30", "20", "60", "50"],
        week: 2,
        UrlOfImage: "https://firebasestorage.googleapis.com/v0/b/gauler-665ba.appspot.com/o/imagesOfBQ%2Fgeometry%2Fc3c0e001-1290-42b4-a1f8-0b40e8bb7b7a.png?alt=media&token=b3bd655f-6ba9-48db-94d6-6b0a069786bd",
        university: "unsch",
        course: "geometry",
        level: 1,
    },  
    {
        uqid: "faltaId",
        question: "Dados los vectores: $A=2i+3j$,    $B=i 2j$   y    $C=4i j$.  Hallar el valor de MN de tal forma que sea posible expresar la combinación lineal: $mA+nB=C$",
        keys: ["5", "6", "8", "10", "4"],
        week: 2,
        UrlOfImage: null,
        university: "unsch",
        course: "physics",
        level: 1,
    },  
    {
        uqid: "faltaId",
        question: "Encontrar la ecuación dimensional del potencial eléctrico V, sabiendo que: \n  $V = \\frac{trabajo}{carga    \\  eléctrica}$",
        keys: ["1", "2", "3", "4", "9"],
        week: 2,
        UrlOfImage: null,
        university: "unsch",
        course: "physics",
        level: 1,
    },  
    {
        uqid: "faltaId",
        question: "n la siguiente fórmula física, indicar la dimensión de w, sabiendo que A: longitud; t: tiempo.  \n $x=wAsen(wt)$",
        keys: ["[w] T-1 ", "[w] T-2", "[w] T-4", "[T] w-1", "[w] T-5"],
        week: 2,
        UrlOfImage: null,
        university: "unsch",
        course: "physics",
        level: 1,
    },  
    {
        uqid: "faltaId",
        question: "Un vehículo inicia su movimiento con una aceleración constante de módulo $4m/s^2$ en el instante que la luz del semáforo cambia a verde, en ese instante un ciclista se mueve a rapidez constante de $10m/s$ pero está a $12m$ detrás del vehículo, determina el mayor tiempo que debe transcurrir para que el ciclista alcance al vehículo.",
        keys: ["3s", "5s", "2s", "8s", "4s"],
        week: 2,
        UrlOfImage: "https://firebasestorage.googleapis.com/v0/b/gauler-665ba.appspot.com/o/imagesOfBQ%2Fphysics%2F357d8679-372e-4e0f-8d9c-3aaa157d60dd.png?alt=media&token=c8d082de-50bd-4a40-86aa-3ab134ac12e2",
        university: "unsch",
        course: "physics",
        level: 1,
    },  
    {
        uqid: "faltaId",
        question: "Con respecto al sistema atómico, ¿qué proposiciones son incorrectas? \n I. La masa del átomo se concentra en el núcleo. \n II. El electrón tiene las mismas características (masa y cantidad de carga eléctrica) en cualquier átomo. \n III. Los números de electrones, protones y neutrones en un átomo eléctricamente neutro deben ser iguales.",
        keys: ["solo III", "I y II", "I y III", "solo I", "I, II y III"],
        week: 2,
        UrlOfImage: null,
        university: "unsch",
        course: "chemistry",
        level: 1,
    },  
    {
        uqid: "faltaId",
        question: "Si un elemento tiene 28 neutrones y número de masa   52. ¿cuántos electrones tiene su catión trivalente?",
        keys: ["21", "28", "27", "25", "24"],
        week: 2,
        UrlOfImage: null,
        university: "unsch",
        course: "chemistry",
        level: 1,
    },  
    {
        uqid: "faltaId",
        question: "La suma de los números de masa de dos isótopos es 60 y la diferencia de sus neutrones es 4. Determinar el mayor número de masa.",
        keys: ["32", "64", "28", "56", "46"],
        week: 2,
        UrlOfImage: null,
        university: "unsch",
        course: "chemistry",
        level: 1,
    },  
    {
        uqid: "faltaId",
        question: "Mediante qué ardid Ulises ayuda a los griegos a saquear e incendiar Troya y ganar así la guerra?",
        keys: ["el caballo de madera", "la manzana de Paris", "diciendo que se llama Nadie", "convenciendo a Agamenón y a Aquiles", "barco de guerra "],
        week: 2,
        UrlOfImage: null,
        university: "unsch",
        course: "literature",
        level: 1,
    },  
    {
        uqid: "faltaId",
        question: "¿Qué hechicera transforma a los compañeros de Ulises en animales? ",
        keys: ["Circe", "Calipso ", "Nausícaa", "Escila", "longa"],
        week: 2,
        UrlOfImage: null,
        university: "unsch",
        course: "literature",
        level: 1,
    },  
    {
        uqid: "faltaId",
        question: "Aristóteles realiza las primeras reflexiones sobre el fenómeno literario en:",
        keys: ["La poética.", "La república.", "El organon.", "Arte poética.", "Epístola a los pisones."],
        week: 2,
        UrlOfImage: null,
        university: "unsch",
        course: "literature",
        level: 1,
    },  
    {
        uqid: "faltaId",
        question: "La comunicación desde el punto de vista de cuántos intervienen en el diálogo o coloquio puede ser:",
        keys: ["Unilateral, bilateral y multilateral.", "Directa o indirecta.", "Lingüística o no lingüística.", "Pública o privada.", "Verbal o no verbal."],
        week: 2,
        UrlOfImage: null,
        university: "unsch",
        course: "language",
        level: 1,
    },  
    {
        uqid: "faltaId",
        question: "El canal se entiende como el medio físico por donde el mensaje puede desplazarse idealmente. Cuando se da una comunicación oral, sea una conversación cotidiana, sea una charla de Lingüística Aplicada, el canal utilizado será:",
        keys: ["Las ondas sonoras.", "Las ondas hertzianas.", "Los gestos del rostro.", "El aparato fonador.", "Las ondas magnéticas"],
        week: 2,
        UrlOfImage: null,
        university: "unsch",
        course: "language",
        level: 1,
    },  
    {
        uqid: "faltaId",
        question: "Durante las campañas electorales los diversos candidatos organizan mítines con el fin de exponer directamente a los electores sus propuestas. El tipo de comunicación en el cual se circunscribirían estas manifestaciones de la vida política de un país sería:",
        keys: ["Directa.", "No lingüística.", "Privada.", "Multidireccional.", "Bipersonal. "],
        week: 2,
        UrlOfImage: null,
        university: "unsch",
        course: "language",
        level: 1,
    },  
    {
        uqid: "faltaId",
        question: "«El régimen colonial impuesto tras la conquista española del Tahuantinsuyo tuvo como corolario, en el terreno lingüístico, un ordenamiento idiomático de carácter diglósico. De este modo, el quechua, que había alcanzado el estatuto de lengua oficial del vasto imperio, pasaba a ocupar un segundo plano tras la imposición del castellano como vehículo de la administración colonial. Ciertamente, el conocimiento de la lengua nativa resultaba imprescindible, al menos en los momentos iniciales de la conquista, por razones de control y sojuzgamiento social del pueblo sometido. Ello explica, en el terreno de la administración pública, la preocupación por contar con intérpretes oficiales, y, en el fuero religioso, la obligación de enseñar la lengua indígena para servirse de ella como medio de catequización. Por lo demás, fuera de tales requerimientos, de carácter instrumental y pragmático, y una vez asegurado el ordenamiento colonial transcontinental, las condiciones estaban dadas de tal manera que, en materia de aprendizaje de lenguas, eran los grupos dominados quienes se veían en la necesidad de aprender el castellano y no al revés».  \n Del texto anterior, se puede inferir que ",
        keys: ["el quechua, lingüísticamente, no sometía a otras lenguas nativas. ", "los cambios sociales pueden determinar la situación de diglosia. ", "los grupos dominados estaban obligados a enseñar su lengua. ", "los intérpretes oficiales del quechua eran nativos en lengua indígena", "los grupos dominados pueden determinar una lengua indígena. "],
        week: 2,
        UrlOfImage: null,
        university: "unsch",
        course: "language",
        level: 1,
    },  
    {
        uqid: "faltaId",
        question: "Estos derechos están relacionados con la capacidad de ejercicio individual, es decir la persona humana considerada básicamente como ser individual. Se encuentran en la Declaración Universal de Derechos humanos.",
        keys: ["Derechos civiles y públicos.", "Derechos de los pueblos.", "Derechos humanos de segunda generación.", "Derechos de solidaridad.", "Derechos económicos, sociales y culturales."],
        week: 2,
        UrlOfImage: null,
        university: "unsch",
        course: "civic",
        level: 1,
    } ,  
    {
        uqid: "faltaId",
        question: "Primer antepasado del hombre en línea directa",
        keys: ["Australopithecus afarensis", "Homo hábilis", "Homo Erectus", "Homo Sapiens", "Sapiens sapiens "],
        week: 2,
        UrlOfImage: null,
        university: "unsch",
        course: "universalHistory",
        level: 1,
    } ,  
    {
        uqid: "faltaId",
        question: "Los ríos Tigris y Éufrates nacen del monte .......... desembocando en el golfo .......... ",
        keys: ["Tauro-pérsico", "Tauro-balcánico", "Pérsico-tauro", "Sacro-indico", "Sacro-ártico"],
        week: 2,
        UrlOfImage: null,
        university: "unsch",
        course: "universalHistory",
        level: 1,
    },  
    {
        uqid: "faltaId",
        question: "El autoctonismo americanista fue postulado por Florentino Ameghino, concluyendo que los orígenes de la especie humana se remontarían a la era:",
        keys: ["Cenozoica ", " Mesozoica", "Criptozoica.", "Azoica ", "Paleozoica "],
        week: 2,
        UrlOfImage: null,
        university: "unsch",
        course: "historyOfPeru",
        level: 1,
    },  
    {
        uqid: "faltaId",
        question: "Según Thor Heyerdahl, América pudo haber sido poblada por inmigrantes venidos por el Atlántico procedentes de:",
        keys: ["África", "Indonesia", "Oceanía", "Europa del norte", "Polinesia"],
        week: 2,
        UrlOfImage: null,
        university: "unsch",
        course: "historyOfPeru",
        level: 1,
    },  
    {
        uqid: "faltaId",
        question: "Hasta el momento, el fósil humano más antiguo hallado en América corresponde al:",
        keys: ["Cráneo de los Angeles", "Homos Pampeanus.", "Homo habilis.", "Pitecantropus erectus.", "Planoangulado."],
        week: 2,
        UrlOfImage: null,
        university: "unsch",
        course: "historyOfPeru",
        level: 1,
    },  
    {
        uqid: "faltaId",
        question: "La Teoría Autoctonista sobre el Origen de la Cultura Peruana: \n I. Estuvo sostenida por Julio C. Tello.\n II. Está sostenida por la argumentación de Federico Kauffman Doig. \n III. Sostiene que los pobladores mesoamericanos llegaron en un estado rudimentario de cultura y que es aquí donde se desarrolló en la cultura Chavín. \n Son verdaderas.",
        keys: ["Sólo I", "Sólo II ", "I y III", "I y II", "II y III"],
        week: 2,
        UrlOfImage: null,
        university: "unsch",
        course: "historyOfPeru",
        level: 1,
    },  
    {
        uqid: "faltaId",
        question: "Tipo de energía utilizada por organismos autótrofos que incluye el movimiento de fotones:",
        keys: ["Luz solar", "Calor", "Electricidad", "Nuclear", "Química"],
        week: 2,
        UrlOfImage: null,
        university: "unsch",
        course: "biology",
        level: 1,
    },  
    {
        uqid: "faltaId",
        question: "Una de las características que diferencian a los seres vivos de la materia inerte es:",
        keys: ["organización compleja", "volumen", "impermeabilidad ", "masa", "la densidad"],
        week: 2,
        UrlOfImage: null,
        university: "unsch",
        course: "biology",
        level: 1,
    },  
    {
        uqid: "faltaId",
        question: "Moléculas biológicas cuyas unidades se unen formando enlaces Glucosídicos:",
        keys: ["Polisacáridos", "Ácidos Nucleicos ", "Monosacáridos", "Lípidos", "Proteínas"],
        week: 2,
        UrlOfImage: null,
        university: "unsch",
        course: "biology",
        level: 1,
    },  
    {
        uqid: "faltaId",
        question: "Algunas moléculas son de naturaleza proteica como la Insulina y el Glucagón que regulan los niveles de Glucosa en sangre, de esta manera cumplen con la función:  ",
        keys: ["Hormonal", "Reguladora ", "Defensiva ", "Enzimática", "Contráctil"],
        week: 2,
        UrlOfImage: null,
        university: "unsch",
        course: "biology",
        level: 1,
    },  
    {
        uqid: "faltaId",
        question: "Como se llama el músculo del corazón que contiene fibras nerviosas y que ayuda a contraerse automáticamente.",
        keys: ["Miocardio", "Epicarpio", "Endocardio", "Pericardio seroso", "Endotelio"],
        week: 2,
        UrlOfImage: null,
        university: "unsch",
        course: "humanAnatomy",
        level: 1,
    },  
    {
        uqid: "faltaId",
        question: "La sangre venosa de la circulación mayor ingresa al corazón por ......... mientras que la sangre arterial de la circulación menor ingresa al corazón .........",
        keys: ["venas cavas - venas pulmonares.", "venas pulmonares- venas cavas", "arteria pulmonar - venas cavas", "vena porta - venas cavas.", "arteria aorta - arteria pulmonar."],
        week: 2,
        UrlOfImage: null,
        university: "unsch",
        course: "humanAnatomy",
        level: 1,
    },  
    {
        uqid: "faltaId",
        question: "Durante el ciclo cardiaco, al inicio de la sístole ventricular se cierra las válvulas ........., ocurriendo el ......... este es sordo y prolongado.",
        keys: ["tricúspide y bicúspide - 1ª ruido cardiaco", "sigmoideas - 2ª ruido cardiaco", "tricúspide y ventricular - 3ª ruido cardiaco", "aortica y semilunar - 3ª ruido cardiaco ", "tricúspide y sigmoidea - 3 ruido cardiaco"],
        week: 2,
        UrlOfImage: null,
        university: "unsch",
        course: "humanAnatomy",
        level: 1,
    },  
    {
        uqid: "faltaId",
        question: "La Geografía como conocimiento científico empezó con los:",
        keys: ["griegos.", "alemanes.", "chinos.", "romanos.", "sumerios"],
        week: 2,
        UrlOfImage: null,
        university: "unsch",
        course: "geography",
        level: 1,
    },  
    {
        uqid: "faltaId",
        question: "Formulado por Alexander Von Humboldt. Permite identificar el porqué de la ocurrencia de un hecho o fenómeno geográfico. Otorga carácter científico a la geografía. Esta definición, corresponde al principio de:",
        keys: ["Conexión o Relación ", "Localización", "Descripción", "Comparación o Analogía", "Causalidad"],
        week: 2,
        UrlOfImage: null,
        university: "unsch",
        course: "geography",
        level: 1,
    },  
    {
        uqid: "faltaId",
        question: "El ideólogo de la economía que Perú maneja hoy en día, misma que hace referencia en la constitución nacional es de.",
        keys: ["Alfred Müller- Armack", "Alfred Marshall", "Carlos Mark", "David Ricardo", "Steven Howken "],
        week: 2,
        UrlOfImage: null,
        university: "unsch",
        course: "economy",
        level: 1,
    },  
    {
        uqid: "faltaId",
        question: "La satisfacción de las necesidades del hombre ha hecho de él lo que es y lo que hace. Así, si en el caso peruano la gastronomía es una actividad económica empresarial lucrativa respaldada por los distintos gobiernos, los pobladores típicos de San Juan de Lurigancho o La Molina tienen una oportunidad para cubrir una necesidad ",
        keys: ["secundaria. ", "biológica. ", "terciaria. ", "superflua.", "primaria."],
        week: 2,
        UrlOfImage: null,
        university: "unsch",
        course: "economy",
        level: 1,
    },  
    {
        uqid: "faltaId",
        question: "En que continente se encuentra ubicado el Volcán marino Hunga Tonga-Hunga Ha'apai que en estos últimos días erupcionó causando sismos y anomalías de oleaje",
        keys: ["Oceanía", "Europa ", "América ", "Asia ", "África"],
        week: 2,
        UrlOfImage: null,
        university: "unsch",
        course: "topicality",
        level: 1,
    },  
    {
        uqid: "faltaId",
        question: "Empresa que en la ultima semana registró un derrame de 200 mil galones de petróleo en la playa peruana.",
        keys: ["Repsol ", "Petroperú ", "Primax", "AVA", "Shell"],
        week: 2,
        UrlOfImage: null,
        university: "unsch",
        course: "topicality",
        level: 1,
    },  
    {
        uqid: "faltaId",
        question: "Conocida como la ciudad de las palmeras ",
        keys: ["Tarapoto", "Fenicia", "Cajamarca", "Ayacucho ", "Callao"],
        week: 2,
        UrlOfImage: null,
        university: "unsch",
        course: "topicality",
        level: 1,
    }
]