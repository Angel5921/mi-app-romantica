import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('💖 creando corazón');
      
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.textContent = '❤️';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.fontSize = Math.random() * 20 + 20 + 'px';
      heart.style.animationDuration = (2 + Math.random() * 3) + 's';
      document.body.appendChild(heart);
      setTimeout(() => {
        heart.remove();
      }, 5000);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <h1>❤️ Feliz 3 Meses Mi niñita linda ❤️</h1>
      <img
        src="https://i.etsystatic.com/54645768/r/il/7117fb/6641102763/il_fullxfull.6641102763_19am.jpg"
        alt="Pareja romántica"
        className="romantic-img"
      />
      <p className="dedication">
        Hoy cumplimos 3 meses juntos y te juro que notas lo inmensamente feliz que soy a tu lado mi vida,
        es inmensamente precioso, sabes mi vida es hermoso como me brillan tan bonito los ojos al verte,
        pero literalmente te juro que haces que me brille el alma de una forma increible. <br />
        Amo como desde tu llegada empecé a ver la vida diferente, empecé a verme siempre a tu lado,
        empecé a imaginar una familia y una vida junto a ti, empecé a amar de verdad, empecé a sentir,
        empecé a disfrutar cada dia de mi vida porque estas tú mi reina, empecé a sonreir bien bonito, a ser felíz,
        empecé a enamorarme de ti de maneras increibles, me empecé a preocupar por ti cuando nunca me preocupe por nadie más,
        todo a tu lado se volvio precioso y importante. <br /> 
        Logras que mis dias sean maravillosos y increiblesporque te encuentras en mi vida, como la más grande bendición y la señal de dios de que si puedo ser feliz,
        porque mira junto mi camino con el amor de mi vida, para hacerme saber que si existias y que llegarias,
        amo como conectamos tan hermoso y como somos el uno para el otro, amo estar a tu lado, en mi lugar seguro,
        con la mujer de mi vida, el amor de mi vida, la mujer que siempre anhele tan maravillosa y increible,
        pero ademas con la mujer que sera mi esposa y la mamá de nuestros preciosos hijos.. <br />

        Me enamore perdidamente de ti mi niña linda y sigo haciendolo, es increible el huracan de sentimientos que generas en mi,
        me encanta todo lo que me haces sentir, me haces inmensamente feliz y te amo mas alla de lo que podemos imaginar,
        simplemente te amo mucho y cada latido de mi corazón vive asegurandolo..
        Gracias por seguir demostrandome que el amor existe porque el mio esta en tus brazos asi como mi hogar,
        asi como agradecerte que vives eligiendome dia con dia y eligiendo amarme incondicionalemnte con tanta intensidad, 
        asi como eligiendo estar a mi lado y no en otro lugar.. <br />
        Eres mi vida entera y mi mundo entero, te amo con cada latido y respiración de mi ser.. <br />
        ¡DESEO QUE TE GUSTE MUCHO MI VIDA, ES CON MUCHO AMOR DE TU HOMBRECITO PRECIOSO PARA TI, LA MUJER DE SU VIDA! 👩🏻‍❤️‍👨🏻 <br />
        ---------FELICES 3 MESES MI SOLECITO 💕☀️---------
      </p>
    </div>
  );
}

export default App;