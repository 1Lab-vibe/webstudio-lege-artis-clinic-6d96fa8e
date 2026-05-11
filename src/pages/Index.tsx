import { useState } from "react";
import clinicInterior from "@/assets/clinic-interior.jpg";
import dentistHands from "@/assets/dentist-hands.jpg";
import patientSmile from "@/assets/patient-smile.jpg";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";
import sterilization from "@/assets/sterilization.jpg";
import case1 from "@/assets/case-1.jpg";
import case2 from "@/assets/case-2.jpg";

const ADDRESS = "Фрунзенская наб., 52, Москва, 119270";
const PHONE = "8 (495) 609-12-12";
const PHONE_TEL = "+74956091212";

const services = [
  { name: "Консультация и осмотр", price: "0 ₽", note: "перед лечением — бесплатно", tag: null },
  { name: "Профессиональная гигиена", price: "от 4 900 ₽", note: "Air Flow + ультразвук", tag: "−15% в будни" },
  { name: "Лечение кариеса", price: "от 5 500 ₽", note: "пломба светового отверждения", tag: null },
  { name: "Лечение каналов", price: "от 9 800 ₽", note: "под микроскопом", tag: null },
  { name: "Отбеливание ZOOM 4", price: "от 24 000 ₽", note: "за 1 визит", tag: "Хит" },
  { name: "Имплантация (Straumann)", price: "от 49 000 ₽", note: "имплант + установка", tag: null },
  { name: "Керамическая коронка E.max", price: "от 32 000 ₽", note: "гарантия 3 года", tag: null },
  { name: "Брекеты / элайнеры", price: "от 89 000 ₽", note: "рассрочка 0%", tag: "Рассрочка" },
];

const doctors = [
  { name: "Сергей Молчанов", role: "Главный врач, имплантолог", years: "16 лет практики", img: doctor1, edu: "МГМСУ им. Евдокимова, сертификат Straumann" },
  { name: "Анна Левина", role: "Терапевт-эндодонтист", years: "11 лет практики", img: doctor2, edu: "ПМГМУ им. Сеченова, работа под микроскопом" },
  { name: "Мария Гончарова", role: "Ортодонт", years: "8 лет практики", img: doctor3, edu: "Сертификат Invisalign Provider" },
];

const reviews = [
  { name: "Ольга К.", source: "Яндекс Карты", text: "Записалась к Сергею на консультацию по импланту — всё спокойно объяснили, показали снимки и план лечения с ценой. Никакого давления.", rating: 5 },
  { name: "Дмитрий П.", source: "2ГИС", text: "Делал гигиену у Анны, до этого три года боялся стоматологов. Здесь реально аккуратно и без боли. Вернусь на лечение.", rating: 5 },
  { name: "Ирина М.", source: "Яндекс Карты", text: "Хорошая клиника в шаговой доступности от метро Фрунзенская. Чисто, тихо, врач отвечает на вопросы.", rating: 5 },
];

