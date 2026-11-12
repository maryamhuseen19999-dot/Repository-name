
const departments = [
    {
        name: "قسم القلب", icon: "❤️",
        description: "يهتم بصحة القلب والأوعية الدموية ووظائف الدورة الدموية.",
        diseases: [
            "ارتفاع ضغط الدم",
            "ضعف عضلة القلب",
            "اضطراب ضربات القلب",
            "الذبحة الصدرية"
        ]
    },
    {
        name: "قسم الصدر", icon: "🫁",
        description: "يهتم بصحة الرئتين والجهاز التنفسي.",
        diseases: [
            "الربو",
            "الالتهاب الرئوي",
            "التهاب الشعب الهوائية",
            "حساسية الصدر"
        ]
    },
    {
        name: "قسم الجهاز الهضمي", icon: "🩺",
        description: "يهتم بالمعدة والأمعاء والكبد والجهاز الهضمي.",
        diseases: [
            "ارتجاع المريء",
            "قرحة المعدة",
            "القولون العصبي",
            "التهاب المعدة"
        ]
    },
    {
        name: "قسم الجلدية", icon: "🧴",
        description: "يهتم بصحة الجلد والشعر والأظافر.",
        diseases: [
            "حب الشباب",
            "الإكزيما",
            "الصدفية",
            "الحساسية الجلدية"
        ]
    },
    {
        name: "قسم العظام", icon: "🦴",
        description: "يهتم بالعظام والمفاصل والعضلات.",
        diseases: [
            "التهاب المفاصل",
            "هشاشة العظام",
            "آلام الظهر",
            "خشونة الركبة"
        ]
    },
    {
        name: "قسم المخ والأعصاب", icon: "🧠",
        description: "يهتم بالمخ والأعصاب والوظائف العصبية.",
        diseases: [
            "الصداع النصفي",
            "الصرع",
            "التهاب الأعصاب",
            "اضطرابات التوازن"
        ]
    },
    {
        name: "قسم الأطفال", icon: "👶",
        description: "يهتم بصحة الأطفال ونموهم ومتابعتهم الصحية.",
        diseases: [
            "نزلات البرد",
            "التهاب الأذن عند الأطفال",
            "الحساسية",
            "اضطرابات الجهاز الهضمي"
        ]
    },
    {
        name: "قسم الأنف والأذن والحنجرة", icon: "👂",
        description: "يهتم بأمراض الأنف والأذن والحنجرة والسمع.",
        diseases: [
            "التهاب الحلق",
            "التهاب الجيوب الأنفية",
            "التهاب الأذن الوسطى",
            "حساسية الأنف"
        ]
    },
    {
        name: "قسم العيون", icon: "👁️",
        description: "يهتم بصحة العين والنظر ومشكلات الإبصار.",
        diseases: [
            "التهاب ملتحمة العين",
            "قصر النظر",
            "جفاف العين",
            "المياه البيضاء"
        ]
    },
    {
        name: "قسم الأسنان", icon: "🦷",
        description: "يهتم بصحة الأسنان واللثة والفم.",
        diseases: [
            "تسوس الأسنان",
            "التهاب اللثة",
            "خراج الأسنان",
            "حساسية الأسنان"
        ]
    },
    {
        name: "قسم الجراحة العامة", icon: "🏥",
        description: "يهتم بتقييم الحالات التي قد تحتاج إلى تدخل جراحي.",
        diseases: [
            "التهاب الزائدة الدودية",
            "الفتق",
            "حصوات المرارة",
            "بعض حالات البواسير"
        ]
    },
    {
        name: "قسم الطوارئ", icon: "🚑",
        description: "يستقبل الحالات المفاجئة التي تحتاج إلى تقييم عاجل.",
        diseases: [
            "الجفاف",
            "الحساسية الشديدة",
            "الإغماء",
            "الإصابات المفاجئة"
        ]
    },
    {
        name: "قسم النساء والتوليد", icon: "🤰",
        description: "يهتم بصحة المرأة ومتابعة الحمل.",
        diseases: [
            "فقر الدم أثناء الحمل",
            "تكيس المبايض",
            "اضطرابات الدورة الشهرية",
            "التهابات الجهاز التناسلي"
        ]
    },
    {
        name: "قسم المسالك البولية", icon: "🩻",
        description: "يهتم بالمثانة والمسالك البولية.",
        diseases: [
            "التهاب المسالك البولية",
            "حصوات المثانة",
            "سلس البول",
            "التهاب المثانة"
        ]
    },
    {
        name: "قسم الكلى", icon:"🫘",
        description: "يهتم بوظائف الكلى وأمراضها.",
        diseases: [
            "حصوات الكلى",
            "التهاب الكلى",
            "الفشل الكلوي",
            "أكياس الكلى"
        ]
    },
    {
        name: "قسم الأورام", icon: "🎗️",
        description: "يهتم بتشخيص الأورام ومتابعة خطط الرعاية.",
        diseases: [
            "أورام الثدي",
            "أورام القولون",
            "أورام الرئة",
            "أورام الغدد الليمفاوية"
        ]
    },
    {
        name: "قسم أمراض الدم", icon: "🩸",
        description: "يهتم بأمراض الدم ومكوناته المختلفة.",
        diseases: [
            "فقر الدم",
            "الثلاسيميا",
            "الهيموفيليا",
            "اضطرابات الصفائح الدموية"
        ]
    },
    {
        name: "قسم الغدد الصماء", icon: "⚕️",
        description: "يهتم بالهرمونات والغدد ووظائفها.",
        diseases: [
            "مرض السكري",
            "خمول الغدة الدرقية",
            "فرط نشاط الغدة الدرقية",
            "اضطرابات الغدد الكظرية"
        ]
    },
    {
        name: "قسم الطب النفسي", icon: "🧩",
        description: "يهتم بالصحة النفسية والمشاعر والسلوك.",
        diseases: [
            "اضطرابات القلق",
            "الاكتئاب",
            "اضطرابات النوم",
            "الوسواس القهري"
        ]
    },
    {
        name: "قسم التغذية العلاجية", icon: "🥗",
        description: "يهتم بالتغذية المتوازنة والخطط الغذائية المناسبة.",
        diseases: [
            "نقص الفيتامينات",
            "نقص الحديد الغذائي",
            "سوء التغذية",
            "الحساسية الغذائية"
        ]
    },
    {
        name: "قسم العلاج الطبيعي", icon: "🏃",
        description: "يساعد على تحسين الحركة والتعافي بعد الإصابات.",
        diseases: [
            "آلام أسفل الظهر",
            "إصابات العضلات",
            "تيبس المفاصل",
            "مشكلات التوازن والحركة"
        ]
    }
];
// عناصر الصفحة
const cards = document.getElementById("departmentCards");
const search = document.getElementById("search");
const emptyMessage = document.getElementById("emptyMessage");
const departmentCount = document.getElementById("departmentCount");

