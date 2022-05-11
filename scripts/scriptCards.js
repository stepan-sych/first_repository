let elementsCards = [{
    srcImage: "/image/cascade-7152189_960_720.jpg",
    title: " Водоспади",
    paragraf: "Падіння водного потоку річки з уступу; гідрологічний об'єкт, створений постійним водним потоком," +
        " зазвичай річки, який спадає зі стійкого до ерозії кам'яного уступу. Водоспади можуть бути також штучними," +
        " коли їх створюють як частину садово-паркового мистецтва",
},
    {
        srcImage: "/image/beach-g07393b4f7_1280.jpg",
        title: " Моря",
        paragraf: "Частина океану, яка відокремлена від нього суходолом, підвищеннями підводного рельєфу або островами" +
            " і має своєрідний гідрометеорологічний режим, вирізняється властивостями та складом води (солоністю," +
            " прозорістю, температурою, біологічним складом). ",
    },
    {
        srcImage: "/image/trees-gce4bd1088_1920.jpg",
        title: " Ліси",
        paragraf: "Це сукупність землі, рослинності, в якій переважають дерева та чагарники, тварини, мікроорганізми" +
            " та інші природні складові, що в своєму розвитку біологічно взаємопов'язані, впливають одна на одну і на довкілля.",
    }, {
        srcImage: "/image/desert-gc14c75a5f_1280.jpg",
        title: " Пустелі",
        paragraf: "Тип ландшафту, що характеризується рівнинною поверхнею, розрідженістю або абсолютною відсутністю" +
            " флори, а з фауни присутні лише специфічні та притаманні лише їй види.",
    }, {
        srcImage: "/image/mountains-g6eebdf700_1920.jpg",
        title: " Гори",
        paragraf: "Форма рельєфу, різке локальне ізольоване піднесення земної поверхні над сусідніми відносно" +
            " вирівняними ділянками, що характеризується чіткою лінією підошви.",
    }, {
        srcImage: "/image/river-gda8efc3a4_1280.jpg",
        title: " Ріки",
        paragraf: "Природний водний потік (водотік), який витікає з джерела, озера чи болота (рідше), має власне" +
            " сформоване річище і тече під дією сили тяжіння; живиться поверхневими й підземними водами, а також" +
            " атмосферними опадами свого сточища (басейну).",
    },
];

let cardsBox = document.getElementById("cards_box");

function appendToHtml(element) {
    return  " <div class=\"cards_block\">\n" +
        "            <div class=\"image_cards\">\n" +
        "                <img src=" + element.srcImage + " alt=\"\">\n" +
        "            </div>\n" +
        "            <div class=\"cards_title\">\n" +
        "                <a href=\"#\"><span><h2 class=\"fa-regular fa-clipboard\">" + element.title + "</h2></span></a>\n" +
        "            </div>\n" +
        "            <div class=\"text_cards\">\n" +
        "                <p>" + element.paragraf + "</p>\n" +
        "            </div>\n" +
        "            <div class=\"category\">\n" +
        "                <a href=\"#\"><span>Опис природи</span></a>\n" +
        "                <span><i class=\"fa-regular fa-eye\"></i></span>\n" +
        "            </div>";
}

for (let element of elementsCards) {
    let htmlCode = appendToHtml(element);
    cardsBox.insertAdjacentHTML("beforeend", htmlCode);
}