const Index = () => {
  const [form, setForm] = useState({ name: "", phone: "", service: "Консультация и осмотр", time: "Сегодня вечером" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/85 backdrop-blur border-b border-border">
        <div className="container flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground font-bold">LA</span>
            <span className="font-semibold tracking-tight">Lege Artis Clinic</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground">Услуги и цены</a>
            <a href="#doctors" className="hover:text-foreground">Врачи</a>
            <a href="#cases" className="hover:text-foreground">Работы</a>
            <a href="#safety" className="hover:text-foreground">Безопасность</a>
            <a href="#contact" className="hover:text-foreground">Контакты</a>
          </nav>
          <a href={`tel:${PHONE_TEL}`} className="hidden sm:inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium hover:border-primary hover:text-primary transition-colors">
            <PhoneIcon /> {PHONE}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="container grid lg:grid-cols-12 gap-10 py-12 lg:py-20 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-soft text-primary px-3 py-1.5 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-primary pulse-ring" />
                <span className="relative h-2 w-2 rounded-full bg-primary" />
              </span>
              Принимаем сегодня · Хамовники, 5 мин от м. Фрунзенская
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Стоматология,<br />где лечат <span className="text-primary">по правилам</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">
              Lege Artis Clinic — частная клиника в Хамовниках. Прозрачный план лечения, фиксированные цены, врачи со стажем от 8 лет и работа под микроскопом.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-primary-foreground font-medium shadow-soft hover:opacity-95 transition">
                Записаться онлайн
              </a>
              <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 font-medium hover:border-primary hover:text-primary transition">
                Получить план лечения
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
              <Stat value="5,0" label="на Яндекс Картах" />
              <Stat value="5 лет" label="на Фрунзенской" />
              <Stat value="0%" label="рассрочка до 12 мес" />
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-card">
              <img src={clinicInterior} alt="Кабинет клиники Lege Artis в Хамовниках" width={1536} height={1024} className="w-full h-[420px] lg:h-[520px] object-cover" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                <div className="rounded-2xl bg-card/95 backdrop-blur px-4 py-3 shadow-soft">
                  <div className="flex items-center gap-1 text-accent">
                    {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                  </div>
                  <div className="text-sm font-semibold">5,0 · Яндекс Карты</div>
                  <div className="text-xs text-muted-foreground">5 отзывов · растём</div>
                </div>
                <a href={`tel:${PHONE_TEL}`} className="rounded-2xl bg-primary text-primary-foreground px-4 py-3 text-sm font-semibold shadow-soft inline-flex items-center gap-2">
                  <PhoneIcon /> Позвонить
                </a>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              {["Лицензия №ЛО-77-...", "Сертификаты врачей", "Гарантия на работы", "Рассрочка 0%"].map((t) => (
                <span key={t} className="rounded-full bg-secondary px-3 py-1.5 text-secondary-foreground">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 lg:py-24 bg-card border-y border-border">
        <div className="container">
          <SectionHeader eyebrow="Услуги и цены" title="Открытый прайс — без скрытых доплат" subtitle="Финальная стоимость фиксируется в плане лечения и не меняется в процессе." />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s) => (
              <div key={s.name} className="group relative rounded-2xl border border-border bg-background p-5 hover:border-primary/40 hover:shadow-card transition">
                {s.tag && <span className="absolute -top-2 right-4 rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-accent-foreground">{s.tag}</span>}
                <div className="text-base font-semibold">{s.name}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.note}</div>
                <div className="mt-4 text-xl font-bold text-primary">{s.price}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">Полный прайс выдаём после осмотра. Консультация — бесплатно.</p>
        </div>
      </section>

      {/* Process / inline SVG animation */}
      <section className="py-16 lg:py-20">
        <div className="container grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionHeader align="left" eyebrow="Как мы работаем" title="Четыре спокойных шага — от звонка до результата" subtitle="Никаких сюрпризов. Вы заранее знаете план, цену и сроки." />
            <ol className="mt-8 space-y-4">
              {[
                ["Звонок или онлайн-запись", "Подбираем врача и удобное время за 5 минут."],
                ["Осмотр и диагностика", "КЛКТ при необходимости, фото, бесплатная консультация."],
                ["Письменный план лечения", "С фиксированной ценой, этапами и гарантией."],
                ["Лечение и поддержка", "Контрольный визит и напоминания о профилактике."],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-4">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary-soft text-primary font-semibold">{i + 1}</div>
                  <div>
                    <div className="font-semibold">{t}</div>
                    <div className="text-sm text-muted-foreground">{d}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="relative rounded-3xl bg-primary-soft p-6 lg:p-10">
            <ToothSVG />
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section id="doctors" className="py-16 lg:py-24 bg-card border-y border-border">
        <div className="container">
          <SectionHeader eyebrow="Команда" title="Врачи, которым доверяют постоянные пациенты" subtitle="Все специалисты — с подтверждённой квалификацией и регулярным повышением." />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((d) => (
              <div key={d.name} className="rounded-2xl overflow-hidden bg-background border border-border shadow-soft">
                <div className="aspect-[4/5] overflow-hidden bg-muted">
                  <img src={d.img} alt={d.name} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <div className="text-lg font-semibold">{d.name}</div>
                  <div className="text-sm text-primary">{d.role}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{d.years}</div>
                  <div className="mt-3 text-sm text-muted-foreground">{d.edu}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section id="cases" className="py-16 lg:py-24">
        <div className="container">
          <SectionHeader eyebrow="Работы" title="Кейсы наших пациентов" subtitle="С разрешения пациентов публикуем результаты и короткие истории." />
          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            <CaseCard img={case1} title="Эстетическая реставрация переднего ряда" story="Пациентка обратилась после неудачной реставрации. За 2 визита восстановили форму и оттенок — без обточки соседних зубов." tag="Терапия · 2 визита" />
            <CaseCard img={case2} title="Имплантация в области жевательного зуба" story="Установка импланта Straumann через 3 месяца после удаления. Через 4 месяца — постоянная коронка E.max. Гарантия 3 года." tag="Имплантология · 4 месяца" />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 lg:py-24 bg-card border-y border-border">
        <div className="container">
          <SectionHeader eyebrow="Отзывы" title="Что говорят пациенты" subtitle="Оценки и отзывы — с публичных карточек на Яндекс Картах и 2ГИС." />
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {reviews.map((r) => (
              <div key={r.name} className="rounded-2xl border border-border bg-background p-6 shadow-soft">
                <div className="flex items-center gap-1 text-accent">
                  {[...Array(r.rating)].map((_, i) => <StarIcon key={i} />)}
                </div>
                <p className="mt-3 text-sm leading-relaxed">{r.text}</p>
                <div className="mt-4 text-xs text-muted-foreground">{r.name} · {r.source}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
            <a href="https://yandex.ru/maps/?text=Lege+Artis+Clinic+Фрунзенская+набережная+52" target="_blank" rel="noopener noreferrer" className="rounded-full border border-border bg-background px-4 py-2 hover:border-primary hover:text-primary">Открыть на Яндекс Картах</a>
            <a href="https://2gis.ru/moscow/search/Lege%20Artis%20Clinic" target="_blank" rel="noopener noreferrer" className="rounded-full border border-border bg-background px-4 py-2 hover:border-primary hover:text-primary">Открыть в 2ГИС</a>
          </div>
        </div>
      </section>

      {/* Safety */}
      <section id="safety" className="py-16 lg:py-24">
        <div className="container grid lg:grid-cols-2 gap-10 items-center">
          <div className="rounded-3xl overflow-hidden shadow-card order-2 lg:order-1">
            <img src={sterilization} alt="Стерилизация инструментов" loading="lazy" className="w-full h-[420px] object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeader align="left" eyebrow="Безопасность" title="Стерильность и юридическая прозрачность" subtitle="Мы работаем по протоколам СанПиН и используем оборудование класса B." />
            <ul className="mt-8 space-y-3">
              {[
                ["Лицензия Росздравнадзора", "Все виды разрешённых стоматологических услуг."],
                ["Стерилизация класса B", "Автоклав Mocom и индивидуальные пакеты на каждого пациента."],
                ["Сертификаты врачей", "Документы каждого специалиста — по запросу в клинике."],
                ["Гарантия на работы", "До 3 лет на терапию, до 5 лет на ортопедию."],
                ["Рассрочка 0% до 12 месяцев", "По договору с банком-партнёром, без скрытых процентов."],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-3">
                  <CheckIcon />
                  <div>
                    <div className="font-semibold">{t}</div>
                    <div className="text-sm text-muted-foreground">{d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 lg:py-20 bg-card border-y border-border">
        <div className="container">
          <SectionHeader eyebrow="Как доехать" title="Хамовники, в шаге от набережной" subtitle="5 минут пешком от м. Фрунзенская. Парковка во дворе для пациентов." />
          <div className="mt-8 grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-border shadow-soft bg-background">
              <iframe
                title="Lege Artis Clinic на Яндекс Картах"
                src="https://yandex.ru/map-widget/v1/?ll=37.582%2C55.728&z=16&mode=search&text=Фрунзенская%20набережная%2052%20Москва"
                className="w-full h-[420px] border-0"
                loading="lazy"
              />
            </div>
            <div className="rounded-2xl border border-border bg-background p-6 shadow-soft">
              <div className="text-sm text-muted-foreground">Адрес</div>
              <div className="mt-1 font-semibold">{ADDRESS}</div>
              <div className="mt-5 text-sm text-muted-foreground">Метро</div>
              <div className="mt-1 font-medium">Фрунзенская — 5 мин пешком</div>
              <div className="mt-5 text-sm text-muted-foreground">Парковка</div>
              <div className="mt-1 font-medium">Во дворе клиники, бесплатно для пациентов</div>
              <div className="mt-5 text-sm text-muted-foreground">Часы работы</div>
              <div className="mt-1 font-medium">Пн–Сб: 09:00 – 21:00 · Вс: 10:00 – 18:00</div>
              <a href={`tel:${PHONE_TEL}`} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-primary-foreground font-medium">
                <PhoneIcon /> {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="contact" className="py-16 lg:py-24">
        <div className="container grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionHeader align="left" eyebrow="Запись" title="Запишитесь онлайн за минуту" subtitle="Мы перезвоним в течение 15 минут в рабочее время и подтвердим визит." />
            <div className="mt-6 rounded-2xl overflow-hidden">
              <img src={patientSmile} alt="Пациент после приёма в Lege Artis" loading="lazy" className="w-full h-72 object-cover" />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-primary-soft p-4">
                <div className="text-xs text-muted-foreground">Сегодня свободно</div>
                <div className="text-lg font-semibold text-primary">3 окна</div>
              </div>
              <div className="rounded-2xl bg-secondary p-4">
                <div className="text-xs text-muted-foreground">Бесплатно</div>
                <div className="text-lg font-semibold">Консультация и план</div>
              </div>
            </div>
          </div>

          <form onSubmit={submit} className="rounded-3xl border border-border bg-card p-6 lg:p-8 shadow-card">
            {sent ? (
              <div className="text-center py-10">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary-soft text-primary"><CheckBigIcon /></div>
                <h3 className="mt-4 text-xl font-bold">Заявка отправлена</h3>
                <p className="mt-2 text-muted-foreground text-sm">Администратор клиники перезвонит на номер {form.phone || "указанный вами"} в течение 15 минут.</p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold">Записаться онлайн</h3>
                <p className="mt-1 text-sm text-muted-foreground">Выберите услугу и удобное время — остальное мы возьмём на себя.</p>
                <div className="mt-6 space-y-4">
                  <Field label="Ваше имя">
                    <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Как к вам обращаться" className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  </Field>
                  <Field label="Телефон">
                    <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+7 ___ ___ __ __" className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  </Field>
                  <Field label="Услуга">
                    <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                      {services.map((s) => <option key={s.name}>{s.name}</option>)}
                    </select>
                  </Field>
                  <Field label="Удобное время">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {["Сегодня вечером", "Завтра утром", "Завтра вечером", "В выходные"].map((t) => (
                        <button type="button" key={t} onClick={() => setForm({ ...form, time: t })}
                          className={`rounded-xl border px-3 py-2.5 text-xs font-medium transition ${form.time === t ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background hover:border-primary/40"}`}>
                          {t}
                        </button>
                      ))}
                    </div>
                  </Field>
                </div>
                <button type="submit" className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-primary-foreground font-medium hover:opacity-95 transition">
                  Записаться онлайн
                </button>
                <p className="mt-3 text-xs text-muted-foreground text-center">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.</p>
              </>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 bg-card">
        <div className="container grid sm:grid-cols-3 gap-6 text-sm">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">LA</span>
              <span className="font-semibold">Lege Artis Clinic</span>
            </div>
            <p className="mt-3 text-muted-foreground">Частная стоматология в Хамовниках. Лечим взрослых и подростков от 14 лет.</p>
          </div>
          <div>
            <div className="font-semibold">Контакты</div>
            <p className="mt-2 text-muted-foreground">{ADDRESS}</p>
            <a href={`tel:${PHONE_TEL}`} className="mt-1 block text-primary">{PHONE}</a>
          </div>
          <div>
            <div className="font-semibold">Часы работы</div>
            <p className="mt-2 text-muted-foreground">Пн–Сб: 09:00 – 21:00<br />Вс: 10:00 – 18:00</p>
          </div>
        </div>
        <div className="container mt-8 text-xs text-muted-foreground">© Lege Artis Clinic. Имеются противопоказания. Необходима консультация специалиста.</div>
      </footer>

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-3 inset-x-3 sm:hidden z-30">
        <a href="#contact" className="flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground py-3.5 font-medium shadow-card">
          Записаться онлайн
        </a>
      </div>
    </div>
  );
};

const SectionHeader = ({ eyebrow, title, subtitle, align = "center" }: { eyebrow: string; title: string; subtitle?: string; align?: "left" | "center" }) => (
  <div className={align === "center" ? "max-w-2xl mx-auto text-center" : "max-w-2xl"}>
    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</div>
    <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
    {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
  </div>
);

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div>
    <div className="text-2xl font-bold text-primary">{value}</div>
    <div className="text-xs text-muted-foreground mt-0.5 leading-tight">{label}</div>
  </div>
);

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <label className="block">
    <span className="text-xs font-medium text-muted-foreground">{label}</span>
    <div className="mt-1.5">{children}</div>
  </label>
);

const CaseCard = ({ img, title, story, tag }: { img: string; title: string; story: string; tag: string }) => (
  <div className="rounded-2xl overflow-hidden bg-card border border-border shadow-soft">
    <div className="aspect-[16/9] overflow-hidden bg-muted">
      <img src={img} alt={title} loading="lazy" className="h-full w-full object-cover" />
    </div>
    <div className="p-6">
      <span className="inline-block rounded-full bg-primary-soft text-primary text-xs font-medium px-2.5 py-1">{tag}</span>
      <h3 className="mt-3 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{story}</p>
    </div>
  </div>
);

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.94.36 1.86.7 2.74a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.34-1.27a2 2 0 0 1 2.11-.45c.88.34 1.8.57 2.74.7A2 2 0 0 1 22 16.92z"/></svg>
);
const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.7 7L12 17.8 5.7 21.2l1.7-7L2 9.5l7.1-.6L12 2z"/></svg>
);
const CheckIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5"><polyline points="20 6 9 17 4 12"/></svg>
);
const CheckBigIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
);

const ToothSVG = () => (
  <svg viewBox="0 0 320 260" className="w-full h-auto float-soft" aria-hidden="true">
    <defs>
      <linearGradient id="toothG" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#e6f2f2" />
      </linearGradient>
    </defs>
    {/* tooth body */}
    <path d="M160 30 C 110 30, 70 60, 70 110 C 70 160, 95 200, 110 230 C 120 250, 140 250, 145 225 L 150 180 C 152 165, 168 165, 170 180 L 175 225 C 180 250, 200 250, 210 230 C 225 200, 250 160, 250 110 C 250 60, 210 30, 160 30 Z"
      fill="url(#toothG)" stroke="hsl(var(--primary))" strokeWidth="2.5" />
    {/* sparkle paths */}
    <path className="draw-path" d="M210 80 L 240 60" stroke="hsl(var(--accent))" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path className="draw-path-2" d="M225 95 L 255 95" stroke="hsl(var(--accent))" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path className="draw-path-3" d="M215 110 L 240 125" stroke="hsl(var(--accent))" strokeWidth="3" strokeLinecap="round" fill="none" />
    {/* check */}
    <circle cx="120" cy="130" r="22" fill="hsl(var(--primary))" />
    <polyline points="110,131 118,139 132,123" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    {/* hand-drawn outline accent: dentist tool */}
    <g transform="translate(20,30)">
      <circle cx="20" cy="20" r="8" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
      <line x1="26" y1="26" x2="60" y2="60" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" />
    </g>
  </svg>
);

export default Index;