const diseaseArea = document.getElementById("diseaseArea");
const selectedDepartmentTitle = document.getElementById("selectedDepartmentTitle");
const diseaseTypes = document.getElementById("diseaseTypes");

const detailsArea = document.getElementById("detailsArea");
const diseaseDetails = document.getElementById("diseaseDetails");

const backToDepartments = document.getElementById("backToDepartments");
const backToDiseases = document.getElementById("backToDiseases");
const topButton = document.getElementById("topButton");

let currentDepartment = null;

// عرض الأقسام
function displayDepartments(list) {
    cards.innerHTML = "";

    departmentCount.textContent =
        "عدد الأقسام المعروضة: " + list.length + " من 21";

    emptyMessage.hidden = list.length !== 0;

    list.forEach(function(department, index) {
        const card = document.createElement("article");
        card.className = "department-card";
        card.style.animationDelay = (index * 0.04) + "s";

        card.innerHTML = `
            <div class="card-top">
                <div class="department-icon">${department.icon}</div>
                <h3>${department.name}</h3>
            </div>

            <p>${department.description}</p>

            <div class="card-bottom">
                <span class="type-count">
                    ${department.diseases.length} أنواع من الأمراض
                </span>
                <button type="button">استكشف القسم ←</button>
            </div>
        `;

        card.querySelector("button").addEventListener("click", function() {
            showDiseaseTypes(department);
        });

        cards.appendChild(card);
    });
}

// فتح القسم وعرض أنواع الأمراض
function showDiseaseTypes(department) {
    currentDepartment = department;

    selectedDepartmentTitle.textContent =
        department.icon + " " + department.name;

    diseaseTypes.innerHTML = "";

    department.diseases.forEach(function(disease, index) {
        const item = document.createElement("div");
        item.className = "disease-type-card";
        item.style.animationDelay = (index * 0.07) + "s";

        item.innerHTML = `
            <h3>${disease}</h3>
            <span>←</span>
        `;

        item.addEventListener("click", function() {
            showDiseaseDetails(disease, department);
        });

        diseaseTypes.appendChild(item);
    });

    diseaseArea.hidden = false;
    detailsArea.hidden = true;

    diseaseArea.scrollIntoView({ behavior: "smooth" });
}

