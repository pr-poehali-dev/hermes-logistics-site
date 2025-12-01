import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  const services = [
    {
      icon: 'Truck',
      title: 'Доставка на месторождения',
      description: 'Специализированная логистика для нефтегазовой отрасли в самые отдаленные точки'
    },
    {
      icon: 'Mountain',
      title: 'Труднодоступные регионы',
      description: 'Экспертиза в доставке грузов в горные и северные территории'
    },
    {
      icon: 'Package',
      title: 'Негабаритные грузы',
      description: 'Перевозка тяжеловесного и крупногабаритного оборудования'
    },
    {
      icon: 'Clock',
      title: 'Срочная доставка',
      description: 'Экспресс-логистика с гарантией соблюдения сроков'
    },
    {
      icon: 'Shield',
      title: 'Комплексное страхование',
      description: 'Полная защита груза на всех этапах транспортировки'
    },
    {
      icon: 'Headphones',
      title: 'Сопровождение 24/7',
      description: 'Круглосуточный контроль и поддержка на всем маршруте'
    }
  ];

  const regions = [
    { id: 'siberia', name: 'Сибирь', coverage: '95%', routes: 24, color: 'bg-blue-500' },
    { id: 'far-east', name: 'Дальний Восток', coverage: '88%', routes: 18, color: 'bg-cyan-500' },
    { id: 'north', name: 'Крайний Север', coverage: '82%', routes: 15, color: 'bg-teal-500' },
    { id: 'ural', name: 'Урал', coverage: '98%', routes: 32, color: 'bg-blue-600' },
    { id: 'arctic', name: 'Арктика', coverage: '75%', routes: 12, color: 'bg-indigo-500' }
  ];

  const portfolio = [
    {
      title: 'Доставка оборудования на Ямал',
      description: 'Транспортировка 450 тонн буровой техники в условиях экстремального севера',
      stats: { distance: '3200 км', time: '14 дней', weight: '450 т' },
      image: 'Snowflake'
    },
    {
      title: 'Логистика для Сахалина',
      description: 'Комплексная доставка для нефтедобывающего комплекса на островной территории',
      stats: { distance: '8500 км', time: '21 день', weight: '680 т' },
      image: 'Waves'
    },
    {
      title: 'Алтайский проект',
      description: 'Перевозка негабаритного оборудования через горные перевалы',
      stats: { distance: '1800 км', time: '9 дней', weight: '320 т' },
      image: 'Mountain'
    }
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Zap" className="text-primary" size={32} />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Гермес Логистик
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#geography" className="text-foreground hover:text-primary transition-colors">География</a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Портфолио</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            Заказать доставку
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Доставка туда, где другие останавливаются
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Экспертная логистика для труднодоступных территорий и месторождений. 
              Гарантия, скорость, надежность.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8">
                <Icon name="Send" className="mr-2" size={20} />
                Рассчитать маршрут
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="Phone" className="mr-2" size={20} />
                Связаться с нами
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
            {[
              { number: '15+', label: 'Лет опыта' },
              { number: '2500+', label: 'Доставок' },
              { number: '98%', label: 'В срок' },
              { number: '24/7', label: 'Поддержка' }
            ].map((stat, i) => (
              <div key={i} className="text-center animate-scale-in" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Комплексные решения для любых задач</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Card 
                key={i} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 animate-fade-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="geography" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">География доставки</h2>
            <p className="text-xl text-muted-foreground">Интерактивная карта наших маршрутов</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="relative aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-3xl p-8 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 opacity-10">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-px bg-primary"
                    style={{
                      left: `${(i % 10) * 10}%`,
                      top: 0,
                      height: '100%',
                      opacity: 0.3
                    }}
                  />
                ))}
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute h-px bg-primary"
                    style={{
                      top: `${(i % 10) * 10}%`,
                      left: 0,
                      width: '100%',
                      opacity: 0.3
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10 h-full flex flex-col justify-around">
                {regions.map((region, i) => (
                  <div
                    key={region.id}
                    className={`${region.color} rounded-2xl p-4 cursor-pointer transition-all duration-300 ${
                      activeRegion === region.id ? 'scale-110 shadow-2xl' : 'opacity-80 hover:opacity-100'
                    }`}
                    style={{
                      marginLeft: `${i * 15}%`,
                      width: '60%',
                      animationDelay: `${i * 150}ms`
                    }}
                    onClick={() => setActiveRegion(activeRegion === region.id ? null : region.id)}
                  >
                    <div className="text-white font-semibold text-lg">{region.name}</div>
                    <div className="text-white/90 text-sm mt-1">
                      {region.routes} маршрутов • {region.coverage} покрытие
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute inset-0 border-4 border-primary/20 rounded-3xl pointer-events-none"></div>
            </div>

            <div className="space-y-6">
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="MapPin" className="text-primary" />
                    Ключевые регионы присутствия
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {regions.map((region) => (
                    <div 
                      key={region.id}
                      className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                        activeRegion === region.id 
                          ? 'border-primary bg-primary/5' 
                          : 'border-gray-200 hover:border-primary/30'
                      }`}
                      onClick={() => setActiveRegion(activeRegion === region.id ? null : region.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-lg">{region.name}</div>
                          <div className="text-sm text-muted-foreground mt-1">
                            {region.routes} активных маршрута
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{region.coverage}</div>
                          <div className="text-xs text-muted-foreground">покрытие</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary/20 bg-gradient-to-br from-secondary/5 to-transparent">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <Icon name="TrendingUp" className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-lg mb-2">Расширяем географию</div>
                      <p className="text-muted-foreground">
                        Постоянно открываем новые маршруты и укрепляем присутствие 
                        в ключевых логистических узлах России
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши проекты</h2>
            <p className="text-xl text-muted-foreground">Успешные доставки в самые сложные точки</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, i) => (
              <Card 
                key={i} 
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Icon name={project.image} size={80} className="text-primary/60" />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">{project.stats.distance}</div>
                      <div className="text-xs text-muted-foreground">Расстояние</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">{project.stats.time}</div>
                      <div className="text-xs text-muted-foreground">Срок</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">{project.stats.weight}</div>
                      <div className="text-xs text-muted-foreground">Вес груза</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">Рассчитаем стоимость и подберем оптимальный маршрут</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Оставьте заявку</CardTitle>
                <CardDescription>Мы свяжемся с вами в течение 15 минут</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Имя</label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Телефон</label>
                  <Input placeholder="+7 (___) ___-__-__" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Сообщение</label>
                  <Textarea placeholder="Расскажите о вашем грузе и маршруте..." rows={4} />
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  <Icon name="Send" className="mr-2" size={18} />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-2 border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-lg mb-1">Телефон</div>
                      <a href="tel:+78001234567" className="text-primary text-xl hover:underline">
                        +7 (800) 123-45-67
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Звонок бесплатный по России</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-lg mb-1">Email</div>
                      <a href="mailto:info@hermes-logistics.ru" className="text-primary text-xl hover:underline">
                        info@hermes-logistics.ru
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-lg mb-1">Офис</div>
                      <p className="text-muted-foreground">
                        Москва, ул. Логистическая, 42<br />
                        БЦ "Транспорт", офис 501
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary to-secondary text-white border-0">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Icon name="Clock" className="mx-auto mb-4" size={48} />
                    <div className="text-2xl font-bold mb-2">Работаем 24/7</div>
                    <p className="text-white/90">
                      Круглосуточная диспетчерская служба<br />
                      и отдел поддержки клиентов
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Zap" size={28} />
                <span className="text-xl font-bold">Гермес Логистик</span>
              </div>
              <p className="text-gray-400">
                Надежная доставка в труднодоступные регионы с 2009 года
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Доставка на месторождения</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Негабаритные грузы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Срочная доставка</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Лицензии</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Карьера</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (800) 123-45-67</li>
                <li>info@hermes-logistics.ru</li>
                <li>Москва, ул. Логистическая, 42</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Гермес Логистик. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