// معلومات تعليمية عامة حسب نوع المرض
function getDiseaseInformation(disease, department) {
    const name = disease;

    return {
        intro:
            "هذا المرض من الموضوعات الصحية التي يهتم بها " +
            department.name +
            ". تختلف طبيعته وأسبابه وطرق التعامل معه من شخص لآخر، " +
            "ويحتاج تحديد الحالة إلى تقييم طبي مناسب.",

        causes:
            "قد ترتبط الحالة بعوامل وراثية أو بيئية أو بعوامل صحية أخرى. " +
            "وتختلف الأسباب الدقيقة حسب نوع المرض والحالة الصحية.",

        symptoms:
            "تختلف الأعراض من حالة إلى أخرى، وقد تظهر أعراض متعددة أو " +
            "قد لا تظهر أعراض واضحة في البداية. لا يمكن الاعتماد على الأعراض وحدها للتشخيص.",

        care:
            "الاهتمام بالصحة العامة، واتباع نمط حياة مناسب، وتجنب العوامل " +
            "التي تزيد الأعراض، والالتزام بمتابعة الطبيب المختص.",

        treatment:
            "تختلف طرق العلاج حسب التشخيص ودرجة الحالة. يحدد الطبيب " +
            "الخطة المناسبة بعد الفحص، ولا ينبغي استخدام الأدوية دون استشارة مختص."
    };
}

// عرض تفاصيل المرض
function showDiseaseDetails(disease, department) {
    const info = getDiseaseInformation(disease, department);

 diseaseDetails.innerHTML = `
        <div class="detail-hero">
            <span class="detail-icon">${department.icon}</span>
            <h2>${disease}</h2>
            <p>${department.name}</p>
            <p>${info.intro}</p>
        </div>

        <div class="detail-grid">

            <div class="detail-box">
                <h3>📌 ما هو المرض؟</h3>
                <p>${info.intro}</p>
            </div>

            <div class="detail-box">
                <h3>🔍 الأسباب والعوامل</h3>
                <p>${info.causes}</p>
            </div>

            <div class="detail-box">
                <h3>🩺 الأعراض</h3>
                <p>${info.symptoms}</p>
            </div>

            <div class="detail-box">
                <h3>🌿 الرعاية والوقاية</h3>
                <p>${info.care}</p>
            </div>

            <div class="detail-box">
                <h3>💊 العلاج</h3>
                <p>${info.treatment}</p>
            </div>

            <div class="detail-box">
                <h3>👨‍⚕️ التخصص المسؤول</h3>
                <p>${department.name}</p>
            </div>

        </div>

        <div class="medical-warning">
            ⚠️ تنبيه طبي: هذه معلومات تعليمية عامة وليست تشخيصًا أو وصفة علاجية.
            المعلومات الخاصة بالأسباب والأعراض والعلاج تحتاج إلى مراجعة مصادر
            طبية موثوقة وتقييم الطبيب المختص. لا تستخدم أي دواء دون استشارة الطبيب.
        </div>
    `;

    detailsArea.hidden = false;
    detailsArea.scrollIntoView({ behavior: "smooth" });
}

// البحث في أسماء الأقسام والأمراض
search.addEventListener("input", function() {
    const value = search.value.trim().toLocaleLowerCase("ar");

    const results = departments.filter(function(department) {
        const departmentName = department.name.toLocaleLowerCase("ar");
        const description = department.description.toLocaleLowerCase("ar");

        const diseaseMatch = department.diseases.some(function(disease) {
            return disease.toLocaleLowerCase("ar").includes(value);
        });

        return (
            departmentName.includes(value) ||
            description.includes(value) ||
            diseaseMatch
        );
    });

    displayDepartments(results);

    diseaseArea.hidden = true;
    detailsArea.hidden = true;

    document.getElementById("departments").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

// الرجوع إلى الأقسام
backToDepartments.addEventListener("click", function() {
    diseaseArea.hidden = true;
    detailsArea.hidden = true;

    document.getElementById("departments").scrollIntoView({
        behavior: "smooth"
    });
});

// الرجوع إلى أنواع الأمراض
backToDiseases.addEventListener("click", function() {
    detailsArea.hidden = true;
    diseaseArea.hidden = false;

    diseaseArea.scrollIntoView({
        behavior: "smooth"
    });
});

// زر العودة لأعلى الصفحة
window.addEventListener("scroll", function() {
    if (window.scrollY > 400) {
        topButton.classList.add("show");
    } else {
        topButton.classList.remove("show");
    }
});

topButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// إظهار عدد الأقسام والأمراض
const totalDiseases = departments.reduce(function(total, department) {
    return total + department.diseases.length;
}, 0);

document.getElementById("totalDepartments").textContent =
    departments.length;

document.getElementById("totalDiseases").textContent =
    totalDiseases;

// تشغيل الموقع
displayDepartments(departments);

// التأكد من العدد في وحدة التحكم
console.log("عدد الأقسام:", departments.length);
console.log("عدد أنواع الأمراض:", totalDiseases);
